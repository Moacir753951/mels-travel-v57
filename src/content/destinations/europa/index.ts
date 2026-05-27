/**
 * ============================================================
 *  CONTEUDO: EUROPA
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/europa/index.ts
 *  DESTINO: Europa, Multipaís
 *  SLUG: europa
 *  URL: /#/destino/europa
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
  slug: 'europa',

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
    pageTitle: 'Europa | Mel\'s Travel',
    subtitle: 'Descubre todo lo que Europa ofrece para tus vacaciones',
    introText:
      'Bienvenido a la pagina de Europa. Aqui encontraras toda la informacion para planificar tu viaje perfecto.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Europa con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Europa | Mel\'s Travel',
    subtitle: 'Descubra tudo que Europa oferece para suas ferias',
    introText:
      'Bem-vindo a pagina de Europa. Aqui voce encontrara todas as informacoes para planejar sua viagem perfeita.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Europa com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Europa | Mel\'s Travel',
    subtitle: 'Discover everything Europa offers for your vacation',
    introText:
      'Welcome to the Europa page. Here you will find all the information to plan your perfect trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Europa with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
