---
title: Button
sidebar_position: 1
description: Botão de ação — hierarquias Primary, Secondary e Tertiary.
---

# Button

O Button é um dos principais elementos de interação da interface. Ele permite que os usuários executem ações, confirmem decisões e avancem em fluxos. Use **um único Primary por área** da tela — é a ação principal. As outras ações ficam em Secondary ou Tertiary.

## No Figma

https://www.figma.com/design/LO37QXwojd3vklS4R2mGqJ/VD?node-id=3624-6970

## Anatomia

Os elementos que compõem o componente são:

1. Container
2. Leading Icon
3. Label Text
4. Trailing Icon
5. State-layer

> ⚠️ Revisar imagem: diagrama de anatomia do Button com numeração dos elementos.

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

## Tamanhos

Está disponível em 3 tamanhos: Grande, Médio e Pequeno — nomeados respectivamente como LG, MD e SM.

> ⚠️ Revisar imagem: comparativo dos três tamanhos (LG, MD, SM).

## Estados

Default, Hover, Focus e Disabled. No Hover o fundo vai pro tom **Highlight** da cor e o texto fica branco (Inverse).

> ⚠️ Revisar imagem: demonstração dos estados de interação.

## Variantes de conteúdo

### Somente ícone

Botão composto apenas por um símbolo gráfico, sem texto. Usado quando o significado da ação é intuitivo pelo ícone ou quando o espaço é limitado. A escolha do ícone precisa ser clara e reconhecível.

> ⚠️ Revisar imagem: exemplos de Button somente com ícone.

### Somente rótulo

Botão apenas com palavras, sem ícones. Ideal quando a ação pode ser descrita com um termo curto no infinitivo ("Enviar", "Salvar", "Cancelar"). Foco em clareza e simplicidade.

> ⚠️ Revisar imagem: exemplos de Button somente com rótulo.

### Ícone à esquerda + rótulo

Ícone à esquerda do texto reforça a ação e deixa a interface mais intuitiva. Evite ícones que não complementem o significado da ação.

> ⚠️ Revisar imagem: exemplos de Button com leading icon.

### Ícone à direita + rótulo

O ícone à direita deve ser usado apenas como reforço visual, restrito a **setas** para indicar continuidade, expansão ou navegação externa. Ícones funcionais (editar, excluir) ficam à esquerda ou em botões só de ícone.

> ⚠️ Revisar imagem: exemplos de Button com trailing icon.

## Restrições de uso

### Excesso de ícones

Evite ícones simultâneos nas posições leading e trailing quando o botão já tem rótulo. O acúmulo visual polui a interface e dificulta a compreensão da ação principal. Priorize um ícone por elemento.

> ⚠️ Revisar imagem: exemplo do que evitar (dois ícones + label).

### Sentenças longas

Use no máximo uma a três palavras em uma única linha de texto.

> ⚠️ Revisar imagem: exemplo do que evitar (label muito longo).

## Specs

O componente segue padrões consistentes de tamanho, espaçamento e área clicável para garantir usabilidade e acessibilidade em qualquer contexto.

> ⚠️ Revisar imagem: specs de tamanho, espaçamento e área clicável.

## Código

O código pronto (Angular/POUi e Delphi) está no Storybook:

**POUi**

- [Docs](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=poui-button--docs)
- [Playground](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=poui-button--playground)
- [Kinds](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=poui-button--kinds)
- [Danger (Figma: Type=Alert)](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=poui-button--danger)
- [Success (extensão V&D)](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=poui-button--success)
- [Sizes](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=poui-button--sizes)
- [Sub-states](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=poui-button--sub-states)
- [Ícone e loading](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=poui-button--icon-and-loading)

**Delphi**

- [Docs](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=delphi-button--docs)
- [Playground](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=delphi-button--playground)
- [Variants](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=delphi-button--variants)
- [Sizes](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=delphi-button--sizes)
- [States](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=delphi-button--states)
- [Leading Icon And Caption](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=delphi-button--leading-icon-and-caption)
- [Trailing Icon And Caption](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=delphi-button--trailing-icon-and-caption)
- [Icon Only](https://leandrocrodrigues-code.github.io/vd-design-bridge/iframe.html?id=delphi-button--icon-only)

## Faça e não faça

- ✅ Texto curto e com verbo: "Salvar", "Exportar".
- ✅ Primary à direita, Secondary à esquerda.
- ❌ Dois Primary lado a lado.
- ❌ Usar Alert pra ação que não é destrutiva.
