---
title: Button
sidebar_position: 1
description: Botão de ação — hierarquias Primary, Secondary e Tertiary.
---

# Button

Botões disparam uma ação. Use **um único Primary por área** da tela — é a ação principal. As outras ações ficam em Secondary ou Tertiary.

## No Figma

https://www.figma.com/design/LO37QXwojd3vklS4R2mGqJ/VD?node-id=3624-6970

## Hierarquia

| Hierarquia | Quando usar |
|---|---|
| Primary | Ação principal da tela ou do bloco (ex.: Salvar, Confirmar). Fica sempre à direita. |
| Secondary | Ação alternativa, ao lado da principal (ex.: Cancelar, Exportar). Fica à esquerda do Primary. |
| Tertiary | Ação de menor peso, geralmente dentro de conteúdo. |

## Tipos

- **Brand** — padrão.
- **Alert** — ações destrutivas (Excluir, Remover).
- **Success** — confirmações positivas. No POUi é uma extensão nossa (classe CSS), não um tipo nativo.

## Estados

Default, Hover, Focus e Disabled. No Hover o fundo vai pro tom **Highlight** da cor e o texto fica branco (Inverse).

## Código

O código pronto (Angular/POUi e Delphi) está no Storybook:

- [POUi / Button](https://leandrocrodrigues-code.github.io/vd-design-bridge/?path=/docs/componentes-poui-button--docs)
- [Delphi / Button](https://leandrocrodrigues-code.github.io/vd-design-bridge/?path=/docs/componentes-delphi-button--docs)

## Faça e não faça

- ✅ Texto curto e com verbo: "Salvar", "Exportar".
- ✅ Primary à direita, Secondary à esquerda.
- ❌ Dois Primary lado a lado.
- ❌ Usar Alert pra ação que não é destrutiva.
