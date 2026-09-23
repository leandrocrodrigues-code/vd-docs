---
title: Card Uploader
description: Composição do Card que facilita o envio de arquivos com estados informativos para cada etapa do processo de upload.
sidebar_position: 14
---

# Card Uploader

## Guidelines

### Anatomia

Como é um componente Composition, sua estrutura é composta por elementos da biblioteca, permitindo combinações a partir dos próprios componentes e variações.

List Item • Acessar documentaçãoProgress Bar • Acessar documentação

> ⚠️ Revisar imagem: anatomia do card uploader com list item e progress bar

### Variantes

#### Tamanho único

Disponível apenas em 1 tamanho.

> ⚠️ Revisar imagem: variante única de tamanho do card uploader

#### Estados

O Card Uploader possui três estados principais que orientam o usuário ao longo da jornada de envio de arquivos. No estado Default, o componente exibe instruções claras para seleção ou arraste de arquivos, informando os formatos aceitos e o tamanho máximo permitido. Durante o Uploading, uma barra de progresso acompanha visualmente o carregamento, enquanto um botão de cancelamento permite interromper a ação se necessário. Após o envio, no estado Uploaded, os arquivos são listados com informações como nome, extensão e tamanho, além de oferecer ações rápidas como visualizar ou remover cada item.

> ⚠️ Revisar imagem: estados default, uploading e uploaded do card uploader

#### Feedback

O feedback de erro do Card Upload tem como objetivo informar de forma clara e imediata que houve uma falha no envio do arquivo. Ele utiliza um alerta visual destacado com ícone, mensagem objetiva e ação corretiva sugerida, como o botão "Tentar novamente". Essa estrutura orienta o usuário sobre o problema ocorrido e oferece um caminho rápido para resolução, minimizando frustração e mantendo o fluxo da experiência.

> ⚠️ Revisar imagem: feedback de erro do card uploader

## Specs

### Specs

O componente deve seguir os padrões consistentes de tamanho e espaçamento:

> ⚠️ Revisar imagem: specs de tamanho e espaçamento do card uploader

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=12132-8593&t=cQTb9S6kABOwBlKW-11

Card Uploader é uma composição do componente Card (Template) da biblioteca de Design System do WinThor. Serve para facilitar o envio de arquivos dentro de interfaces digitais. Ele apresenta estados claros e informativos para cada etapa do processo, desde a seleção ou arraste do arquivo, passando pelo carregamento com barra de progresso, até mensagens de erro com ações sugeridas e a listagem dos arquivos enviados.
