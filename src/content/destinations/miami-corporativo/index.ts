/**
 * ============================================================
 *  CONTEUDO: MIAMI
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/miami-corporativo/index.ts
 *  DESTINO: Miami, Estados Unidos
 *  SLUG: miami-corporativo
 *  URL: /#/destino/miami-corporativo
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
  slug: 'miami-corporativo',

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
    pageTitle: 'Miami | Mel\'s Travel',
    subtitle: 'Tu destino ideal en Estados Unidos',
    introText:
      'Bienvenido a la pagina de Miami. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a Estados Unidos.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Miami con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Miami | Mel\'s Travel',
    subtitle: 'Seu destino ideal em Estados Unidos',
    introText:
      'Bem-vindo a pagina de Miami. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a Estados Unidos.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Miami com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Miami | Mel\'s Travel',
    subtitle: 'Your ideal destination in Estados Unidos',
    introText:
      'Welcome to the Miami page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to Estados Unidos.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Miami with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
