/**
 * ============================================================
 *  CONTEUDO: LISBOA
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/lisboa-solo/index.ts
 *  DESTINO: Lisboa, Portugal
 *  SLUG: lisboa-solo
 *  URL: /#/destino/lisboa-solo
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
  slug: 'lisboa-solo',

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
    pageTitle: 'Lisboa | Mel\'s Travel',
    subtitle: 'Un destino increible en Portugal',
    introText:
      'Bienvenido a la pagina de Lisboa. Descubre por que este destino es perfecto para tu proximo viaje.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Lisboa con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Lisboa | Mel\'s Travel',
    subtitle: 'Um destino incrivel em Portugal',
    introText:
      'Bem-vindo a pagina de Lisboa. Descubra por que este destino e perfeito para sua proxima viagem.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Lisboa com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Lisboa | Mel\'s Travel',
    subtitle: 'An amazing destination in Portugal',
    introText:
      'Welcome to the Lisboa page. Discover why this destination is perfect for your next trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Lisboa with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
