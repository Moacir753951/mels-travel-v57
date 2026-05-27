/**
 * ═══════════════════════════════════════════════════════════════
 * 🎮 GAME TRAVEL™ - Página Principal
 * ═══════════════════════════════════════════════════════════════
 * 
 * © 2025 Mel's Travel. Todos los derechos reservados.
 * © 2025 Mel's Travel. All rights reserved.
 * © 2025 Mel's Travel. Todos os direitos reservados.
 * 
 * ⚠️ PROPIEDAD INTELECTUAL PROTEGIDA / PROTECTED INTELLECTUAL PROPERTY
 * Este software es propiedad exclusiva de Mel's Travel.
 * This software is the exclusive property of Mel's Travel.
 * Este software é propriedade exclusiva da Mel's Travel.
 * 
 * Queda estrictamente prohibida su reproducción, distribución,
 * modificación o uso no autorizado.
 * 
 * Para licencias comerciales: contacto@mels-travel.com
 * 
 * Autor: Mel's Travel
 * Fecha de creación: 2025
 * Versión: 1.0
 * ═══════════════════════════════════════════════════════════════
 */

import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, User, Users, Heart, ArrowLeft, MapPin, Calendar, Sparkles, RotateCcw, Compass, Sun, Mountain, Wine, Music, Camera, Utensils, Landmark, Waves, Share2, MessageCircle } from 'lucide-react';
import { getRandomDestination, uiTranslations, type Destination } from '@/data/destinations';

// Lazy load the heavy Globe3D component
const Globe3D = lazy(() => import('@/components/Globe3D'));

type GameState = 'menu' | 'spinning' | 'reveal' | 'result';
type TravelMode = 'solo' | 'couple' | 'friends' | null;

interface GameTravelProps {
  currentLang?: string;
  onLangChange?: (lang: string) => void;
}

// Activity icon mapper
const getActivityIcon = (activity: string) => {
  const lower = activity.toLowerCase();
  if (lower.includes('playa') || lower.includes('praia') || lower.includes('beach') || lower.includes('sol')) return Sun;
  if (lower.includes('montaña') || lower.includes('montanha') || lower.includes('mountain') || lower.includes('senderismo')) return Mountain;
  if (lower.includes('vino') || lower.includes('vinho') || lower.includes('wine')) return Wine;
  if (lower.includes('música') || lower.includes('music') || lower.includes('tango') || lower.includes('salsa')) return Music;
  if (lower.includes('foto') || lower.includes('camera')) return Camera;
  if (lower.includes('comida') || lower.includes('gastronomía') || lower.includes('gastronomia') || lower.includes('food') || lower.includes('paella') || lower.includes('tapas')) return Utensils;
  if (lower.includes('templo') || lower.includes('temple') || lower.includes('castillo') || lower.includes('castelo') || lower.includes('castle') || lower.includes('palacio')) return Landmark;
  if (lower.includes('mar') || lower.includes('sea') || lower.includes('buceo') || lower.includes('snorkel') || lower.includes('surf')) return Waves;
  return Compass;
};

// Get gradient based on destination
const getDestinationGradient = (city: string): string => {
  const gradients: Record<string, string> = {
    'París': 'from-pink-500 via-purple-500 to-indigo-500',
    'Venecia': 'from-cyan-400 via-blue-500 to-indigo-600',
    'Santorini': 'from-blue-400 via-cyan-400 to-white',
    'Maldivas': 'from-cyan-300 via-blue-400 to-teal-500',
    'Florencia': 'from-amber-400 via-orange-500 to-red-500',
    'Bora Bora': 'from-teal-400 via-cyan-500 to-blue-600',
    'Praga': 'from-amber-300 via-orange-400 to-red-400',
    'Viena': 'from-yellow-400 via-amber-500 to-orange-500',
    'Capadocia': 'from-orange-400 via-amber-500 to-yellow-500',
    'Amsterdam': 'from-orange-400 via-amber-400 to-yellow-400',
    'Roma': 'from-amber-500 via-orange-500 to-red-500',
    'Kioto': 'from-pink-400 via-rose-400 to-red-400',
    'Barcelona': 'from-red-400 via-orange-400 to-yellow-400',
    'Quebec': 'from-blue-400 via-indigo-500 to-purple-500',
    'Dubrovnik': 'from-cyan-500 via-blue-500 to-indigo-500',
    'Maui': 'from-green-400 via-teal-400 to-cyan-500',
    'Brujas': 'from-amber-300 via-orange-300 to-red-300',
    'Seychelles': 'from-emerald-400 via-teal-400 to-cyan-400',
    'Lago de Como': 'from-blue-400 via-cyan-400 to-teal-400',
    'Udaipur': 'from-orange-400 via-amber-400 to-yellow-400',
    'Reykjavik': 'from-cyan-400 via-blue-500 to-indigo-600',
    'Tokio': 'from-purple-500 via-pink-500 to-red-500',
    'Londres': 'from-gray-400 via-slate-500 to-blue-500',
    'Nueva York': 'from-blue-500 via-indigo-500 to-purple-500',
    'Río de Janeiro': 'from-green-400 via-yellow-400 to-orange-500',
    'Buenos Aires': 'from-blue-400 via-cyan-400 to-teal-400',
    'Bangkok': 'from-orange-400 via-red-400 to-pink-500',
    'Lisboa': 'from-yellow-400 via-orange-400 to-red-400',
    'Ibiza': 'from-pink-400 via-purple-400 to-indigo-500',
    'Las Vegas': 'from-purple-500 via-pink-500 to-red-500',
    'Mykonos': 'from-blue-300 via-cyan-400 to-white',
    'Dublín': 'from-green-500 via-emerald-500 to-teal-500',
    'Cancún': 'from-cyan-400 via-blue-400 to-teal-500',
    'Nashville': 'from-amber-400 via-orange-500 to-red-500',
    'Tulum': 'from-teal-400 via-cyan-500 to-blue-500',
    'Miami': 'from-pink-400 via-rose-400 to-orange-400',
    'Budapest': 'from-blue-400 via-indigo-500 to-purple-500',
    'Singapur': 'from-green-400 via-emerald-400 to-cyan-500',
    'Seúl': 'from-purple-500 via-pink-500 to-rose-500',
  };
  return gradients[city] || 'from-[#ff6b35] via-[#ff8c5a] to-[#ffa07a]';
};

/**
 * Destination Reveal Overlay
 * Shows the spinning globe with "Destination Found" text
 * Uses the SAME Globe3D component - no visual change, just an overlay
 */
function DestinationReveal({ currentLang }: { currentLang: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto text-center relative"
    >
      {/* Globe - still spinning */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="mb-8"
      >
        <Suspense fallback={<GlobeLoading />}>
          <Globe3D isSpinning={true} size="large" />
        </Suspense>
      </motion.div>

      {/* "Destination Found" text overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="notranslate text-[#ff6b35] font-bold text-xl sm:text-3xl tracking-[0.3em] uppercase mb-4">
          {currentLang === 'es' ? 'Destino Encontrado' : currentLang === 'pt' ? 'Destino Encontrado' : 'Destination Found'}
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent mx-auto w-48 origin-center"
        />
      </motion.div>
    </motion.div>
  );
}

// Mode selection button
function ModeButton({
  icon: Icon,
  label,
  isSelected,
  onClick
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
        isSelected
          ? 'bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] text-white shadow-xl shadow-[#ff6b35]/40'
          : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <Icon size={32} />
        <span>{label}</span>
      </div>
      {isSelected && (
        <motion.div
          layoutId="modeIndicator"
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ff6b35] rounded-full"
        />
      )}
    </motion.button>
  );
}

// Language Switcher
function LanguageSwitcher({ currentLang, onChange }: { currentLang: string; onChange: (lang: string) => void }) {
  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onChange(lang.code)}
          className={`notranslate px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
            currentLang === lang.code
              ? 'bg-[#ff6b35] text-white'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

// Detect if device is mobile
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Share button component with WhatsApp support
function ShareButton({ destination, currentLang }: { destination: Destination; currentLang: string }) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getShareText = () => {
    return currentLang === 'es' 
      ? `¡Mi destino de viaje es ${destination.city}, ${destination.country}! 🌍✈️`
      : currentLang === 'pt'
      ? `Meu destino de viagem é ${destination.city}, ${destination.country}! 🌍✈️`
      : `My travel destination is ${destination.city}, ${destination.country}! 🌍✈️`;
  };

  const handleNativeShare = async () => {
    const shareText = getShareText();
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Game Travel - Mel\'s Travel',
          text: shareText,
          url: window.location.href,
        });
      } else {
        throw new Error('Share API not available');
      }
    } catch {
      // If native share fails, show custom menu
      setShowShareMenu(true);
    }
  };

  const handleWhatsAppShare = () => {
    const shareText = getShareText();
    const fullText = encodeURIComponent(`${shareText}\n\n${window.location.href}`);
    
    // Use WhatsApp Web for desktop, WhatsApp app for mobile
    const isMobile = isMobileDevice();
    const whatsappUrl = isMobile 
      ? `whatsapp://send?text=${fullText}`
      : `https://web.whatsapp.com/send?text=${fullText}`;
    
    window.open(whatsappUrl, '_blank');
    setShowShareMenu(false);
  };

  const handleCopyToClipboard = async () => {
    const shareText = getShareText();
    try {
      await navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = `${shareText} ${window.location.href}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    setShowShareMenu(false);
  };

  const shareLabel = currentLang === 'es' ? 'Compartir' : currentLang === 'pt' ? 'Compartilhar' : 'Share';
  const whatsappLabel = 'WhatsApp';
  const copyLabel = currentLang === 'es' ? 'Copiar link' : currentLang === 'pt' ? 'Copiar link' : 'Copy link';
  const copiedLabel = currentLang === 'es' ? '¡Copiado!' : currentLang === 'pt' ? 'Copiado!' : 'Copied!';

  return (
    <div className="relative flex-1" ref={menuRef}>
      <motion.button
        onClick={handleNativeShare}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-shadow"
      >
        <Share2 size={20} />
        {shareLabel}
      </motion.button>

      {/* Share Menu Dropdown */}
      <AnimatePresence>
        {showShareMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-0 right-0 mb-2 bg-[#1a1f2e] border border-white/10 rounded-xl overflow-hidden shadow-xl z-50"
          >
            <button
              onClick={handleWhatsAppShare}
              className="w-full px-4 py-3 flex items-center gap-3 text-white hover:bg-[#25d366]/20 transition-colors text-left"
            >
              <MessageCircle size={20} className="text-[#25d366]" />
              <span className="font-medium">{whatsappLabel}</span>
            </button>
            <div className="border-t border-white/10" />
            <button
              onClick={handleCopyToClipboard}
              className="w-full px-4 py-3 flex items-center gap-3 text-white hover:bg-white/10 transition-colors text-left"
            >
              {copied ? (
                <>
                  <Sparkles size={20} className="text-[#ff6b35]" />
                  <span className="font-medium text-[#ff6b35]">{copiedLabel}</span>
                </>
              ) : (
                <>
                  <Share2 size={20} className="text-white/60" />
                  <span className="font-medium">{copyLabel}</span>
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// WhatsApp Quote button
function WhatsAppQuoteButton({ destination, currentLang }: { destination: Destination; currentLang: string }) {
  const handleQuote = () => {
    const langKey = currentLang as 'es' | 'pt' | 'en';
    
    const messages = {
      es: `¡Hola! Mi destino de viaje es *${destination.city}*, ${destination.country}.\n\n🗓️ Mejor época: ${destination.season[langKey]}\n\n🎯 Actividades: ${destination.activities[langKey].join(', ')}\n\n¿Podrían enviarme una cotización?`,
      pt: `Olá! Meu destino de viagem é *${destination.city}*, ${destination.country}.\n\n🗓️ Melhor época: ${destination.season[langKey]}\n\n🎯 Atividades: ${destination.activities[langKey].join(', ')}\n\nPoderiam me enviar uma cotação?`,
      en: `Hello! My travel destination is *${destination.city}*, ${destination.country}.\n\n🗓️ Best season: ${destination.season[langKey]}\n\n🎯 Activities: ${destination.activities[langKey].join(', ')}\n\nCould you send me a quote?`
    };

    const message = encodeURIComponent(messages[langKey]);
    window.open(`https://wa.me/595992030554?text=${message}`, '_blank');
  };

  const quoteLabel = currentLang === 'es' ? 'Cotizar' : currentLang === 'pt' ? 'Cotar' : 'Get Quote';

  return (
    <motion.button
      onClick={handleQuote}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex-1 py-4 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-shadow"
    >
      <MessageCircle size={20} />
      {quoteLabel}
    </motion.button>
  );
}

// Destination Result Card - No images, super highlighted design
function DestinationResult({
  destination,
  t,
  currentLang,
  onSpinAgain,
  onBack
}: {
  destination: Destination;
  t: typeof uiTranslations.en;
  currentLang: string;
  onSpinAgain: () => void;
  onBack: () => void;
}) {
  const langKey = (['es', 'pt', 'en'].includes(currentLang) ? currentLang : 'es') as 'es' | 'pt' | 'en';
  const gradient = getDestinationGradient(destination.city);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Main destination card with gradient */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-1 mb-6`}
      >
        <div className="bg-[#1a1f2e]/90 backdrop-blur-xl rounded-[22px] p-8 md:p-12">
          {/* Sparkle badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Sparkles className="text-[#ff6b35]" size={20} />
              <span className="text-white font-bold">{t.result}</span>
              <Sparkles className="text-[#ff6b35]" size={20} />
            </div>
          </motion.div>

          {/* City name - HUGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-4"
          >
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 mb-2">
              {destination.city}
            </h1>
          </motion.div>

          {/* Country with icon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-xl text-white/80 mb-8"
          >
            <MapPin size={24} className="text-[#ff6b35]" />
            <span className="font-semibold">{destination.country}</span>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={`h-1 w-32 mx-auto mb-8 bg-gradient-to-r ${gradient} rounded-full`}
          />

          {/* Info grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Best season */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff6b35]/20 flex items-center justify-center">
                  <Calendar className="text-[#ff6b35]" size={20} />
                </div>
                <h3 className="text-white font-bold text-lg">{t.bestSeason}</h3>
              </div>
              <p className="text-white/70 pl-13">{destination.season[langKey]}</p>
            </motion.div>

            {/* Why go */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff6b35]/20 flex items-center justify-center">
                  <Heart className="text-[#ff6b35]" size={20} />
                </div>
                <h3 className="text-white font-bold text-lg">{t.whyGo}</h3>
              </div>
              <p className="text-white/70 pl-13">{destination.whyGo[langKey]}</p>
            </motion.div>
          </div>

          {/* Activities with icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#ff6b35]/20 flex items-center justify-center">
                <Compass className="text-[#ff6b35]" size={20} />
              </div>
              <h3 className="text-white font-bold text-lg">{t.activities}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {destination.activities[langKey].map((activity, i) => {
                const Icon = getActivityIcon(activity);
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white/90 text-sm font-medium"
                  >
                    <Icon size={16} />
                    {activity}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Share and Quote buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex gap-3 mb-4"
      >
        <ShareButton destination={destination} currentLang={currentLang} />
        <WhatsAppQuoteButton destination={destination} currentLang={currentLang} />
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex gap-4"
      >
        <motion.button
          onClick={onSpinAgain}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 py-4 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#ff6b35]/30 hover:shadow-xl hover:shadow-[#ff6b35]/40 transition-shadow"
        >
          <RotateCcw size={20} />
          {t.spinAgain}
        </motion.button>
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-4 bg-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={20} />
          {t.back}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// Loading fallback for globe
function GlobeLoading() {
  return (
    <div className="h-[300px] w-full flex items-center justify-center">
      <div className="relative">
        <div className="w-32 h-32 rounded-full border-4 border-white/10 border-t-[#ff6b35] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Compass className="text-[#ff6b35]" size={32} />
        </div>
      </div>
    </div>
  );
}

// Main GameTravel component
export default function GameTravel({ currentLang = 'es', onLangChange }: GameTravelProps) {
  const [lang, setLang] = useState(currentLang);
  const [gameState, setGameState] = useState<GameState>('menu');
  const [selectedMode, setSelectedMode] = useState<TravelMode>(null);
  const [destination, setDestination] = useState<Destination | null>(null);
  const t = uiTranslations[lang as keyof typeof uiTranslations] || uiTranslations.es;

  const handleLangChange = (newLang: string) => {
    setLang(newLang);
    onLangChange?.(newLang);
  };

  const playSound = (type: 'spin' | 'stop') => {
    try {
      const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      if (type === 'spin') {
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
      } else {
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      }
    } catch {
      // Audio not supported
    }
  };

  const handleModeSelect = (mode: TravelMode) => {
    setSelectedMode(mode);
  };

  const handleSpin = () => {
    if (!selectedMode) return;
    playSound('spin');
    setGameState('spinning');
    
    // Phase 1: Spin the globe for 3 seconds
    setTimeout(() => {
      const dest = getRandomDestination(selectedMode, lang);
      setDestination(dest);
      setGameState('reveal');
      playSound('stop');
      
      // Phase 2: Show "Destination Found" with globe for 2 seconds
      setTimeout(() => {
        setGameState('result');
      }, 2000);
    }, 3000);
  };

  const handleSpinAgain = () => {
    setDestination(null);
    setGameState('menu');
    setSelectedMode(null);
  };

  const handleBack = () => {
    setDestination(null);
    setGameState('menu');
    setSelectedMode(null);
  };

  return (
    <div className="min-h-screen bg-[#1f2433] relative overflow-hidden touch-manipulation">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4a90d9]/5 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-40 py-4 px-6"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="/#/"
            className="flex items-center gap-3 text-white hover:text-[#ff6b35] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowLeft size={20} />
            </div>
            <span className="font-semibold hidden sm:inline">Mel&apos;s Travel</span>
          </a>
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} onChange={handleLangChange} />
            <div className="flex items-center gap-2">
              <Plane className="text-[#ff6b35]" size={24} />
              <div className="flex flex-col items-start">
                <span className="notranslate text-white font-bold text-xl leading-tight">{t.title}</span>
                <span className="notranslate text-[10px] text-white/50 leading-tight">by Mel&apos;s Travel™</span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
        <AnimatePresence mode="wait">
          {/* Menu State */}
          {gameState === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="w-full max-w-4xl mx-auto text-center"
            >
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <h1 className="notranslate text-4xl md:text-6xl font-bold text-white mb-4">
                  {t.title}
                </h1>
                <p className="text-xl text-white/60">{t.subtitle}</p>
              </motion.div>

              {/* Globe - Lazy loaded */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <Suspense fallback={<GlobeLoading />}>
                  <Globe3D isSpinning={false} size="small" />
                </Suspense>
              </motion.div>

              {/* Mode selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <p className="text-white/60 mb-6">{t.selectMode}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <ModeButton
                    icon={User}
                    label={t.solo}
                    isSelected={selectedMode === 'solo'}
                    onClick={() => handleModeSelect('solo')}
                  />
                  <ModeButton
                    icon={Heart}
                    label={t.couple}
                    isSelected={selectedMode === 'couple'}
                    onClick={() => handleModeSelect('couple')}
                  />
                  <ModeButton
                    icon={Users}
                    label={t.friends}
                    isSelected={selectedMode === 'friends'}
                    onClick={() => handleModeSelect('friends')}
                  />
                </div>
              </motion.div>

              {/* Spin button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  onClick={handleSpin}
                  disabled={!selectedMode}
                  whileHover={selectedMode ? { scale: 1.05 } : {}}
                  whileTap={selectedMode ? { scale: 0.95 } : {}}
                  className={`px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 ${
                    selectedMode
                      ? 'bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] text-white shadow-xl shadow-[#ff6b35]/40 hover:shadow-2xl hover:shadow-[#ff6b35]/50'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RotateCcw size={24} />
                    {t.spin}
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {/* Spinning State - Globe accelerates */}
          {gameState === 'spinning' && (
            <motion.div
              key="spinning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="mb-8"
              >
                <Suspense fallback={<GlobeLoading />}>
                  <Globe3D isSpinning={true} size="large" />
                </Suspense>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold text-white"
              >
                {t.spinning}
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'linear' }}
                className="max-w-xs mx-auto mt-6 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-full"
              />
            </motion.div>
          )}

          {/* Reveal State - Same spinning globe + "Destination Found" text */}
          {gameState === 'reveal' && (
            <DestinationReveal key="reveal" currentLang={lang} />
          )}

          {/* Result State - Destination card */}
          {gameState === 'result' && destination && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-4xl mx-auto"
            >
              <DestinationResult
                destination={destination}
                t={t}
                currentLang={lang}
                onSpinAgain={handleSpinAgain}
                onBack={handleBack}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <div className="mb-2">
          <span className="notranslate text-[#ff6b35] font-bold text-lg">Game Travel™</span>
          <span className="text-white/60 mx-2">by</span>
          <span className="notranslate text-white font-bold">Mel&apos;s Travel</span>
        </div>
        <p className="text-white/40 text-xs">© 2025 Todos los derechos reservados. Prohibida su reproducción.</p>
        <p className="text-white/30 text-[10px] mt-1">® Marca registrada de Mel&apos;s Travel</p>
      </footer>

      {/* Watermark - subtle overlay */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none opacity-20 select-none">
        <div className="notranslate text-white text-xs font-bold rotate-[-15deg]">
          Game Travel™<br/>by Mel&apos;s Travel
        </div>
      </div>
    </div>
  );
}
