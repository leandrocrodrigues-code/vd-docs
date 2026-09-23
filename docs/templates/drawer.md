---
title: Drawer (Template)
description: Template flexível que organiza conteúdo em header, content e actions, funcionando como contêiner modular para ações contextuais.
sidebar_position: 2
---

# Drawer (Template)

## Guidelines

## Anatomia

Como é um componente do tipo Template, sua estrutura é composta por elementos da biblioteca, permitindo combinações a partir dos próprios componentes e variações.

> ⚠️ Revisar imagem: anatomia do Drawer com slots identificados

## Variantes

### Tamanho único

Disponível apenas em 1 tamanho.

> ⚠️ Revisar imagem: Drawer em seu tamanho único

### Semântica do Template

O Drawer (Template) é estruturado em três áreas semânticas principais: Header, Content e Action. Cada uma dessas regiões funciona como um slot flexível, permitindo a substituição por outros componentes do Design System conforme o contexto e a necessidade da interface. Por exemplo, o slot de Header pode receber um Section Header, o de Content pode incorporar um ou mais List Items, enquanto o de Action pode incluir Button Groups ou outros controles. Essa modularidade garante maior reutilização, personalização e consistência visual, mantendo a coerência semântica entre as aplicações.

> ⚠️ Revisar imagem: slots semânticos Header, Content e Action

### Margens e espaçamento

**Atenção! As margens do Drawer não podem ser alteradas.** Os espaçamentos entre os slots (header, content e actions) podem ser definidas pela escala do Design System. Consulte a seção **Fundamentals** para mais informações.

> ⚠️ Revisar imagem: margens fixas e espaçamento entre slots

## Specs

## Specs

O componente deve seguir os padrões consistentes de tamanho e espaçamento:

> ⚠️ Revisar imagem: specs de tamanho e espaçamento do Drawer

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=12316-13613&t=cQTb9S6kABOwBlKW-11

É um componente Template da biblioteca de Design System. O Drawer (Template) é uma estrutura flexível que organiza o conteúdo em três áreas principais: header, content e actions. Ele funciona como um contêiner modular, permitindo que diferentes componentes do Design System, como Section Header, List Item, Button Groups ou Feedbacks, sejam inseridos em seus slots de forma intercambiável. Essa abordagem facilita a construção de layouts reutilizáveis, consistentes e responsivos, mantendo a hierarquia visual e a lógica de espaçamento definidas pelo sistema de design. Ideal para ações contextuais, o Drawer se adapta a diferentes cenários, desde a exibição de feedbacks até a realização de ações dentro do mesmo fluxo e contexto da tela.
