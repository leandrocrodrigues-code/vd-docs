---
title: Card Loading
description: Composição do Card usada para indicar visualmente que uma ação ou processo está em andamento em um contexto específico da interface.
sidebar_position: 12
---

# Card Loading

## Guidelines

### Anatomia

Como é um componente Composition, sua estrutura é composta por elementos da biblioteca, permitindo combinações a partir dos próprios componentes e variações.

List Item • Acessar documentaçãoProgress Bar • Acessar documentação

> ⚠️ Revisar imagem: anatomia do card loading com list item e progress bar

### Variantes

#### Tamanho único

Disponível apenas em 1 tamanho.

> ⚠️ Revisar imagem: variante única de tamanho do card loading

#### Com progresso percentual

O Card Loading com progresso percentual deve ser utilizado quando é possível estimar com precisão o avanço de uma tarefa. Esse formato oferece ao usuário uma noção clara de quanto já foi concluído e quanto ainda falta, por meio de uma barra de progresso acompanhada de uma porcentagem visível. Ele é especialmente útil em cenários como atualizações, uploads ou sincronizações, em que o sistema consegue calcular o tempo ou os dados restantes.

> ⚠️ Revisar imagem: card loading com progresso percentual visível

#### Sem indicação percentual

Já o Card Loading sem indicação percentual é mais apropriado para operações em que o tempo ou volume restante é incerto ou variável. Nesses casos, apenas a barra de progresso é exibida, comunicando ao usuário que uma ação está em andamento, sem gerar expectativas imprecisas. Esse formato garante uma experiência mais adequada para processos assíncronos ou cuja duração depende de fatores externos.

> ⚠️ Revisar imagem: card loading sem indicação percentual apenas barra

## Specs

### Specs

O componente deve seguir os padrões consistentes de tamanho e espaçamento:

> ⚠️ Revisar imagem: specs de tamanho e espaçamento do card loading

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=12136-9161&t=cQTb9S6kABOwBlKW-11

Card Loading é uma composição do componente Card (Template) da biblioteca de Design System. É utilizado para indicar visualmente que uma ação ou processo está em andamento dentro de um contexto específico da interface. Ele oferece feedback imediato ao usuário, reforçando a percepção de que o sistema está ativo e processando uma tarefa. Pode apresentar variações com ou sem indicador percentual, dependendo da previsibilidade do tempo ou progresso da operação, garantindo flexibilidade de uso em diferentes cenários como uploads, atualizações ou sincronizações de dados.
