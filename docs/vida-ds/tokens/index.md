---
title: Tokens
sidebar_label: Visão geral
description: Tokens brutos do Vida DS e como consumir no seu projeto.
sidebar_position: 0
---

# Tokens

Os **tokens** são a fonte da verdade das decisões visuais do Vida DS: cores, tipografia, espaçamento, raio, dimensões. Vivem em JSON, exportados do Figma, e alimentam tanto a documentação quanto o código dos componentes (POUi, Delphi).

## Onde ficam

No repositório, em [`/tokens`](https://github.com/leandrocrodrigues-code/vd-docs/tree/main/tokens):

| Arquivo | O que tem |
|---|---|
| `colors.json` | Paleta Light (superfície, conteúdo, feedback, gráfico, marca) |
| `colors.dark.override.json` | Overrides do modo Dark (só o que muda em relação ao Light) |
| `typography.json` | Família, pesos, tamanhos e altura de linha |
| `spacing.json` | Escala de espaçamento (`3xsm`, `2xsm`, ..., `2xlg`) |
| `radius.json` | Escala de raio de borda |
| `sizing.json` | Dimensões (ex.: altura de Button, área clicável mínima) |

## Como consumir no código

**CSS — variáveis já expostas globalmente**

Cada token de cor vira uma variável CSS com prefixo `--vd-color-...`. Por exemplo:

```css
.meu-botao {
  background-color: var(--vd-color-brand-pure);
  color: var(--vd-color-on-brand);
}
```

A lista completa das variáveis está em [Estilos → Cores](../estilos/cores).

**Angular / POUi**

Os componentes já vêm com os tokens aplicados via SCSS. Você não precisa importar nada extra — o [vd-design-bridge](https://github.com/leandrocrodrigues-code/vd-design-bridge) faz essa ponte.

**Delphi**

Os tokens de cor viram entradas no `.dfm` da form (background, font color). Consulte o Storybook Delphi pros exemplos aplicados.

## Atualizar os tokens

O fluxo hoje é:

1. Time de design ajusta as Variables no Figma
2. Sincroniza pro repo `vd-design-bridge/tokens`
3. Copia os JSONs alterados pra `/tokens` desta documentação
4. `npm run build` regera as páginas de Estilos

Um workflow automático (Figma → vd-design-bridge → vd-docs) é uma pendência.
