---
title: Grid System
description: Sistema de grid do VIDA DS baseado em múltiplos de 4, com nomenclatura por tamanhos e tokens de espaçamento e border radius.
sidebar_position: 8
---

# Grid System

## Scale

### Overview

O Design System adota o múltiplo de 4 como base para garantir consistência, previsibilidade e eficiência em todas as camadas do design e do desenvolvimento. Esse sistema facilita a criação de layouts coesos, melhora a escalabilidade e reduz a complexidade na definição de estilos. O múltiplo de 4 não é apenas uma escolha estética, mas uma decisão estratégica que impacta diretamente a legibilidade, a usabilidade e a eficiência no design e desenvolvimento de produtos. Otimiza o fluxo visual e promove a escalabilidade do design, além de simplificar o desenvolvimento, já que muitos frameworks e sistemas de espaçamento seguem a mesma lógica.

### Porque múltiplo de 4?

O Grid System baseado em múltiplos de 4 é uma estrutura fundamental para organizar elementos visuais em interfaces digitais de forma consistente, flexível e previsível. Utilizando incrementos de 4 unidades (ex.: 4, 8, 12, 16, 20, etc.), esse sistema facilita o alinhamento, a criação de espaçamentos harmoniosos e a adaptação responsiva em diferentes tamanhos de tela.

> ⚠️ Revisar imagem: diagrama da lógica de múltiplos de 4

### Nomenclaturas

Utilizamos a convenção inspirada nos tamanhos de vestuário — XSM, SM, MD, LG, XLG  — para nomear escalas de medidas como espaçamentos, tamanhos de fontes, ícones e componentes. Essa nomenclatura é amplamente reconhecida, facilita a compreensão e torna a aplicação de diferentes escalas mais intuitiva, especialmente ao comparar tamanhos relativos entre si. São utilizadas ao longo de toda a construção do Design System para familiarização de consistência.

> ⚠️ Revisar imagem: tabela de nomenclaturas de tamanhos

### Tokens Fundacionais

Nem todos os múltiplos de 4 precisam ser representados como tokens na escala de espaçamento. Para estruturar melhor a hierarquia visual e garantir consistência no design, alguns valores podem ser omitidos intencionalmente da escala. Essa seleção evita excessos desnecessários, simplifica o uso dos tokens e mantém a coerência entre tamanhos.

#### 1. Spacing variables (Espaçamento)

Todos os tokens de espaçamento seguem incrementos de 4 ou 8 unidades. O objetivo é garantir margens, paddings e gaps horizontais ou verticais proporcionais e previsíveis, promovendo uma composição harmônica entre elementos.

> ⚠️ Revisar imagem: escala de spacing tokens

#### 2. Border Radius (Arredondamento de cantos)

As bordas e os cantos arredondados seguem essa mesma lógica.

> ⚠️ Revisar imagem: escala de border radius tokens

## Breakpoints

| Contexto | Largura |
| --- | --- |
| Desktop Web | 1440 |
| Delphi | 1024 |
| Tablet | 768 |
| Mobile | 768 |

> ⚠️ Revisar: confirmar breakpoints com o time
