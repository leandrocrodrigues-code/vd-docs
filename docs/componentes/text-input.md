---
title: Text Input
description: O Text Input é um campo de entrada de texto de linha única, utilizado para capturar dados simples e objetivos do usuário como nomes, e-mails ou senhas.
sidebar_position: 44
---

# Text Input

O Text Input é um campo de entrada de texto de linha única, utilizado para capturar dados simples e objetivos do usuário, como nomes, e-mails, senhas ou valores numéricos.

## Guidelines

### Anatomia

Os elementos que compõe o componente são:

> ⚠️ Revisar imagem: anatomia do componente Text Input

### Variantes

#### Tamanho

Disponível em 2 tamanhos: LG e MD.

> ⚠️ Revisar imagem: variantes de tamanho LG e MD

#### Estados

O componente deve seguir as interações demonstradas a seguir:

> ⚠️ Revisar imagem: estados do componente Text Input

#### Sem rótulo

Placeholder não substitui rótulo, ele desaparece quando o usuário começa a digitar, fazendo com que ele perca o contexto do que estava preenchendo. Isso pode gerar confusão, especialmente em formulários longos ou quando o usuário volta para revisar. Usuários que dependem de leitores de tela podem não receber a descrição correta do campo, prejudicando a navegação. Se optar por usar somente o placeholder, ele deve ser claro, descritivo e evitar ambiguidade.

> ⚠️ Revisar imagem: exemplo de Text Input sem rótulo

#### Largura

Campos devem ser largos o suficiente para o conteúdo esperado. Caso o campo seja muito curto ou muito longo poderá prejudicar a leitura e usabilidade.

> ⚠️ Revisar imagem: exemplos de largura adequada do campo

#### Máscaras de formatação

Use máscaras de entrada (ex: CPF, datas, telefone, etc) quando o padrão for fixo. Indique o formato esperado, especialmente em campos de data, valores monetários, etc.

> ⚠️ Revisar imagem: exemplos de máscaras de formatação

#### Validações

Sempre que possível, valide as informações inseridas pelo usuário para evitar erros, retrabalho e frustrações durante a experiência. A validação eficiente melhora a qualidade dos dados e contribui para um fluxo mais seguro, claro e confiável.

> ⚠️ Revisar imagem: exemplos de validações no Text Input

#### Feedbacks de alerta

Exiba mensagens de erro claras e específicas. Evite mensagens genéricas como "Campo inválido".

> ⚠️ Revisar imagem: exemplos de feedbacks de alerta

#### Textos passivos de ajuda

Textos passivos (ou mensagens de apoio) são ideais para guiar discretamente o usuário no preenchimento de campos complexos sem interromper o fluxo, ao contrário de alertas ou validações.

> ⚠️ Revisar imagem: exemplos de textos passivos de ajuda

## Specs

### Specs

O componente deve seguir padrões consistentes de tamanho, espaçamento demonstrado abaixo:

> ⚠️ Revisar imagem: specs de tamanho e espaçamento

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=288-651&t=cQTb9S6kABOwBlKW-11

O Text Input é um dos componentes fundamentais de qualquer formulário e deve oferecer clareza, acessibilidade e resposta visual a diferentes estados (foco, erro, preenchido, etc.).

Sua estrutura compacta o torna ideal para situações em que o espaço é limitado ou a informação esperada é breve e direta.

**Diferença entre Text Input e Text Area:** O Text Input é voltado para entradas curtas e pontuais, sendo restrito a uma única linha de texto.
