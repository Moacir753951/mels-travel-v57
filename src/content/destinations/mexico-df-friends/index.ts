/**
 * ============================================================
 *  CONTEUDO: CIUDAD DE MÉXICO
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/mexico-df-friends/index.ts
 *  DESTINO: Ciudad de México, México
 *  SLUG: mexico-df-friends
 *  URL: /#/destino/mexico-df-friends
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
  slug: 'mexico-df-friends',

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
    pageTitle: 'Ciudad de México | Mel\'s Travel',
    subtitle: 'Un destino increible en México',
    introText:
      'Bienvenido a la pagina de Ciudad de México. Descubre por que este destino es perfecto para tu proximo viaje.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Ciudad de México con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Ciudad de México | Mel\'s Travel',
    subtitle: 'Um destino incrivel em México',
    introText:
      'Bem-vindo a pagina de Ciudad de México. Descubra por que este destino e perfeito para sua proxima viagem.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Ciudad de México com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Ciudad de México | Mel\'s Travel',
    subtitle: 'An amazing destination in México',
    introText:
      'Welcome to the Ciudad de México page. Discover why this destination is perfect for your next trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Ciudad de México with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
