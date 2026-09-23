---
title: Accordion
description: Permite agrupar e esconder conteúdo em seções expansíveis e recolhíveis, otimizando espaço e melhorando a experiência com grandes volumes de informação.
sidebar_position: 2
---

# Accordion

Ele é usado principalmente para otimizar o uso do espaço e melhorar a experiência do usuário ao lidar com grandes volumes de informação.

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=3500-6499&t=cQTb9S6kABOwBlKW-11

## Guidelines

### Anatomia

Como é um componente do tipo Composition, sua estrutura usa elementos da biblioteca, permitindo combinações a partir dos próprios componentes e suas variações:

List Item • Acessar documentaçãoTag • Acessar documentaçãoButtons Group • Acessar documentaçãoIcons • Acessar Biblioteca

> ⚠️ Revisar imagem: anatomia do Accordion com elementos da biblioteca

### Variantes

#### Tamanho único

Disponível apenas em 1 tamanho.

> ⚠️ Revisar imagem: tamanho único do Accordion

#### Estados

Ao interagir com o componente, ele deve seguir as interações demonstradas a seguir:

> ⚠️ Revisar imagem: estados de interação do Accordion

#### Conteúdo textual básico

O conteúdo textual básico de um Accordion deve ser direto, informativo e adequado ao contexto em que está inserido. O título deve resumir claramente o assunto tratado no conteúdo expandido, permitindo que o usuário compreenda rapidamente do que se trata antes de interagir. Já o texto do corpo (slot de conteúdo) deve desenvolver a informação de forma objetiva, priorizando a clareza e a leitura rápida. É importante manter a consistência no tom de voz e na estrutura entre diferentes acordions, facilitando a navegação e a compreensão do usuário.

> ⚠️ Revisar imagem: conteúdo textual básico do Accordion

#### Slots (Content)

Sempre que o contexto de uso for muito específico, o conteúdo da interface pode ser criado localmente. No entanto, recomenda-se priorizar o uso dos componentes do Design System para evitar variações desnecessárias.O slot padrão do Accordion deve conter um conteúdo responsivo, que se ajuste à largura total do componente. Certifique-se de respeitar o espaçamento interno (padding) padrão de 16px na área de conteúdo.

> ⚠️ Revisar imagem: uso do slot padrão do Accordion

#### Substituição do conteúdo (Slot)

O componente Accordion permite que seu conteúdo interno (slot) seja substituído por diferentes estruturas, de acordo com as necessidades do produto, fluxo ou contexto específico da interface. Embora o exemplo apresentado utilize o componente Group List (Conjunto de List Item), o conteúdo pode ser livremente definido, desde que respeite os princípios de responsividade, clareza e consistência visual.A seguir, demonstramos duas possibilidades de uso do Accordion com o slot preenchido por: List Item Group • Acessar documentação

> ⚠️ Revisar imagem: substituição de conteúdo do slot com List Item Group

Esses exemplos ilustram como o slot do Accordion pode ser adaptado utilizando componentes do Design System, promovendo consistência visual e eficiência na construção da interface. No entanto, o conteúdo inserido pode e deve ser ajustado conforme a experiência e os objetivos específicos da aplicação, não se limitando ao uso do Group List.

## Specs

O componente deve seguir os padrões consistentes de tamanho e espaçamento:

> ⚠️ Revisar imagem: specs de tamanho e espaçamento do Accordion
