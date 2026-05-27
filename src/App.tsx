import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Destinations from '@/sections/Destinations';
import Services from '@/sections/Services';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import CategoryModal from '@/components/CategoryModal';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import CustomCursor from '@/components/effects/CustomCursor';
import GameTravel from '@/pages/GameTravel';
import DestinationPage from '@/pages/DestinationPage';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import './App.css';

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#1f2433] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo animation */}
      <motion.div
        className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg shadow-[#ff6b35]/30"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 200,
          damping: 20,
          delay: 0.2 
        }}
      >
        <motion.img
          src="/images/logo/logo.png"
          alt="Mel's Travel"
          className="w-full h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <span className="text-white font-semibold text-lg">Mel&apos;s Travel</span>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="w-32 h-1 bg-white/20 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="h-full bg-[#ff6b35] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}

// Main Home Component
function Home({ currentLang, onLangChange }: { currentLang: string; onLangChange: (lang: string) => void }) {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Initialize smooth scroll
  useSmoothScroll();

  // Handle category modal open
  const handleOpenCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCategoryModalOpen(true);
  };

  // Handle category modal close
  const handleCloseCategory = () => {
    setCategoryModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Header */}
      <Header currentLang={currentLang} onLangChange={onLangChange} />

      {/* Main Content */}
      <main>
        <Hero currentLang={currentLang} />
        <Destinations 
          currentLang={currentLang} 
          onOpenModal={handleOpenCategory}
        />
        <Services currentLang={currentLang} />
        <Contact currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat currentLang={currentLang} />

      {/* Category Modal */}
      <CategoryModal
        isOpen={categoryModalOpen}
        onClose={handleCloseCategory}
        categoryId={selectedCategory}
        currentLang={currentLang}
      />
    </motion.div>
  );
}

// Main App Component
function App() {
  const [currentLang, setCurrentLang] = useState('es');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Load saved language preference
  useEffect(() => {
    const savedLang = localStorage.getItem('mels_travel_lang');
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  // Sync HTML lang attribute when language changes - prevents Android translation issues
  useEffect(() => {
    document.documentElement.setAttribute('lang', currentLang);
  }, [currentLang]);

  // Save language preference and sync with HTML
  const handleLangChange = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem('mels_travel_lang', lang);
    document.documentElement.setAttribute('lang', lang);
  };

  // Check if we're on special pages (skip loading screen)
  const isGameTravelPage = location.pathname === '/game-travel';
  const isDestinationPage = location.pathname.startsWith('/destino/');

  // Update page title
  useEffect(() => {
    if (isGameTravelPage) {
      document.title = "Game Travel | Mel's Travel";
    } else {
      document.title = "Mel's Travel";
    }
  }, [isGameTravelPage]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && !isGameTravelPage && !isDestinationPage && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Routes>
        <Route 
          path="/" 
          element={
            !isLoading || isGameTravelPage || isDestinationPage ? (
              <Home currentLang={currentLang} onLangChange={handleLangChange} />
            ) : null
          } 
        />
        <Route 
          path="/game-travel" 
          element={<GameTravel currentLang={currentLang} />} 
        />
        <Route 
          path="/destino/:slug" 
          element={<DestinationPage currentLang={currentLang} onLangChange={handleLangChange} />} 
        />
      </Routes>
    </>
  );
}

// Wrapper with Router
function AppWrapper() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default AppWrapper;
