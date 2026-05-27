import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Gamepad2 } from 'lucide-react';

interface HeaderProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

const translations = {
  es: {
    brand: 'Agencia de Viajes',
    nav: { destinations: 'Destinos', services: 'Servicios', contact: 'Contacto' },
  },
  pt: {
    brand: 'Agência de Viagens',
    nav: { destinations: 'Destinos', services: 'Serviços', contact: 'Contato' },
  },
  en: {
    brand: 'Travel Agency',
    nav: { destinations: 'Destinations', services: 'Services', contact: 'Contact' },
  },
};

export default function Header({ currentLang, onLangChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[currentLang as keyof typeof translations] || translations.es;

  const navItems = [
    { href: '#destinos', label: t.nav.destinations },
    { href: '#servicios', label: t.nav.services },
    { href: '#contacto', label: t.nav.contact },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2 sm:py-3 glass-dark shadow-lg shadow-black/10'
            : 'py-3 sm:py-5 bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/#/"
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg shadow-[#ff6b35]/20 group-hover:shadow-xl group-hover:shadow-[#ff6b35]/30 transition-shadow duration-300">
                <img
                  src="/images/logo/logo.png"
                  alt="Mel's Travel"
                  className="w-full h-full object-contain p-1 sm:p-1.5"
                />
              </div>
              <div className="hidden sm:block">
                <span className="notranslate text-white font-bold text-lg leading-tight block">
                  Mel's Travel
                </span>
                <span className="text-white/60 text-xs">{t.brand}</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="relative text-white/80 hover:text-white font-medium text-sm transition-colors duration-300 py-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6b35] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Game Travel Button */}
              <motion.a
                href="/#/game-travel"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] text-white rounded-full font-semibold text-sm shadow-lg shadow-[#ff6b35]/30 hover:shadow-xl hover:shadow-[#ff6b35]/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Gamepad2 size={18} />
                <span className="notranslate">Game Travel</span>
              </motion.a>

              {/* Language Switcher */}
              <div className="hidden sm:flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/10">
                {['es', 'pt', 'en'].map((lang) => (
                  <motion.button
                    key={lang}
                    onClick={() => onLangChange(lang)}
                    className={`notranslate px-3 py-1.5 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                      currentLang === lang
                        ? 'bg-[#ff6b35] text-white shadow-lg shadow-[#ff6b35]/30'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {lang}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#1f2433] shadow-2xl"
            >
              <div className="p-6 pt-20">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-white/80 hover:text-white text-lg font-medium py-3 border-b border-white/10 transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Language Switcher */}
                <div className="mt-8">
                  <p className="text-white/40 text-sm mb-3 flex items-center gap-2">
                    <Globe size={16} />
                    Idioma / Language
                  </p>
                  <div className="flex gap-2">
                    {['es', 'pt', 'en'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => onLangChange(lang)}
                        className={`notranslate px-4 py-2 rounded-lg text-sm font-bold uppercase transition-all ${
                          currentLang === lang
                            ? 'bg-[#ff6b35] text-white'
                            : 'bg-white/10 text-white/60'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Game Travel Button */}
                <motion.a
                  href="/#/game-travel"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] text-white rounded-xl font-semibold"
                >
                  <Gamepad2 size={20} />
                  <span className="notranslate">Game Travel</span>
                </motion.a>

                {/* Mobile CTA */}
                <motion.a
                  href="https://wa.me/595992030554"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-[#25d366] text-white rounded-xl font-semibold"
                >
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
