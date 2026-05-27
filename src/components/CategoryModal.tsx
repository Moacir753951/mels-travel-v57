/**
 * ═══════════════════════════════════════════════════════════════
 * 📂 CATEGORY MODAL - Mel's Travel
 * ═══════════════════════════════════════════════════════════════
 * 
 * Modal que abre ao clicar em um card da Home.
 * Mostra os sub-destinos da categoria (ex: Caribe → Punta Cana, Cancún...)
 * Cada sub-destino linka para sua página individual.
 * ═══════════════════════════════════════════════════════════════
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, MapPin, ChevronRight } from 'lucide-react';
import { getCategoryData } from '@/data/categoryDestinations';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryId: string | null;
  currentLang: string;
}

export default function CategoryModal({ isOpen, onClose, categoryId, currentLang }: CategoryModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!categoryId) return null;

  const category = getCategoryData(categoryId);
  if (!category) return null;

  const t = category.translations[currentLang as keyof typeof category.translations] || category.translations.es;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9, y: isOpen ? 0 : 30 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div
              className="relative p-6 sm:p-8 text-white"
              style={{ backgroundColor: category.color }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 notranslate"
              >
                {t.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-sm sm:text-base"
              >
                {t.subtitle}
              </motion.p>
            </div>

            {/* Sub-destinations Grid */}
            <div
              className="flex-1 overflow-y-auto p-4 sm:p-6"
              style={{ overscrollBehavior: 'contain' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {category.subDestinations.map((dest, index) => (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={`/destino/${dest.slug}`}
                      onClick={onClose}
                      className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all border border-gray-100 hover:border-gray-200"
                    >
                      {/* Image */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={dest.image}
                          alt={dest.city}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-[#1f2433] text-sm sm:text-base mb-0.5 truncate">
                          {dest.city}
                        </h3>
                        <p className="text-[#6d7588] text-xs sm:text-sm flex items-center gap-1 mb-1">
                          <MapPin size={12} className="flex-shrink-0" />
                          <span className="truncate">{dest.country}</span>
                        </p>
                        <p className="text-[#6d7588] text-xs truncate">
                          {dest.tagline[currentLang as keyof typeof dest.tagline] || dest.tagline.es}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ChevronRight
                        size={20}
                        className="text-gray-300 group-hover:text-[#ff6b35] group-hover:translate-x-1 transition-all flex-shrink-0"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-100 text-center">
              <button
                onClick={onClose}
                className="text-[#6d7588] hover:text-[#1f2433] text-sm font-medium transition-colors"
              >
                {currentLang === 'es' ? 'Cerrar' : currentLang === 'pt' ? 'Fechar' : 'Close'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
