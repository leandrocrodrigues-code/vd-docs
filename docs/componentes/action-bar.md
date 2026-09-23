---
title: Action Bar
description: Reúne ações relacionadas ao controle e manipulação de conteúdos em listas, tabelas, formulários ou áreas com múltiplos itens.
sidebar_position: 3
---

# Action Bar

Ela pode conter elementos como campo de busca, botões primários e secundários, informações contextuais (ex: número de itens encontrados) e outras ações auxiliares como filtros, ordenações ou seleção em massa.

## Overview

https://www.figma.com/design/CKUcFnQotY9rWVBfOUtxq8/Winthor---UI-KIT-Delphi--Evolu%C3%A7%C3%A3o--Pr%C3%A9-publica%C3%A7%C3%A3o-?node-id=12198-51636&t=cQTb9S6kABOwBlKW-11

## Guidelines

### Anatomia

Como é um componente do tipo Composition, sua estrutura usa elementos da biblioteca, permitindo combinações a partir dos próprios componentes e suas variações:

Search • Acessar documentaçãoDropdown • Acessar documentaçãoButton • Acessar documentaçãoIcon • Acessar biblioteca

> ⚠️ Revisar imagem: anatomia da Action Bar com elementos da biblioteca

### Variantes

#### Tamanho

Está disponível em 2 tamanhos: Médio e Pequeno nomeados respectivamente como MD e SM para abreviação.

> ⚠️ Revisar imagem: variações de tamanho MD e SM da Action Bar

### Boas práticas

#### Escrita para ações

Para manter a consistência e facilitar o entendimento, todas as ações da Action Bar devem ser nomeadas com verbos no infinitivo — como "Adicionar", "Editar", "Filtrar" ou "Exportar". Esse padrão reforça a clareza da função de cada botão, evita ambiguidades e contribui para uma experiência de uso mais direta e previsível. A ação deve descrever exatamente o que acontecerá ao interagir com o botão, sempre de forma objetiva e padronizada.

> ⚠️ Revisar imagem: exemplos de escrita de ações com verbos no infinitivo

#### Utilize o texto de suporte para mostrar informações relevantes e contextuais

Os textos de suporte deve complementar visualmente as ações, oferecendo informações úteis sobre o conteúdo exibido — como número de itens, status atual, resultados filtrados ou instruções rápidas. Ele deve ser direto, de leitura rápida e estar sempre alinhado ao contexto da tela, ajudando o usuário a compreender melhor o estado atual da interface sem depender de interações adicionais.

> ⚠️ Revisar imagem: uso de texto de suporte contextual na Action Bar

#### Complemente as ações com componentes adicionais

A Action Bar pode ser complementada com componentes adicionais que enriquecem a experiência de filtragem e controle dos dados apresentados, como os Chips exibidos na imagem. Esses elementos permitem representar visualmente os filtros ativos, oferecendo ao usuário uma visão clara das condições aplicadas e possibilitando a remoção rápida de cada filtro individual. Essa combinação melhora a usabilidade ao tornar as ações mais acessíveis e visíveis, especialmente em contextos de busca refinada ou exploração de grandes volumes de informação.  Chips • Acessar documentação

> ⚠️ Revisar imagem: Action Bar complementada com componentes Chips

#### Uso apenas de rótulo é permitido, mas o ícone pode melhorar a escaneabilidade

As ações da Action Bar podem ser exibidas somente com rótulo textual, sem a necessidade de ícones. No entanto, sempre que possível, o uso de ícones é recomendado como complemento visual, pois reforça o significado da ação e melhora a escaneabilidade da interface, especialmente em cenários com múltiplos botões. O ícone deve ser coerente com o verbo e nunca substituir o texto, apenas atuar como reforço sem gerar ambiguidade.

> ⚠️ Revisar imagem: comparação entre uso de rótulo e rótulo com ícone

#### Ações com apenas ícones são permitidas, desde que o significado seja claro e contextual

É permitido utilizar ações compostas apenas por ícones, especialmente quando se trata de comandos amplamente reconhecidos — como "lixeira" para excluir ou "lupa" para buscar. No entanto, é fundamental garantir que o ícone represente de forma clara e intuitiva a ação que executa, sem gerar dúvidas ou interpretações ambíguas. Esse uso é recomendado apenas quando o contexto já estiver bem estabelecido, como em tabelas ou listas densas, e quando houver limitação de espaço. Sempre que houver risco de confusão, prefira o uso combinado de ícone + rótulo textual, ou até mesmo complementar com o uso do componente de Tooltips..

> ⚠️ Revisar imagem: exemplos de ações compostas apenas por ícones

## Specs

O componente deve seguir os padrões consistentes de tamanho e espaçamento:

> ⚠️ Revisar imagem: specs de tamanho e espaçamento da Action Bar
