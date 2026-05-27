/**
 * ============================================================
 *  CONTEUDO: CIUDAD DE PANAMÁ
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/panama-corporativo/index.ts
 *  DESTINO: Ciudad de Panamá, Panamá
 *  SLUG: panama-corporativo
 *  URL: /#/destino/panama-corporativo
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
  slug: 'panama-corporativo',

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
    pageTitle: 'Ciudad de Panamá | Mel\'s Travel',
    subtitle: 'Tu destino ideal en Panamá',
    introText:
      'Bienvenido a la pagina de Ciudad de Panamá. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a Panamá.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Ciudad de Panamá con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Ciudad de Panamá | Mel\'s Travel',
    subtitle: 'Seu destino ideal em Panamá',
    introText:
      'Bem-vindo a pagina de Ciudad de Panamá. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a Panamá.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Ciudad de Panamá com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Ciudad de Panamá | Mel\'s Travel',
    subtitle: 'Your ideal destination in Panamá',
    introText:
      'Welcome to the Ciudad de Panamá page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to Panamá.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Ciudad de Panamá with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
