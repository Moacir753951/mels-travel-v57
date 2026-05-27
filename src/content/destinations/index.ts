/**
 * ═══════════════════════════════════════════════════════════════
 *  AGREGADOR DE DESTINOS - Mel's Travel
 * ═══════════════════════════════════════════════════════════════
 *
 *  ESTE ARQUIVO IMPORTA E EXPORTA TODOS OS DESTINOS.
 *  NAO PRECISA EDITAR ESTE ARQUIVO.
 *
 *  Para editar um destino, va direto em:
 *    src/content/destinations/[slug]/index.ts
 *
 *  Exemplo: para Punta Cana:
 *    src/content/destinations/punta-cana/index.ts
 * ═══════════════════════════════════════════════════════════════
 */

// Importar tipos
import type { DestinationContent } from './types';

// Importar todos os destinos (88 arquivos)
// Cada pasta [slug]/index.ts exporta default um DestinationContent

// HOME destinations (4)
import caribe from './caribe/index';
import brasil from './brasil/index';
import europa from './europa/index';
import corporativo from './corporativo/index';

// SUB destinations - Caribe (6)
import puntaCana from './punta-cana/index';
import cancun from './cancun/index';
import rivieraMaya from './riviera-maya/index';
import jamaica from './jamaica/index';
import cuba from './cuba/index';
import aruba from './aruba/index';

// SUB destinations - Brasil (6)
import florianopolis from './florianopolis/index';
import bombinhas from './bombinhas/index';
import buzios from './buzios/index';
import rioDeJaneiro from './rio-de-janeiro/index';
import balnearioCamboriu from './balneario-camboriu/index';
import fernandoDeNoronha from './fernando-de-noronha/index';

// SUB destinations - Europa (6)
import parisSub from './paris/index';
import roma from './roma/index';
import madrid from './madrid/index';
import barcelonaSub from './barcelona/index';
import lisboaSub from './lisboa/index';
import suiza from './suiza/index';

// SUB destinations - Negocios (6)
import miamiCorporativo from './miami-corporativo/index';
import panamaCorporativo from './panama-corporativo/index';
import saoPauloCorporativo from './sao-paulo-corporativo/index';
import buenosAiresCorporativo from './buenos-aires-corporativo/index';
import santiagoCorporativo from './santiago-corporativo/index';
import eventosIncentivo from './eventos-incentivo/index';

// SOLO destinations (20)
import kiotoSolo from './kioto-solo/index';
import reykjavikSolo from './reykjavik-solo/index';
import chiangMaiSolo from './chiang-mai-solo/index';
import lisboaSolo from './lisboa-solo/index';
import buenosAiresSolo from './buenos-aires-solo/index';
import baliSolo from './bali-solo/index';
import edimburgoSolo from './edimburgo-solo/index';
import ciudadDelCaboSolo from './ciudad-del-cabo-solo/index';
import medellinSolo from './medellin-solo/index';
import marrakechSolo from './marrakech-solo/index';
import queenstownSolo from './queenstown-solo/index';
import pragaSolo from './praga-solo/index';
import hoiAnSolo from './hoi-an-solo/index';
import santoriniSolo from './santorini-solo/index';
import tokioSolo from './tokio-solo/index';
import vancouverSolo from './vancouver-solo/index';
import seulSolo from './seul-solo/index';
import valenciaSolo from './valencia-solo/index';
import aucklandSolo from './auckland-solo/index';
import oaxacaSolo from './oaxaca-solo/index';

// COUPLE destinations (20)
import parisCouple from './paris-couple/index';
import veneciaCouple from './venecia-couple/index';
import maldivasCouple from './maldivas-couple/index';
import santoriniCouple from './santorini-couple/index';
import puntaCanaCouple from './punta-cana-couple/index';
import barilocheCouple from './bariloche-couple/index';
import cancunCouple from './cancun-couple/index';
import buziosCouple from './buzios-couple/index';
import toscanaCouple from './toscana-couple/index';
import mauiCouple from './maui-couple/index';
import seychellesCouple from './seychelles-couple/index';
import florenciaCouple from './florencia-couple/index';
import zanzibarCouple from './zanzibar-couple/index';
import rioDeJaneiroCouple from './rio-de-janeiro-couple/index';
import capadociaCouple from './capadocia-couple/index';
import boraBoraCouple from './bora-bora-couple/index';
import machuPicchuCouple from './machu-picchu-couple/index';
import amalfiCouple from './amalfi-couple/index';
import nizaCouple from './niza-couple/index';
import cartagenaCouple from './cartagena-couple/index';

// FRIENDS destinations (20)
import ibizaFriends from './ibiza-friends/index';
import rioFriends from './rio-friends/index';
import amsterdamFriends from './amsterdam-friends/index';
import berlinFriends from './berlin-friends/index';
import mykonosFriends from './mykonos-friends/index';
import nuevaYorkFriends from './nueva-york-friends/index';
import dublinFriends from './dublin-friends/index';
import cancunFriends from './cancun-friends/index';
import londresFriends from './londres-friends/index';
import nashvilleFriends from './nashville-friends/index';
import tulumFriends from './tulum-friends/index';
import miamiFriends from './miami-friends/index';
import budapestFriends from './budapest-friends/index';
import barcelonaFriends from './barcelona-friends/index';
import pragaFriends from './praga-friends/index';
import singapurFriends from './singapur-friends/index';
import lisboaFriends from './lisboa-friends/index';
import seulFriends from './seul-friends/index';
import marrakechFriends from './marrakech-friends/index';
import mexicoDfFriends from './mexico-df-friends/index';

// Registro de todos os destinos
// A chave e o slug que vem da URL: /#/destino/[slug]
const destinationRegistry: Record<string, DestinationContent> = {
  // Home (4)
  'caribe': caribe,
  'brasil': brasil,
  'europa': europa,
  'corporativo': corporativo,

  // Sub - Caribe (6)
  'punta-cana': puntaCana,
  'cancun': cancun,
  'riviera-maya': rivieraMaya,
  'jamaica': jamaica,
  'cuba': cuba,
  'aruba': aruba,

  // Sub - Brasil (6)
  'florianopolis': florianopolis,
  'bombinhas': bombinhas,
  'buzios': buzios,
  'rio-de-janeiro': rioDeJaneiro,
  'balneario-camboriu': balnearioCamboriu,
  'fernando-de-noronha': fernandoDeNoronha,

  // Sub - Europa (6)
  'paris': parisSub,
  'roma': roma,
  'madrid': madrid,
  'barcelona': barcelonaSub,
  'lisboa': lisboaSub,
  'suiza': suiza,

  // Sub - Negocios (6)
  'miami-corporativo': miamiCorporativo,
  'panama-corporativo': panamaCorporativo,
  'sao-paulo-corporativo': saoPauloCorporativo,
  'buenos-aires-corporativo': buenosAiresCorporativo,
  'santiago-corporativo': santiagoCorporativo,
  'eventos-incentivo': eventosIncentivo,

  // Solo (20)
  'kioto-solo': kiotoSolo,
  'reykjavik-solo': reykjavikSolo,
  'chiang-mai-solo': chiangMaiSolo,
  'lisboa-solo': lisboaSolo,
  'buenos-aires-solo': buenosAiresSolo,
  'bali-solo': baliSolo,
  'edimburgo-solo': edimburgoSolo,
  'ciudad-del-cabo-solo': ciudadDelCaboSolo,
  'medellin-solo': medellinSolo,
  'marrakech-solo': marrakechSolo,
  'queenstown-solo': queenstownSolo,
  'praga-solo': pragaSolo,
  'hoi-an-solo': hoiAnSolo,
  'santorini-solo': santoriniSolo,
  'tokio-solo': tokioSolo,
  'vancouver-solo': vancouverSolo,
  'seul-solo': seulSolo,
  'valencia-solo': valenciaSolo,
  'auckland-solo': aucklandSolo,
  'oaxaca-solo': oaxacaSolo,

  // Couple (20)
  'paris-couple': parisCouple,
  'venecia-couple': veneciaCouple,
  'maldivas-couple': maldivasCouple,
  'santorini-couple': santoriniCouple,
  'punta-cana-couple': puntaCanaCouple,
  'bariloche-couple': barilocheCouple,
  'cancun-couple': cancunCouple,
  'buzios-couple': buziosCouple,
  'toscana-couple': toscanaCouple,
  'maui-couple': mauiCouple,
  'seychelles-couple': seychellesCouple,
  'florencia-couple': florenciaCouple,
  'zanzibar-couple': zanzibarCouple,
  'rio-de-janeiro-couple': rioDeJaneiroCouple,
  'capadocia-couple': capadociaCouple,
  'bora-bora-couple': boraBoraCouple,
  'machu-picchu-couple': machuPicchuCouple,
  'amalfi-couple': amalfiCouple,
  'niza-couple': nizaCouple,
  'cartagena-couple': cartagenaCouple,

  // Friends (20)
  'ibiza-friends': ibizaFriends,
  'rio-friends': rioFriends,
  'amsterdam-friends': amsterdamFriends,
  'berlin-friends': berlinFriends,
  'mykonos-friends': mykonosFriends,
  'nueva-york-friends': nuevaYorkFriends,
  'dublin-friends': dublinFriends,
  'cancun-friends': cancunFriends,
  'londres-friends': londresFriends,
  'nashville-friends': nashvilleFriends,
  'tulum-friends': tulumFriends,
  'miami-friends': miamiFriends,
  'budapest-friends': budapestFriends,
  'barcelona-friends': barcelonaFriends,
  'praga-friends': pragaFriends,
  'singapur-friends': singapurFriends,
  'lisboa-friends': lisboaFriends,
  'seul-friends': seulFriends,
  'marrakech-friends': marrakechFriends,
  'mexico-df-friends': mexicoDfFriends,
};

/**
 * Busca conteudo de um destino pelo slug
 * @param slug - slug da URL (ex: 'punta-cana', 'paris-couple')
 * @returns DestinationContent ou undefined se nao existir
 */
export function getDestinationContent(slug: string): DestinationContent | undefined {
  return destinationRegistry[slug];
}

/**
 * Verifica se um slug tem conteudo
 * @param slug - slug da URL
 */
export function hasDestinationContent(slug: string): boolean {
  return slug in destinationRegistry;
}

/**
 * Lista todos os slugs disponiveis
 */
export function getAllContentSlugs(): string[] {
  return Object.keys(destinationRegistry);
}

// Exporta tipos
export type { DestinationContent, DestinationContentLang, ContentVisibility } from './types';

// Exporta o registro completo
export { destinationRegistry };
