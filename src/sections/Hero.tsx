import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, MessageCircle, Globe, Plane, Shield, Users } from 'lucide-react';
import ParticleField from '@/components/effects/ParticleField';
import AnimatedText, { FadeUpText } from '@/components/effects/AnimatedText';
import gsap from 'gsap';

interface HeroProps {
  currentLang: string;
}

// Hook para detectar mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
}

const translations = {
  es: {
    pills: ['Ciudad del Este', 'Atención rápida y cercana', 'Viajes pensados para ti desde Paraguay'],
    title: 'Tu próximo viaje empieza con una atención más clara, cercana y personalizada.',
    subtitle: "En Mel's Travel te ayudamos a elegir destinos que realmente encajan contigo: vacaciones en playa, Europa, escapadas en Brasil o viajes comerciales con acompañamiento antes, durante y después.",
    cta1: 'Descubrir destinos',
    cta2: 'Pedir cotización',
    cardTitle: 'Diseñamos viajes que se sienten más seguros y mejor organizados.',
    cardSubtitle: 'Atención humana, respuestas rápidas y opciones de viaje ajustadas a lo que realmente buscas.',
    stats: [
      { title: 'Playa y descanso', text: 'Caribe y Brasil con opciones muy buscadas por viajeros paraguayos.', icon: Plane },
      { title: 'Europa', text: 'Madrid, Barcelona y combinaciones con otros grandes destinos europeos.', icon: Globe },
      { title: 'Viajes comerciales', text: 'Destinos estratégicos para reuniones, ferias, compras y proveedores.', icon: Users },
      { title: 'Acompañamiento real', text: 'Te ayudamos antes del viaje y también durante el proceso.', icon: Shield },
    ],
  },
  pt: {
    pills: ['Ciudad del Este', 'Atendimento rápido e próximo', 'Viagens pensadas para você no Paraguai'],
    title: 'Sua próxima viagem começa com um atendimento mais claro, próximo e personalizado.',
    subtitle: "Na Mel's Travel ajudamos você a escolher destinos que realmente combinam com seu perfil: praia, Europa, escapadas no Brasil ou viagens comerciais com acompanhamento antes, durante e depois.",
    cta1: 'Descobrir destinos',
    cta2: 'Pedir cotação',
    cardTitle: 'Criamos viagens que passam mais segurança e organização.',
    cardSubtitle: 'Atendimento humano, respostas rápidas e opções alinhadas ao que você realmente procura.',
    stats: [
      { title: 'Praia e descanso', text: 'Caribe e Brasil com opções muito procuradas por viajantes paraguaios.', icon: Plane },
      { title: 'Europa', text: 'Madrid, Barcelona e combinações com outros grandes destinos europeus.', icon: Globe },
      { title: 'Viagens comerciais', text: 'Destinos estratégicos para reuniões, feiras, compras e fornecedores.', icon: Users },
      { title: 'Acompanhamento real', text: 'Ajudamos antes da viagem e também durante todo o processo.', icon: Shield },
    ],
  },
  en: {
    pills: ['Ciudad del Este', 'Fast and close support', 'Trips thoughtfully designed for travelers from Paraguay'],
    title: 'Your next trip starts with clearer, closer and more personalized service.',
    subtitle: "At Mel's Travel we help you choose destinations that truly fit your travel style: beach holidays, Europe, Brazil getaways or business trips with support before, during and after.",
    cta1: 'Explore destinations',
    cta2: 'Request a quote',
    cardTitle: 'We design trips that feel safer and better organized.',
    cardSubtitle: 'Human support, quick answers and travel options tailored to what you are really looking for.',
    stats: [
      { title: 'Beach and relaxation', text: 'Caribbean and Brazil options highly searched by Paraguayan travelers.', icon: Plane },
      { title: 'Europe', text: 'Madrid, Barcelona and combinations with other iconic European cities.', icon: Globe },
      { title: 'Business trips', text: 'Strategic destinations for meetings, trade fairs, shopping and suppliers.', icon: Users },
      { title: 'Real support', text: 'We help before the trip and also throughout the process.', icon: Shield },
    ],
  },
};

export default function Hero({ currentLang }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const t = translations[currentLang as keyof typeof translations] || translations.es;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Efeitos de scroll apenas para desktop - no mobile o texto permanece visível
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  
  // Estilos de animação - apenas desktop tem fade-out
  const scrollStyles = isMobile 
    ? {} // Mobile: sem efeitos de scroll, texto permanece visível
    : { y: smoothY, opacity: smoothOpacity, scale: smoothScale };

  // Floating elements animation with GSAP
  useEffect(() => {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((el, index) => {
      gsap.to(el, {
        y: '+=20',
        duration: 2 + index * 0.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Particle Field */}
      <ParticleField className="opacity-60" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <motion.div
          className="floating-element absolute -right-40 top-20 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Small circle */}
        <motion.div
          className="floating-element absolute -left-20 bottom-40 w-[300px] h-[300px] rounded-full bg-[#ff6b35]/10 blur-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 w-full px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20"
        style={scrollStyles}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-5 sm:space-y-8">
              {/* Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {t.pills.map((pill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium"
                  >
                    {index === 0 && <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />}
                    {index === 1 && <MessageCircle size={12} className="sm:w-3.5 sm:h-3.5" />}
                    {index === 2 && <Globe size={12} className="sm:w-3.5 sm:h-3.5" />}
                    {pill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Title - key força re-render ao trocar idioma */}
              <div key={`hero-title-${currentLang}`} className="hero-title-container space-y-4">
                <AnimatedText
                  children={t.title}
                  type="words"
                  className="hero-title text-responsive-3xl sm:text-responsive-4xl md:text-responsive-5xl lg:text-responsive-6xl font-bold text-white leading-[1.2] sm:leading-[1.1] tracking-tight text-no-cut"
                  delay={0.4}
                  staggerDelay={0.08}
                />
              </div>

              {/* Subtitle */}
              <FadeUpText delay={0.8} className="text-responsive-base sm:text-responsive-lg text-white/80 leading-relaxed max-w-xl text-no-cut">
                {t.subtitle}
              </FadeUpText>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.button
                  onClick={() => {
                    const destinosSection = document.getElementById('destinos');
                    if (destinosSection) {
                      destinosSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6b35] text-white rounded-full font-semibold shadow-lg shadow-[#ff6b35]/30 hover:shadow-xl hover:shadow-[#ff6b35]/40 transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plane size={18} />
                  <span>{t.cta1}</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:justify-self-end"
            >
              <div className="relative">
                {/* Glow effect behind card */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ff6b35]/30 to-[#ffd8c9]/20 rounded-[2rem] blur-2xl opacity-60" />
                
                {/* Main Card */}
                <motion.div
                  className="relative glass rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 shadow-2xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <motion.div
                      className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <img
                        src="/images/logo/logo.png"
                        alt="Mel's Travel"
                        className="w-full h-full object-contain p-1 sm:p-1.5"
                      />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="text-responsive-sm sm:text-responsive-base font-bold text-white mb-1 sm:mb-2 leading-tight text-no-cut">
                        {t.cardTitle}
                      </h3>
                      <p className="text-white/70 text-responsive-xs sm:text-responsive-sm leading-relaxed text-no-cut">
                        {t.cardSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {t.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.12)' }}
                        className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 transition-colors"
                      >
                        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff6b35] mb-1.5 sm:mb-2" />
                        <h4 className="text-white font-semibold text-responsive-xs sm:text-responsive-sm mb-0.5 sm:mb-1 leading-tight text-no-cut">
                          {stat.title}
                        </h4>
                        <p className="text-white/60 text-[10px] sm:text-xs leading-relaxed text-no-cut">
                          {stat.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ff6b35] rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#ff6b35]/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5, type: 'spring' }}
                  whileHover={{ scale: 1.05 }}
                >
                  ✨ Desde 2025
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7f8fb] to-transparent" />
    </section>
  );
}
