# Teste Front-End — Econverse

Página de vitrine de produtos desenvolvida para o teste técnico de Desenvolvedor(a) Front-End Jr da Econverse, seguindo o layout do [Figma](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1).

- **Site publicado:** https://anaclaudiasac.github.io/econverse-frontend-test/
- **Repositório:** https://github.com/AnaClaudiaSac/teste-front-end

## Tecnologias

- React 19
- TypeScript
- Vite
- Sass (SCSS)

Não foram utilizadas bibliotecas de interface (Bootstrap, Foundation etc.). Todo o layout, os componentes e os ícones foram feitos do zero.

## Funcionalidades

- **Vitrine de produtos** carregada do JSON do desafio, em carrossel com setas, 4 cards por página no desktop.
- **Modal de produto**: ao clicar em um card, abre um popup com nome, preço, descrição e foto do produto clicado, seletor de quantidade e botão de compra. Fecha pelo botão, clicando fora ou com a tecla `Escape`.
- **Layout fiel ao Figma**: medidas, cores, fontes (Poppins, Outfit e Work Sans) e ícones SVG exportados do próprio arquivo do Figma.
- **Responsivo**: desktop (1440px), tablet e celular, sem rolagem lateral.

### Pontos extras

- **HTML semântico**: `header`, `nav`, `main`, `section`, `article` e `footer`; um único `h1`; títulos de seção em `h2`.
- **SEO**: `lang="pt-BR"`, título, meta description, Open Graph e URL canônica.
- **Acessibilidade**: textos alternativos nas imagens, `aria-label` nos ícones e botões, foco visível para navegação por teclado e modal com `role="dialog"`.

## Como executar

### Pré-requisitos

- Node.js 22 ou superior
- npm 10 ou superior

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Acesse a URL exibida pelo Vite: `http://localhost:5173/econverse-frontend-test/`.

### Build de produção

```bash
npm run build
npm run preview
```

O `build` roda a checagem de tipos do TypeScript (`tsc -b`) e gera os arquivos finais em `dist/`. O `preview` serve esse build localmente.

### Testes e validação do código

```bash
npm run lint
npm run build
```

- `npm run lint` analisa o código com o oxlint.
- `npm run build` valida a tipagem do TypeScript, e falha se houver erro de tipo.

## Fonte de dados

Os produtos são carregados de:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

Esse endereço não envia os cabeçalhos de CORS, então o navegador pode bloquear a requisição quando a página roda em outro domínio (como `localhost` ou o GitHub Pages). Por isso, `src/services/products.ts` tenta primeiro a API e, se ela falhar, usa uma cópia local do mesmo JSON (`src/data/products.ts`). Assim, a vitrine e o modal funcionam sempre.

## Estrutura

```text
src/
├── components/
│   ├── BrandCarousel/   # "Navegue por marcas"
│   ├── CategoryNav/     # cards de categorias
│   ├── Footer/          # rodapé
│   ├── Header/          # faixa de benefícios, busca, ícones e menu
│   ├── Hero/            # banner principal
│   ├── Icons/           # ícones SVG exportados do Figma
│   ├── Newsletter/      # formulário de newsletter
│   ├── PartnerBanners/  # banners "Parceiros"
│   ├── ProductCard/     # card de produto
│   ├── ProductGrid/     # vitrine (título, abas e carrossel)
│   └── ProductModal/    # popup de detalhes do produto
├── data/products.ts     # cópia local do JSON (plano B)
├── services/products.ts # busca e normalização dos produtos
├── styles/              # variáveis (paleta do Figma), mixins e estilos globais
├── types/product.ts     # tipos dos produtos
├── utils/format.ts      # formatação de preço em reais
├── App.scss
└── App.tsx              # monta a página
```

Cada componente tem o seu próprio `.tsx` e `.scss` na mesma pasta.
