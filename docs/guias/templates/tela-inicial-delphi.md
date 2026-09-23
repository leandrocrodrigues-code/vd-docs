---
title: Tela inicial (Delphi)
sidebar_position: 1
description: Template padrão de tela inicial / landing page para Delphi, 1024×704.
---

# Tela inicial (Delphi)

Também chamada de *landing page*, *tela de aterrissagem*, *home* ou *primeira tela*. Resolução padrão **1024 × 704**.

Antes de gerar, a IA pergunta: **a tela tem abas ou não?**

- **Sem abas** — cards, barra de ação e grid direto no corpo.
- **Com abas** — um PageControl a partir do topo dos cards; cada aba repete os blocos.

## Estrutura (de cima pra baixo)

| Bloco | Componente Delphi | Posição (x, y) | Tamanho |
|---|---|---|---|
| Fundo | Wallpaper | 0, 0 | 1024 × 704 |
| Barra do topo | TPanel (#1E3DA1) | 0, 0 | 1024 × 48 |
| Cabeçalho | TPanel | 0, 48 | 1024 × 82 |
| Título | TLabel (24px, bold) | 20, 24 | 767 × 32 |
| Botão secundário | TWTButton Secondary | 804, 24 | 109 × 32 |
| Botão primário | TWTButton Primary | 929, 24 | 75 × 32 |
| Cards | TPanel com 4 × TWTCard | 20, 106 | 984 × 92 (cards 240 × 92, gap 8) |
| Barra de ação | TPanel com TWTEdit, TWTIcon, TWTComboBox | 20, 222 | 984 × 32 |
| Grid | TWTCXGrid (align client) | 20, 270 | 984 × 370 |

Os textos do template usam "Label" como marcador — a IA troca pelos textos reais da tela.

## Arquivos

O template completo, com as medidas de cada elemento, está no repositório como `template-tela-inicial-delphi.json`, junto com a skill que ensina a IA a usá-lo.
