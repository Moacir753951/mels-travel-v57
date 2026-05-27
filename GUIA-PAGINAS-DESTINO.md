# GUIA - Paginas de Destino (V44)

## NOVO: Paginas Individuais de Destino

### Arquivos Criados/Modificados:

| Funcionalidade | Arquivo | Descricao |
|---|---|---|
| **Dados dos destinos** | `src/data/destinationPages.ts` | Contem os 4 destinos com textos em 3 idiomas |
| **Pagina de destino** | `src/pages/DestinationPage.tsx` | Componente generico que renderiza qualquer destino |
| **Roteamento** | `src/App.tsx` | Adicionada rota `/destino/:slug` |
| **Cards da Home** | `src/sections/Destinations.tsx` | Agora linkam para `/destino/[id]` |

---

### Como funciona:

1. **Usuario clica no card** da Home (ex: "Caribe")
2. **Navegador vai para** `/#/destino/caribe`
3. **DestinationPage.tsx** le o slug da URL
4. **Busca os dados** em `destinationPages.ts`
5. **Renderiza a pagina** com imagem, titulo, resumo, etc.

---

### Estrutura de Dados (`destinationPages.ts`):

```typescript
caribe: {
  id: 'caribe',
  slug: 'caribe',
  badge: 'Caribe',
  color: '#00b4d8',
  image: 'URL_DA_IMAGEM',
  icon: 'waves',
  translations: {
    es: { title, headline, summary, metaDescription },
    pt: { title, headline, summary, metaDescription },
    en: { title, headline, summary, metaDescription },
  }
}
```

### Campos por destino:
- **headline**: Titulo grande na pagina (ex: "Sumérgete en el paraíso caribeño")
- **summary**: Texto resumo do card expandido (3-4 frases)
- **metaDescription**: Para SEO do Google

---

### Para adicionar um NOVO destino:

1. Abra `src/data/destinationPages.ts`
2. Adicione novo objeto no `destinationPagesData`
3. Siga o mesmo padrao dos 4 existentes
4. Adicione tambem o card em `src/sections/Destinations.tsx`

---

### URLs dos destinos:

| Destino | URL |
|---|---|
| Caribe | `/#/destino/caribe` |
| Brasil | `/#/destino/brasil` |
| Europa | `/#/destino/europa` |
| Corporativo | `/#/destino/corporativo` |

---

### Funcionalidades da pagina de destino:

- ✅ Imagem de fundo full-width (Hero)
- ✅ Badge colorido com icone
- ✅ Titulo e subtitulo em 3 idiomas
- ✅ Resumo expandido (mesmo texto do card + mais detalhes)
- ✅ Grid de info (Destino, Temporada)
- ✅ Botao "Volver al inicio"
- ✅ Botao "Cotizar ahora" (WhatsApp)
- ✅ Aviso "Blog detallado proximamente"
- ✅ Header com seletor de idioma
- ✅ Footer padrao
- ✅ WhatsApp Float
- ✅ Anti-traducao (`notranslate`)
- ✅ SEO dinamico (title muda por destino)
