/**
 * ═══════════════════════════════════════════════════════════════
 * 🗺️ DESTINATION ROUTES MAP - Mel's Travel v44
 * ═══════════════════════════════════════════════════════════════
 * 
 * © 2025 Mel's Travel. Todos los derechos reservados.
 * 
 * MAPA DE ROTAS DE DESTINOS - 64 páginas totais
 * ┌─────────────────────────────────────────────────────────┐
 * │  HOME DESTINATIONS (4)                                  │
 * │    /destino/caribe         -> Caribe                    │
 * │    /destino/brasil         -> Brasil                    │
 * │    /destino/europa         -> Europa                    │
 * │    /destino/corporativo    -> Corporativo               │
 * ├─────────────────────────────────────────────────────────┤
 * │  GAME TRAVEL - SOLO (20)                                │
 * │    /destino/kioto-solo     -> Kioto, Japón              │
 * │    /destino/reykjavik-solo -> Reykjavik, Islandia       │
 * │    /destino/chiang-mai-solo-> Chiang Mai, Tailandia     │
 * │    ... (17 mais)                                        │
 * ├─────────────────────────────────────────────────────────┤
 * │  GAME TRAVEL - COUPLE (20)                              │
 * │    /destino/paris-couple   -> Paris, Francia            │
 * │    /destino/venecia-couple -> Venecia, Italia           │
 * │    ... (18 mais)                                        │
 * ├─────────────────────────────────────────────────────────┤
 * │  GAME TRAVEL - FRIENDS (20)                             │
 * │    /destino/ibiza-friends  -> Ibiza, España             │
 * │    /destino/rio-friends    -> Rio de Janeiro, Brasil    │
 * │    ... (18 mais)                                        │
 * └─────────────────────────────────────────────────────────┘
 * 
 * Para adicionar um novo destino:
 * 1. Adicione o destino em src/data/destinations.ts
 * 2. Adicione a imagem no objeto `images`
 * 3. Gere o slug: {slugify(city)}-{mode}
 * 4. Adicione a rota neste arquivo
 * ═══════════════════════════════════════════════════════════════
 */

import { images } from './destinations';

export interface DestinationRoute {
  id: string;
  slug: string;
  city: string;
  country: string;
  mode: 'home' | 'sub' | 'solo' | 'couple' | 'friends';
  category?: string;
  imageUrl: string;
}

// ═══════════════════════════════════════════════════════════════
// HOME DESTINATIONS (4 cards da página inicial)
// ═══════════════════════════════════════════════════════════════
const homeRoutes: Record<string, DestinationRoute> = {
  caribe: {
    id: 'caribe',
    slug: 'caribe',
    city: 'Caribe',
    country: 'Multipaís',
    mode: 'home',
    category: 'beach',
    imageUrl: '/images/pages/caribe.jpg',
  },
  brasil: {
    id: 'brasil',
    slug: 'brasil',
    city: 'Brasil',
    country: 'Brasil',
    mode: 'home',
    category: 'beach',
    imageUrl: '/images/pages/brasil.jpg',
  },
  europa: {
    id: 'europa',
    slug: 'europa',
    city: 'Europa',
    country: 'Multipaís',
    mode: 'home',
    category: 'culture',
    imageUrl: '/images/pages/europa.jpg',
  },
  corporativo: {
    id: 'corporativo',
    slug: 'corporativo',
    city: 'Viajes Corporativos',
    country: 'Global',
    mode: 'home',
    category: 'business',
    imageUrl: '/images/pages/negocios.jpg',
  },
};

// ═══════════════════════════════════════════════════════════════
// GAME TRAVEL - SOLO DESTINATIONS (20 destinos)
// ═══════════════════════════════════════════════════════════════
const soloRoutes: Record<string, DestinationRoute> = {
  'kioto-solo': { id: 'solo-1', slug: 'kioto-solo', city: 'Kioto', country: 'Japón', mode: 'solo', imageUrl: images.kyoto },
  'reykjavik-solo': { id: 'solo-2', slug: 'reykjavik-solo', city: 'Reykjavik', country: 'Islandia', mode: 'solo', imageUrl: images.reykjavik },
  'chiang-mai-solo': { id: 'solo-3', slug: 'chiang-mai-solo', city: 'Chiang Mai', country: 'Tailandia', mode: 'solo', imageUrl: images.chiangMai },
  'lisboa-solo': { id: 'solo-4', slug: 'lisboa-solo', city: 'Lisboa', country: 'Portugal', mode: 'solo', imageUrl: images.lisbon },
  'buenos-aires-solo': { id: 'solo-5', slug: 'buenos-aires-solo', city: 'Buenos Aires', country: 'Argentina', mode: 'solo', imageUrl: images.buenosAires },
  'bali-solo': { id: 'solo-6', slug: 'bali-solo', city: 'Bali', country: 'Indonesia', mode: 'solo', imageUrl: images.bali },
  'edimburgo-solo': { id: 'solo-7', slug: 'edimburgo-solo', city: 'Edimburgo', country: 'Escocia', mode: 'solo', imageUrl: images.edinburgh },
  'ciudad-del-cabo-solo': { id: 'solo-8', slug: 'ciudad-del-cabo-solo', city: 'Ciudad del Cabo', country: 'Sudáfrica', mode: 'solo', imageUrl: images.capeTown },
  'medellin-solo': { id: 'solo-9', slug: 'medellin-solo', city: 'Medellín', country: 'Colombia', mode: 'solo', imageUrl: images.medellin },
  'marrakech-solo': { id: 'solo-10', slug: 'marrakech-solo', city: 'Marrakech', country: 'Marruecos', mode: 'solo', imageUrl: images.marrakech },
  'queenstown-solo': { id: 'solo-11', slug: 'queenstown-solo', city: 'Queenstown', country: 'Nueva Zelanda', mode: 'solo', imageUrl: images.queenstown },
  'praga-solo': { id: 'solo-12', slug: 'praga-solo', city: 'Praga', country: 'República Checa', mode: 'solo', imageUrl: images.prague },
  'hoi-an-solo': { id: 'solo-13', slug: 'hoi-an-solo', city: 'Hoi An', country: 'Vietnam', mode: 'solo', imageUrl: images.hoiAn },
  'santorini-solo': { id: 'solo-14', slug: 'santorini-solo', city: 'Santorini', country: 'Grecia', mode: 'solo', imageUrl: images.santorini },
  'tokio-solo': { id: 'solo-15', slug: 'tokio-solo', city: 'Tokio', country: 'Japón', mode: 'solo', imageUrl: images.tokyo },
  'vancouver-solo': { id: 'solo-16', slug: 'vancouver-solo', city: 'Vancouver', country: 'Canadá', mode: 'solo', imageUrl: images.vancouver },
  'seul-solo': { id: 'solo-17', slug: 'seul-solo', city: 'Seúl', country: 'Corea del Sur', mode: 'solo', imageUrl: images.seoul },
  'valencia-solo': { id: 'solo-18', slug: 'valencia-solo', city: 'Valencia', country: 'España', mode: 'solo', imageUrl: images.valencia },
  'auckland-solo': { id: 'solo-19', slug: 'auckland-solo', city: 'Auckland', country: 'Nueva Zelanda', mode: 'solo', imageUrl: images.auckland },
  'oaxaca-solo': { id: 'solo-20', slug: 'oaxaca-solo', city: 'Oaxaca', country: 'México', mode: 'solo', imageUrl: images.oaxaca },
};

// ═══════════════════════════════════════════════════════════════
// GAME TRAVEL - COUPLE DESTINATIONS (20 destinos)
// ═══════════════════════════════════════════════════════════════
const coupleRoutes: Record<string, DestinationRoute> = {
  'paris-couple': { id: 'couple-1', slug: 'paris-couple', city: 'Paris', country: 'Francia', mode: 'couple', imageUrl: images.paris },
  'venecia-couple': { id: 'couple-2', slug: 'venecia-couple', city: 'Venecia', country: 'Italia', mode: 'couple', imageUrl: images.venice },
  'maldivas-couple': { id: 'couple-3', slug: 'maldivas-couple', city: 'Maldivas', country: 'Maldivas', mode: 'couple', imageUrl: images.maldives },
  'santorini-couple': { id: 'couple-4', slug: 'santorini-couple', city: 'Santorini', country: 'Grecia', mode: 'couple', imageUrl: images.santorini },
  'punta-cana-couple': { id: 'couple-5', slug: 'punta-cana-couple', city: 'Punta Cana', country: 'República Dominicana', mode: 'couple', imageUrl: images.cancun },
  'bariloche-couple': { id: 'couple-6', slug: 'bariloche-couple', city: 'Bariloche', country: 'Argentina', mode: 'couple', imageUrl: images.generic },
  'cancun-couple': { id: 'couple-7', slug: 'cancun-couple', city: 'Cancún', country: 'México', mode: 'couple', imageUrl: images.cancun },
  'buzios-couple': { id: 'couple-8', slug: 'buzios-couple', city: 'Búzios', country: 'Brasil', mode: 'couple', imageUrl: images.rio },
  'toscana-couple': { id: 'couple-9', slug: 'toscana-couple', city: 'Toscana', country: 'Italia', mode: 'couple', imageUrl: images.florence },
  'maui-couple': { id: 'couple-10', slug: 'maui-couple', city: 'Maui', country: 'Estados Unidos', mode: 'couple', imageUrl: images.maui },
  'seychelles-couple': { id: 'couple-11', slug: 'seychelles-couple', city: 'Seychelles', country: 'Seychelles', mode: 'couple', imageUrl: images.seychelles },
  'florencia-couple': { id: 'couple-12', slug: 'florencia-couple', city: 'Florencia', country: 'Italia', mode: 'couple', imageUrl: images.florence },
  'zanzibar-couple': { id: 'couple-13', slug: 'zanzibar-couple', city: 'Zanzíbar', country: 'Tanzania', mode: 'couple', imageUrl: images.generic },
  'rio-de-janeiro-couple': { id: 'couple-14', slug: 'rio-de-janeiro-couple', city: 'Río de Janeiro', country: 'Brasil', mode: 'couple', imageUrl: images.rio },
  'capadocia-couple': { id: 'couple-15', slug: 'capadocia-couple', city: 'Capadocia', country: 'Turquía', mode: 'couple', imageUrl: images.cappadocia },
  'bora-bora-couple': { id: 'couple-16', slug: 'bora-bora-couple', city: 'Bora Bora', country: 'Polinesia Francesa', mode: 'couple', imageUrl: images.boraBora },
  'machu-picchu-couple': { id: 'couple-17', slug: 'machu-picchu-couple', city: 'Machu Picchu', country: 'Perú', mode: 'couple', imageUrl: images.generic },
  'amalfi-couple': { id: 'couple-18', slug: 'amalfi-couple', city: 'Amalfi', country: 'Italia', mode: 'couple', imageUrl: images.generic },
  'niza-couple': { id: 'couple-19', slug: 'niza-couple', city: 'Niza', country: 'Francia', mode: 'couple', imageUrl: images.generic },
  'cartagena-couple': { id: 'couple-20', slug: 'cartagena-couple', city: 'Cartagena', country: 'Colombia', mode: 'couple', imageUrl: images.generic },
};

// ═══════════════════════════════════════════════════════════════
// GAME TRAVEL - FRIENDS DESTINATIONS (20 destinos)
// ═══════════════════════════════════════════════════════════════
const friendsRoutes: Record<string, DestinationRoute> = {
  'ibiza-friends': { id: 'friends-1', slug: 'ibiza-friends', city: 'Ibiza', country: 'España', mode: 'friends', imageUrl: images.ibiza },
  'rio-friends': { id: 'friends-2', slug: 'rio-friends', city: 'Río de Janeiro', country: 'Brasil', mode: 'friends', imageUrl: images.rio },
  'amsterdam-friends': { id: 'friends-3', slug: 'amsterdam-friends', city: 'Ámsterdam', country: 'Países Bajos', mode: 'friends', imageUrl: images.amsterdamFriends },
  'berlin-friends': { id: 'friends-4', slug: 'berlin-friends', city: 'Berlín', country: 'Alemania', mode: 'friends', imageUrl: images.berlin },
  'mykonos-friends': { id: 'friends-5', slug: 'mykonos-friends', city: 'Mykonos', country: 'Grecia', mode: 'friends', imageUrl: images.mykonos },
  'nueva-york-friends': { id: 'friends-6', slug: 'nueva-york-friends', city: 'Nueva York', country: 'Estados Unidos', mode: 'friends', imageUrl: images.newYork },
  'dublin-friends': { id: 'friends-7', slug: 'dublin-friends', city: 'Dublín', country: 'Irlanda', mode: 'friends', imageUrl: images.dublin },
  'cancun-friends': { id: 'friends-8', slug: 'cancun-friends', city: 'Cancún', country: 'México', mode: 'friends', imageUrl: images.cancun },
  'londres-friends': { id: 'friends-9', slug: 'londres-friends', city: 'Londres', country: 'Inglaterra', mode: 'friends', imageUrl: images.london },
  'nashville-friends': { id: 'friends-10', slug: 'nashville-friends', city: 'Nashville', country: 'Estados Unidos', mode: 'friends', imageUrl: images.nashville },
  'tulum-friends': { id: 'friends-11', slug: 'tulum-friends', city: 'Tulum', country: 'México', mode: 'friends', imageUrl: images.tulum },
  'miami-friends': { id: 'friends-12', slug: 'miami-friends', city: 'Miami', country: 'Estados Unidos', mode: 'friends', imageUrl: images.miami },
  'budapest-friends': { id: 'friends-13', slug: 'budapest-friends', city: 'Budapest', country: 'Hungría', mode: 'friends', imageUrl: images.budapest },
  'barcelona-friends': { id: 'friends-14', slug: 'barcelona-friends', city: 'Barcelona', country: 'España', mode: 'friends', imageUrl: images.barcelonaFriends },
  'praga-friends': { id: 'friends-15', slug: 'praga-friends', city: 'Praga', country: 'República Checa', mode: 'friends', imageUrl: images.pragueFriends },
  'singapur-friends': { id: 'friends-16', slug: 'singapur-friends', city: 'Singapur', country: 'Singapur', mode: 'friends', imageUrl: images.singapore },
  'lisboa-friends': { id: 'friends-17', slug: 'lisboa-friends', city: 'Lisboa', country: 'Portugal', mode: 'friends', imageUrl: images.lisbonFriends },
  'seul-friends': { id: 'friends-18', slug: 'seul-friends', city: 'Seúl', country: 'Corea del Sur', mode: 'friends', imageUrl: images.seoulFriends },
  'marrakech-friends': { id: 'friends-19', slug: 'marrakech-friends', city: 'Marrakech', country: 'Marruecos', mode: 'friends', imageUrl: images.marrakech },
  'mexico-df-friends': { id: 'friends-20', slug: 'mexico-df-friends', city: 'Ciudad de México', country: 'México', mode: 'friends', imageUrl: images.oaxaca },
};

// ═══════════════════════════════════════════════════════════════
// SUB-DESTINOS DAS CATEGORIAS HOME
// ═══════════════════════════════════════════════════════════════
const subDestinations: Record<string, DestinationRoute> = {
  'punta-cana': { id: 'punta-cana', slug: 'punta-cana', city: 'Punta Cana', country: 'República Dominicana', mode: 'sub', imageUrl: '/images/categories/caribe/punta-cana.jpg' },
  'cancun': { id: 'cancun', slug: 'cancun', city: 'Cancún', country: 'México', mode: 'sub', imageUrl: '/images/categories/caribe/cancun.jpg' },
  'riviera-maya': { id: 'riviera-maya', slug: 'riviera-maya', city: 'Riviera Maya', country: 'México', mode: 'sub', imageUrl: '/images/categories/caribe/riviera-maya.jpg' },
  'jamaica': { id: 'jamaica', slug: 'jamaica', city: 'Jamaica', country: 'Jamaica', mode: 'sub', imageUrl: '/images/categories/caribe/jamaica.jpg' },
  'cuba': { id: 'cuba', slug: 'cuba', city: 'La Habana', country: 'Cuba', mode: 'sub', imageUrl: '/images/categories/caribe/cuba.jpg' },
  'aruba': { id: 'aruba', slug: 'aruba', city: 'Aruba', country: 'Aruba', mode: 'sub', imageUrl: '/images/categories/caribe/aruba.jpg' },
  'florianopolis': { id: 'florianopolis', slug: 'florianopolis', city: 'Florianópolis', country: 'Brasil', mode: 'sub', imageUrl: '/images/pages/brasil.jpg' },
  'bombinhas': { id: 'bombinhas', slug: 'bombinhas', city: 'Bombinhas', country: 'Brasil', mode: 'sub', imageUrl: '/images/categories/brasil/bombinhas.jpg' },
  'buzios': { id: 'buzios', slug: 'buzios', city: 'Búzios', country: 'Brasil', mode: 'sub', imageUrl: '/images/categories/brasil/buzios.jpg' },
  'rio-de-janeiro': { id: 'rio-de-janeiro', slug: 'rio-de-janeiro', city: 'Río de Janeiro', country: 'Brasil', mode: 'sub', imageUrl: '/images/pages/brasil.jpg' },
  'balneario-camboriu': { id: 'balneario-camboriu', slug: 'balneario-camboriu', city: 'Balneário Camboriú', country: 'Brasil', mode: 'sub', imageUrl: '/images/categories/brasil/bombinhas.jpg' },
  'fernando-de-noronha': { id: 'fernando-de-noronha', slug: 'fernando-de-noronha', city: 'Fernando de Noronha', country: 'Brasil', mode: 'sub', imageUrl: '/images/categories/caribe/punta-cana.jpg' },
  'paris': { id: 'paris', slug: 'paris', city: 'París', country: 'Francia', mode: 'sub', imageUrl: '/images/categories/europa/paris.jpg' },
  'roma': { id: 'roma', slug: 'roma', city: 'Roma', country: 'Italia', mode: 'sub', imageUrl: '/images/categories/europa/roma.jpg' },
  'madrid': { id: 'madrid', slug: 'madrid', city: 'Madrid', country: 'España', mode: 'sub', imageUrl: '/images/categories/europa/madrid.jpg' },
  'barcelona': { id: 'barcelona', slug: 'barcelona', city: 'Barcelona', country: 'España', mode: 'sub', imageUrl: '/images/categories/europa/barcelona.jpg' },
  'lisboa': { id: 'lisboa', slug: 'lisboa', city: 'Lisboa', country: 'Portugal', mode: 'sub', imageUrl: '/images/categories/europa/lisboa.jpg' },
  'suiza': { id: 'suiza', slug: 'suiza', city: 'Suiza', country: 'Suiza', mode: 'sub', imageUrl: '/images/categories/europa/suiza.jpg' },
  'miami-corporativo': { id: 'miami-corporativo', slug: 'miami-corporativo', city: 'Miami', country: 'Estados Unidos', mode: 'sub', imageUrl: '/images/categories/negocios/miami-corporativo.jpg' },
  'panama-corporativo': { id: 'panama-corporativo', slug: 'panama-corporativo', city: 'Ciudad de Panamá', country: 'Panamá', mode: 'sub', imageUrl: '/images/categories/negocios/panama-corporativo.jpg' },
  'sao-paulo-corporativo': { id: 'sao-paulo-corporativo', slug: 'sao-paulo-corporativo', city: 'São Paulo', country: 'Brasil', mode: 'sub', imageUrl: '/images/pages/brasil.jpg' },
  'buenos-aires-corporativo': { id: 'buenos-aires-corporativo', slug: 'buenos-aires-corporativo', city: 'Buenos Aires', country: 'Argentina', mode: 'sub', imageUrl: '/images/categories/negocios/buenos-aires-corporativo.jpg' },
  'santiago-corporativo': { id: 'santiago-corporativo', slug: 'santiago-corporativo', city: 'Santiago', country: 'Chile', mode: 'sub', imageUrl: '/images/categories/negocios/panama-corporativo.jpg' },
  'eventos-incentivo': { id: 'eventos-incentivo', slug: 'eventos-incentivo', city: 'Eventos e Incentivos', country: 'Global', mode: 'sub', imageUrl: '/images/categories/negocios/eventos-incentivo.jpg' },
};

// ═══════════════════════════════════════════════════════════════
// ALL ROUTES CONSOLIDATED
// ═══════════════════════════════════════════════════════════════
export const destinationRoutes: Record<string, DestinationRoute> = {
  ...homeRoutes,
  ...subDestinations,
  ...soloRoutes,
  ...coupleRoutes,
  ...friendsRoutes,
};

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Get destination by slug
 * @param slug - URL slug (ex: 'paris-couple', 'caribe')
 * @returns DestinationRoute or undefined
 */
export function getDestinationBySlug(slug: string): DestinationRoute | undefined {
  return destinationRoutes[slug];
}

/**
 * Get all slugs as array
 * @returns Array of all destination slugs
 */
export function getAllSlugs(): string[] {
  return Object.keys(destinationRoutes);
}

/**
 * Get destinations by mode
 * @param mode - 'home' | 'solo' | 'couple' | 'friends'
 * @returns Array of DestinationRoute
 */
export function getDestinationsByMode(mode: string): DestinationRoute[] {
  return Object.values(destinationRoutes).filter((d) => d.mode === mode);
}

/**
 * Generate a slug from city name and mode
 * @param city - City name
 * @param mode - Destination mode
 * @returns URL-friendly slug
 */
export function generateSlug(city: string, mode: string): string {
  const normalized = city
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${normalized}-${mode}`;
}

/**
 * Check if a slug exists
 * @param slug - URL slug to check
 * @returns boolean
 */
export function slugExists(slug: string): boolean {
  return slug in destinationRoutes;
}

/**
 * Total count of destinations
 */
export const totalDestinations = Object.keys(destinationRoutes).length;
export const homeDestinationsCount = Object.keys(homeRoutes).length;
export const soloDestinationsCount = Object.keys(soloRoutes).length;
export const coupleDestinationsCount = Object.keys(coupleRoutes).length;
export const friendsDestinationsCount = Object.keys(friendsRoutes).length;
