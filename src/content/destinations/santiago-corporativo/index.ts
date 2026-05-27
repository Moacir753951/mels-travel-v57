/**
 * ============================================================
 *  CONTEUDO: SANTIAGO
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/santiago-corporativo/index.ts
 *  DESTINO: Santiago, Chile
 *  SLUG: santiago-corporativo
 *  URL: /#/destino/santiago-corporativo
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
  slug: 'santiago-corporativo',

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
    pageTitle: 'Santiago | Mel\'s Travel',
    subtitle: 'Tu destino ideal en Chile',
    introText:
      'Bienvenido a la pagina de Santiago. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a Chile.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Santiago con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Santiago | Mel\'s Travel',
    subtitle: 'Seu destino ideal em Chile',
    introText:
      'Bem-vindo a pagina de Santiago. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a Chile.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Santiago com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Santiago | Mel\'s Travel',
    subtitle: 'Your ideal destination in Chile',
    introText:
      'Welcome to the Santiago page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to Chile.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Santiago with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
