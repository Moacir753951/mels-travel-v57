/**
 * ============================================================
 *  CONTEUDO: CARIBE
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/caribe/index.ts
 *  DESTINO: Caribe, Multipaís
 *  SLUG: caribe
 *  URL: /#/destino/caribe
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
  slug: 'caribe',

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
    pageTitle: 'Caribe | Mel\'s Travel',
    subtitle: 'Descubre todo lo que Caribe ofrece para tus vacaciones',
    introText:
      'Bienvenido a la pagina de Caribe. Aqui encontraras toda la informacion para planificar tu viaje perfecto.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Caribe con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Caribe | Mel\'s Travel',
    subtitle: 'Descubra tudo que Caribe oferece para suas ferias',
    introText:
      'Bem-vindo a pagina de Caribe. Aqui voce encontrara todas as informacoes para planejar sua viagem perfeita.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Caribe com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Caribe | Mel\'s Travel',
    subtitle: 'Discover everything Caribe offers for your vacation',
    introText:
      'Welcome to the Caribe page. Here you will find all the information to plan your perfect trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Caribe with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
