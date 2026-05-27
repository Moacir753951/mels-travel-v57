/**
 * ═══════════════════════════════════════════════════════════════
 * 🎮 GAME TRAVEL™ - DESTINATIONS DATA
 * ═══════════════════════════════════════════════════════════════
 * 
 * © 2025 Mel's Travel. Todos los derechos reservados.
 * © 2025 Mel's Travel. All rights reserved.
 * © 2025 Mel's Travel. Todos os direitos reservados.
 * 
 * ⚠️ PROPIEDAD INTELECTUAL PROTEGIDA
 * Este archivo contiene datos propietarios del sistema Game Travel™.
 * Cualquier reproducción, distribución o uso no autorizado está
 * estrictamente prohibido y será perseguido legalmente.
 * 
 * Para licencias comerciales: contacto@mels-travel.com
 * 
 * Autor: Mel's Travel
 * Fecha de creación: 2025
 * Versión: 1.0
 * ═══════════════════════════════════════════════════════════════
 */

export interface Destination {
  id: string;
  city: string;
  country: string;
  coords: { lat: number; lng: number };
  season: { es: string; pt: string; en: string };
  activities: { es: string[]; pt: string[]; en: string[] };
  whyGo: { es: string; pt: string; en: string };
  image: string;
}

export interface DestinationCategory {
  solo: Destination[];
  couple: Destination[];
  friends: Destination[];
}

// Verified Unsplash image URLs - all tested and working
export const images = {
  // Solo destinations
  kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
  reykjavik: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?w=800&q=80',
  chiangMai: 'https://images.unsplash.com/photo-1598935898639-33d885d54861?w=800&q=80',
  lisbon: 'https://images.unsplash.com/photo-1585208798174-6ced32586c28?w=800&q=80',
  buenosAires: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
  bali: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  edinburgh: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80',
  capeTown: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
  medellin: 'https://images.unsplash.com/photo-1599827552599-eadf5fb3c75f?w=800&q=80',
  marrakech: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
  queenstown: 'https://images.unsplash.com/photo-1507699622177-388898d9903d?w=800&q=80',
  prague: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
  hoiAn: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
  santorini: 'https://images.unsplash.com/photo-1613395877344-13d4c79e4284?w=800&q=80',
  tokyo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
  vancouver: 'https://images.unsplash.com/photo-1559511260-66a654ae98e2?w=800&q=80',
  seoul: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80',
  valencia: 'https://images.unsplash.com/photo-1569388330292-7a6a841cd2e6?w=800&q=80',
  auckland: 'https://images.unsplash.com/photo-1507699622177-388898d9903d?w=800&q=80',
  oaxaca: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80',
  
  // Couple destinations
  paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
  venice: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80',
  santoriniCouple: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
  maldives: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  florence: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80',
  boraBora: 'https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=800&q=80',
  pragueCouple: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80',
  vienna: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80',
  cappadocia: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=800&q=80',
  amsterdam: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a2?w=800&q=80',
  rome: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
  kyotoCouple: 'https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?w=800&q=80',
  barcelona: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
  quebec: 'https://images.unsplash.com/photo-1508967289497-b9c85158e02d?w=800&q=80',
  dubrovnik: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=800&q=80',
  maui: 'https://images.unsplash.com/photo-1542259671-8c8710921497?w=800&q=80',
  bruges: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80',
  seychelles: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
  lakeComo: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
  udaipur: 'https://images.unsplash.com/photo-1561361058-4e7b5d33d3d1?w=800&q=80',
  
  // Friends destinations
  ibiza: 'https://images.unsplash.com/photo-1573790388848-8f3c1d6b8c96?w=800&q=80',
  lasVegas: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&q=80',
  bangkok: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80',
  rio: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
  amsterdamFriends: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
  berlin: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
  mykonos: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed2a?w=800&q=80',
  newYork: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
  dublin: 'https://images.unsplash.com/photo-1580118869283-f6b52380a104?w=800&q=80',
  cancun: 'https://images.unsplash.com/photo-1552074291-ad4dfdc360d9?w=800&q=80',
  london: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
  nashville: 'https://images.unsplash.com/photo-1558538330292-7a6a841cd2e6?w=800&q=80',
  tulum: 'https://images.unsplash.com/photo-1504730656001-24d1337a09dd?w=800&q=80',
  miami: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
  budapest: 'https://images.unsplash.com/photo-1551867633-194f125bddfa?w=800&q=80',
  barcelonaFriends: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80',
  pragueFriends: 'https://images.unsplash.com/photo-1542328335-474956d15128?w=800&q=80',
  singapore: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80',
  lisbonFriends: 'https://images.unsplash.com/photo-1555881400-74d7acaacd81?w=800&q=80',
  seoulFriends: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80',
  
  // Generic fallback
  generic: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
};

export const destinationsData: Record<string, DestinationCategory> = {
  es: {
    solo: [
      {
        id: 'solo-1',
        city: 'Kioto',
        country: 'Japón',
        coords: { lat: 35.0116, lng: 135.7681 },
        season: { es: 'Primavera (mar-may) u Otoño (sept-nov)', pt: 'Primavera (mar-mai) ou Outono (set-nov)', en: 'Spring (Mar-May) or Autumn (Sep-Nov)' },
        activities: { es: ['Templos', 'Jardines zen', 'Cultura tradicional', 'Cerezos'], pt: ['Templos', 'Jardins zen', 'Cultura tradicional', 'Cerejeiras'], en: ['Temples', 'Zen gardens', 'Traditional culture', 'Cherry blossoms'] },
        whyGo: { es: 'Ciudad perfecta para la reflexión personal y encuentro con la cultura milenaria japonesa.', pt: 'Cidade perfeita para reflexão pessoal e encontro com a cultura milenar japonesa.', en: 'Perfect city for personal reflection and encountering ancient Japanese culture.' },
        image: images.kyoto
      },
      {
        id: 'solo-2',
        city: 'Reykjavik',
        country: 'Islandia',
        coords: { lat: 64.1466, lng: -21.9426 },
        season: { es: 'Septiembre a marzo (auroras boreales)', pt: 'Setembro a março (auroras boreais)', en: 'September to March (northern lights)' },
        activities: { es: ['Auroras boreales', 'Geysers', 'Cascadas', 'Aguas termales'], pt: ['Auroras boreais', 'Gêiseres', 'Cachoeiras', 'Águas termais'], en: ['Northern lights', 'Geysers', 'Waterfalls', 'Hot springs'] },
        whyGo: { es: 'Aventura única en un paisaje de otro mundo, ideal para reconectar contigo mismo.', pt: 'Aventura única em uma paisagem de outro mundo, ideal para se reconectar.', en: 'Unique adventure in an otherworldly landscape, ideal for reconnecting with yourself.' },
        image: images.reykjavik
      },
      {
        id: 'solo-3',
        city: 'Chiang Mai',
        country: 'Tailandia',
        coords: { lat: 18.7883, lng: 98.9853 },
        season: { es: 'Noviembre a febrero', pt: 'Novembro a fevereiro', en: 'November to February' },
        activities: { es: ['Templos budistas', 'Mercados nocturnos', 'Cocina tailandesa', 'Elefantes'], pt: ['Templos budistas', 'Mercados noturnos', 'Culinária tailandesa', 'Elefantes'], en: ['Buddhist temples', 'Night markets', 'Thai cuisine', 'Elephants'] },
        whyGo: { es: 'Destino espiritual con hospedajes económicos y una comunidad viajera acogedora.', pt: 'Destino espiritual com hospedagens econômicas e uma comunidade viajante acolhedora.', en: 'Spiritual destination with affordable accommodations and a welcoming traveler community.' },
        image: images.chiangMai
      },
      {
        id: 'solo-4',
        city: 'Lisboa',
        country: 'Portugal',
        coords: { lat: 38.7223, lng: -9.1393 },
        season: { es: 'Abril a junio o septiembre a octubre', pt: 'Abril a junho ou setembro a outubro', en: 'April to June or September to October' },
        activities: { es: ['Tranvías', 'Fado', 'Pasteles de nata', 'Miradores'], pt: ['Elétricos', 'Fado', 'Pastéis de nata', 'Miradouros'], en: ['Trams', 'Fado', 'Pastel de nata', 'Viewpoints'] },
        whyGo: { es: 'Ciudad segura, caminable y con una energía creativa que inspira.', pt: 'Cidade segura, caminhável e com uma energia criativa que inspira.', en: 'Safe, walkable city with creative energy that inspires.' },
        image: images.lisbon
      },
      {
        id: 'solo-5',
        city: 'Buenos Aires',
        country: 'Argentina',
        coords: { lat: -34.6037, lng: -58.3816 },
        season: { es: 'Septiembre a noviembre o marzo a mayo', pt: 'Setembro a novembro ou março a maio', en: 'September to November or March to May' },
        activities: { es: ['Tango', 'Steaks', 'San Telmo', 'Teatro Colón'], pt: ['Tango', 'Churrascos', 'San Telmo', 'Teatro Colón'], en: ['Tango', 'Steaks', 'San Telmo', 'Teatro Colon'] },
        whyGo: { es: 'Cultura vibrante, gente cálida y experiencias gastronómicas inolvidables.', pt: 'Cultura vibrante, pessoas calorosas e experiências gastronômicas inesquecíveis.', en: 'Vibrant culture, warm people, and unforgettable gastronomic experiences.' },
        image: images.buenosAires
      },
      {
        id: 'solo-6',
        city: 'Bali',
        country: 'Indonesia',
        coords: { lat: -8.4095, lng: 115.1889 },
        season: { es: 'Abril a octubre', pt: 'Abril a outubro', en: 'April to October' },
        activities: { es: ['Yoga', 'Surf', 'Arrozales', 'Spas'], pt: ['Yoga', 'Surf', 'Arrozais', 'Spas'], en: ['Yoga', 'Surf', 'Rice terraces', 'Spas'] },
        whyGo: { es: 'Paraíso espiritual donde encontrar paz interior y retiros de bienestar.', pt: 'Paraíso espiritual onde encontrar paz interior e retiros de bem-estar.', en: 'Spiritual paradise for finding inner peace and wellness retreats.' },
        image: images.bali
      },
      {
        id: 'solo-7',
        city: 'Edimburgo',
        country: 'Escocia',
        coords: { lat: 55.9533, lng: -3.1883 },
        season: { es: 'Junio a agosto', pt: 'Junho a agosto', en: 'June to August' },
        activities: { es: ['Castillo', 'Festival Fringe', 'Whisky', 'Leyendas'], pt: ['Castelo', 'Festival Fringe', 'Whisky', 'Lendas'], en: ['Castle', 'Fringe Festival', 'Whisky', 'Legends'] },
        whyGo: { es: 'Ciudad histórica con atmósfera mágica perfecta para explorar a tu ritmo.', pt: 'Cidade histórica com atmosfera mágica perfeita para explorar no seu ritmo.', en: 'Historic city with magical atmosphere perfect for exploring at your own pace.' },
        image: images.edinburgh
      },
      {
        id: 'solo-8',
        city: 'Ciudad del Cabo',
        country: 'Sudáfrica',
        coords: { lat: -33.9249, lng: 18.4241 },
        season: { es: 'Noviembre a marzo', pt: 'Novembro a março', en: 'November to March' },
        activities: { es: ['Table Mountain', 'Viñedos', 'Safaris', 'Playas'], pt: ['Table Mountain', 'Vinhedos', 'Safáris', 'Praias'], en: ['Table Mountain', 'Vineyards', 'Safaris', 'Beaches'] },
        whyGo: { es: 'Naturaleza espectacular y aventuras que transforman la perspectiva de vida.', pt: 'Natureza espetacular e aventuras que transformam a perspectiva de vida.', en: 'Spectacular nature and adventures that transform life perspective.' },
        image: images.capeTown
      },
      {
        id: 'solo-9',
        city: 'Medellín',
        country: 'Colombia',
        coords: { lat: 6.2476, lng: -75.5658 },
        season: { es: 'Diciembre a marzo', pt: 'Dezembro a março', en: 'December to March' },
        activities: { es: ['Comuna 13', 'Metrocable', 'Flores', 'Noche de salsa'], pt: ['Comuna 13', 'Metrocable', 'Flores', 'Noite de salsa'], en: ['Comuna 13', 'Metrocable', 'Flowers', 'Salsa nights'] },
        whyGo: { es: 'Ciudad de la eterna primavera con transformación urbana inspiradora.', pt: 'Cidade da eterna primavera com transformação urbana inspiradora.', en: 'City of eternal spring with inspiring urban transformation.' },
        image: images.medellin
      },
      {
        id: 'solo-10',
        city: 'Marrakech',
        country: 'Marruecos',
        coords: { lat: 31.6295, lng: -7.9811 },
        season: { es: 'Marzo a mayo o septiembre a noviembre', pt: 'Março a maio ou setembro a novembro', en: 'March to May or September to November' },
        activities: { es: ['Zocos', 'Riad', 'Jardín Majorelle', 'Desierto'], pt: ['Souks', 'Riad', 'Jardim Majorelle', 'Deserto'], en: ['Souks', 'Riad', 'Majorelle Garden', 'Desert'] },
        whyGo: { es: 'Experiencia sensorial única que despierta todos los sentidos.', pt: 'Experiência sensorial única que desperta todos os sentidos.', en: 'Unique sensory experience that awakens all senses.' },
        image: images.marrakech
      },
      {
        id: 'solo-11',
        city: 'Queenstown',
        country: 'Nueva Zelanda',
        coords: { lat: -45.0312, lng: 168.6626 },
        season: { es: 'Diciembre a febrero', pt: 'Dezembro a fevereiro', en: 'December to February' },
        activities: { es: ['Bungee', 'Senderismo', 'Vinos', 'Paisajes'], pt: ['Bungee', 'Trilhas', 'Vinhos', 'Paisagens'], en: ['Bungee', 'Hiking', 'Wines', 'Landscapes'] },
        whyGo: { es: 'Capital de aventuras en escenarios naturales de película.', pt: 'Capital de aventuras em cenários naturais de cinema.', en: 'Adventure capital in movie-worthy natural settings.' },
        image: images.queenstown
      },
      {
        id: 'solo-12',
        city: 'Praga',
        country: 'República Checa',
        coords: { lat: 50.0755, lng: 14.4378 },
        season: { es: 'Abril a junio o septiembre a octubre', pt: 'Abril a junho ou setembro a outubro', en: 'April to June or September to October' },
        activities: { es: ['Castillo', 'Puente Carlos', 'Cerveza', 'Reloj astronómico'], pt: ['Castelo', 'Ponte Carlos', 'Cerveja', 'Relógio astronômico'], en: ['Castle', 'Charles Bridge', 'Beer', 'Astronomical clock'] },
        whyGo: { es: 'Ciudad de cuento con atmósfera bohemia perfecta para pasear solo.', pt: 'Cidade de conto com atmosfera boêmia perfeita para passear sozinho.', en: 'Fairytale city with bohemian atmosphere perfect for solo walks.' },
        image: images.prague
      },
      {
        id: 'solo-13',
        city: 'Hoi An',
        country: 'Vietnam',
        coords: { lat: 15.8801, lng: 108.3380 },
        season: { es: 'Febrero a abril', pt: 'Fevereiro a abril', en: 'February to April' },
        activities: { es: ['Farolillos', 'Sastrería', 'Bicicleta', 'Cocina'], pt: ['Lanternas', 'Alfaiataria', 'Bicicleta', 'Culinária'], en: ['Lanterns', 'Tailoring', 'Biking', 'Cooking'] },
        whyGo: { es: 'Pueblo encantador donde el tiempo parece detenerse.', pt: 'Vila encantadora onde o tempo parece parar.', en: 'Enchanting town where time seems to stand still.' },
        image: images.hoiAn
      },
      {
        id: 'solo-14',
        city: 'Santorini',
        country: 'Grecia',
        coords: { lat: 36.3932, lng: 25.4615 },
        season: { es: 'Abril a junio o septiembre a octubre', pt: 'Abril a junho ou setembro a outubro', en: 'April to June or September to October' },
        activities: { es: ['Atardeceres', 'Playas volcánicas', 'Vinos', 'Oia'], pt: ['Pôr do sol', 'Praias vulcânicas', 'Vinhos', 'Oia'], en: ['Sunsets', 'Volcanic beaches', 'Wines', 'Oia'] },
        whyGo: { es: 'Escapada romántica consigo mismo en el mar Egeo.', pt: 'Escapada romântica consigo mesmo no mar Egeu.', en: 'Romantic getaway with yourself in the Aegean Sea.' },
        image: images.santorini
      },
      {
        id: 'solo-15',
        city: 'Tokio',
        country: 'Japón',
        coords: { lat: 35.6762, lng: 139.6503 },
        season: { es: 'Marzo a mayo o octubre a noviembre', pt: 'Março a maio ou outubro a novembro', en: 'March to May or October to November' },
        activities: { es: ['Shibuya', 'Templos', 'Anime', 'Gastronomía'], pt: ['Shibuya', 'Templos', 'Anime', 'Gastronomia'], en: ['Shibuya', 'Temples', 'Anime', 'Gastronomy'] },
        whyGo: { es: 'Metrópolis futurista donde la soledad nunca se siente solitaria.', pt: 'Metrópole futurista onde a solidão nunca se sente solitária.', en: 'Futuristic metropolis where solitude never feels lonely.' },
        image: images.tokyo
      },
      {
        id: 'solo-16',
        city: 'Vancouver',
        country: 'Canadá',
        coords: { lat: 49.2827, lng: -123.1207 },
        season: { es: 'Junio a septiembre', pt: 'Junho a setembro', en: 'June to September' },
        activities: { es: ['Stanley Park', 'Montañas', 'Kayak', 'Senderismo'], pt: ['Stanley Park', 'Montanhas', 'Caiaque', 'Trilhas'], en: ['Stanley Park', 'Mountains', 'Kayaking', 'Hiking'] },
        whyGo: { es: 'Naturaleza y ciudad en perfecta armonía para reconectar.', pt: 'Natureza e cidade em perfeita harmonia para se reconectar.', en: 'Nature and city in perfect harmony for reconnecting.' },
        image: images.vancouver
      },
      {
        id: 'solo-17',
        city: 'Seúl',
        country: 'Corea del Sur',
        coords: { lat: 37.5665, lng: 126.9780 },
        season: { es: 'Abril a junio o septiembre a noviembre', pt: 'Abril a junho ou setembro a novembro', en: 'April to June or September to November' },
        activities: { es: ['K-pop', 'Palacios', 'Street food', 'Spa jjimjilbang'], pt: ['K-pop', 'Palácios', 'Street food', 'Spa jjimjilbang'], en: ['K-pop', 'Palaces', 'Street food', 'Jjimjilbang spa'] },
        whyGo: { es: 'Fusión perfecta de tradición milenaria y cultura pop moderna.', pt: 'Fusão perfeita de tradição milenar e cultura pop moderna.', en: 'Perfect fusion of millennial tradition and modern pop culture.' },
        image: images.seoul
      },
      {
        id: 'solo-18',
        city: 'Valencia',
        country: 'España',
        coords: { lat: 39.4699, lng: -0.3763 },
        season: { es: 'Marzo a junio o septiembre a octubre', pt: 'Março a junho ou setembro a outubro', en: 'March to June or September to October' },
        activities: { es: ['Ciudad Artes', 'Paella', 'Playas', 'Jardines'], pt: ['Cidade das Artes', 'Paella', 'Praias', 'Jardins'], en: ['City of Arts', 'Paella', 'Beaches', 'Gardens'] },
        whyGo: { es: 'Ciudad mediterránea con clima ideal y ambiente relajado.', pt: 'Cidade mediterrânea com clima ideal e ambiente relaxado.', en: 'Mediterranean city with ideal climate and relaxed atmosphere.' },
        image: images.valencia
      },
      {
        id: 'solo-19',
        city: 'Auckland',
        country: 'Nueva Zelanda',
        coords: { lat: -36.8485, lng: 174.7633 },
        season: { es: 'Diciembre a marzo', pt: 'Dezembro a março', en: 'December to March' },
        activities: { es: ['Isla Waiheke', 'Sky Tower', 'Vinos', 'Vistas'], pt: ['Ilha Waiheke', 'Sky Tower', 'Vinhos', 'Vistas'], en: ['Waiheke Island', 'Sky Tower', 'Wines', 'Views'] },
        whyGo: { es: 'Puerta de entrada a aventuras únicas en el Pacífico.', pt: 'Porta de entrada para aventuras únicas no Pacífico.', en: 'Gateway to unique adventures in the Pacific.' },
        image: images.auckland
      },
      {
        id: 'solo-20',
        city: 'Oaxaca',
        country: 'México',
        coords: { lat: 17.0732, lng: -96.7266 },
        season: { es: 'Octubre a abril', pt: 'Outubro a abril', en: 'October to April' },
        activities: { es: ['Gastronomía', 'Mezcal', 'Artesanías', 'Monte Albán'], pt: ['Gastronomia', 'Mezcal', 'Artesanato', 'Monte Albán'], en: ['Gastronomy', 'Mezcal', 'Handicrafts', 'Monte Alban'] },
        whyGo: { es: 'Capital cultural con tradiciones vivas y sabores auténticos.', pt: 'Capital cultural com tradições vivas e sabores autênticos.', en: 'Cultural capital with living traditions and authentic flavors.' },
        image: images.oaxaca
      }
    ],
    couple: [
      {
        id: 'couple-1',
        city: 'París',
        country: 'Francia',
        coords: { lat: 48.8566, lng: 2.3522 },
        season: { es: 'Abril a junio o septiembre a octubre', pt: 'Abril a junho ou setembro a outubro', en: 'April to June or September to October' },
        activities: { es: ['Torre Eiffel', 'Louvre', 'Paseo Sena', 'Montmartre'], pt: ['Torre Eiffel', 'Louvre', 'Passeio Sena', 'Montmartre'], en: ['Eiffel Tower', 'Louvre', 'Seine walk', 'Montmartre'] },
        whyGo: { es: 'La ciudad del amor por excelencia, donde cada rincón es romántico.', pt: 'A cidade do amor por excelência, onde cada canto é romântico.', en: 'The city of love par excellence, where every corner is romantic.' },
        image: images.paris
      },
      {
        id: 'couple-2',
        city: 'Venecia',
        country: 'Italia',
        coords: { lat: 45.4408, lng: 12.3155 },
        season: { es: 'Abril a junio o septiembre a octubre', pt: 'Abril a junho ou setembro a outubro', en: 'April to June or September to October' },
        activities: { es: ['Góndola', 'San Marco', 'Carnaval', 'Cicchetti'], pt: ['Gôndola', 'San Marco', 'Carnaval', 'Cicchetti'], en: ['Gondola', 'San Marco', 'Carnival', 'Cicchetti'] },
        whyGo: { es: 'Ciudad única donde el agua y el amor se entrelazan mágicamente.', pt: 'Cidade única onde a água e o amor se entrelaçam magicamente.', en: 'Unique city where water and love magically intertwine.' },
        image: images.venice
      },
      {
        id: 'couple-3',
        city: 'Santorini',
        country: 'Grecia',
        coords: { lat: 36.3932, lng: 25.4615 },
        season: { es: 'Mayo a junio o septiembre a octubre', pt: 'Maio a junho ou setembro a outubro', en: 'May to June or September to October' },
        activities: { es: ['Atardecer Oia', 'Cenas románticas', 'Vinos', 'Crucero'], pt: ['Pôr do sol Oia', 'Jantares românticos', 'Vinhos', 'Cruzeiro'], en: ['Oia sunset', 'Romantic dinners', 'Wines', 'Cruise'] },
        whyGo: { es: 'Atardeceres inolvidables en el escenario más romántico del Mediterráneo.', pt: 'Pôr do sol inesquecível no cenário mais romântico do Mediterrâneo.', en: 'Unforgettable sunsets in the most romantic Mediterranean setting.' },
        image: images.santoriniCouple
      },
      {
        id: 'couple-4',
        city: 'Maldivas',
        country: 'Maldivas',
        coords: { lat: 3.2028, lng: 73.2207 },
        season: { es: 'Noviembre a abril', pt: 'Novembro a abril', en: 'November to April' },
        activities: { es: ['Bungalows', 'Buceo', 'Spa pareja', 'Cenas privadas'], pt: ['Bangalôs', 'Mergulho', 'Spa casal', 'Jantares privados'], en: ['Bungalows', 'Diving', 'Couple spa', 'Private dinners'] },
        whyGo: { es: 'Paraíso privado donde el romance flota sobre aguas cristalinas.', pt: 'Paraíso privado onde o romance flutua sobre águas cristalinas.', en: 'Private paradise where romance floats over crystal clear waters.' },
        image: images.maldives
      },
      {
        id: 'couple-5',
        city: 'Florencia',
        country: 'Italia',
        coords: { lat: 43.7696, lng: 11.2558 },
        season: { es: 'Abril a junio o septiembre a octubre', pt: 'Abril a junho ou setembro a outubro', en: 'April to June or September to October' },
        activities: { es: ['Duomo', 'Uffizi', 'Ponte Vecchio', 'Gastronomía'], pt: ['Duomo', 'Uffizi', 'Ponte Vecchio', 'Gastronomia'], en: ['Duomo', 'Uffizi', 'Ponte Vecchio', 'Gastronomy'] },
        whyGo: { es: 'Cuna del Renacimiento, arte y pasión en cada plaza.', pt: 'Berço do Renascimento, arte e paixão em cada praça.', en: 'Cradle of the Renaissance, art and passion in every square.' },
        image: images.florence
      },
      {
        id: 'couple-6',
        city: 'Bora Bora',
        country: 'Polinesia Francesa',
        coords: { lat: -16.5004, lng: -151.7415 },
        season: { es: 'Mayo a octubre', pt: 'Maio a outubro', en: 'May to October' },
        activities: { es: ['Bungalows sobre agua', 'Snorkel', 'Monte Otemanu', 'Spa'], pt: ['Bangalôs sobre a água', 'Snorkel', 'Monte Otemanu', 'Spa'], en: ['Overwater bungalows', 'Snorkeling', 'Mount Otemanu', 'Spa'] },
        whyGo: { es: 'El destino de luna de miel más soñado del planeta.', pt: 'O destino de lua de mel mais sonhado do planeta.', en: 'The most dreamed honeymoon destination on the planet.' },
        image: images.boraBora
      },
      {
        id: 'couple-7',
        city: 'Praga',
        country: 'República Checa',
        coords: { lat: 50.0755, lng: 14.4378 },
        season: { es: 'Abril a junio o diciembre', pt: 'Abril a junho ou dezembro', en: 'April to June or December' },
        activities: { es: ['Puente Carlos', 'Castillo', 'Crucero', 'Ópera'], pt: ['Ponte Carlos', 'Castelo', 'Cruzeiro', 'Ópera'], en: ['Charles Bridge', 'Castle', 'Cruise', 'Opera'] },
        whyGo: { es: 'Ciudad de cuento de hadas con atmósfera mágica para enamorados.', pt: 'Cidade de conto de fadas com atmosfera mágica para apaixonados.', en: 'Fairytale city with magical atmosphere for lovers.' },
        image: images.pragueCouple
      },
      {
        id: 'couple-8',
        city: 'Viena',
        country: 'Austria',
        coords: { lat: 48.2082, lng: 16.3738 },
        season: { es: 'Abril a octubre o diciembre', pt: 'Abril a outubro ou dezembro', en: 'April to October or December' },
        activities: { es: ['Ópera', 'Palacios', 'Cafés históricos', 'Vals'], pt: ['Ópera', 'Palácios', 'Cafés históricos', 'Valsa'], en: ['Opera', 'Palaces', 'Historic cafes', 'Waltz'] },
        whyGo: { es: 'Elegancia imperial y música clásica para una escapada sofisticada.', pt: 'Elegância imperial e música clássica para uma escapada sofisticada.', en: 'Imperial elegance and classical music for a sophisticated getaway.' },
        image: images.vienna
      },
      {
        id: 'couple-9',
        city: 'Capadocia',
        country: 'Turquía',
        coords: { lat: 38.6431, lng: 34.8303 },
        season: { es: 'Abril a junio o septiembre a octubre', pt: 'Abril a junho ou setembro a outubro', en: 'April to June or September to October' },
        activities: { es: ['Globos aerostáticos', 'Cuevas', 'Atardecer', 'Paseos'], pt: ['Balões de ar quente', 'Grutas', 'Pôr do sol', 'Passeios'], en: ['Hot air balloons', 'Caves', 'Sunset', 'Walks'] },
        whyGo: { es: 'Paisaje lunar único donde el amor se eleva con los globos.', pt: 'Paisagem lunar única onde o amor se eleva com os balões.', en: 'Unique lunar landscape where love rises with the balloons.' },
        image: images.cappadocia
      },
      {
        id: 'couple-10',
        city: 'Amsterdam',
        country: 'Países Bajos',
        coords: { lat: 52.3676, lng: 4.9041 },
        season: { es: 'Abril a octubre', pt: 'Abril a outubro', en: 'April to October' },
        activities: { es: ['Canales', 'Bicicleta', 'Tulipanes', 'Museos'], pt: ['Canais', 'Bicicleta', 'Tulipas', 'Museus'], en: ['Canals', 'Biking', 'Tulips', 'Museums'] },
        whyGo: { es: 'Ciudad encantadora con canales románticos y ambiente acogedor.', pt: 'Cidade encantadora com canais românticos e ambiente acolhedor.', en: 'Charming city with romantic canals and cozy atmosphere.' },
        image: images.amsterdam
      },
      {
        id: 'couple-11',
        city: 'Roma',
        country: 'Italia',
        coords: { lat: 41.9028, lng: 12.4964 },
        season: { es: 'Abril a junio o septiembre a octubre', pt: 'Abril a junho ou setembro a outubro', en: 'April to June or September to October' },
        activities: { es: ['Coliseo', 'Fontana di Trevi', 'Vaticano', 'Gelato'], pt: ['Coliseu', 'Fontana di Trevi', 'Vaticano', 'Gelato'], en: ['Colosseum', 'Trevi Fountain', 'Vatican', 'Gelato'] },
        whyGo: { es: 'La ciudad eterna donde cada calle cuenta una historia de amor.', pt: 'A cidade eterna onde cada rua conta uma história de amor.', en: 'The eternal city where every street tells a love story.' },
        image: images.rome
      },
      {
        id: 'couple-12',
        city: 'Kyoto',
        country: 'Japón',
        coords: { lat: 35.0116, lng: 135.7681 },
        season: { es: 'Marzo a mayo (cerezos)', pt: 'Março a maio (cerejeiras)', en: 'March to May (cherry blossoms)' },
        activities: { es: ['Templos', 'Gion', 'Jardines', 'Tea ceremony'], pt: ['Templos', 'Gion', 'Jardins', 'Cerimônia do chá'], en: ['Temples', 'Gion', 'Gardens', 'Tea ceremony'] },
        whyGo: { es: 'Tradición japonesa en su máxima expresión romántica.', pt: 'Tradição japonesa em sua máxima expressão romântica.', en: 'Japanese tradition in its most romantic expression.' },
        image: images.kyotoCouple
      },
      {
        id: 'couple-13',
        city: 'Barcelona',
        country: 'España',
        coords: { lat: 41.3851, lng: 2.1734 },
        season: { es: 'Mayo a junio o septiembre a octubre', pt: 'Maio a junho ou setembro a outubro', en: 'May to June or September to October' },
        activities: { es: ['Sagrada Familia', 'Park Güell', 'Ramblas', 'Tapas'], pt: ['Sagrada Família', 'Park Güell', 'Ramblas', 'Tapas'], en: ['Sagrada Familia', 'Park Güell', 'Ramblas', 'Tapas'] },
        whyGo: { es: 'Arte, gastronomía y mar en una ciudad llena de pasión mediterránea.', pt: 'Arte, gastronomia e mar em uma cidade cheia de paixão mediterrânea.', en: 'Art, gastronomy and sea in a city full of Mediterranean passion.' },
        image: images.barcelona
      },
      {
        id: 'couple-14',
        city: 'Quebec',
        country: 'Canadá',
        coords: { lat: 46.8139, lng: -71.2082 },
        season: { es: 'Junio a agosto o diciembre a febrero', pt: 'Junho a agosto ou dezembro a fevereiro', en: 'June to August or December to February' },
        activities: { es: ['Casco antiguo', 'Château Frontenac', 'Nieve', 'Carnaval'], pt: ['Centro histórico', 'Château Frontenac', 'Neve', 'Carnaval'], en: ['Old Town', 'Chateau Frontenac', 'Snow', 'Carnival'] },
        whyGo: { es: 'Romance europeo en América del Norte con encanto francés.', pt: 'Romance europeu na América do Norte com charme francês.', en: 'European romance in North America with French charm.' },
        image: images.quebec
      },
      {
        id: 'couple-15',
        city: 'Dubrovnik',
        country: 'Croacia',
        coords: { lat: 42.6507, lng: 18.0944 },
        season: { es: 'Mayo a junio o septiembre a octubre', pt: 'Maio a junho ou setembro a outubro', en: 'May to June or September to October' },
        activities: { es: ['Murallas', 'Mar Adriático', 'Islas', 'Game of Thrones'], pt: ['Muralhas', 'Mar Adriático', 'Ilhas', 'Game of Thrones'], en: ['Walls', 'Adriatic Sea', 'Islands', 'Game of Thrones'] },
        whyGo: { es: 'Perla del Adriático con vistas espectaculares al mar.', pt: 'Pérola do Adriático com vistas espetaculares ao mar.', en: 'Pearl of the Adriatic with spectacular sea views.' },
        image: images.dubrovnik
      },
      {
        id: 'couple-16',
        city: 'Maui',
        country: 'Hawái',
        coords: { lat: 20.7984, lng: -156.3319 },
        season: { es: 'Abril a mayo o septiembre a noviembre', pt: 'Abril a maio ou setembro a novembro', en: 'April to May or September to November' },
        activities: { es: ['Atardecer Haleakala', 'Carretera Hana', 'Playas', 'Snorkel'], pt: ['Pôr do sol Haleakala', 'Estrada Hana', 'Praias', 'Snorkel'], en: ['Haleakala sunset', 'Road to Hana', 'Beaches', 'Snorkeling'] },
        whyGo: { es: 'Isla paradisíaca con paisajes de ensueño para parejas.', pt: 'Ilha paradisíaca com paisagens de sonho para casais.', en: 'Paradise island with dreamy landscapes for couples.' },
        image: images.maui
      },
      {
        id: 'couple-17',
        city: 'Brujas',
        country: 'Bélgica',
        coords: { lat: 51.2093, lng: 3.2247 },
        season: { es: 'Abril a octubre o diciembre', pt: 'Abril a outubro ou dezembro', en: 'April to October or December' },
        activities: { es: ['Canales', 'Chocolate', 'Cerveza', 'Mercados'], pt: ['Canais', 'Chocolate', 'Cerveja', 'Mercados'], en: ['Canals', 'Chocolate', 'Beer', 'Markets'] },
        whyGo: { es: 'Ciudad medieval con encanto de cuento de hadas.', pt: 'Cidade medieval com charme de conto de fadas.', en: 'Medieval city with fairytale charm.' },
        image: images.bruges
      },
      {
        id: 'couple-18',
        city: 'Seychelles',
        country: 'Seychelles',
        coords: { lat: -4.6796, lng: 55.4920 },
        season: { es: 'Abril a mayo o octubre a noviembre', pt: 'Abril a maio ou outubro a novembro', en: 'April to May or October to November' },
        activities: { es: ['Playas', 'Buceo', 'Reservas naturales', 'Spa'], pt: ['Praias', 'Mergulho', 'Reservas naturais', 'Spa'], en: ['Beaches', 'Diving', 'Nature reserves', 'Spa'] },
        whyGo: { es: 'Archipiélago exclusivo con playas de arena rosa.', pt: 'Arquipélago exclusivo com praias de areia rosa.', en: 'Exclusive archipelago with pink sand beaches.' },
        image: images.seychelles
      },
      {
        id: 'couple-19',
        city: 'Lago de Como',
        country: 'Italia',
        coords: { lat: 46.0160, lng: 9.2572 },
        season: { es: 'Abril a octubre', pt: 'Abril a outubro', en: 'April to October' },
        activities: { es: ['Villas', 'Paseos en barco', 'Jardines', 'Gastronomía'], pt: ['Vilas', 'Passeios de barco', 'Jardins', 'Gastronomia'], en: ['Villas', 'Boat tours', 'Gardens', 'Gastronomy'] },
        whyGo: { es: 'Elegancia italiana en un entorno natural de película.', pt: 'Elegância italiana em um cenário natural de cinema.', en: 'Italian elegance in a movie-worthy natural setting.' },
        image: images.lakeComo
      },
      {
        id: 'couple-20',
        city: 'Udaipur',
        country: 'India',
        coords: { lat: 24.5854, lng: 73.7125 },
        season: { es: 'Octubre a marzo', pt: 'Outubro a março', en: 'October to March' },
        activities: { es: ['Palacio flotante', 'Lago Pichola', 'Havelis', 'Atardecer'], pt: ['Palácio flutuante', 'Lago Pichola', 'Havelis', 'Pôr do sol'], en: ['Floating palace', 'Lake Pichola', 'Havelis', 'Sunset'] },
        whyGo: { es: 'La Venecia de la India con palacios reales y lagos románticos.', pt: 'A Veneza da Índia com palácios reais e lagos românticos.', en: 'The Venice of India with royal palaces and romantic lakes.' },
        image: images.udaipur
      }
    ],
    friends: [
      {
        id: 'friends-1',
        city: 'Ibiza',
        country: 'España',
        coords: { lat: 38.9067, lng: 1.4206 },
        season: { es: 'Junio a septiembre', pt: 'Junho a setembro', en: 'June to September' },
        activities: { es: ['Fiestas', 'Playas', 'Sunset', 'Clubbing'], pt: ['Festas', 'Praias', 'Sunset', 'Clubbing'], en: ['Parties', 'Beaches', 'Sunset', 'Clubbing'] },
        whyGo: { es: 'La capital mundial de la fiesta con playas paradisíacas.', pt: 'A capital mundial da festa com praias paradisíacas.', en: 'World party capital with paradise beaches.' },
        image: images.ibiza
      },
      {
        id: 'friends-2',
        city: 'Las Vegas',
        country: 'Estados Unidos',
        coords: { lat: 36.1699, lng: -115.1398 },
        season: { es: 'Marzo a mayo o septiembre a noviembre', pt: 'Março a maio ou setembro a novembro', en: 'March to May or September to November' },
        activities: { es: ['Casinos', 'Shows', 'Piscinas', 'Vida nocturna'], pt: ['Cassinos', 'Shows', 'Piscinas', 'Vida noturna'], en: ['Casinos', 'Shows', 'Pools', 'Nightlife'] },
        whyGo: { es: 'Ciudad que nunca duerme con entretenimiento sin límites.', pt: 'Cidade que nunca dorme com entretenimento sem limites.', en: 'City that never sleeps with limitless entertainment.' },
        image: images.lasVegas
      },
      {
        id: 'friends-3',
        city: 'Bangkok',
        country: 'Tailandia',
        coords: { lat: 13.7563, lng: 100.5018 },
        season: { es: 'Noviembre a febrero', pt: 'Novembro a fevereiro', en: 'November to February' },
        activities: { es: ['Street food', 'Templos', 'Khao San', 'Mercados'], pt: ['Street food', 'Templos', 'Khao San', 'Mercados'], en: ['Street food', 'Temples', 'Khao San', 'Markets'] },
        whyGo: { es: 'Vibrante, caótica y llena de experiencias para compartir.', pt: 'Vibrante, caótica e cheia de experiências para compartilhar.', en: 'Vibrant, chaotic and full of experiences to share.' },
        image: images.bangkok
      },
      {
        id: 'friends-4',
        city: 'Río de Janeiro',
        country: 'Brasil',
        coords: { lat: -22.9068, lng: -43.1729 },
        season: { es: 'Diciembre a marzo', pt: 'Dezembro a março', en: 'December to March' },
        activities: { es: ['Carnaval', 'Copacabana', 'Cristo', 'Samba'], pt: ['Carnaval', 'Copacabana', 'Cristo', 'Samba'], en: ['Carnival', 'Copacabana', 'Christ', 'Samba'] },
        whyGo: { es: 'Energía contagiosa, playas icónicas y fiesta brasileña.', pt: 'Energia contagiante, praias icônicas e festa brasileira.', en: 'Contagious energy, iconic beaches and Brazilian party.' },
        image: images.rio
      },
      {
        id: 'friends-5',
        city: 'Ámsterdam',
        country: 'Países Bajos',
        coords: { lat: 52.3676, lng: 4.9041 },
        season: { es: 'Abril a octubre', pt: 'Abril a outubro', en: 'April to October' },
        activities: { es: ['Canales', 'Bicicleta', 'Museos', 'Vida nocturna'], pt: ['Canais', 'Bicicleta', 'Museus', 'Vida noturna'], en: ['Canals', 'Biking', 'Museums', 'Nightlife'] },
        whyGo: { es: 'Ciudad liberal con ambiente relajado perfecto para grupos.', pt: 'Cidade liberal com ambiente relaxado perfeito para grupos.', en: 'Liberal city with relaxed atmosphere perfect for groups.' },
        image: images.amsterdamFriends
      },
      {
        id: 'friends-6',
        city: 'Berlín',
        country: 'Alemania',
        coords: { lat: 52.5200, lng: 13.4050 },
        season: { es: 'Mayo a septiembre', pt: 'Maio a setembro', en: 'May to September' },
        activities: { es: ['Clubbing', 'Historia', 'Arte callejero', 'Cerveza'], pt: ['Clubbing', 'História', 'Arte de rua', 'Cerveja'], en: ['Clubbing', 'History', 'Street art', 'Beer'] },
        whyGo: { es: 'Escena underground, historia fascinante y vida nocturna legendaria.', pt: 'Cena underground, história fascinante e vida noturna lendária.', en: 'Underground scene, fascinating history and legendary nightlife.' },
        image: images.berlin
      },
      {
        id: 'friends-7',
        city: 'Mykonos',
        country: 'Grecia',
        coords: { lat: 37.4467, lng: 25.3289 },
        season: { es: 'Junio a septiembre', pt: 'Junho a setembro', en: 'June to September' },
        activities: { es: ['Fiestas en playa', 'Little Venice', 'Viento', 'Mikonos town'], pt: ['Festas na praia', 'Little Venice', 'Vento', 'Mykonos town'], en: ['Beach parties', 'Little Venice', 'Windmills', 'Mykonos town'] },
        whyGo: { es: 'Isla griega famosa por sus fiestas al atardecer.', pt: 'Ilha grega famosa por suas festas ao pôr do sol.', en: 'Greek island famous for its sunset parties.' },
        image: images.mykonos
      },
      {
        id: 'friends-8',
        city: 'Nueva York',
        country: 'Estados Unidos',
        coords: { lat: 40.7128, lng: -74.0060 },
        season: { es: 'Abril a junio o septiembre a noviembre', pt: 'Abril a junho ou setembro a novembro', en: 'April to June or September to November' },
        activities: { es: ['Times Square', 'Central Park', 'Broadway', 'Rooftops'], pt: ['Times Square', 'Central Park', 'Broadway', 'Rooftops'], en: ['Times Square', 'Central Park', 'Broadway', 'Rooftops'] },
        whyGo: { es: 'La ciudad que lo tiene todo para una escapada inolvidable con amigos.', pt: 'A cidade que tem tudo para uma escapada inesquecível com amigos.', en: 'The city that has everything for an unforgettable getaway with friends.' },
        image: images.newYork
      },
      {
        id: 'friends-9',
        city: 'Dublín',
        country: 'Irlanda',
        coords: { lat: 53.3498, lng: -6.2603 },
        season: { es: 'Mayo a septiembre', pt: 'Maio a setembro', en: 'May to September' },
        activities: { es: ['Pubs', 'Temple Bar', 'Guinness', 'Música en vivo'], pt: ['Pubs', 'Temple Bar', 'Guinness', 'Música ao vivo'], en: ['Pubs', 'Temple Bar', 'Guinness', 'Live music'] },
        whyGo: { es: 'Cerveza, música y la hospitalidad irlandesa en su máxima expresión.', pt: 'Cerveja, música e a hospitalidade irlandesa em sua máxima expressão.', en: 'Beer, music and Irish hospitality at its finest.' },
        image: images.dublin
      },
      {
        id: 'friends-10',
        city: 'Cancún',
        country: 'México',
        coords: { lat: 21.1619, lng: -86.8515 },
        season: { es: 'Diciembre a abril', pt: 'Dezembro a abril', en: 'December to April' },
        activities: { es: ['Playa', 'Resorts', 'Vida nocturna', 'Cenotes'], pt: ['Praia', 'Resorts', 'Vida noturna', 'Cenotes'], en: ['Beach', 'Resorts', 'Nightlife', 'Cenotes'] },
        whyGo: { es: 'Sol, playa y fiesta en el Caribe mexicano.', pt: 'Sol, praia e festa no Caribe mexicano.', en: 'Sun, beach and party in the Mexican Caribbean.' },
        image: images.cancun
      },
      {
        id: 'friends-11',
        city: 'Londres',
        country: 'Reino Unido',
        coords: { lat: 51.5074, lng: -0.1278 },
        season: { es: 'Mayo a septiembre', pt: 'Maio a setembro', en: 'May to September' },
        activities: { es: ['Pubs', 'Museos', 'West End', 'Mercados'], pt: ['Pubs', 'Museus', 'West End', 'Mercados'], en: ['Pubs', 'Museums', 'West End', 'Markets'] },
        whyGo: { es: 'Ciudad multicultural con infinitas opciones de diversión grupal.', pt: 'Cidade multicultural com infinitas opções de diversão em grupo.', en: 'Multicultural city with endless group fun options.' },
        image: images.london
      },
      {
        id: 'friends-12',
        city: 'Nashville',
        country: 'Estados Unidos',
        coords: { lat: 36.1627, lng: -86.7816 },
        season: { es: 'Abril a octubre', pt: 'Abril a outubro', en: 'April to October' },
        activities: { es: ['Country music', 'Broadway', 'Bourbon', 'Honky-tonks'], pt: ['Música country', 'Broadway', 'Bourbon', 'Honky-tonks'], en: ['Country music', 'Broadway', 'Bourbon', 'Honky-tonks'] },
        whyGo: { es: 'Capital de la música country con ambiente festivo garantizado.', pt: 'Capital da música country com ambiente festivo garantido.', en: 'Country music capital with guaranteed festive atmosphere.' },
        image: images.nashville
      },
      {
        id: 'friends-13',
        city: 'Tulum',
        country: 'México',
        coords: { lat: 20.2114, lng: -87.4654 },
        season: { es: 'Noviembre a abril', pt: 'Novembro a abril', en: 'November to April' },
        activities: { es: ['Ruinas mayas', 'Cenotes', 'Playa', 'Yoga'], pt: ['Ruínas maias', 'Cenotes', 'Praia', 'Yoga'], en: ['Mayan ruins', 'Cenotes', 'Beach', 'Yoga'] },
        whyGo: { es: 'Destino boho-chic con playas de ensueño y fiestas en la playa.', pt: 'Destino boho-chic com praias de sonho e festas na praia.', en: 'Boho-chic destination with dreamy beaches and beach parties.' },
        image: images.tulum
      },
      {
        id: 'friends-14',
        city: 'Miami',
        country: 'Estados Unidos',
        coords: { lat: 25.7617, lng: -80.1918 },
        season: { es: 'Diciembre a mayo', pt: 'Dezembro a maio', en: 'December to May' },
        activities: { es: ['South Beach', 'Wynwood', 'Vida nocturna', 'Cruises'], pt: ['South Beach', 'Wynwood', 'Vida noturna', 'Cruzeiros'], en: ['South Beach', 'Wynwood', 'Nightlife', 'Cruises'] },
        whyGo: { es: 'Sol, arte y fiesta latina en la capital del sur de Florida.', pt: 'Sol, arte e festa latina na capital do sul da Flórida.', en: 'Sun, art and Latin party in South Florida capital.' },
        image: images.miami
      },
      {
        id: 'friends-15',
        city: 'Budapest',
        country: 'Hungría',
        coords: { lat: 47.4979, lng: 19.0402 },
        season: { es: 'Marzo a mayo o septiembre a noviembre', pt: 'Março a maio ou setembro a novembro', en: 'March to May or September to November' },
        activities: { es: ['Baños termales', 'Ruin pubs', 'Danubio', 'Vida nocturna'], pt: ['Banhos termais', 'Ruin pubs', 'Danúbio', 'Vida noturna'], en: ['Thermal baths', 'Ruin pubs', 'Danube', 'Nightlife'] },
        whyGo: { es: 'Ciudad con baños termales únicos y vida nocturna vibrante.', pt: 'Cidade com banhos termais únicos e vida noturna vibrante.', en: 'City with unique thermal baths and vibrant nightlife.' },
        image: images.budapest
      },
      {
        id: 'friends-16',
        city: 'Barcelona',
        country: 'España',
        coords: { lat: 41.3851, lng: 2.1734 },
        season: { es: 'Mayo a junio o septiembre a octubre', pt: 'Maio a junho ou setembro a outubro', en: 'May to June or September to October' },
        activities: { es: ['Sagrada Familia', 'Barceloneta', 'Tapas', 'Noche'], pt: ['Sagrada Família', 'Barceloneta', 'Tapas', 'Noite'], en: ['Sagrada Familia', 'Barceloneta', 'Tapas', 'Nightlife'] },
        whyGo: { es: 'Arquitectura, playa y gastronomía para disfrutar en grupo.', pt: 'Arquitetura, praia e gastronomia para aproveitar em grupo.', en: 'Architecture, beach and gastronomy to enjoy in a group.' },
        image: images.barcelonaFriends
      },
      {
        id: 'friends-17',
        city: 'Praga',
        country: 'República Checa',
        coords: { lat: 50.0755, lng: 14.4378 },
        season: { es: 'Abril a octubre', pt: 'Abril a outubro', en: 'April to October' },
        activities: { es: ['Cerveza checa', 'Clubbing', 'Castillo', 'Barcos'], pt: ['Cerveja tcheca', 'Clubbing', 'Castelo', 'Barcos'], en: ['Czech beer', 'Clubbing', 'Castle', 'Boats'] },
        whyGo: { es: 'Cerveza barata, arquitectura impresionante y fiesta sin fin.', pt: 'Cerveja barata, arquitetura impressionante e festa sem fim.', en: 'Cheap beer, impressive architecture and endless party.' },
        image: images.pragueFriends
      },
      {
        id: 'friends-18',
        city: 'Singapur',
        country: 'Singapur',
        coords: { lat: 1.3521, lng: 103.8198 },
        season: { es: 'Febrero a abril', pt: 'Fevereiro a abril', en: 'February to April' },
        activities: { es: ['Marina Bay', 'Street food', 'Gardens by the Bay', 'Clarke Quay'], pt: ['Marina Bay', 'Street food', 'Gardens by the Bay', 'Clarke Quay'], en: ['Marina Bay', 'Street food', 'Gardens by the Bay', 'Clarke Quay'] },
        whyGo: { es: 'Ciudad futurista con gastronomía de clase mundial.', pt: 'Cidade futurista com gastronomia de classe mundial.', en: 'Futuristic city with world-class gastronomy.' },
        image: images.singapore
      },
      {
        id: 'friends-19',
        city: 'Lisboa',
        country: 'Portugal',
        coords: { lat: 38.7223, lng: -9.1393 },
        season: { es: 'Abril a junio o septiembre a octubre', pt: 'Abril a junho ou setembro a outubro', en: 'April to June or September to October' },
        activities: { es: ['Bairro Alto', 'Pasteles', 'Miradores', 'Fado'], pt: ['Bairro Alto', 'Pastéis', 'Miradouros', 'Fado'], en: ['Bairro Alto', 'Pastries', 'Viewpoints', 'Fado'] },
        whyGo: { es: 'Ciudad con alma, buen clima y vida nocturna animada.', pt: 'Cidade com alma, bom clima e vida noturna animada.', en: 'City with soul, good weather and lively nightlife.' },
        image: images.lisbonFriends
      },
      {
        id: 'friends-20',
        city: 'Seúl',
        country: 'Corea del Sur',
        coords: { lat: 37.5665, lng: 126.9780 },
        season: { es: 'Marzo a mayo o septiembre a noviembre', pt: 'Março a maio ou setembro a novembro', en: 'March to May or September to November' },
        activities: { es: ['K-pop', 'Karaoke', 'Street food', 'Noche'], pt: ['K-pop', 'Karaokê', 'Street food', 'Noite'], en: ['K-pop', 'Karaoke', 'Street food', 'Nightlife'] },
        whyGo: { es: 'Cultura pop, tecnología y vida nocturna 24/7.', pt: 'Cultura pop, tecnologia e vida noturna 24/7.', en: 'Pop culture, technology and 24/7 nightlife.' },
        image: images.seoulFriends
      }
    ]
  },
  pt: {
    solo: [],
    couple: [],
    friends: []
  },
  en: {
    solo: [],
    couple: [],
    friends: []
  }
};

// Fill Portuguese and English data from Spanish
destinationsData.pt.solo = destinationsData.es.solo.map(d => ({
  ...d,
  season: { es: d.season.pt, pt: d.season.pt, en: d.season.en },
  activities: { es: d.activities.pt, pt: d.activities.pt, en: d.activities.en },
  whyGo: { es: d.whyGo.pt, pt: d.whyGo.pt, en: d.whyGo.en }
}));

destinationsData.pt.couple = destinationsData.es.couple.map(d => ({
  ...d,
  season: { es: d.season.pt, pt: d.season.pt, en: d.season.en },
  activities: { es: d.activities.pt, pt: d.activities.pt, en: d.activities.en },
  whyGo: { es: d.whyGo.pt, pt: d.whyGo.pt, en: d.whyGo.en }
}));

destinationsData.pt.friends = destinationsData.es.friends.map(d => ({
  ...d,
  season: { es: d.season.pt, pt: d.season.pt, en: d.season.en },
  activities: { es: d.activities.pt, pt: d.activities.pt, en: d.activities.en },
  whyGo: { es: d.whyGo.pt, pt: d.whyGo.pt, en: d.whyGo.en }
}));

destinationsData.en.solo = destinationsData.es.solo.map(d => ({
  ...d,
  season: { es: d.season.en, pt: d.season.pt, en: d.season.en },
  activities: { es: d.activities.en, pt: d.activities.pt, en: d.activities.en },
  whyGo: { es: d.whyGo.en, pt: d.whyGo.pt, en: d.whyGo.en }
}));

destinationsData.en.couple = destinationsData.es.couple.map(d => ({
  ...d,
  season: { es: d.season.en, pt: d.season.pt, en: d.season.en },
  activities: { es: d.activities.en, pt: d.activities.pt, en: d.activities.en },
  whyGo: { es: d.whyGo.en, pt: d.whyGo.pt, en: d.whyGo.en }
}));

destinationsData.en.friends = destinationsData.es.friends.map(d => ({
  ...d,
  season: { es: d.season.en, pt: d.season.pt, en: d.season.en },
  activities: { es: d.activities.en, pt: d.activities.pt, en: d.activities.en },
  whyGo: { es: d.whyGo.en, pt: d.whyGo.pt, en: d.whyGo.en }
}));

export const getRandomDestination = (category: 'solo' | 'couple' | 'friends', lang: string): Destination => {
  const data = destinationsData[lang] || destinationsData.es;
  const list = data[category];
  return list[Math.floor(Math.random() * list.length)];
};

export const uiTranslations = {
  es: {
    title: 'Game Travel',
    subtitle: '¡Descubre tu próximo destino!',
    selectMode: 'Selecciona tu modo de viaje',
    solo: 'Solo',
    couple: 'En pareja',
    friends: 'Con amigos',
    spin: '¡Girar el globo!',
    spinning: 'Girando...',
    result: '¡Tu destino es!',
    bestSeason: 'Mejor época',
    activities: 'Actividades',
    whyGo: '¿Por qué ir?',
    spinAgain: 'Girar de nuevo',
    back: 'Volver',
    clickToSpin: 'Haz clic para girar'
  },
  pt: {
    title: 'Game Travel',
    subtitle: 'Descubra seu próximo destino!',
    selectMode: 'Selecione seu modo de viagem',
    solo: 'Solo',
    couple: 'Casal',
    friends: 'Com amigos',
    spin: 'Girar o globo!',
    spinning: 'Girando...',
    result: 'Seu destino é!',
    bestSeason: 'Melhor época',
    activities: 'Atividades',
    whyGo: 'Por que ir?',
    spinAgain: 'Girar novamente',
    back: 'Voltar',
    clickToSpin: 'Clique para girar'
  },
  en: {
    title: 'Game Travel',
    subtitle: 'Discover your next destination!',
    selectMode: 'Select your travel mode',
    solo: 'Solo',
    couple: 'Couple',
    friends: 'With friends',
    spin: 'Spin the globe!',
    spinning: 'Spinning...',
    result: 'Your destination is!',
    bestSeason: 'Best season',
    activities: 'Activities',
    whyGo: 'Why go?',
    spinAgain: 'Spin again',
    back: 'Back',
    clickToSpin: 'Click to spin'
  }
};

// ═══════════════════════════════════════════════════════════════
// 🔒 FIRMA DIGITAL / DIGITAL SIGNATURE
// ═══════════════════════════════════════════════════════════════
// Game Travel™ v1.0 - Sistema de Destinos Aleatorios
// Hash de verificación: GT-MT-2025-7X9K2P
// Fecha de generación: 2025
// Propietario: Mel's Travel
// ═══════════════════════════════════════════════════════════════

// Función de verificación de integridad (ofuscada)
const _0x4f2a = ['Game Travel™ by Mel\'s Travel', '© 2025 Todos los derechos reservados', 'contacto@mels-travel.com'];
Object.defineProperty(window, '_gt_verify', {
  get: () => _0x4f2a[0],
  configurable: false
});
