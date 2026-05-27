/**
 * ═══════════════════════════════════════════════════════════════
 * TIPOS DE CONTEUDO - Mel's Travel Destination Content
 * ═══════════════════════════════════════════════════════════════
 *
 * ESTE ARQUIVO DEFINE A ESTRUTURA DOS DADOS.
 * NAO PRECISA EDITAR ESTE ARQUIVO.
 *
 * Para editar o conteudo de um destino, va em:
 *   src/content/destinations/[slug-do-destino]/index.ts
 *
 * O slug e a parte final da URL, ex:
 *   /#/destino/punta-cana  ->  src/content/destinations/punta-cana/index.ts
 * ═══════════════════════════════════════════════════════════════
 */

/** Conteudo de um destino em um idioma */
export interface DestinationContentLang {
  /** Titulo principal da pagina (aparece no <title> e no hero) */
  pageTitle: string;

  /** Subtitulo curto abaixo do nome da cidade (hero) */
  subtitle: string;

  /** Texto introdutorio principal (paragrafo de boas-vindas) */
  introText: string;

  /** Descricao longa do destino (2-3 paragrafos) - opcional */
  description?: string;

  /** Dicas praticas (lista) - opcional */
  tips?: string[];

  /** Melhor epoca para visitar - opcional */
  bestSeason?: string;

  /** Meta description para SEO */
  metaDescription: string;
}

/** Configuracoes de visibilidade de cada bloco da pagina */
export interface ContentVisibility {
  /** Mostrar a secao "Descobre [Cidade]" com texto introdutorio? */
  showIntroSection: boolean;

  /** Mostrar o aviso "Contenido detallado en preparacion"? */
  showPreparationNotice: boolean;

  /** Mostrar o botao de "Blog detallado proximamente"? */
  showBlogComingSoon: boolean;

  /** Mostrar a descricao longa? (so aparece se description estiver preenchida) */
  showDescription: boolean;

  /** Mostrar dicas praticas? (so aparece se tips estiver preenchido) */
  showTips: boolean;

  /** Mostrar melhor epoca? (so aparece se bestSeason estiver preenchido) */
  showBestSeason: boolean;
}

/** Conteudo completo de um destino */
export interface DestinationContent {
  /** Slug unico - deve coincidir com o da URL e o nome da pasta */
  slug: string;

  /** Controles de visibilidade - DESATIVE AQUI os blocos que nao quer */
  visibility: ContentVisibility;

  /** Conteudo em cada idioma */
  es: DestinationContentLang;
  pt: DestinationContentLang;
  en: DestinationContentLang;
}
