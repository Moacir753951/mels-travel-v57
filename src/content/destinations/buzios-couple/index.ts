/**
 * ============================================================
 *  CONTEUDO: BÚZIOS
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/buzios-couple/index.ts
 *  DESTINO: Búzios, Brasil
 *  SLUG: buzios-couple
 *  URL: /#/destino/buzios-couple
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
  slug: 'buzios-couple',

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
    pageTitle: 'Búzios | Mel\'s Travel',
    subtitle: 'Un destino increible en Brasil',
    introText:
      'Bienvenido a la pagina de Búzios. Descubre por que este destino es perfecto para tu proximo viaje.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Búzios con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Búzios | Mel\'s Travel',
    subtitle: 'Um destino incrivel em Brasil',
    introText:
      'Bem-vindo a pagina de Búzios. Descubra por que este destino e perfeito para sua proxima viagem.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Búzios com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Búzios | Mel\'s Travel',
    subtitle: 'An amazing destination in Brasil',
    introText:
      'Welcome to the Búzios page. Discover why this destination is perfect for your next trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Búzios with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
