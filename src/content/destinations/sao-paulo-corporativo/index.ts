/**
 * ============================================================
 *  CONTEUDO: SÃO PAULO
 * ============================================================
 *
 *  ARQUIVO: src/content/destinations/sao-paulo-corporativo/index.ts
 *  DESTINO: São Paulo, Brasil
 *  SLUG: sao-paulo-corporativo
 *  URL: /#/destino/sao-paulo-corporativo
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
  slug: 'sao-paulo-corporativo',

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
    pageTitle: 'São Paulo | Mel\'s Travel',
    subtitle: 'Tu destino ideal en Brasil',
    introText:
      'Bienvenido a la pagina de São Paulo. Aqui encontraras informacion esencial, consejos practicos y todo lo que necesitas saber para disfrutar al maximo tu visita a Brasil.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubre São Paulo con Mel\'s Travel. Informacion esencial, consejos practicos y todo lo que necesitas para tu viaje.',
  },

  // PORTUGUES
  pt: {
    pageTitle: 'São Paulo | Mel\'s Travel',
    subtitle: 'Seu destino ideal em Brasil',
    introText:
      'Bem-vindo a pagina de São Paulo. Aqui voce encontrara informacoes essenciais, dicas praticas e tudo que precisa saber para aproveitar ao maximo sua visita a Brasil.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Descubra São Paulo com a Mel\'s Travel. Informacoes essenciais, dicas praticas e tudo que voce precisa para sua viagem.',
  },

  // INGLES
  en: {
    pageTitle: 'São Paulo | Mel\'s Travel',
    subtitle: 'Your ideal destination in Brasil',
    introText:
      'Welcome to the São Paulo page. Here you will find essential information, practical tips, and everything you need to know to make the most of your visit to Brasil.',
    description: '',
    tips: [],
    bestSeason: '',
    metaDescription:
      'Discover São Paulo with Mel\'s Travel. Essential information, practical tips and everything you need for your trip.',
  },
};

export default content;
