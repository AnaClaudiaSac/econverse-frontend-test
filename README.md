# Teste Front-End — Econverse

Projeto desenvolvido para o teste técnico de Desenvolvedor(a) Front-End da Econverse.

## Tecnologias

- React 19
- TypeScript
- Vite
- Sass (SCSS)

Não foram utilizadas bibliotecas de interface.

## Funcionalidades

- Vitrine de produtos consumida a partir do endpoint disponibilizado no desafio.
- Cards de produto reutilizáveis e responsivos.
- Modal de detalhes ao selecionar um produto.
- Fechamento do modal por botão, clique fora da janela ou tecla `Escape`.
- Estrutura semântica, metadados básicos de SEO e foco visível para navegação por teclado.

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

Acesse a URL exibida pelo Vite, geralmente `http://localhost:5173`.

### Build de produção

```bash
npm run build
```

### Validar código

```bash
npm run lint
```

## Fonte de dados

Os produtos são carregados de:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

## Estrutura principal

```text
src/
├── components/
│   ├── ProductCard/
│   ├── ProductGrid/
│   └── ProductModal/
├── services/products.ts
├── styles/
├── types/product.ts
├── App.scss
└── App.tsx
```
