---
title: Filter
description: O componente Filter organiza opções de filtragem de forma clara e colapsável, permitindo refinar resultados com base em critérios específicos.
sidebar_position: 24
---

# Filter

O componente Filter organiza e apresenta opções de filtragem de forma clara e colapsável, permitindo que o usuário refine resultados com base em critérios específicos.

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=11617-36626&t=cQTb9S6kABOwBlKW-11

Estruturado como um Accordion (Sanfona), ele agrupa categorias de filtros que podem ser expandidas ou recolhidas conforme a necessidade. As opções dentro de cada grupo podem ser exibidas com checkboxes, quando múltiplas seleções são permitidas, ou com radio buttons, quando apenas uma opção deve ser escolhida. É ideal para interfaces com grande volume de dados, como listas, catálogos ou relatórios.

## Guidelines

### Anatomia

Os elementos que compõe o componente são:

> ⚠️ Revisar imagem: anatomia do componente Filter

### Variantes

#### Tamanho

Disponível em 2 tamanhos: LG e MD.

> ⚠️ Revisar imagem: tamanhos LG e MD do Filter

#### Estados

Segue as mesmas interações já declaradas para o Input Text (campo de texto): Input Text • Acessar documentação

> ⚠️ Revisar imagem: estados do Filter

#### Estados dos filtros

O comportamento de aberto e fechado no componente de filtro segue o padrão de Accordion, permitindo que categorias de filtros sejam expandidas ou recolhidas conforme a necessidade do usuário. Essa estrutura contribui para uma interface mais limpa e organizada, especialmente em cenários com grande volume de opções. Ao manter os grupos fechados por padrão ou após o uso, reduz-se a sobrecarga visual e facilita-se a navegação entre diferentes critérios.Accordion • Acessar documentação

> ⚠️ Revisar imagem: estados aberto e fechado do Filter

#### Tipos de filtros

No componente de filtro, o uso de Radio e Checkboxes atende a diferentes necessidades de seleção. Os Radio buttons são indicados quando o usuário deve escolher apenas uma opção dentro de um grupo mutuamente exclusivo, como em ordenações ou modos de visualização. Já os Checkboxes permitem seleções múltiplas, ideais para categorias em que mais de um critério pode ser aplicado simultaneamente, como marcas, cores ou categorias de produto. Ambos devem ser utilizados e instaciados dentro do componente de List Item. List Item • Acessar documentação Chackbox Button • Acessar documentação Radio Button • Acessar documentação

> ⚠️ Revisar imagem: tipos de filtros com Radio e Checkbox

## Specs

O componente deve seguir padrões consistentes de tamanho, espaçamento.

> ⚠️ Revisar imagem: specs de tamanho e espaçamento do Filter
