# MAPA DO CODIGO - Mel's Travel v57
## Guia de Navegacao para Agentes

---

## 1. ARVORE DO PROJETO

```
v57/
|-- package.json              # Dependencias (React 19, Vite, Three.js, R3F, etc)
|-- vite.config.ts            # Config Vite (alias @/ -> src/, HashRouter)
|-- tailwind.config.js        # Config Tailwind (cores custom, fontes)
|-- tsconfig.json             # Config TypeScript
|-- index.html                # HTML principal (meta tags SEO, anti-traducao)
|
|-- src/
|   |-- main.tsx              # PONTO DE ENTRADA
|   |-- App.tsx               # RAIZ DO APP - rotas, loading screen, layout
|   |-- App.css               # Estilos globais
|   |-- index.css             # Tailwind directives + fonte Poppins
|   |
|   |-- content/              # *** NOVO: CONTEUDO DOS DESTINOS ***
|   |   |-- destinations/
|   |   |   |-- types.ts              # Tipos TypeScript (NAO EDITAR)
|   |   |   |-- index.ts              # Agregador (NAO EDITAR)
|   |   |   |
|   |   |   |-- punta-cana/           # Pasta do destino
|   |   |   |   |-- index.ts          # CONTEUDO EDITAVEL + MAPA
|   |   |   |-- caribe/
|   |   |   |   |-- index.ts
|   |   |   |-- paris-couple/
|   |   |   |   |-- index.ts
|   |   |   |-- ... (88 destinos no total)
|   |
|   |-- sections/             # SECOES DA HOME
|   |   |-- Header.tsx
|   |   |-- Hero.tsx
|   |   |-- Destinations.tsx
|   |   |-- Services.tsx
|   |   |-- Contact.tsx
|   |   |-- Footer.tsx
|   |
|   |-- pages/                # PAGINAS
|   |   |-- GameTravel.tsx         # Game Travel (roleta + globo 3D)
|   |   |-- DestinationPage.tsx    # Pagina generica de destino (USA content/)
|   |
|   |-- components/
|   |   |-- CategoryModal.tsx
|   |   |-- Globe3D.tsx
|   |   |-- WhatsAppFloat.tsx
|   |   |-- effects/          # Efeitos visuais (cursor, parallax, etc)
|   |   |-- ui/               # 60+ componentes shadcn/ui
|   |
|   |-- data/                 # DADOS (destinos, rotas, categorias)
|   |   |-- destinations.ts
|   |   |-- destinationRoutes.ts
|   |   |-- categoryDestinations.ts
|   |   |-- destinationPages.ts
|   |
|   |-- hooks/                # Hooks customizados
|   |-- lib/                  # Utilitarios
|
|-- public/images/            # 33 imagens locais
```

---

## 2. SISTEMA DE CONTEUDO POR DESTINO (NOVO v57)

### 2.1 Como funciona

Cada destino agora tem sua **propria pasta** dentro de `src/content/destinations/`.

Para editar o conteudo de **qualquer destino**:
```
1. Acesse: src/content/destinations/[slug]/index.ts
2. Edite o texto nas secoes es/pt/en
3. Use visibility.* para mostrar/ocultar blocos
```

### 2.2 Slugs disponiveis (88 destinos)

**Home (4):** `caribe`, `brasil`, `europa`, `corporativo`

**Sub-destinos Caribe (6):** `punta-cana`, `cancun`, `riviera-maya`, `jamaica`, `cuba`, `aruba`

**Sub-destinos Brasil (6):** `florianopolis`, `bombinhas`, `buzios`, `rio-de-janeiro`, `balneario-camboriu`, `fernando-de-noronha`

**Sub-destinos Europa (6):** `paris`, `roma`, `madrid`, `barcelona`, `lisboa`, `suiza`

**Sub-destinos Negocios (6):** `miami-corporativo`, `panama-corporativo`, `sao-paulo-corporativo`, `buenos-aires-corporativo`, `santiago-corporativo`, `eventos-incentivo`

**Solo (20):** `kioto-solo`, `reykjavik-solo`, `chiang-mai-solo`, `lisboa-solo`, `buenos-aires-solo`, `bali-solo`, `edimburgo-solo`, `ciudad-del-cabo-solo`, `medellin-solo`, `marrakech-solo`, `queenstown-solo`, `praga-solo`, `hoi-an-solo`, `santorini-solo`, `tokio-solo`, `vancouver-solo`, `seul-solo`, `valencia-solo`, `auckland-solo`, `oaxaca-solo`

**Couple (20):** `paris-couple`, `venecia-couple`, `maldivas-couple`, `santorini-couple`, `punta-cana-couple`, `bariloche-couple`, `cancun-couple`, `buzios-couple`, `toscana-couple`, `maui-couple`, `seychelles-couple`, `florencia-couple`, `zanzibar-couple`, `rio-de-janeiro-couple`, `capadocia-couple`, `bora-bora-couple`, `machu-picchu-couple`, `amalfi-couple`, `niza-couple`, `cartagena-couple`

**Friends (20):** `ibiza-friends`, `rio-friends`, `amsterdam-friends`, `berlin-friends`, `mykonos-friends`, `nueva-york-friends`, `dublin-friends`, `cancun-friends`, `londres-friends`, `nashville-friends`, `tulum-friends`, `miami-friends`, `budapest-friends`, `barcelona-friends`, `praga-friends`, `singapur-friends`, `lisboa-friends`, `seul-friends`, `marrakech-friends`, `mexico-df-friends`

### 2.3 Estrutura de cada arquivo de conteudo

Cada `src/content/destinations/[slug]/index.ts` contem:

```typescript
const content: DestinationContent = {
  slug: 'punta-cana',

  // CONTROLES DE VISIBILIDADE
  // Mude true -> false para OCULTAR um bloco
  visibility: {
    showIntroSection: true,       // Secao "Descubre [Cidade]"
    showPreparationNotice: true,  // Aviso "Conteudo em preparacao"
    showBlogComingSoon: true,     // Botao "Blog em breve"
    showDescription: false,       // Descricao longa (precisa preencher)
    showTips: false,              // Dicas praticas (precisa preencher)
    showBestSeason: false,        // Melhor epoca (precisa preencher)
  },

  // Textos em cada idioma
  es: { pageTitle, subtitle, introText, description, tips[], bestSeason, metaDescription },
  pt: { pageTitle, subtitle, introText, description, tips[], bestSeason, metaDescription },
  en: { pageTitle, subtitle, introText, description, tips[], bestSeason, metaDescription },
};
```

### 2.4 Exemplo: Como desativar blocos

Para remover os avisos "Conteudo em preparacao" e "Blog detallado proximamente":

```typescript
visibility: {
  showIntroSection: true,       // mantem
  showPreparationNotice: false, // REMOVE o aviso laranja
  showBlogComingSoon: false,    // REMOVE o botao "Blog em breve"
  showDescription: true,        // mostra a descricao longa
  showTips: true,               // mostra as dicas
  showBestSeason: true,         // mostra melhor epoca
},
```

### 2.5 Exemplo: Punta Cana (ja preenchido)

O destino `punta-cana` ja esta preenchido com conteudo real como exemplo.

Local: `src/content/destinations/punta-cana/index.ts`

---

## 3. MAPA RAPIDO - Quero editar...

| Quero... | Arquivo | Como |
|----------|---------|------|
| **Mudar texto de um destino** | `src/content/destinations/[slug]/index.ts` | Edite os campos es/pt/en |
| **Desativar "Conteudo em preparacao"** | `src/content/destinations/[slug]/index.ts` | `showPreparationNotice: false` |
| **Desativar "Blog proximamente"** | `src/content/destinations/[slug]/index.ts` | `showBlogComingSoon: false` |
| **Adicionar descricao longa** | `src/content/destinations/[slug]/index.ts` | Preencha `description` + `showDescription: true` |
| **Adicionar dicas** | `src/content/destinations/[slug]/index.ts` | Preencha `tips: ['...', '...']` + `showTips: true` |
| **Adicionar melhor epoca** | `src/content/destinations/[slug]/index.ts` | Preencha `bestSeason` + `showBestSeason: true` |
| **Adicionar novo destino** | `src/data/destinationRoutes.ts` + criar pasta em `content/destinations/` | Adicione a rota + arquivo de conteudo |
| **Mudar header** | `src/sections/Header.tsx` | Edite diretamente |
| **Mudar Game Travel** | `src/pages/GameTravel.tsx` | Edite o componente |
| **Mudar globo 3D** | `src/components/Globe3D.tsx` | Edite o componente |

---

## 4. FLUXO DOS DADOS

```
URL: /#/destino/punta-cana
  -> App.tsx (rota /destino/:slug)
  -> DestinationPage.tsx (recebe slug = "punta-cana")
     -> getDestinationContent("punta-cana")   // de content/destinations/
     -> getDestinationBySlug("punta-cana")    // de data/destinationRoutes.ts
     -> Renderiza com base nas visibility flags
```

---

**Versao**: v57 | **Stack**: React 19 + TypeScript + Vite + Tailwind CSS + Three.js
