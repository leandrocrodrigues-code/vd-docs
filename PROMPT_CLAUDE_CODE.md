# Prompt para o Claude Code (no Mac do Leandro)

A rede da nuvem não alcança o ZeroHeight, então a migração roda no Claude Code do teu Mac, que já tem o GitHub logado.

## Antes de colar o prompt (no Terminal, uma vez só)

```bash
cd ~/Desktop/vd-docs
claude mcp add --transport http centro-de-ux "<o link do MCP do ZeroHeight que você já tem>"
claude --permission-mode auto
```

O link do MCP funciona como senha: não coloque ele em nenhum arquivo deste projeto, porque o repositório é público.

Depois cole o prompt abaixo inteiro.

---

## Prompt

Você está na pasta `vd-docs`, um site Docusaurus 3 + Decap CMS com a documentação do Design System V&D (TOTVS). Leia `README.md` antes de começar. São duas etapas, nesta ordem. Pare e me pergunte só se algo impedir de continuar.

### Etapa 1 — Publicar no GitHub Pages

1. Rode `npm install` e `npm run build`. O build precisa passar sem erro.
2. A conta do GitHub tem que ser `leandrocrodrigues-code`. Confira com `gh auth status`. Se a ativa for outra, rode `gh auth switch -u leandrocrodrigues-code`. Ao terminar, volte pra conta que estava ativa antes.
3. Rode `git init`, faça um commit "docs: estrutura inicial" na branch `main`.
4. Rode `gh repo create leandrocrodrigues-code/vd-docs --public --source . --push`.
5. Ative o Pages via Actions: `gh api -X POST repos/leandrocrodrigues-code/vd-docs/pages -f build_type=workflow`. Se já existir, use `-X PUT` com o mesmo campo.
6. Acompanhe o workflow "Publicar documentação" (`gh run watch`) e me passe a URL quando estiver no ar: https://leandrocrodrigues-code.github.io/vd-docs/

### Etapa 2 — Migrar o conteúdo do ZeroHeight

Fonte: o MCP `centro-de-ux`, styleguide https://zeroheight.com/422b6358a/p/3545c0

1. Liste as ferramentas do MCP `centro-de-ux` e depois todas as páginas do styleguide. Antes de converter qualquer coisa, me mostre o mapa "página do ZeroHeight → arquivo em docs/" e espere eu aprovar.
2. Onde cada coisa vai:
   - Componentes → `docs/componentes/<nome>.md`. Já existe `button.md`: complete ele, não duplique.
   - Templates de tela → `docs/templates/`.
   - Guias, processos, boas práticas, pesquisa → `docs/guias/`.
   - Fundamentos que NÃO são gerados (grid, iconografia, acessibilidade etc.) → `docs/fundamentos/<nome>.md`.
   - `cores.mdx`, `tipografia.mdx` e `espacamento.mdx` são GERADOS dos tokens: não edite. Se o ZeroHeight tiver texto de uso dessas páginas (ex.: "quando usar cada cor"), coloque em `docs/fundamentos/<nome>-uso.md`.
   - Na página de grid, use também o que existir sobre Desktop Web (1440), Delphi (1024), Tablet e Mobile (768).
3. Formato de cada arquivo (o editor visual depende disso):
   - Markdown puro `.md`. Sem JSX, sem HTML, sem `import`.
   - Frontmatter com `title`, `description` (uma frase) e `sidebar_position`.
   - Link do Figma ou de story do Storybook sozinho numa linha (ele vira embed no site).
   - Imagens: baixe pra `static/img/uploads/<slug-da-pagina>/` e referencie como `/img/uploads/<slug-da-pagina>/<arquivo>`.
   - Tabelas em Markdown. Abas do ZeroHeight viram seções `##`.
4. Não invente conteúdo. O que não der pra converter (widget específico do ZeroHeight, embed quebrado) fica marcado com `> ⚠️ Revisar: <o que era>`, pra eu resolver depois.
5. Página de equipe: coloque nome e cargo. NÃO publique e-mails — o site é público.
6. Atualize a tabela de status em `docs/componentes/index.md` ("A migrar" → "Documentado").
7. Rode `npm run build` (sem erros nem links quebrados), faça commit em lotes por seção ("docs: migra componentes do ZeroHeight" etc.) e dê push na `main`.
8. No fim, me entregue um resumo: quantas páginas migrou, quais ficaram com "⚠️ Revisar" e o que ficou de fora.
