/**
 * ============================================================
 *  CONTEUDO: LA HABANA
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/cuba/index.ts
 *  DESTINO: La Habana, Cuba
 *  SLUG: cuba
 *  URL: /#/destino/cuba
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
  slug: 'cuba',

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
    pageTitle: 'La Habana | Mel\'s Travel',
    subtitle: 'Tu destino ideal en Cuba',
    introText:
      'Bienvenido a la pagina de La Habana. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a Cuba.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre La Habana con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'La Habana | Mel\'s Travel',
    subtitle: 'Seu destino ideal em Cuba',
    introText:
      'Bem-vindo a pagina de La Habana. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a Cuba.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra La Habana com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'La Habana | Mel\'s Travel',
    subtitle: 'Your ideal destination in Cuba',
    introText:
      'Welcome to the La Habana page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to Cuba.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover La Habana with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
