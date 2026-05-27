/**
 * ============================================================
 *  CONTEUDO: ROMA
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/roma/index.ts
 *  DESTINO: Roma, Italia
 *  SLUG: roma
 *  URL: /#/destino/roma
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
  slug: 'roma',

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
    pageTitle: 'Roma | Mel\'s Travel',
    subtitle: 'Tu destino ideal en Italia',
    introText:
      'Bienvenido a la pagina de Roma. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a Italia.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Roma con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Roma | Mel\'s Travel',
    subtitle: 'Seu destino ideal em Italia',
    introText:
      'Bem-vindo a pagina de Roma. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a Italia.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Roma com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Roma | Mel\'s Travel',
    subtitle: 'Your ideal destination in Italia',
    introText:
      'Welcome to the Roma page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to Italia.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Roma with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
