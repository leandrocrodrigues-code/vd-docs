---
title: Stepper
description: Elemento usado em fluxos de processo ou navegação em etapas, como formulários em múltiplas etapas ou assistentes.
sidebar_position: 39
---

# Stepper

O Stepper divide um processo complexo em partes mais simples e orientadas, permitindo que o usuário saiba onde está, o que já fez e o que precisa fazer.

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=3624-6575&t=cQTb9S6kABOwBlKW-11

## Guidelines

### Anatomia

Os elementos que compõe o componente são:

> ⚠️ Revisar imagem: anatomia do componente Stepper

### Variantes

#### Comportamento e limite de etapas

O componente Stepper suporta de 3 até 10 etapas, sendo 3 o mínimo necessário para representar um fluxo com transição, e 10 o limite máximo recomendado para preservar a legibilidade e usabilidade da interface. Quantidades superiores podem comprometer a clareza do processo e dificultar a interação do usuário. Em casos com mais de 10 passos, é recomendável reavaliar a estrutura do fluxo ou agrupar etapas em seções intermediárias.

> ⚠️ Revisar imagem: exemplos de limites de etapas do Stepper

#### Uso sem progress bar

O uso da barra de progresso é facultativo e deve ser avaliado conforme o contexto da interface. Ela é recomendada em fluxos mais longos ou quando há necessidade de indicar o tempo ou avanço de uma ação (como carregamento, envio ou conclusão de etapas). Em processos simples ou com feedback imediato, sua inclusão pode ser dispensada para evitar redundância visual ou sobrecarga na interface.

> ⚠️ Revisar imagem: Stepper sem barra de progresso

#### Estados

Ao avançar ou retroceder na experiência em que o Stepper está sendo utilizado, devem ser seguidas as interações demonstradas a seguir:

> ⚠️ Revisar imagem: estados de interação do Stepper

### Restrições de uso

#### Não utilize como indicador de status

O propósito do Stepper é guiar o usuário em um fluxo com etapas sequenciais, interativas e progressivas. Para exibir o andamento de processos passivos ou informar o status de itens (como “Em andamento”, “Aprovado”, “Concluído”), utilize componentes apropriados como badges, timelines ou trackers de status. O uso indevido do Stepper como status visual pode induzir a erro e comprometer a compreensão da interface.

> ⚠️ Revisar imagem: uso incorreto do Stepper como status

#### Não force a alterações ou crie variações não documentadas do componente

Alterações visuais ou funcionais fora do padrão definido podem comprometer a consistência, a usabilidade e a manutenção do design system. Caso uma necessidade específica surja, ela deve ser avaliada e documentada oficialmente antes de ser implementada.

> ⚠️ Revisar imagem: variações não documentadas do Stepper

## Specs

### Specs

O componente deve seguir padrões consistentes de tamanho, espaçamento e área clicável para garantir usabilidade e acessibilidade em qualquer contexto.

> ⚠️ Revisar imagem: specs de tamanho e espaçamento do Stepper
