/**
 * ============================================================
 *  CONTEUDO: PUNTA CANA
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/punta-cana/index.ts
 *  DESTINO: Punta Cana, Republica Dominicana
 *  SLUG: punta-cana
 *  URL: /#/destino/punta-cana
 *
 *  MAPA DE EDICAO:
 *  +------------------+----------------------------+----------+
 *  |  CAMPO           | DESCRICAO                  | LINHA ~  |
 *  +------------------+----------------------------+----------+
 *  |  visibility.*    | Ativar/desativar blocos    | ~20      |
 *  |  es.*            | Textos em Espanhol         | ~32      |
 *  |  pt.*            | Textos em Portugues        | ~48      |
 *  |  en.*            | Textos em Ingles           | ~65      |
 *  +------------------+----------------------------+----------+
 *
 *  PARA DESATIVAR UM BLOCO:
 *  Mude "true" para "false" na secao visibility abaixo.
 *  Exemplo: showBlogComingSoon: false
 * ============================================================
 */

import type { DestinationContent } from '../types';

const content: DestinationContent = {
  slug: 'punta-cana',

  // CONTROLES DE VISIBILIDADE - mude true para false para ocultar
  visibility: {
    showIntroSection: true,
    showPreparationNotice: false,
    showBlogComingSoon: false,
    showDescription: true,
    showTips: true,
    showBestSeason: true,
  },

  // ESPANHOL
  es: {
    pageTitle: 'Punta Cana 2025 | Mel\'s Travel',
    subtitle: 'El paraiso caribeno te espera',
    introText:
      'Punta Cana es el destino caribeno por excelencia. Con sus playas de arena blanca, aguas cristalinas en tonos turquesa y resorts all-inclusive de clase mundial, es el lugar perfecto para desconectar y crear recuerdos inolvidables. Desde la iconica Bavaro Beach hasta la exclusiva Cap Cana, cada rincon ofrece una experiencia unica.',
    description:
      'Ubicada en el extremo oriental de la Republica Dominicana, Punta Cana alberga mas de 50 kilometros de costa virgen. La region combina naturaleza exuberante con una infraestructura turistica de primer nivel.\n\nEntre las actividades imperdibles se encuentran: nadar en las piscinas naturales de Isla Saona, explorar los cenotes de Hoyo Claro, pasear en buggy por el campo dominicano, y bucear en el Parque Nacional del Este.',
    tips: [
      'La mejor zona para alojarse es Bavaro, con acceso directo a las playas mas tranquilas.',
      'Lleva efectivo en dolares; muchos locales prefieren USD al peso dominicano.',
      'Reserva la excursion a Isla Saona con al menos 48 horas de anticipacion.',
      'El clima es humedo todo el ano; lleva ropa ligera de algodon o lino.',
      'El agua de grifo no es potable; usa solo agua embotellada.',
    ],
    bestSeason: 'Diciembre a abril (temporada seca). Temperaturas entre 25-29 C. Evitar septiembre y octubre (temporada de huracanes).',
    metaDescription:
      'Descubre Punta Cana 2025 con Mel\'s Travel. Playas de arena blanca, resorts all-inclusive, excursiones a Isla Saona y mas. Cotiza tu viaje al Caribe.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Punta Cana 2025 | Mel\'s Travel',
    subtitle: 'O paraiso caribenho te espera',
    introText:
      'Punta Cana e o destino caribenho por excelencia. Com suas praias de areia branca, aguas cristalinas em tons de turquesa e resorts all-inclusive de classe mundial, e o lugar perfeito para desconectar e criar memorias inesqueciveis. Desde a iconica Bavaro Beach ate a exclusiva Cap Cana, cada canto oferece uma experiencia unica.',
    description:
      'Localizada na extremidade oriental da Republica Dominicana, Punta Cana abriga mais de 50 quilometros de costa virgem. A regiao combina natureza exuberante com uma infraestrutura turistica de primeiro nivel.\n\nEntre as atividades imperdiveis estao: nadar nas piscinas naturais da Ilha Saona, explorar os cenotes de Hoyo Claro, passear de buggy pelo campo dominicano e mergulhar no Parque Nacional del Este.',
    tips: [
      'A melhor zona para se hospedar e Bavaro, com acesso direto as praias mais tranquilas.',
      'Leve dinheiro em dolares; muitos locais preferem USD ao peso dominicano.',
      'Reserve a excursao a Ilha Saona com pelo menos 48 horas de antecedencia.',
      'O clima e umido o ano todo; leve roupas leves de algodao ou linho.',
      'A agua da torneira nao e potavel; use apenas agua engarrafada.',
    ],
    bestSeason: 'Dezembro a abril (temporada seca). Temperaturas entre 25-29 C. Evitar setembro e outubro (temporada de furacoes).',
    metaDescription:
      'Descubra Punta Cana 2025 com a Mel\'s Travel. Praias de areia branca, resorts all-inclusive, passeios a Ilha Saona e mais.',
  },

  // INGLES
  en: {
    pageTitle: 'Punta Cana 2025 | Mel\'s Travel',
    subtitle: 'The Caribbean paradise awaits you',
    introText:
      'Punta Cana is the quintessential Caribbean destination. With its white-sand beaches, crystal-clear turquoise waters, and world-class all-inclusive resorts, it is the perfect place to disconnect and create unforgettable memories. From iconic Bavaro Beach to exclusive Cap Cana, every corner offers a unique experience.',
    description:
      'Located on the eastern tip of the Dominican Republic, Punta Cana boasts over 50 kilometers of pristine coastline. The region combines lush nature with top-tier tourist infrastructure.\n\nMust-do activities include: swimming in the natural pools of Saona Island, exploring the cenotes at Hoyo Claro, riding buggies through the Dominican countryside, and diving in the East National Park.',
    tips: [
      'The best area to stay is Bavaro, with direct access to the calmest beaches.',
      'Bring cash in US dollars; many locals prefer USD over Dominican pesos.',
      'Book the Saona Island excursion at least 48 hours in advance.',
      'The weather is humid year-round; pack lightweight cotton or linen clothing.',
      'Tap water is not drinkable; use only bottled water.',
    ],
    bestSeason: 'December to April (dry season). Temperatures between 25-29 C. Avoid September and October (hurricane season).',
    metaDescription:
      'Discover Punta Cana 2025 with Mel\'s Travel. White-sand beaches, all-inclusive resorts, Saona Island excursions and more.',
  },
};

export default content;
