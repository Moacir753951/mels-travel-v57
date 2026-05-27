/**
 * ============================================================
 *  CONTEUDO: RIVIERA MAYA
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/riviera-maya/index.ts
 *  DESTINO: Riviera Maya, México
 *  SLUG: riviera-maya
 *  URL: /#/destino/riviera-maya
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
  slug: 'riviera-maya',

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
    pageTitle: 'Riviera Maya | Mel\'s Travel',
    subtitle: 'Tu destino ideal en México',
    introText:
      'Bienvenido a la pagina de Riviera Maya. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a México.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Riviera Maya con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Riviera Maya | Mel\'s Travel',
    subtitle: 'Seu destino ideal em México',
    introText:
      'Bem-vindo a pagina de Riviera Maya. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a México.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Riviera Maya com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Riviera Maya | Mel\'s Travel',
    subtitle: 'Your ideal destination in México',
    introText:
      'Welcome to the Riviera Maya page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to México.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Riviera Maya with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
