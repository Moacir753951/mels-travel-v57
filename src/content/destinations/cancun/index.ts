/**
 * ============================================================
 *  CONTEUDO: CANCÚN
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/cancun/index.ts
 *  DESTINO: Cancún, México
 *  SLUG: cancun
 *  URL: /#/destino/cancun
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
  slug: 'cancun',

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
    pageTitle: 'Cancún | Mel\'s Travel',
    subtitle: 'Tu destino ideal en México',
    introText:
      'Bienvenido a la pagina de Cancún. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a México.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Cancún con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Cancún | Mel\'s Travel',
    subtitle: 'Seu destino ideal em México',
    introText:
      'Bem-vindo a pagina de Cancún. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a México.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Cancún com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Cancún | Mel\'s Travel',
    subtitle: 'Your ideal destination in México',
    introText:
      'Welcome to the Cancún page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to México.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Cancún with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
