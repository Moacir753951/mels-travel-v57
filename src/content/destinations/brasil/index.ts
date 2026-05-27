/**
 * ============================================================
 *  CONTEUDO: BRASIL
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/brasil/index.ts
 *  DESTINO: Brasil, Brasil
 *  SLUG: brasil
 *  URL: /#/destino/brasil
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
  slug: 'brasil',

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
    pageTitle: 'Brasil | Mel\'s Travel',
    subtitle: 'Descubre todo lo que Brasil ofrece para tus vacaciones',
    introText:
      'Bienvenido a la pagina de Brasil. Aqui encontraras toda la informacion para planificar tu viaje perfecto.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre Brasil con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'Brasil | Mel\'s Travel',
    subtitle: 'Descubra tudo que Brasil oferece para suas ferias',
    introText:
      'Bem-vindo a pagina de Brasil. Aqui voce encontrara todas as informacoes para planejar sua viagem perfeita.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra Brasil com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'Brasil | Mel\'s Travel',
    subtitle: 'Discover everything Brasil offers for your vacation',
    introText:
      'Welcome to the Brasil page. Here you will find all the information to plan your perfect trip.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover Brasil with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
