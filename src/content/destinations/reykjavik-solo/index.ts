/**
 * ============================================================
 *  CONTEUDO: REYKJAVIK
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/reykjavik-solo/index.ts
 *  DESTINO: Reykjavik, Islandia
 *  SLUG: reykjavik-solo
 *  URL: /#/destino/reykjavik-solo
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
  slug: 'reykjavik-solo',

  // CONTROLES DE VISIBILIDADE - mude true para false para ocultar
  visibility: {
    showIntroSection: true,
    showPreparationNotice: true,
    showBlogComingSoon: true,
    showDescription: false,
    showTips: false,
    showBestSeason: false,
  },

  // ESPANHOL
  es: {
    pageTitle: 'Reykjavik | Mel\'s Travel',
    subtitle: 'Un destino increible en Islandia',
    introText:
      'Bienvenido a la pagina de Reykjavik. Descubre por que este destino es perfecto para tu proximo viaje.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Reykjavik con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Reykjavik | Mel\'s Travel',
    subtitle: 'Um destino incrivel em Islandia',
    introText:
      'Bem-vindo a pagina de Reykjavik. Descubra por que este destino e perfeito para sua proxima viagem.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Reykjavik com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Reykjavik | Mel\'s Travel',
    subtitle: 'An amazing destination in Islandia',
    introText:
      'Welcome to the Reykjavik page. Discover why this destination is perfect for your next trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Reykjavik with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
