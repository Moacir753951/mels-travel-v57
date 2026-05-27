/**
 * ============================================================
 *  CONTEUDO: BUENOS AIRES
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/buenos-aires-corporativo/index.ts
 *  DESTINO: Buenos Aires, Argentina
 *  SLUG: buenos-aires-corporativo
 *  URL: /#/destino/buenos-aires-corporativo
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
  slug: 'buenos-aires-corporativo',

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
    pageTitle: 'Buenos Aires | Mel\'s Travel',
    subtitle: 'Tu destino ideal en Argentina',
    introText:
      'Bienvenido a la pagina de Buenos Aires. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a Argentina.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Buenos Aires con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Buenos Aires | Mel\'s Travel',
    subtitle: 'Seu destino ideal em Argentina',
    introText:
      'Bem-vindo a pagina de Buenos Aires. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a Argentina.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Buenos Aires com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Buenos Aires | Mel\'s Travel',
    subtitle: 'Your ideal destination in Argentina',
    introText:
      'Welcome to the Buenos Aires page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to Argentina.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Buenos Aires with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
