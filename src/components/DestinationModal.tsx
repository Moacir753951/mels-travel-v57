import { useEffect, useCallback } from 'react';
import { X, Star, MapPin, ChevronRight } from 'lucide-react';

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: string | null;
  currentLang: string;
}

const destinationData: Record<string, Record<string, {
  title: string;
  description: string;
  badge: string;
  destinations: { name: string; region: string; tag: string; summary: string }[];
}>> = {
  caribe: {
    es: {
      title: 'Destinos del Caribe',
      description: 'Sumérgete en aguas cristalinas y disfruta de resorts all-inclusive de alto nivel. Perfecto para quienes buscan el máximo descanso, celebraciones románticas o momentos inolvidables en familia bajo el sol caribeño.',
      badge: 'Ideal para luna de miel, descanso, mar turquesa y hoteles all inclusive',
      destinations: [
        { name: 'Punta Cana', region: 'República Dominicana', tag: 'All-inclusive', summary: 'Resorts all-inclusive, playas tranquilas y una experiencia pensada para descansar sin preocupaciones.' },
        { name: 'Cancún / Riviera Maya', region: 'México', tag: 'Cultura Maya', summary: 'Playas espectaculares, vida nocturna vibrante y experiencias únicas entre cenotes y cultura Maya.' },
        { name: 'Aruba', region: 'Caribe Sur', tag: 'Exclusivo', summary: 'Clima perfecto todo el año, playas de arena blanca y una experiencia más exclusiva y segura.' },
        { name: 'Curaçao', region: 'Caribe Sur', tag: 'Auténtico', summary: 'Aguas cristalinas, paisajes coloridos y un ambiente caribeño más tranquilo y auténtico.' },
        { name: 'San Andrés', region: 'Colombia', tag: 'Siete colores', summary: 'Mar de siete colores, ambiente relajado y una excelente opción para desconectar y disfrutar.' },
      ],
    },
    pt: {
      title: 'Destinos do Caribe',
      description: 'Mergulhe em águas cristalinas e desfrute de resorts all-inclusive de alto padrão. Perfeito para quem busca o máximo descanso, celebrações românticas ou momentos inesquecíveis em família sob o sol caribenho.',
      badge: 'Ideal para lua de mel, descanso, mar azul e hotéis all inclusive',
      destinations: [
        { name: 'Punta Cana', region: 'República Dominicana', tag: 'All-inclusive', summary: 'Resorts all-inclusive, praias tranquilas e uma experiência perfeita para descansar sem preocupações.' },
        { name: 'Cancún / Riviera Maya', region: 'México', tag: 'Cultura Maia', summary: 'Praias espetaculares, vida noturna vibrante e experiências únicas entre cenotes e cultura Maia.' },
        { name: 'Aruba', region: 'Caribe Sul', tag: 'Exclusivo', summary: 'Clima perfeito o ano todo, praias de areia branca e uma experiência mais exclusiva e segura.' },
        { name: 'Curaçao', region: 'Caribe Sul', tag: 'Autêntico', summary: 'Águas cristalinas, paisagens coloridas e um ambiente caribenho mais tranquilo e autêntico.' },
        { name: 'San Andrés', region: 'Colômbia', tag: 'Sete cores', summary: 'Mar de sete cores, clima relaxante e uma excelente opção para descansar e aproveitar.' },
      ],
    },
    en: {
      title: 'Caribbean Destinations',
      description: 'Dive into crystal-clear waters and enjoy high-end all-inclusive resorts. Perfect for those seeking ultimate relaxation, romantic celebrations, or unforgettable family moments under the Caribbean sun.',
      badge: 'Ideal for honeymoon, relaxation, turquoise sea and all-inclusive hotels',
      destinations: [
        { name: 'Punta Cana', region: 'Dominican Republic', tag: 'All-inclusive', summary: 'All-inclusive resorts, calm beaches, and a perfect experience to relax without worries.' },
        { name: 'Cancún / Riviera Maya', region: 'Mexico', tag: 'Mayan Culture', summary: 'Stunning beaches, vibrant nightlife, and unique experiences with cenotes and Mayan culture.' },
        { name: 'Aruba', region: 'Southern Caribbean', tag: 'Exclusive', summary: 'Perfect weather all year, white-sand beaches, and a more exclusive and safe experience.' },
        { name: 'Curaçao', region: 'Southern Caribbean', tag: 'Authentic', summary: 'Crystal-clear waters, colorful scenery, and a more relaxed and authentic Caribbean vibe.' },
        { name: 'San Andrés', region: 'Colombia', tag: 'Seven colors', summary: 'Seven-color sea, relaxed atmosphere, and a great option to unwind and enjoy.' },
      ],
    },
  },
  brasil: {
    es: {
      title: 'Litoral Brasileño',
      description: 'Lo mejor del litoral brasileño a su alcance. Desde las vibrantes playas del Nordeste hasta el encanto del Sur, ofrecemos opciones prácticas con la mejor gastronomía, cultura y hospitalidad que solo Brasil brinda.',
      badge: 'Muy elegido en Paraguay por cercanía, comodidad y variedad',
      destinations: [
        { name: 'Natal', region: 'Rio Grande do Norte', tag: 'Dunas', summary: 'Dunas, sol constante y playas amplias con un ambiente tranquilo y excelente clima todo el año.' },
        { name: 'Florianópolis', region: 'Santa Catarina', tag: 'Infraestructura', summary: 'Cercanía, seguridad y playas variadas con excelente infraestructura para viajes cómodos.' },
        { name: 'Maceió', region: 'Alagoas', tag: 'Piscinas naturales', summary: 'Aguas claras, piscinas naturales y una de las mejores experiencias de playa en Brasil.' },
        { name: 'Salvador', region: 'Bahía', tag: 'Cultura', summary: 'Cultura, historia y playas en un destino vibrante con identidad única.' },
        { name: 'Río de Janeiro', region: 'Brasil', tag: 'Icónico', summary: 'Íconos mundiales, playas famosas y una energía única entre naturaleza y ciudad.' },
        { name: 'Porto de Galinhas', region: 'Pernambuco', tag: 'Familia', summary: 'Piscinas naturales, aguas tranquilas y una experiencia ideal para descansar en familia.' },
      ],
    },
    pt: {
      title: 'Litoral Brasileiro',
      description: 'O melhor do litoral brasileiro ao seu alcance. Das praias vibrantes do Nordeste ao charme do Sul, oferecemos opções práticas com a melhor gastronomia, cultura e hospitalidade que só o Brasil proporciona.',
      badge: 'Muito escolhido no Paraguai por proximidade, conforto e variedade',
      destinations: [
        { name: 'Natal', region: 'Rio Grande do Norte', tag: 'Dunas', summary: 'Dunas, sol constante e praias amplas com clima tranquilo e excelente durante todo o ano.' },
        { name: 'Florianópolis', region: 'Santa Catarina', tag: 'Infraestrutura', summary: 'Proximidade, segurança e praias variadas com excelente estrutura para viagens confortáveis.' },
        { name: 'Maceió', region: 'Alagoas', tag: 'Piscinas naturais', summary: 'Águas claras, piscinas naturais e uma das melhores experiências de praia do Brasil.' },
        { name: 'Salvador', region: 'Bahia', tag: 'Cultura', summary: 'Cultura, história e praias em um destino vibrante e cheio de identidade.' },
        { name: 'Rio de Janeiro', region: 'Brasil', tag: 'Icônico', summary: 'Ícones mundiais, praias famosas e uma energia única entre natureza e cidade.' },
        { name: 'Porto de Galinhas', region: 'Pernambuco', tag: 'Família', summary: 'Piscinas naturais, águas calmas e uma experiência ideal para descansar em família.' },
      ],
    },
    en: {
      title: 'Brazilian Coast',
      description: 'The best of the Brazilian coast within your reach. From the vibrant beaches of the Northeast to the charm of the South, we offer practical options with the best gastronomy, culture, and hospitality that only Brazil provides.',
      badge: 'A favorite among travelers from Paraguay for its proximity, comfort and variety',
      destinations: [
        { name: 'Natal', region: 'Rio Grande do Norte', tag: 'Dunes', summary: 'Dunes, constant sunshine, and wide beaches with a calm atmosphere all year round.' },
        { name: 'Florianópolis', region: 'Santa Catarina', tag: 'Infrastructure', summary: 'Close, safe, and diverse beaches with excellent infrastructure for comfortable trips.' },
        { name: 'Maceió', region: 'Alagoas', tag: 'Natural pools', summary: 'Clear waters, natural pools, and one of the best beach experiences in Brazil.' },
        { name: 'Salvador', region: 'Bahia', tag: 'Culture', summary: 'Culture, history, and beaches in a vibrant destination full of character.' },
        { name: 'Rio de Janeiro', region: 'Brazil', tag: 'Iconic', summary: 'World icons, famous beaches, and a unique energy blending nature and city.' },
        { name: 'Porto de Galinhas', region: 'Pernambuco', tag: 'Family', summary: 'Natural pools, calm waters, and a perfect experience for relaxing with family.' },
      ],
    },
  },
  europa: {
    es: {
      title: 'Europa',
      description: 'Explore la historia y el encanto del Viejo Continente. Con itinerarios personalizados, le conectamos con las capitales más icónicas, museos fascinantes y paisajes europeos impresionantes.',
      badge: 'Cultura, historia, gastronomía, compras y rutas combinadas',
      destinations: [
        { name: 'Madrid', region: 'España', tag: 'Capital', summary: 'Capital vibrante con gastronomía, cultura y excelente conexión con toda Europa.' },
        { name: 'París', region: 'Francia', tag: 'Romance', summary: 'El destino más romántico del mundo, con arte, historia y experiencias inolvidables.' },
        { name: 'Roma', region: 'Italia', tag: 'Historia', summary: 'Historia en cada rincón, con monumentos icónicos y una experiencia cultural única.' },
        { name: 'Lisboa', region: 'Portugal', tag: 'Encanto', summary: 'Encanto, tradición y una experiencia europea más accesible y acogedora.' },
        { name: 'Londres', region: 'Reino Unido', tag: 'Global', summary: 'Una ciudad global con historia, modernidad y experiencias culturales de primer nivel.' },
      ],
    },
    pt: {
      title: 'Europa',
      description: 'Explore a história e o charme do Velho Continente. Com roteiros personalizados, conectamos você às capitais mais icônicas, museus fascinantes e paisagens europeias de tirar o fôlego.',
      badge: 'Cultura, história, gastronomia, compras e roteiros combinados',
      destinations: [
        { name: 'Madrid', region: 'Espanha', tag: 'Capital', summary: 'Capital vibrante com gastronomia, cultura e excelente conexão com toda a Europa.' },
        { name: 'Paris', region: 'França', tag: 'Romance', summary: 'O destino mais romântico do mundo, com arte, história e experiências inesquecíveis.' },
        { name: 'Roma', region: 'Itália', tag: 'História', summary: 'História em cada esquina, com monumentos icônicos e uma experiência cultural única.' },
        { name: 'Lisboa', region: 'Portugal', tag: 'Charme', summary: 'Charme, tradição e uma experiência europeia mais acessível e acolhedora.' },
        { name: 'Londres', region: 'Reino Unido', tag: 'Global', summary: 'Uma cidade global com história, modernidade e experiências culturais de alto nível.' },
      ],
    },
    en: {
      title: 'Europe',
      description: 'Explore the history and charm of the Old Continent. With personalized itineraries, we connect you to the most iconic capitals, fascinating museums, and breathtaking European landscapes.',
      badge: 'Culture, history, gastronomy, shopping and combined routes',
      destinations: [
        { name: 'Madrid', region: 'Spain', tag: 'Capital', summary: 'A vibrant capital with gastronomy, culture, and great connections across Europe.' },
        { name: 'Paris', region: 'France', tag: 'Romance', summary: 'The world\'s most romantic destination, with art, history, and unforgettable experiences.' },
        { name: 'Rome', region: 'Italy', tag: 'History', summary: 'History in every corner, with iconic monuments and a unique cultural experience.' },
        { name: 'Lisbon', region: 'Portugal', tag: 'Charm', summary: 'Charm, tradition, and a more accessible and welcoming European experience.' },
        { name: 'London', region: 'United Kingdom', tag: 'Global', summary: 'A global city with history, modernity, and world-class cultural experiences.' },
      ],
    },
  },
  negocios: {
    es: {
      title: 'Viajes Comerciales',
      description: 'Su productividad es nuestra prioridad. Organizamos su logística para ferias, reuniones y compras con agilidad y soporte total, garantizando que se enfoque solo en sus resultados y conexiones de negocios.',
      badge: 'Ferias, compras, reuniones, proveedores y logística empresarial',
      destinations: [
        { name: 'Miami', region: 'Estados Unidos', tag: 'Compras', summary: 'Centro estratégico para compras, ferias y conexiones comerciales en América.' },
        { name: 'Shenzhen', region: 'China', tag: 'Tecnología', summary: 'Polo tecnológico global con acceso directo a fabricantes e innovación constante.' },
        { name: 'Guangzhou', region: 'China', tag: 'Importación', summary: 'Referencia mundial para importadores, con ferias internacionales y gran variedad de proveedores.' },
        { name: 'Hong Kong', region: 'China', tag: 'Finanzas', summary: 'Centro financiero y logístico con ambiente internacional y alta conectividad.' },
        { name: 'Dubái', region: 'Emiratos Árabes Unidos', tag: 'Lujo', summary: 'Destino global de negocios con infraestructura moderna, lujo y grandes oportunidades comerciales.' },
        { name: 'Panamá', region: 'América Latina', tag: 'Logística', summary: 'Plataforma logística clave para compras y distribución en Latinoamérica.' },
      ],
    },
    pt: {
      title: 'Viagens Comerciais',
      description: 'Sua produtividade é nossa prioridade. Organizamos sua logística para feiras, reuniões e compras com agilidade e suporte total, garantindo que você foque apenas nos seus resultados e conexões de negócios.',
      badge: 'Feiras, compras, reuniões, fornecedores e logística empresarial',
      destinations: [
        { name: 'Miami', region: 'Estados Unidos', tag: 'Compras', summary: 'Centro estratégico para compras, feiras e conexões comerciais nas Américas.' },
        { name: 'Shenzhen', region: 'China', tag: 'Tecnologia', summary: 'Polo tecnológico global com acesso direto a fabricantes e inovação constante.' },
        { name: 'Guangzhou', region: 'China', tag: 'Importação', summary: 'Referência mundial para importadores, com feiras internacionais e grande variedade de fornecedores.' },
        { name: 'Hong Kong', region: 'China', tag: 'Finanças', summary: 'Centro financeiro e logístico com ambiente internacional e alta conectividade.' },
        { name: 'Dubai', region: 'Emirados Árabes Unidos', tag: 'Luxo', summary: 'Destino global de negócios com infraestrutura moderna, luxo e grandes oportunidades comerciais.' },
        { name: 'Panamá', region: 'América Latina', tag: 'Logística', summary: 'Plataforma logística chave para compras e distribuição na América Latina.' },
      ],
    },
    en: {
      title: 'Business Trips',
      description: 'Your productivity is our priority. We organize your logistics for trade fairs, meetings, and shopping with agility and full support, ensuring you focus only on your results and business connections.',
      badge: 'Trade fairs, shopping, meetings, suppliers and business logistics',
      destinations: [
        { name: 'Miami', region: 'United States', tag: 'Shopping', summary: 'A strategic hub for shopping, trade shows, and business connections in the Americas.' },
        { name: 'Shenzhen', region: 'China', tag: 'Technology', summary: 'A global tech hub with direct access to manufacturers and constant innovation.' },
        { name: 'Guangzhou', region: 'China', tag: 'Import', summary: 'A global reference for importers, with international fairs and a wide range of suppliers.' },
        { name: 'Hong Kong', region: 'China', tag: 'Finance', summary: 'A financial and logistics hub with an international environment and high connectivity.' },
        { name: 'Dubai', region: 'United Arab Emirates', tag: 'Luxury', summary: 'A global business destination with modern infrastructure, luxury, and strong opportunities.' },
        { name: 'Panama', region: 'Latin America', tag: 'Logistics', summary: 'A key logistics platform for purchasing and distribution in Latin America.' },
      ],
    },
  },
};

export default function DestinationModal({ isOpen, onClose, destination, currentLang }: DestinationModalProps) {
  const data = destination ? destinationData[destination]?.[currentLang] : null;

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen || !data) return null;

  return (
    <div 
      data-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
      style={{ cursor: 'default' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        style={{ cursor: 'auto' }}
      >
        {/* Header - Fixed */}
        <div className="relative bg-gradient-to-br from-[#1f2433] via-[#2f3650] to-[#ff6b35] p-6 flex-shrink-0">
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10 cursor-pointer"
            type="button"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 pr-12">
            {data.title}
          </h2>
          
          <p className="text-white/80 leading-relaxed text-sm md:text-base">
            {data.description}
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#fff1eb] text-[#ff6b35] text-sm font-semibold">
            <Star size={16} className="fill-[#ff6b35]" />
            {data.badge}
          </div>
        </div>

        {/* Body - Scrollable with proper containment */}
        <div 
          className="p-6 overflow-y-auto flex-1"
          style={{ 
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <h3 className="text-lg font-bold text-[#1f2433] mb-4">
            {currentLang === 'es' ? 'Destinos recomendados' : currentLang === 'pt' ? 'Destinos recomendados' : 'Recommended destinations'}
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {data.destinations.map((dest, index) => (
              <div
                key={index}
                className="group p-4 rounded-xl bg-gray-50 hover:bg-[#fff1eb] border border-gray-100 hover:border-[#ff6b35]/20 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-[#1f2433] group-hover:text-[#ff6b35] transition-colors text-sm md:text-base">
                      {dest.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[#6d7588] text-xs mt-1">
                      <MapPin size={12} />
                      {dest.region}
                    </div>
                  </div>
                  <span className="px-2 md:px-3 py-1 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-[10px] md:text-xs font-semibold whitespace-nowrap">
                    {dest.tag}
                  </span>
                </div>
                <p className="text-[#6d7588] text-xs md:text-sm leading-relaxed">
                  {dest.summary}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <a
              href="https://wa.me/595992030554"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#ff6b35] text-white rounded-full font-semibold hover:bg-[#e55a2b] transition-colors text-sm md:text-base"
            >
              <span>{currentLang === 'es' ? 'Solicitar cotización' : currentLang === 'pt' ? 'Solicitar cotação' : 'Request a quote'}</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
