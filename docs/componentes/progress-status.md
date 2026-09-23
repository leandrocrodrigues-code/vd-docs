---
title: Progress Status
description: Representa visualmente o avanço de um processo sequencial com marcadores, ícones de status e etiquetas auxiliares em fluxos operacionais.
sidebar_position: 33
---

# Progress Status

É utilizado para representar visualmente o avanço de um processo sequencial, como fluxos de aprovação, etapas de cadastro ou jornadas operacionais em sistemas de gestão. Ele combina marcadores de progresso com ícones de status, textos descritivos e etiquetas auxiliares, facilitando a compreensão do estágio atual e das etapas já concluídas ou pendentes. Com um layout vertical claro e escalável, esse componente contribui para a transparência do processo e melhora a experiência do usuário ao fornecer contexto e direcionamento ao longo da execução de tarefas

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=12275-21249&t=cQTb9S6kABOwBlKW-11

## Guidelines

### Anatomia

Como é um componente do tipo Composition, sua estrutura usa elementos da biblioteca, permitindo combinações a partir dos próprios componentes e suas variações:

Section Header • Acessar documentaçãoList Item • Acessar documentaçãoTag • Acessar documentaçãoButtons Group • Acessar documentação Icons • Acessar Biblioteca

> ⚠️ Revisar imagem: anatomia do Progress Status com elementos da biblioteca

### Variantes

#### Tamanho único

Disponível apenas em 1 tamanho.

> ⚠️ Revisar imagem: tamanho único do Progress Status

#### Estados

Os estados do componente Progress Tracker refletem visualmente o status de cada etapa dentro de um fluxo contínuo e possivelmente assíncrono. As etapas podem estar em diferentes condições como: Feedbacks (Success, Warning e Alert); Em andamento (Current); Pendente ou Próximo (Next) e Bloqueada (Disabled), exibida com um ícone de cadeado e estilo atenuado. Esses estados são essenciais para comunicar de forma clara e imediata ao usuário o que já foi feito, o que está em execução e o que ainda não pode ser acessado, promovendo orientação e previsibilidade em jornadas longas ou complexas.

> ⚠️ Revisar imagem: estados de cada etapa do Progress Status

#### Feedbacks

O componente Progress Tracker pode assumir diferentes tipos de feedback como success, warning, alert e disabled, que comunicam de forma clara o status de cada etapa dentro de um fluxo ou processo. Esses estados visuais não são apenas decorativos, mas fundamentais para guiar o usuário corretamente. Por exemplo, quando um passo assume o estado de alerta ou bloqueado (disabled), é essencial que os passos seguintes também reflitam essa condição, indicando que o fluxo está impedido de prosseguir até que o problema seja resolvido. Esse tipo de sinalização ajuda a prevenir erros, reduz frustração e melhora a usabilidade ao tornar as limitações do sistema explícitas. Cada tipo de feedback deve ser utilizado de forma coerente com a lógica do negócio, reforçando tanto a transparência da interface quanto a confiança do usuário na jornada que está realizando.

> ⚠️ Revisar imagem: tipos de feedback aplicados ao Progress Status

#### Estampas de data e estimativas

Fornecer estimativas de tempo e estampas de data para cada etapa em um Progress Tracker é fundamental para estabelecer transparência e previsibilidade na jornada do usuário. Essas informações ajudam a gerenciar expectativas, reduzir a ansiedade em processos demorados e fornecem contexto claro sobre o andamento e a duração de cada fase. Além disso, permitem identificar gargalos operacionais e oferecem suporte a uma comunicação mais eficiente com clientes ou usuários internos, facilitando diagnósticos e tomadas de decisão. Em fluxos longos ou com dependências externas, o uso de estimativas e registros temporais contribui significativamente para uma experiência mais confiável e orientada.

> ⚠️ Revisar imagem: estampas de data e estimativas por etapa

#### Ações e continuidade da experiência

Garantir a continuidade da experiência do usuário, especialmente diante de erros ou impedimentos, é um dos pilares das heurísticas de usabilidade de Nielsen. Fornecer ações claras, mensagens compreensíveis e caminhos de recuperação direta não apenas evita frustrações, mas reforça a confiança do usuário no sistema. Quando o usuário encontra obstáculos, é essencial que a interface o oriente com feedbacks úteis, sugestões corretivas e oportunidades de retomar o fluxo desejado com o mínimo de atrito possível.

> ⚠️ Revisar imagem: ações e continuidade da experiência ao usuário

## Specs

O componente deve seguir os padrões consistentes de tamanho e espaçamento:

> ⚠️ Revisar imagem: specs de tamanho e espaçamento do Progress Status
