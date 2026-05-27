/**
 * ============================================================
 *  CONTEUDO: CHIANG MAI
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/chiang-mai-solo/index.ts
 *  DESTINO: Chiang Mai, Tailandia
 *  SLUG: chiang-mai-solo
 *  URL: /#/destino/chiang-mai-solo
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
  slug: 'chiang-mai-solo',

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
    pageTitle: 'Chiang Mai | Mel\'s Travel',
    subtitle: 'Un destino increible en Tailandia',
    introText:
      'Bienvenido a la pagina de Chiang Mai. Descubre por que este destino es perfecto para tu proximo viaje.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Chiang Mai con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Chiang Mai | Mel\'s Travel',
    subtitle: 'Um destino incrivel em Tailandia',
    introText:
      'Bem-vindo a pagina de Chiang Mai. Descubra por que este destino e perfeito para sua proxima viagem.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Chiang Mai com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Chiang Mai | Mel\'s Travel',
    subtitle: 'An amazing destination in Tailandia',
    introText:
      'Welcome to the Chiang Mai page. Discover why this destination is perfect for your next trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Chiang Mai with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
