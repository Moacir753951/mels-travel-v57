/**
 * ============================================================
 *  CONTEUDO: PUNTA CANA
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/punta-cana-couple/index.ts
 *  DESTINO: Punta Cana, República Dominicana
 *  SLUG: punta-cana-couple
 *  URL: /#/destino/punta-cana-couple
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
  slug: 'punta-cana-couple',

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
    pageTitle: 'Punta Cana | Mel\'s Travel',
    subtitle: 'Un destino increible en República Dominicana',
    introText:
      'Bienvenido a la pagina de Punta Cana. Descubre por que este destino es perfecto para tu proximo viaje.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Punta Cana con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Punta Cana | Mel\'s Travel',
    subtitle: 'Um destino incrivel em República Dominicana',
    introText:
      'Bem-vindo a pagina de Punta Cana. Descubra por que este destino e perfeito para sua proxima viagem.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Punta Cana com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Punta Cana | Mel\'s Travel',
    subtitle: 'An amazing destination in República Dominicana',
    introText:
      'Welcome to the Punta Cana page. Discover why this destination is perfect for your next trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Punta Cana with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
