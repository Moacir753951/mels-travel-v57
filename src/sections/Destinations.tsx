import { motion } from 'framer-motion';
import { Waves, Umbrella, Globe, Briefcase, ChevronRight } from 'lucide-react';
import { StaggerReveal, StaggerItem } from '@/components/effects/ScrollReveal';
import ScrollReveal from '@/components/effects/ScrollReveal';
import AnimatedText from '@/components/effects/AnimatedText';

interface DestinationsProps {
  currentLang: string;
  onOpenModal: (destination: string) => void;
}

const translations = {
  es: {
    title: 'Destinos pensados para diferentes estilos de viaje',
    subtitle: 'Descubre qué hace especial a cada destino y encuentra el lugar ideal para vacaciones en pareja, en familia, escapadas de descanso, compras o viajes corporativos.',
    cards: [
      {
        id: 'caribe',
        badge: 'Caribe',
        title: 'Caribe',
        description: 'Sumérgete en aguas cristalinas y disfruta de resorts all-inclusive de alto nivel. Perfecto para quienes buscan el máximo descanso, celebraciones románticas o momentos inolvidables en familia bajo el sol caribeño.',
        image: '/images/home/caribe.jpg',
        icon: Waves,
        color: '#00b4d8',
      },
      {
        id: 'brasil',
        badge: 'Brasil',
        title: 'Litoral Brasileño',
        description: 'Lo mejor del litoral brasileño a su alcance. Desde las vibrantes playas del Nordeste hasta el encanto del Sur, ofrecemos opciones prácticas con la mejor gastronomía, cultura y hospitalidad que solo Brasil brinda.',
        image: '/images/home/brasil.jpg',
        icon: Umbrella,
        color: '#22c55e',
      },
      {
        id: 'europa',
        badge: 'Europa',
        title: 'Europa',
        description: 'Explore la historia y el encanto del Viejo Continente. Con itinerarios personalizados, le conectamos con las capitales más icónicas, museos fascinantes y paisajes europeos impresionantes.',
        image: '/images/home/europa.jpg',
        icon: Globe,
        color: '#8b5cf6',
      },
      {
        id: 'negocios',
        badge: 'Negocios',
        title: 'Viajes Comerciales',
        description: 'Su productividad es nuestra prioridad. Organizamos su logística para ferias, reuniones y compras con agilidad y soporte total, garantizando que se enfoque solo en sus resultados y conexiones de negocios.',
        image: '/images/home/negocios.jpg',
        icon: Briefcase,
        color: '#f59e0b',
      },
    ],
  },
  pt: {
    title: 'Destinos pensados para diferentes estilos de viagem',
    subtitle: 'Descubra o que torna cada destino especial e encontre a opção ideal para viagens em casal, em família, para descanso, compras ou compromissos corporativos.',
    cards: [
      {
        id: 'caribe',
        badge: 'Caribe',
        title: 'Caribe',
        description: 'Mergulhe em águas cristalinas e desfrute de resorts all-inclusive de alto padrão. Perfeito para quem busca o máximo descanso, celebrações românticas ou momentos inesquecíveis em família sob o sol caribenho.',
        image: '/images/home/caribe.jpg',
        icon: Waves,
        color: '#00b4d8',
      },
      {
        id: 'brasil',
        badge: 'Brasil',
        title: 'Litoral Brasileiro',
        description: 'O melhor do litoral brasileiro ao seu alcance. Das praias vibrantes do Nordeste ao charme do Sul, oferecemos opções práticas com a melhor gastronomia, cultura e hospitalidade que só o Brasil proporciona.',
        image: '/images/home/brasil.jpg',
        icon: Umbrella,
        color: '#22c55e',
      },
      {
        id: 'europa',
        badge: 'Europa',
        title: 'Europa',
        description: 'Explore a história e o charme do Velho Continente. Com roteiros personalizados, conectamos você às capitais mais icônicas, museus fascinantes e paisagens europeias de tirar o fôlego.',
        image: '/images/home/europa.jpg',
        icon: Globe,
        color: '#8b5cf6',
      },
      {
        id: 'negocios',
        badge: 'Negócios',
        title: 'Viagens Comerciais',
        description: 'Sua produtividade é nossa prioridade. Organizamos sua logística para feiras, reuniões e compras com agilidade e suporte total, garantindo que você foque apenas nos seus resultados e conexões de negócios.',
        image: '/images/home/negocios.jpg',
        icon: Briefcase,
        color: '#f59e0b',
      },
    ],
  },
  en: {
    title: 'Destinations for different travel styles',
    subtitle: 'Discover what makes each destination special and find the ideal option for couples, families, relaxing escapes, shopping or corporate travel.',
    cards: [
      {
        id: 'caribe',
        badge: 'Caribbean',
        title: 'Caribbean',
        description: 'Dive into crystal-clear waters and enjoy high-end all-inclusive resorts. Perfect for those seeking ultimate relaxation, romantic celebrations, or unforgettable family moments under the Caribbean sun.',
        image: '/images/home/caribe.jpg',
        icon: Waves,
        color: '#00b4d8',
      },
      {
        id: 'brasil',
        badge: 'Brazil',
        title: 'Brazilian Coast',
        description: 'The best of the Brazilian coast within your reach. From the vibrant beaches of the Northeast to the charm of the South, we offer practical options with the best gastronomy, culture, and hospitality that only Brazil provides.',
        image: '/images/home/brasil.jpg',
        icon: Umbrella,
        color: '#22c55e',
      },
      {
        id: 'europa',
        badge: 'Europe',
        title: 'Europe',
        description: 'Explore the history and charm of the Old Continent. With personalized itineraries, we connect you to the most iconic capitals, fascinating museums, and breathtaking European landscapes.',
        image: '/images/home/europa.jpg',
        icon: Globe,
        color: '#8b5cf6',
      },
      {
        id: 'negocios',
        badge: 'Business',
        title: 'Business Trips',
        description: 'Your productivity is our priority. We organize your logistics for trade fairs, meetings, and shopping with agility and full support, ensuring you focus only on your results and business connections.',
        image: '/images/home/negocios.jpg',
        icon: Briefcase,
        color: '#f59e0b',
      },
    ],
  },
};

export default function Destinations({ currentLang, onOpenModal }: DestinationsProps) {
  const t = translations[currentLang as keyof typeof translations] || translations.es;

  return (
    <section id="destinos" className="relative py-16 sm:py-20 lg:py-32 gradient-mesh">
      <div className="w-full px-4 sm:px-6 lg:px-12">
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

          {/* Cards Grid */}
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.1}>
            {t.cards.map((card) => (
              <StaggerItem key={card.id}>
                <motion.article
                  onClick={() => onOpenModal(card.id)}
                  className="group relative bg-white rounded-xl sm:rounded-[1.5rem] overflow-hidden shadow-lg shadow-black/5 cursor-pointer h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Badge */}
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-white text-xs font-bold"
                        style={{ backgroundColor: card.color }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {card.badge}
                      </motion.div>
                      
                      {/* Icon */}
                      <div 
                        className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-white"
                        style={{ backgroundColor: card.color }}
                      >
                        <card.icon size={20} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-responsive-base sm:text-responsive-lg font-bold text-[#1f2433] mb-2 sm:mb-3 flex items-center gap-2 text-no-cut">
                        {card.title}
                      </h3>
                      <p className="text-[#6d7588] text-responsive-xs sm:text-responsive-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 text-no-cut">
                        {card.description}
                      </p>
                      
                      {/* Arrow link */}
                      <motion.div
                        className="flex items-center gap-1 text-[#ff6b35] font-semibold text-responsive-xs sm:text-responsive-sm"
                        whileHover={{ x: 5 }}
                      >
                        <span>Ver más</span>
                        <ChevronRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>

                    {/* Hover glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${card.color}15, transparent 70%)`,
                      }}
                    />
                  </motion.article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
