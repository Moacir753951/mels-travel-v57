import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FooterProps {
  currentLang: string;
}

const translations = {
  es: {
    subtitle: 'Agencia de Viajes · Ciudad del Este, Paraguay',
    copyright: '© Mel\'s Travel. Todos los derechos reservados.',
    madeWith: 'Hecho con',
  },
  pt: {
    subtitle: 'Agência de Viagens · Ciudad del Este, Paraguai',
    copyright: '© Mel\'s Travel. Todos os direitos reservados.',
    madeWith: 'Feito com',
  },
  en: {
    subtitle: 'Travel Agency · Ciudad del Este, Paraguay',
    copyright: '© Mel\'s Travel. All rights reserved.',
    madeWith: 'Made with',
  },
};

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang as keyof typeof translations] || translations.es;

  return (
    <footer className="relative bg-[#171c29] py-6 sm:py-8 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Brand */}
            <motion.div 
              className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo/logo.png"
                  alt="Mel's Travel"
                  className="w-full h-full object-contain p-1 sm:p-1.5"
                />
              </div>
              <div>
                <span className="notranslate text-white font-bold text-sm sm:text-base block">Mel's Travel</span>
                <span className="text-white/50 text-xs sm:text-sm">{t.subtitle}</span>
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <p className="text-white/40 text-xs sm:text-sm">{t.copyright}</p>
              <p className="text-white/30 text-[10px] sm:text-xs mt-1 flex items-center justify-center md:justify-end gap-1">
                {t.madeWith} <Heart size={10} className="sm:w-3 sm:h-3 text-[#ff6b35] fill-[#ff6b35]" /> 
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
