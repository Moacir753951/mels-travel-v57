/**
 * ============================================================
 *  CONTEUDO: EVENTOS E INCENTIVOS
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/eventos-incentivo/index.ts
 *  DESTINO: Eventos e Incentivos, Global
 *  SLUG: eventos-incentivo
 *  URL: /#/destino/eventos-incentivo
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
  slug: 'eventos-incentivo',

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
    pageTitle: 'Eventos e Incentivos | Mel\'s Travel',
    subtitle: 'Tu destino ideal en Global',
    introText:
      'Bienvenido a la pagina de Eventos e Incentivos. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a Global.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Eventos e Incentivos con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Eventos e Incentivos | Mel\'s Travel',
    subtitle: 'Seu destino ideal em Global',
    introText:
      'Bem-vindo a pagina de Eventos e Incentivos. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a Global.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Eventos e Incentivos com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Eventos e Incentivos | Mel\'s Travel',
    subtitle: 'Your ideal destination in Global',
    introText:
      'Welcome to the Eventos e Incentivos page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to Global.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Eventos e Incentivos with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
