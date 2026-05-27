# GUIA DO PROGRAMADOR - Mel's Travel v43
## Onde encontrar cada seção do projeto

---

## 1. DESTINOS DA HOME (Pagina Inicial)

**Arquivo:** `src/sections/Destinations.tsx`
**Linhas:** 1 a 239

### Estrutura:

```
Linha 12-72  -> TRADUCOES (es/pt/en)
                - title: titulo da secao
                - subtitle: subtitulo da secao
                - cards[]: array com 4 cards de destinos

Linha 73-85  -> ARRAY cards (dados de cada card)
                - caribe: Card do Caribe
                - brasil: Card do Brasil
                - europa: Card da Europa
                - corporativo: Card Corporativo
                Cada card tem: id, badge, title, description, image, icon, color

Linha 87-239 -> COMPONENTE JSX (renderizacao visual)
                - Secao HTML com gradient-mesh
                - Grid de 4 cards (1 coluna mobile, 2 tablet, 4 desktop)
                - Cada card: imagem, badge, titulo, descricao, link "Ver mais"
```

### Para editar um card da Home:
Localize o array `translations.[idioma].cards` na linha ~16.
Cada card tem esta estrutura:
```typescript
{
  id: 'caribe',           // ID usado para abrir o modal
  badge: 'Caribe',        // Etiqueta colorida no topo
  title: 'Caribe',        // Titulo do card
  description: '...',     // Texto descritivo
  image: 'URL',           // URL da imagem de fundo
  icon: Waves,            // Icone do Lucide
  color: '#00b4d8',       // Cor do badge
}
```

---

## 2. DESTINOS DO GAME TRAVEL

**Arquivo:** `src/data/destinations.ts`
**Linhas:** 1 a 850

### Estrutura:

```
Linha 23-35   -> INTERFACE TypeScript (tipagem dos dados)
                 Define a estrutura de cada destino

Linha 37-330  -> ARRAY destinos SOLO (20 destinos)
                 Variavel: allSoloDestinations
                 Destinos para viajantes sozinhos

Linha 332-600 -> ARRAY destinos COUPLE (20 destinos)
                 Variavel: allCoupleDestinations
                 Destinos para casais

Linha 602-830 -> ARRAY destinos FRIENDS (20 destinos)
                 Variavel: allFriendsDestinations
                 Destinos para grupos de amigos

Linha 832-848 -> TRADUCOES da interface do Game Travel
                 Variavel: uiTranslations
                 Textos dos botoes e labels (es/pt/en)
```

### Estrutura de cada destino:
```typescript
{
  id: 'tokyo-solo',           // ID unico
  city: 'Tokio',              // Nome da cidade
  country: 'Japao',           // Nome do pais
  coords: { lat: 35.6762, lng: 139.6503 },  // Coordenadas para o globo
  season: {                   // Melhor epoca (3 idiomas)
    es: 'Primavera y otono',
    pt: 'Primavera e outono',
    en: 'Spring and autumn'
  },
  activities: {               // Atividades (3 idiomas)
    es: ['Templos', 'Gastronomia', 'Tecnologia'],
    pt: ['Templos', 'Gastronomia', 'Tecnologia'],
    en: ['Temples', 'Food', 'Technology']
  },
  whyGo: {                    // Por que ir (3 idiomas)
    es: 'Cultura milenaria...',
    pt: 'Cultura milenar...',
    en: 'Ancient culture...'
  },
  mode: 'solo'                // Categoria (solo/couple/friends)
}
```

### Para adicionar um novo destino:
1. Escolha a categoria (solo/couple/friends)
2. Localize o array correspondente (ex: `allSoloDestinations`)
3. Adicione um novo objeto seguindo a estrutura acima
4. Certifique-se de ter as traducoes nos 3 idiomas

---

## 3. PAGINA DO GAME TRAVEL

**Arquivo:** `src/pages/GameTravel.tsx`
**Linhas:** 1 a 902

### Estrutura:

```
Linha 1-70    -> IMPORTS + COMENTARIO de copyright

Linha 72-215  -> COMPONENTES AUXILIARES
                 - LanguageSwitcher (seletor de idioma)
                 - ShareButton (botao de compartilhar)
                 - WhatsAppQuoteButton (botao de cotacao)
                 - AirplaneAnimation (animacao do aviao)
                 - DestinationCard (card de resultado)
                 - ModeButton (botao de modo)
                 - LoadingSpinner (loading)

Linha 218-235 -> HOOK useIsMobile (detecta mobile)

Linha 237-610 -> COMPONENTE PRINCIPAL GameTravel
                 - Estados: gameState, selectedMode, destination, lang
                 - Funcao getModeIcon: retorna icone do modo
                 - Funcao handleModeSelect: seleciona modo e inicia sorteio
                 - Funcao handleAirplaneComplete: mostra resultado
                 - Funcao handleSpinAgain: reseta para novo sorteio
                 - Funcao handleLangChange: troca idioma

Linha 612-902 -> RENDERIZACAO (JSX)
                 - Header com botao voltar + seletor de idioma
                 - Estado 'menu': Tela inicial com titulo + 3 botoes de modo
                 - Estado 'spinning': Globo 3D girando rapidamente
                 - Estado 'result': Card com destino sorteado + botoes
                 - Footer com "Game Travel by Mel's Travel"
                 - Watermark no canto inferior direito
```

---

## 4. GLOBO 3D

**Arquivo:** `src/components/Globe3D.tsx`
**Linhas:** ~260 linhas

### Estrutura:

```
Inicio         -> IMPORTS Three.js + React Three Fiber

Globe3D        -> Componente principal
                  - Detecta mobile e suporte a WebGL
                  - Se mobile ou sem WebGL: renderiza CSSGlobe
                  - Se desktop com WebGL: renderiza Three.js globe

CSSGlobe       -> Globo CSS para mobile (SVG)
                  - Globo animado com continentes em SVG
                  - Mais leve para dispositivos moveis

GlobeScene     -> Cena Three.js (desktop)
                  - Esfera com textura de terra
                  - Nuvens animadas
                  - Estrelas no fundo
                  - Rotacao animada
```

---

## 5. MODAL DE DESTINOS (Home)

**Arquivo:** `src/components/DestinationModal.tsx`

### Funcao:
Abre quando usuario clica em um card da Home.
Mostra detalhes do destino: imagens, descricao, atracoes, etc.

---

## 6. TRADUCOES DO SITE

### Home (Header, Hero, Destinations, Services, Contact, Footer):
**Arquivo:** Cada secao tem seu proprio objeto `translations` no topo do arquivo.

### Game Travel:
**Arquivo:** `src/data/destinations.ts` (linhas 832-848)
**Variavel:** `uiTranslations`
```
es -> Espanhol (padrao)
pt -> Portugues
en -> Ingles
```

---

## 7. RESUMO DOS ARQUIVOS PRINCIPAIS

| Funcionalidade | Arquivo | Linhas |
|---|---|---|
| Cards de destinos (Home) | `src/sections/Destinations.tsx` | 1-239 |
| Dados dos 60 destinos | `src/data/destinations.ts` | 37-830 |
| Traducoes do Game Travel | `src/data/destinations.ts` | 832-848 |
| Pagina do Game Travel | `src/pages/GameTravel.tsx` | 1-902 |
| Globo 3D / CSS | `src/components/Globe3D.tsx` | 1-260 |
| Modal de destinos | `src/components/DestinationModal.tsx` | 1-~200 |
| Componente principal | `src/App.tsx` | 1-~200 |
| Estilos globais | `src/index.css` | 1-~350 |
| HTML + SEO | `index.html` | 1-~60 |

---

## 8. COMO ADICIONAR UM NOVO DESTINO AO GAME TRAVEL

### Passo 1: Escolha a categoria
- **Solo**: `allSoloDestinations` (linha ~37)
- **Couple**: `allCoupleDestinations` (linha ~332)
- **Friends**: `allFriendsDestinations` (linha ~602)

### Passo 2: Adicione o objeto
```typescript
{
  id: 'nome-da-cidade-modo',
  city: 'Nome da Cidade',
  country: 'Pais',
  coords: { lat: 0.0000, lng: 0.0000 },
  season: {
    es: 'Epoca em espanhol',
    pt: 'Epoca em portugues',
    en: 'Season in english'
  },
  activities: {
    es: ['Atividade 1', 'Atividade 2', 'Atividade 3'],
    pt: ['Atividade 1', 'Atividade 2', 'Atividade 3'],
    en: ['Activity 1', 'Activity 2', 'Activity 3']
  },
  whyGo: {
    es: 'Descricao em espanhol...',
    pt: 'Descricao em portugues...',
    en: 'Description in english...'
  },
  mode: 'solo'  // ou 'couple' ou 'friends'
}
```

### Passo 3: Encontre as coordenadas no Google Maps
Clique direito na cidade -> "O que ha aqui?" -> copie lat/lng

---

## 9. ORDEM DE RENDERIZACAO DA HOME

O App.tsx renderiza as secoes nesta ordem:
1. **Header** (`src/sections/Header.tsx`)
2. **Hero** (`src/sections/Hero.tsx`) -> Secao principal com titulo animado
3. **Destinations** (`src/sections/Destinations.tsx`) -> **CARDS DE DESTINOS**
4. **Services** (`src/sections/Services.tsx`) -> Servicos da agencia
5. **Contact** (`src/sections/Contact.tsx`) -> Formularios e FAQ
6. **Footer** (`src/sections/Footer.tsx`) -> Rodape

---

## 10. IDIOMAS DO SITE

### Padrao: Espanhol (es)
O site sempre inicia em espanhol: `currentLang = 'es'`

### Disponiveis:
- `es` -> Espanhol (padrao)
- `pt` -> Portugues
- `en` -> Ingles

### Onde mudar:
- **Header**: `src/sections/Header.tsx` (botoes ES/PT/EN no topo)
- **Game Travel**: `src/pages/GameTravel.tsx` (LanguageSwitcher no header)

### Anti-traducao:
O site tem protecao contra traducao automatica:
- `<html lang="es" class="notranslate" translate="no">`
- `<meta name="google" content="notranslate">`
- Elementos criticos tem `class="notranslate"`
