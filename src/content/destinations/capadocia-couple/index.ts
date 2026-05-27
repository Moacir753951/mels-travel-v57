/**
 * ============================================================
 *  CONTEUDO: CAPADOCIA
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/capadocia-couple/index.ts
 *  DESTINO: Capadocia, Turquía
 *  SLUG: capadocia-couple
 *  URL: /#/destino/capadocia-couple
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
  slug: 'capadocia-couple',

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
    pageTitle: 'Capadocia | Mel\'s Travel',
    subtitle: 'Un destino increible en Turquía',
    introText:
      'Bienvenido a la pagina de Capadocia. Descubre por que este destino es perfecto para tu proximo viaje.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Capadocia con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Capadocia | Mel\'s Travel',
    subtitle: 'Um destino incrivel em Turquía',
    introText:
      'Bem-vindo a pagina de Capadocia. Descubra por que este destino e perfeito para sua proxima viagem.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Capadocia com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Capadocia | Mel\'s Travel',
    subtitle: 'An amazing destination in Turquía',
    introText:
      'Welcome to the Capadocia page. Discover why this destination is perfect for your next trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Capadocia with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
