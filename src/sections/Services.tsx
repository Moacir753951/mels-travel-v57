import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, MessageSquare, Building2, HeartHandshake, ArrowRight } from 'lucide-react';
import ParallaxLayer from '@/components/effects/ParallaxLayer';
import ScrollReveal from '@/components/effects/ScrollReveal';
import AnimatedText from '@/components/effects/AnimatedText';

interface ServicesProps {
  currentLang: string;
}

const translations = {
  es: {
    title: 'Servicios que ayudan a viajar con más tranquilidad',
    subtitle: 'Todo lo que necesitas para planear tu viaje, en un solo lugar: orientación, reservas, acompañamiento y atención rápida.',
    services: [
      {
        icon: Plane,
        title: 'Planificación del viaje',
        description: 'Te ayudamos a organizar vuelos, hotel, traslados y recomendaciones para que todo tenga más sentido desde el primer contacto.',
        color: '#ff6b35',
      },
      {
        icon: MessageSquare,
        title: 'Asesoría personalizada',
        description: 'Cada viaje se adapta a tu presupuesto, estilo, tiempo disponible y objetivo.',
        color: '#8b5cf6',
      },
      {
        icon: Building2,
        title: 'Viajes corporativos',
        description: 'Opciones prácticas para empresas, importadores y profesionales que necesitan una logística de viaje más clara y eficiente.',
        color: '#22c55e',
      },
      {
        icon: HeartHandshake,
        title: 'Apoyo antes y durante el viaje',
        description: 'Acompañamiento con información útil, respuestas claras y soporte cercano para que viajes con mayor confianza.',
        color: '#00b4d8',
      },
    ],
    cta: 'Solicitar información',
  },
  pt: {
    title: 'Serviços que ajudam a viajar com mais tranquilidade',
    subtitle: 'Tudo o que você precisa para planejar sua viagem em um só lugar: orientação, reservas, acompanhamento e atendimento rápido.',
    services: [
      {
        icon: Plane,
        title: 'Planejamento da viagem',
        description: 'Ajudamos com voos, hotel, traslados e recomendações para que tudo faça mais sentido desde o primeiro contato.',
        color: '#ff6b35',
      },
      {
        icon: MessageSquare,
        title: 'Assessoria personalizada',
        description: 'Cada viagem é planejada de acordo com seu orçamento, perfil, tempo disponível e objetivo.',
        color: '#8b5cf6',
      },
      {
        icon: Building2,
        title: 'Viagens corporativas',
        description: 'Soluções práticas para empresas, importadores e profissionais que precisam de uma logística mais clara e eficiente.',
        color: '#22c55e',
      },
      {
        icon: HeartHandshake,
        title: 'Apoio antes e durante a viagem',
        description: 'Acompanhamento com informações úteis, dúvidas frequentes e suporte mais próximo para viajar com mais confiança.',
        color: '#00b4d8',
      },
    ],
    cta: 'Solicitar informações',
  },
  en: {
    title: 'Services that help you travel with more peace of mind',
    subtitle: 'Everything you need to plan your trip in one place: guidance, bookings, support and fast service.',
    services: [
      {
        icon: Plane,
        title: 'Trip planning',
        description: 'We help with flights, hotels, transfers and recommendations so everything makes sense from the first contact.',
        color: '#ff6b35',
      },
      {
        icon: MessageSquare,
        title: 'Personalized advice',
        description: 'Each trip is tailored to your budget, style, available time and travel goals.',
        color: '#8b5cf6',
      },
      {
        icon: Building2,
        title: 'Corporate travel',
        description: 'Practical solutions for companies, importers and professionals who need clearer and more efficient travel logistics.',
        color: '#22c55e',
      },
      {
        icon: HeartHandshake,
        title: 'Support before and during the trip',
        description: 'Support with useful information, clear answers and close assistance so you can travel with confidence.',
        color: '#00b4d8',
      },
    ],
    cta: 'Request information',
  },
};

export default function Services({ currentLang }: ServicesProps) {
  const t = translations[currentLang as keyof typeof translations] || translations.es;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      id="servicios" 
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff6f1] via-white to-[#f7f8fb]" />
      
      {/* Decorative shapes */}
      <ParallaxLayer speed={0.3} className="absolute -left-32 top-1/4 opacity-30">
        <div className="w-64 h-64 rounded-full bg-[#ff6b35]/10 blur-3xl" />
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.5} direction="down" className="absolute -right-32 bottom-1/4 opacity-30">
        <div className="w-96 h-96 rounded-full bg-[#8b5cf6]/10 blur-3xl" />
      </ParallaxLayer>

      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <ScrollReveal>
              <AnimatedText
                children={t.title}
                type="words"
                className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl xl:text-responsive-5xl font-bold text-[#1f2433] mb-4 sm:mb-6 leading-tight text-no-cut"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-responsive-base sm:text-responsive-lg text-[#6d7588] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 text-no-cut">
                {t.subtitle}
              </p>
            </ScrollReveal>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <motion.div
                  className="group relative h-full bg-white rounded-xl sm:rounded-[1.5rem] p-5 sm:p-8 shadow-lg shadow-black/5 border border-gray-100 overflow-hidden"
                  whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden"
                    style={{ backgroundColor: `${service.color}15` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <service.icon 
                      size={22} 
                      className="sm:w-7 sm:h-7 relative z-10"
                      style={{ color: service.color }}
                    />
                    
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: service.color }}
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-responsive-base sm:text-responsive-lg font-bold text-[#1f2433] mb-2 sm:mb-3 group-hover:text-[#ff6b35] transition-colors leading-tight text-no-cut">
                    {service.title}
                  </h3>
                  <p className="text-[#6d7588] text-responsive-xs sm:text-responsive-sm leading-relaxed text-no-cut">
                    {service.description}
                  </p>

                  {/* Corner decoration */}
                  <div 
                    className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: service.color }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal delay={0.6} className="mt-10 sm:mt-16 text-center">
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#1f2433] text-white rounded-full font-semibold shadow-lg shadow-[#1f2433]/20 hover:shadow-xl hover:shadow-[#1f2433]/30 transition-shadow cursor-pointer text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t.cta}</span>
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </motion.button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
