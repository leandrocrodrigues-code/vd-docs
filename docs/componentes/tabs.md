---
title: Tabs
description: Solução de navegação horizontal que permite alternar entre seções de conteúdo relacionadas dentro de uma mesma interface.
sidebar_position: 41
---

# Tabs

O uso de Tabs só é justificado quando há pelo menos duas ou mais seções de conteúdo a serem alternadas. Com apenas uma, o componente é desnecessário. Tem a função de organizar informações de forma compacta e acessível, melhorando a escaneabilidade e evitando sobrecarga visual.

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=3635-7682&t=cQTb9S6kABOwBlKW-11

## Guidelines

### Anatomia

Os elementos que compõe o componente são:

> ⚠️ Revisar imagem: anatomia do componente Tabs

### Variantes

#### Comportamento e limite de abas

O componente Tabs foi projetado para comportar de 2 até múltiplas seções, sendo 2 o mínimo necessário para que a navegação faça sentido. Embora não exista um limite máximo definido, recomenda-se atenção especial à visibilidade dos rótulos e à encontrabilidade dos conteúdos, especialmente quando a quantidade de abas excede a largura do container, gerando rolagem horizontal. Um número elevado de abas pode comprometer a clareza da interface e prejudicar a usabilidade. Para estruturas com mais de 10 abas, recomenda-se a reorganização do conteúdo por meio de agrupamentos semânticos ou reestruturação hierárquica.

> ⚠️ Revisar imagem: comportamento e limite de abas

#### Nomeação clara e objetiva

Os rótulos utilizados nos componentes devem priorizar clareza, concisão e familiaridade com o usuário final. Evite nomes excessivamente longos ou termos técnicos pouco intuitivos, pois isso pode comprometer a compreensão rápida da interface e afetar negativamente a experiência do usuário. Recomenda-se sempre validar a nomenclatura com base no contexto de uso e nos padrões linguísticos adotados no produto.

> ⚠️ Revisar imagem: exemplos de nomeação clara em Tabs

#### Estados

Ao avançar ou retroceder na experiência em que o Stepper está sendo utilizado, devem ser seguidas as interações demonstradas a seguir:

> ⚠️ Revisar imagem: estados de interação das Tabs

### Restrições de uso

#### Não utilize como indicador de status

Tabs não devem ser usadas como trackers, indicadores de progresso ou filtro. Use Stepper, Progress tracker, Tags ou Chips conforme o contexto.

> ⚠️ Revisar imagem: uso incorreto de Tabs como status

#### Não force a alterações ou crie variações não documentadas do componente

Alterações visuais ou funcionais fora do padrão definido podem comprometer a consistência, a usabilidade e a manutenção do design system. Caso uma necessidade específica surja, ela deve ser avaliada e documentada oficialmente antes de ser implementada.

> ⚠️ Revisar imagem: variações não documentadas de Tabs

## Specs

### Specs

O componente deve seguir padrões consistentes de tamanho, espaçamento e área clicável para garantir usabilidade e acessibilidade em qualquer contexto.

> ⚠️ Revisar imagem: specs de tamanho e espaçamento das Tabs
