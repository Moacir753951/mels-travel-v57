/**
 * ═══════════════════════════════════════════════════════════════
 * 📂 SUB-DESTINOS POR CATEGORIA - Mel's Travel
 * ═══════════════════════════════════════════════════════════════
 * 
 * Cada categoria da Home (Caribe, Brasil, Europa, Corporativo)
 * possui sub-destinos que abrem em páginas individuais.
 * 
 * Fluxo: Home → Modal Categoria → Página Individual
 * ═══════════════════════════════════════════════════════════════
 */

export interface SubDestination {
  id: string;
  slug: string;
  city: string;
  country: string;
  image: string;
  tagline: {
    es: string;
    pt: string;
    en: string;
  };
}

export interface CategoryData {
  id: string;
  translations: {
    es: { title: string; subtitle: string };
    pt: { title: string; subtitle: string };
    en: { title: string; subtitle: string };
  };
  color: string;
  subDestinations: SubDestination[];
}

export const categoryData: Record<string, CategoryData> = {
  caribe: {
    id: 'caribe',
    color: '#00b4d8',
    translations: {
      es: {
        title: 'Caribe',
        subtitle: 'Elige tu paraíso caribeño',
      },
      pt: {
        title: 'Caribe',
        subtitle: 'Escolha seu paraíso caribenho',
      },
      en: {
        title: 'Caribbean',
        subtitle: 'Choose your Caribbean paradise',
      },
    },
    subDestinations: [
      {
        id: 'punta-cana',
        slug: 'punta-cana',
        city: 'Punta Cana',
        country: 'República Dominicana',
        image: '/images/categories/caribe/punta-cana.jpg',
        tagline: {
          es: 'Playas de arena blanca y aguas turquesa',
          pt: 'Praias de areia branca e águas turquesa',
          en: 'White sand beaches and turquoise waters',
        },
      },
      {
        id: 'cancun',
        slug: 'cancun',
        city: 'Cancún',
        country: 'México',
        image: '/images/categories/caribe/cancun.jpg',
        tagline: {
          es: 'Vida nocturna y ruinas mayas',
          pt: 'Vida noturna e ruínas maias',
          en: 'Nightlife and Mayan ruins',
        },
      },
      {
        id: 'riviera-maya',
        slug: 'riviera-maya',
        city: 'Riviera Maya',
        country: 'México',
        image: '/images/categories/caribe/riviera-maya.jpg',
        tagline: {
          es: 'Cenotes mágicos y cultura maya',
          pt: 'Cenotes mágicos e cultura maia',
          en: 'Magical cenotes and Mayan culture',
        },
      },
      {
        id: 'jamaica',
        slug: 'jamaica',
        city: 'Jamaica',
        country: 'Jamaica',
        image: '/images/categories/caribe/jamaica.jpg',
        tagline: {
          es: 'Música reggae y naturaleza tropical',
          pt: 'Música reggae e natureza tropical',
          en: 'Reggae music and tropical nature',
        },
      },
      {
        id: 'cuba',
        slug: 'cuba',
        city: 'La Habana',
        country: 'Cuba',
        image: '/images/categories/caribe/cuba.jpg',
        tagline: {
          es: 'Historia, salsa y autos clásicos',
          pt: 'História, salsa e carros clássicos',
          en: 'History, salsa and classic cars',
        },
      },
      {
        id: 'aruba',
        slug: 'aruba',
        city: 'Aruba',
        country: 'Aruba',
        image: '/images/categories/caribe/aruba.jpg',
        tagline: {
          es: 'La isla feliz del Caribe',
          pt: 'A ilha feliz do Caribe',
          en: 'The happy island of the Caribbean',
        },
      },
    ],
  },
  brasil: {
    id: 'brasil',
    color: '#22c55e',
    translations: {
      es: {
        title: 'Brasil',
        subtitle: 'Elige tu destino brasileño',
      },
      pt: {
        title: 'Brasil',
        subtitle: 'Escolha seu destino brasileiro',
      },
      en: {
        title: 'Brazil',
        subtitle: 'Choose your Brazilian destination',
      },
    },
    subDestinations: [
      {
        id: 'florianopolis',
        slug: 'florianopolis',
        city: 'Florianópolis',
        country: 'Brasil',
        image: '/images/categories/brasil/florianopolis.jpg',
        tagline: {
          es: 'La isla de la magia',
          pt: 'A ilha da magia',
          en: 'The magic island',
        },
      },
      {
        id: 'bombinhas',
        slug: 'bombinhas',
        city: 'Bombinhas',
        country: 'Brasil',
        image: '/images/categories/brasil/bombinhas.jpg',
        tagline: {
          es: 'Paraíso natural de Santa Catarina',
          pt: 'Paraíso natural de Santa Catarina',
          en: 'Natural paradise of Santa Catarina',
        },
      },
      {
        id: 'buzios',
        slug: 'buzios',
        city: 'Búzios',
        country: 'Brasil',
        image: '/images/categories/brasil/buzios.jpg',
        tagline: {
          es: 'El Saint-Tropez brasileño',
          pt: 'O Saint-Tropez brasileiro',
          en: 'The Brazilian Saint-Tropez',
        },
      },
      {
        id: 'rio-de-janeiro',
        slug: 'rio-de-janeiro',
        city: 'Río de Janeiro',
        country: 'Brasil',
        image: '/images/categories/brasil/rio-de-janeiro.jpg',
        tagline: {
          es: 'Cristo, playas y samba',
          pt: 'Cristo, praias e samba',
          en: 'Christ, beaches and samba',
        },
      },
      {
        id: 'balneario-camboriu',
        slug: 'balneario-camboriu',
        city: 'Balneário Camboriú',
        country: 'Brasil',
        image: '/images/categories/brasil/balneario-camboriu.jpg',
        tagline: {
          es: 'El dubai brasileño',
          pt: 'O dubai brasileiro',
          en: 'The Brazilian Dubai',
        },
      },
      {
        id: 'fernando-de-noronha',
        slug: 'fernando-de-noronha',
        city: 'Fernando de Noronha',
        country: 'Brasil',
        image: '/images/categories/brasil/fernando-de-noronha.jpg',
        tagline: {
          es: 'El paraíso escondido de Brasil',
          pt: 'O paraíso escondido do Brasil',
          en: 'Brazil\'s hidden paradise',
        },
      },
    ],
  },
  europa: {
    id: 'europa',
    color: '#6366f1',
    translations: {
      es: {
        title: 'Europa',
        subtitle: 'Elige tu destino europeo',
      },
      pt: {
        title: 'Europa',
        subtitle: 'Escolha seu destino europeu',
      },
      en: {
        title: 'Europe',
        subtitle: 'Choose your European destination',
      },
    },
    subDestinations: [
      {
        id: 'paris',
        slug: 'paris',
        city: 'París',
        country: 'Francia',
        image: '/images/categories/europa/paris.jpg',
        tagline: {
          es: 'La ciudad del amor y la luz',
          pt: 'A cidade do amor e da luz',
          en: 'The city of love and light',
        },
      },
      {
        id: 'roma',
        slug: 'roma',
        city: 'Roma',
        country: 'Italia',
        image: '/images/categories/europa/roma.jpg',
        tagline: {
          es: 'La ciudad eterna',
          pt: 'A cidade eterna',
          en: 'The eternal city',
        },
      },
      {
        id: 'madrid',
        slug: 'madrid',
        city: 'Madrid',
        country: 'España',
        image: '/images/categories/europa/madrid.jpg',
        tagline: {
          es: 'Arte, gastronomía y vida nocturna',
          pt: 'Arte, gastronomia e vida noturna',
          en: 'Art, gastronomy and nightlife',
        },
      },
      {
        id: 'barcelona',
        slug: 'barcelona',
        city: 'Barcelona',
        country: 'España',
        image: '/images/categories/europa/barcelona.jpg',
        tagline: {
          es: 'Arquitectura de Gaudí y mar Mediterráneo',
          pt: 'Arquitetura de Gaudí e mar Mediterrâneo',
          en: 'Gaudí architecture and Mediterranean Sea',
        },
      },
      {
        id: 'lisboa',
        slug: 'lisboa',
        city: 'Lisboa',
        country: 'Portugal',
        image: '/images/categories/europa/lisboa.jpg',
        tagline: {
          es: 'Colores, fado y pasteles de nata',
          pt: 'Cores, fado e pastéis de nata',
          en: 'Colors, fado and pastel de nata',
        },
      },
      {
        id: 'suiza',
        slug: 'suiza',
        city: 'Suiza',
        country: 'Suiza',
        image: '/images/categories/europa/suiza.jpg',
        tagline: {
          es: 'Alpes, chocolates y relojes',
          pt: 'Alpes, chocolates e relógios',
          en: 'Alps, chocolate and watches',
        },
      },
    ],
  },
  negocios: {
    id: 'corporativo',
    color: '#f59e0b',
    translations: {
      es: {
        title: 'Viajes Corporativos',
        subtitle: 'Soluciones de viaje para empresas',
      },
      pt: {
        title: 'Viagens Corporativas',
        subtitle: 'Soluções de viagem para empresas',
      },
      en: {
        title: 'Corporate Travel',
        subtitle: 'Business travel solutions',
      },
    },
    subDestinations: [
      {
        id: 'miami-corporativo',
        slug: 'miami-corporativo',
        city: 'Miami',
        country: 'Estados Unidos',
        image: '/images/categories/negocios/miami-corporativo.jpg',
        tagline: {
          es: 'Centro de negocios internacionales',
          pt: 'Centro de negócios internacionais',
          en: 'International business hub',
        },
      },
      {
        id: 'panama-corporativo',
        slug: 'panama-corporativo',
        city: 'Ciudad de Panamá',
        country: 'Panamá',
        image: '/images/categories/negocios/panama-corporativo.jpg',
        tagline: {
          es: 'Hub de negocios de América Latina',
          pt: 'Hub de negócios da América Latina',
          en: 'Latin America business hub',
        },
      },
      {
        id: 'sao-paulo-corporativo',
        slug: 'sao-paulo-corporativo',
        city: 'São Paulo',
        country: 'Brasil',
        image: '/images/categories/negocios/sao-paulo-corporativo.jpg',
        tagline: {
          es: 'El corazón financiero de Brasil',
          pt: 'O coração financeiro do Brasil',
          en: 'The financial heart of Brazil',
        },
      },
      {
        id: 'buenos-aires-corporativo',
        slug: 'buenos-aires-corporativo',
        city: 'Buenos Aires',
        country: 'Argentina',
        image: '/images/categories/negocios/buenos-aires-corporativo.jpg',
        tagline: {
          es: 'Negocios con estilo porteño',
          pt: 'Negócios com estilo portenho',
          en: 'Business with porteño style',
        },
      },
      {
        id: 'santiago-corporativo',
        slug: 'santiago-corporativo',
        city: 'Santiago',
        country: 'Chile',
        image: '/images/categories/negocios/santiago-corporativo.jpg',
        tagline: {
          es: 'Puerta de entrada a Sudamérica',
          pt: 'Porta de entrada para a América do Sul',
          en: 'Gateway to South America',
        },
      },
      {
        id: 'eventos-incentivo',
        slug: 'eventos-incentivo',
        city: 'Eventos e Incentivos',
        country: 'Global',
        image: '/images/categories/negocios/eventos-incentivo.jpg',
        tagline: {
          es: 'Viajes de incentivo para equipos',
          pt: 'Viagens de incentivo para equipes',
          en: 'Incentive trips for teams',
        },
      },
    ],
  },
};

// Get category by ID
export function getCategoryData(categoryId: string): CategoryData | undefined {
  return categoryData[categoryId];
}

// Get sub-destination by category and slug
export function getSubDestination(categoryId: string, slug: string): SubDestination | undefined {
  const category = categoryData[categoryId];
  if (!category) return undefined;
  return category.subDestinations.find((d) => d.slug === slug);
}
