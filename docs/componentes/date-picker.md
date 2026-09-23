---
title: Date Picker
description: O Date Picker permite ao usuário escolher facilmente um valor de data por meio de uma interface visual de calendário interativa.
sidebar_position: 20
---

# Date Picker

O Date Picker é um componente de seleção de data que permite ao usuário escolher facilmente um valor de data por meio de uma interface visual de calendário.

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=10852-5333&t=cQTb9S6kABOwBlKW-11

Ele melhora a precisão e a experiência de uso em campos que exigem entrada de datas, evitando erros comuns de digitação ou formatação. Pode ser utilizado em diferentes contextos, como agendamentos, filtros por período, formulários e cadastros. Além da navegação pelo calendário, o Date Picker pode oferecer suporte à digitação direta, seleção de faixa de datas (range), atalhos de datas rápidas e restrições como datas mínimas ou máximas.

**Diferença entre Date Picker e Text Input com máscara de data**

Enquanto o Text Input apenas recebe a data digitada (com ou sem máscara), o Date Picker oferece uma interface interativa, que orienta o usuário visualmente na escolha do valor, reduzindo erros e aumentando a eficiência.

## Guidelines

### Anatomia

Os elementos que compõe o componente são:

> ⚠️ Revisar imagem: anatomia do Date Picker

### Variantes

#### Tamanho

Disponível em 2 tamanhos: LG e MD.

> ⚠️ Revisar imagem: tamanhos LG e MD do Date Picker

#### Estados

Segue as mesmas interações já declaradas para o Input Text (campo de texto): Input Text • Acessar documentação

> ⚠️ Revisar imagem: estados do Date Picker

#### Seleção de uma única data

Permite ao usuário escolher uma data específica em um calendário. Ideal para ações pontuais como agendar compromissos, definir prazos ou selecionar datas de emissão. Esse tipo de seleção é comum em formulários simples ou campos de data únicos.

> ⚠️ Revisar imagem: Date Picker com seleção de data única

#### Seleção de um intervalo no mesmo mês

Permite ao usuário selecionar um período contínuo dentro do mesmo mês, escolhendo uma data de início e uma data de fim. É útil quando a operação exige um intervalo curto e o escopo temporal está restrito ao mês atual, como lançamentos financeiros semanais ou reservas internas.

> ⚠️ Revisar imagem: Date Picker com intervalo no mesmo mês

#### Seleção de intervalo entre dois meses

Permite a seleção de um período contínuo que se estende entre dois ou mais meses. Ideal para consultas, relatórios ou operações que envolvem datas cruzando meses, como períodos fiscais, campanhas promocionais ou auditorias. Deve-se atentar para o alinhamento da caixa do Calendário, siga sempre o alinhamento do campo e qual posição ele será exibido na tela.

> ⚠️ Revisar imagem: Date Picker com intervalo entre dois meses

## Specs

O componente deve seguir padrões consistentes de tamanho, espaçamento.

> ⚠️ Revisar imagem: specs de tamanho e espaçamento do Date Picker
