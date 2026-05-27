/**
 * ============================================================
 *  CONTEUDO: CIUDAD DEL CABO
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/ciudad-del-cabo-solo/index.ts
 *  DESTINO: Ciudad del Cabo, Sudáfrica
 *  SLUG: ciudad-del-cabo-solo
 *  URL: /#/destino/ciudad-del-cabo-solo
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
  slug: 'ciudad-del-cabo-solo',

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
    pageTitle: 'Ciudad del Cabo | Mel\'s Travel',
    subtitle: 'Un destino increible en Sudáfrica',
    introText:
      'Bienvenido a la pagina de Ciudad del Cabo. Descubre por que este destino es perfecto para tu proximo viaje.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Ciudad del Cabo con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Ciudad del Cabo | Mel\'s Travel',
    subtitle: 'Um destino incrivel em Sudáfrica',
    introText:
      'Bem-vindo a pagina de Ciudad del Cabo. Descubra por que este destino e perfeito para sua proxima viagem.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Ciudad del Cabo com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Ciudad del Cabo | Mel\'s Travel',
    subtitle: 'An amazing destination in Sudáfrica',
    introText:
      'Welcome to the Ciudad del Cabo page. Discover why this destination is perfect for your next trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Ciudad del Cabo with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
