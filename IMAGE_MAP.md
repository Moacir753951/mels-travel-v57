# ════════════════════════════════════════════════════════════════
# 🖼️ IMAGE MAP - Mel's Travel
# Mapa completo de todas as imagens do site
# ════════════════════════════════════════════════════════════════
#
# INSTRUÇÕES PARA OUTRO AGENTE:
# 1. Todas as imagens DEVEM ficar em: public/images/
# 2. Use SEMPRE caminhos relativos: "/images/..." em vez de URLs externas
# 3. Formato ideal: JPG para fotos, PNG para logos/icons
# 4. Tamanho ideal: 1200px largura para cards, 1920px para hero
#
# ════════════════════════════════════════════════════════════════

## 📁 ESTRUTURA DE PASTAS

```
public/images/
├── home/           # Cards da página inicial (4 imagens)
│   ├── caribe.jpg
│   ├── brasil.jpg
│   ├── europa.jpg
│   └── negocios.jpg
│
├── categories/     # Modal de sub-destinos (24 imagens)
│   ├── caribe/
│   │   ├── punta-cana.jpg
│   │   ├── cancun.jpg
│   │   ├── riviera-maya.jpg
│   │   ├── jamaica.jpg
│   │   ├── cuba.jpg
│   │   └── aruba.jpg
│   ├── brasil/
│   │   ├── florianopolis.jpg
│   │   ├── bombinhas.jpg
│   │   ├── buzios.jpg
│   │   ├── rio-de-janeiro.jpg
│   │   ├── balneario-camboriu.jpg
│   │   └── fernando-de-noronha.jpg
│   ├── europa/
│   │   ├── paris.jpg
│   │   ├── roma.jpg
│   │   ├── madrid.jpg
│   │   ├── barcelona.jpg
│   │   ├── lisboa.jpg
│   │   └── suiza.jpg
│   └── negocios/
│       ├── miami-corporativo.jpg
│       ├── panama-corporativo.jpg
│       ├── sao-paulo-corporativo.jpg
│       ├── buenos-aires-corporativo.jpg
│       ├── santiago-corporativo.jpg
│       └── eventos-incentivo.jpg
│
├── pages/          # Background hero das páginas de destino (4 imagens)
│   ├── caribe.jpg      (1920px)
│   ├── brasil.jpg      (1920px)
│   ├── europa.jpg      (1920px)
│   └── negocios.jpg    (1920px)
│
├── logo/
│   └── logo.png        (ícone do site)
│
└── destinations/     # Game Travel destinations (64 imagens)
    ├── solo/
    ├── couple/
    └── friends/
```

## 🏠 HOME CARDS (src/sections/Destinations.tsx)

| Card | Arquivo Local | Formato | Uso |
|------|--------------|---------|-----|
| Caribe | `/images/home/caribe.jpg` | JPG | Card na Home + Hero da página |
| Brasil | `/images/home/brasil.jpg` | JPG | Card na Home + Hero da página |
| Europa | `/images/home/europa.jpg` | JPG | Card na Home + Hero da página |
| Negocios | `/images/home/negocios.jpg` | JPG | Card na Home + Hero da página |

## 📂 CATEGORY MODALS (src/data/categoryDestinations.ts)

### Caribe
| Sub-destino | Arquivo Local | Formato |
|-------------|--------------|---------|
| Punta Cana | `/images/categories/caribe/punta-cana.jpg` | JPG |
| Cancún | `/images/categories/caribe/cancun.jpg` | JPG |
| Riviera Maya | `/images/categories/caribe/riviera-maya.jpg` | JPG |
| Jamaica | `/images/categories/caribe/jamaica.jpg` | JPG |
| Cuba | `/images/categories/caribe/cuba.jpg` | JPG |
| Aruba | `/images/categories/caribe/aruba.jpg` | JPG |

### Brasil
| Sub-destino | Arquivo Local | Formato |
|-------------|--------------|---------|
| Florianópolis | `/images/categories/brasil/florianopolis.jpg` | JPG |
| Bombinhas | `/images/categories/brasil/bombinhas.jpg` | JPG |
| Búzios | `/images/categories/brasil/buzios.jpg` | JPG |
| Río de Janeiro | `/images/categories/brasil/rio-de-janeiro.jpg` | JPG |
| Balneário Camboriú | `/images/categories/brasil/balneario-camboriu.jpg` | JPG |
| Fernando de Noronha | `/images/categories/brasil/fernando-de-noronha.jpg` | JPG |

### Europa
| Sub-destino | Arquivo Local | Formato |
|-------------|--------------|---------|
| París | `/images/categories/europa/paris.jpg` | JPG |
| Roma | `/images/categories/europa/roma.jpg` | JPG |
| Madrid | `/images/categories/europa/madrid.jpg` | JPG |
| Barcelona | `/images/categories/europa/barcelona.jpg` | JPG |
| Lisboa | `/images/categories/europa/lisboa.jpg` | JPG |
| Suiza | `/images/categories/europa/suiza.jpg` | JPG |

### Negocios
| Sub-destino | Arquivo Local | Formato |
|-------------|--------------|---------|
| Miami | `/images/categories/negocios/miami-corporativo.jpg` | JPG |
| Ciudad de Panamá | `/images/categories/negocios/panama-corporativo.jpg` | JPG |
| São Paulo | `/images/categories/negocios/sao-paulo-corporativo.jpg` | JPG |
| Buenos Aires | `/images/categories/negocios/buenos-aires-corporativo.jpg` | JPG |
| Santiago | `/images/categories/negocios/santiago-corporativo.jpg` | JPG |
| Eventos e Incentivos | `/images/categories/negocios/eventos-incentivo.jpg` | JPG |

## 📄 DESTINATION PAGES (src/data/destinationRoutes.ts)

| Página | Background Hero | Formato | Resolução |
|--------|----------------|---------|-----------|
| Caribe | `/images/pages/caribe.jpg` | JPG | 1920px |
| Brasil | `/images/pages/brasil.jpg` | JPG | 1920px |
| Europa | `/images/pages/europa.jpg` | JPG | 1920px |
| Negocios | `/images/pages/negocios.jpg` | JPG | 1920px |

## 🎮 GAME TRAVEL DESTINATIONS (src/data/destinations.ts)

As imagens do Game Travel usam o objeto `images` em `destinations.ts`.
Para converter para local, altere cada URL do formato:
```
https://images.unsplash.com/photo-XXXXX?...
```
Para:
```
/images/destinations/{solo|couple|friends}/{slug}.jpg
```

### Exemplo de conversão:
- `images.kyoto` → `/images/destinations/solo/kioto.jpg`
- `images.paris` → `/images/destinations/couple/paris.jpg`
- `images.rio` → `/images/destinations/friends/rio-de-janeiro.jpg`

## 🔄 COMO ATUALIZAR O CÓDIGO

### Passo 1: Encontre a URL externa no código
```typescript
image: 'https://images.unsplash.com/photo-123456?w=800'
```

### Passo 2: Baixe a imagem para a pasta correta
```bash
curl -o public/images/categories/caribe/punta-cana.jpg "https://images.unsplash.com/photo-123456?w=800"
```

### Passo 3: Altere a referência no código
```typescript
// ANTES:
image: 'https://images.unsplash.com/photo-123456?w=800'
// DEPOIS:
image: '/images/categories/caribe/punta-cana.jpg'
```

## ✅ CHECKLIST DE ARQUIVOS PARA ATUALIZAR

- [ ] `src/sections/Destinations.tsx` - Home cards (4 imagens)
- [ ] `src/data/categoryDestinations.ts` - Modal sub-destinos (24 imagens)
- [ ] `src/data/destinationRoutes.ts` - Page backgrounds (28 imagens)
- [ ] `src/data/destinations.ts` - Game Travel (60+ imagens)
- [ ] `src/sections/Hero.tsx` - Hero background (se houver)
- [ ] `index.html` - Favicon (se houver URL externa)

## 🚨 IMAGENS AINDA EXTERNAS (para baixar)

Para ver quais URLs ainda são externas, execute:
```bash
grep -r "https://images.unsplash.com" src/ | wc -l
grep -r "https://i.ibb.co" src/ | wc -l
```

## 📝 SCRIPT DE DOWNLOAD

Execute `./download-images.sh` na raiz do projeto para baixar todas as imagens principais.
