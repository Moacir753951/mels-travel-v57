/**
 * ═══════════════════════════════════════════════════════════════
 * 🗺️ DESTINATION PAGES DATA - Mel's Travel
 * ═══════════════════════════════════════════════════════════════
 *
 * © 2025 Mel's Travel. Todos los derechos reservados.
 *
 * ⚠️ PROPIEDAD INTELECTUAL PROTEGIDA
 * ═══════════════════════════════════════════════════════════════
 */

export interface DestinationPageData {
  id: string;
  slug: string;
  badge: string;
  color: string;
  image: string;
  icon: string;
  translations: {
    es: {
      title: string;
      headline: string;
      summary: string;
      metaDescription: string;
    };
    pt: {
      title: string;
      headline: string;
      summary: string;
      metaDescription: string;
    };
    en: {
      title: string;
      headline: string;
      summary: string;
      metaDescription: string;
    };
  };
}

export const destinationPagesData: Record<string, DestinationPageData> = {
  caribe: {
    id: 'caribe',
    slug: 'caribe',
    badge: 'Caribe',
    color: '#00b4d8',
    image: '/images/pages/caribe.jpg',
    icon: 'waves',
    translations: {
      es: {
        title: 'Caribe',
        headline: 'Sumérgete en el paraíso caribeño',
        summary: 'Aguas cristalinas, arenas blancas y resorts all-inclusive de alto nivel. El Caribe es el destino perfecto para quienes buscan el máximo descanso, celebraciones románticas o momentos inolvidables en familia bajo el sol caribeño. Desde Cancún hasta Punta Cana, cada isla ofrece una experiencia única de relajación y aventura.',
        metaDescription: 'Descubre el Caribe con Mel\'s Travel. Vacaciones en playas paradisíacas, resorts all-inclusive y experiencias inolvidables en familia o pareja.',
      },
      pt: {
        title: 'Caribe',
        headline: 'Mergulhe no paraíso caribenho',
        summary: 'Águas cristalinas, areias brancas e resorts all-inclusive de alto nível. O Caribe é o destino perfeito para quem busca o máximo descanso, celebrações românticas ou momentos inesquecíveis em família sob o sol caribenho. De Cancún a Punta Cana, cada ilha oferece uma experiência única de relaxamento e aventura.',
        metaDescription: 'Descubra o Caribe com a Mel\'s Travel. Férias em praias paradisíacas, resorts all-inclusive e experiências inesquecíveis em família ou casal.',
      },
      en: {
        title: 'Caribbean',
        headline: 'Dive into Caribbean paradise',
        summary: 'Crystal-clear waters, white sands, and high-level all-inclusive resorts. The Caribbean is the perfect destination for those seeking maximum relaxation, romantic celebrations, or unforgettable family moments under the Caribbean sun. From Cancun to Punta Cana, each island offers a unique experience of relaxation and adventure.',
        metaDescription: 'Discover the Caribbean with Mel\'s Travel. Vacations on paradise beaches, all-inclusive resorts and unforgettable experiences with family or as a couple.',
      },
    },
  },
  brasil: {
    id: 'brasil',
    slug: 'brasil',
    badge: 'Brasil',
    color: '#22c55e',
    image: '/images/pages/brasil.jpg',
    icon: 'umbrella',
    translations: {
      es: {
        title: 'Litoral Brasileño',
        headline: 'Lo mejor de Brasil te espera',
        summary: 'Desde las vibrantes playas del Nordeste hasta el encanto del Sur, el litoral brasileño ofrece opciones prácticas con la mejor gastronomía, cultura y hospitalidad. Destinos como Florianópolis, Bombinhas y Búzios combinan naturaleza exuberante con una infraestructura turística de primer nivel para toda la familia.',
        metaDescription: 'Viaja al litoral brasileño con Mel\'s Travel. Playas de Florianópolis, Bombinhas y Búzios con la mejor gastronomía y hospitalidad brasileña.',
      },
      pt: {
        title: 'Litoral Brasileiro',
        headline: 'O melhor do Brasil te espera',
        summary: 'Das praias vibrantes do Nordeste ao encanto do Sul, o litoral brasileiro oferece opções práticas com a melhor gastronomia, cultura e hospitalidade. Destinos como Florianópolis, Bombinhas e Búzios combinam natureza exuberante com uma infraestrutura turística de primeiro nível para toda a família.',
        metaDescription: 'Viaje ao litoral brasileiro com a Mel\'s Travel. Praias de Florianópolis, Bombinhas e Búzios com a melhor gastronomia e hospitalidade brasileira.',
      },
      en: {
        title: 'Brazilian Coast',
        headline: 'The best of Brazil awaits you',
        summary: 'From the vibrant beaches of the Northeast to the charm of the South, the Brazilian coast offers practical options with the best gastronomy, culture, and hospitality. Destinations like Florianopolis, Bombinhas, and Buzios combine lush nature with top-tier tourist infrastructure for the whole family.',
        metaDescription: 'Travel to the Brazilian coast with Mel\'s Travel. Beaches of Florianopolis, Bombinhas and Buzios with the best Brazilian gastronomy and hospitality.',
      },
    },
  },
  europa: {
    id: 'europa',
    slug: 'europa',
    badge: 'Europa',
    color: '#6366f1',
    image: '/images/pages/europa.jpg',
    icon: 'globe',
    translations: {
      es: {
        title: 'Europa',
        headline: 'Vive la historia y cultura europea',
        summary: 'Circuitos diseñados para explorar desde las grandes capitales hasta pueblos encantadores. Europa ofrece una combinación única de historia milenaria, arte de clase mundial, gastronomía refinada y paisajes incomparables. Ideal para viajes culturales, románticos o de negocios con tiempo para descubrir.',
        metaDescription: 'Viaja a Europa con Mel\'s Travel. Circuitos por las grandes capitales, pueblos encantadores, historia, arte y gastronomía de clase mundial.',
      },
      pt: {
        title: 'Europa',
        headline: 'Viva a história e cultura europeia',
        summary: 'Circuitos desenhados para explorar desde as grandes capitais até vilas encantadoras. A Europa oferece uma combinação única de história milenar, arte de classe mundial, gastronomia refinada e paisagens incomparáveis. Ideal para viagens culturais, românticas ou de negócios com tempo para descobrir.',
        metaDescription: 'Viaje à Europa com a Mel\'s Travel. Circuitos pelas grandes capitais, vilas encantadoras, história, arte e gastronomia de classe mundial.',
      },
      en: {
        title: 'Europe',
        headline: 'Experience European history and culture',
        summary: 'Circuits designed to explore from great capitals to charming villages. Europe offers a unique combination of millenary history, world-class art, refined gastronomy, and unparalleled landscapes. Ideal for cultural, romantic, or business trips with time to discover.',
        metaDescription: 'Travel to Europe with Mel\'s Travel. Circuits through great capitals, charming villages, history, art and world-class gastronomy.',
      },
    },
  },
  corporativo: {
    id: 'corporativo',
    slug: 'corporativo',
    badge: 'Corporativo',
    color: '#f59e0b',
    image: '/images/pages/negocios.jpg',
    icon: 'briefcase',
    translations: {
      es: {
        title: 'Viajes Corporativos',
        headline: 'Soluciones de viaje para empresas',
        summary: 'Viajes de negocios que realmente funcionan. Gestión integral de desplazamientos corporativos con atención personalizada, tarifas competitivas y soporte 24/7. Desde reuniones internacionales hasta incentivos para equipos, garantizamos eficiencia, puntualidad y el confort que tus ejecutivos merecen.',
        metaDescription: 'Viajes corporativos con Mel\'s Travel. Gestión integral de desplazamientos de negocios con tarifas competitivas y soporte 24/7.',
      },
      pt: {
        title: 'Viagens Corporativas',
        headline: 'Soluções de viagem para empresas',
        summary: 'Viagens de negócios que realmente funcionam. Gestão integral de deslocamentos corporativos com atenção personalizada, tarifas competitivas e suporte 24/7. Desde reuniões internacionais até incentivos para equipes, garantimos eficiência, pontualidade e o conforto que seus executivos merecem.',
        metaDescription: 'Viagens corporativas com a Mel\'s Travel. Gestão integral de deslocamentos de negócios com tarifas competitivas e suporte 24/7.',
      },
      en: {
        title: 'Corporate Travel',
        headline: 'Business travel solutions',
        summary: 'Business trips that actually work. Comprehensive management of corporate travel with personalized attention, competitive rates, and 24/7 support. From international meetings to team incentives, we guarantee efficiency, punctuality, and the comfort your executives deserve.',
        metaDescription: 'Corporate travel with Mel\'s Travel. Comprehensive management of business travel with competitive rates and 24/7 support.',
      },
    },
  },
};

// Helper function to get destination data by slug
export function getDestinationPageData(slug: string): DestinationPageData | undefined {
  return destinationPagesData[slug];
}

// Helper function to get destination data by ID
export function getDestinationPageDataById(id: string): DestinationPageData | undefined {
  return Object.values(destinationPagesData).find((dest) => dest.id === id);
}

// List of all destination slugs for routing
export const destinationSlugs = Object.keys(destinationPagesData);
