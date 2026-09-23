# Documentação do Design System V&D

Site de documentação do Design System do Varejo & Distribuição (TOTVS).

- **Site:** Docusaurus (open source). Qualquer pessoa com o link lê.
- **Editor:** Decap CMS (open source) em `/admin`. Só edita quem entra com GitHub e tem acesso ao repositório.
- **Custo:** zero. Tudo roda no GitHub (Pages + Actions) e num serviço de login gratuito.
- **Sem CDN externo:** o editor e a fonte Lato são servidos pelo próprio site, o que ajuda na rede/VPN da TOTVS.

## Estrutura

```
docs/
  intro.md               Página inicial (editável)
  fundamentos/           GERADO a partir de /tokens — não editar à mão
  componentes/           Uma página por componente (editável)
  templates/             Templates de tela (editável)
  guias/                 Guias, inclusive "Como editar" (editável)
tokens/                  Cópia dos tokens do vd-design-bridge
scripts/
  gerar-fundamentos.mjs  Tokens → páginas de Cores, Tipografia, Espaçamento
  copiar-decap.mjs       Copia o editor pra static/admin/decap
static/admin/            Editor: index.html (botões Figma/Storybook) e config.yml
src/plugins/remark-embeds.js  Link do Figma/Storybook sozinho numa linha vira embed
.github/workflows/deploy.yml  Publica no GitHub Pages a cada push na main
```

## Rodar no seu computador

Precisa de Node 20 ou mais novo.

```bash
npm install
npm start            # site em http://localhost:3000/vd-docs/
```

Pra testar o editor sem login, abra outro terminal:

```bash
npm run cms          # editor local; depois abra http://localhost:3000/vd-docs/admin/
```

No modo local o editor grava direto nos arquivos da pasta. Não precisa de GitHub.

## Publicar no GitHub (fase de teste, conta pessoal)

1. Crie o repositório **público** `vd-docs` na conta `leandrocrodrigues-code`. O Pages gratuito exige repositório público. Só ler é público; editar continua exigindo login.
2. Suba o projeto:
   ```bash
   git init && git add -A && git commit -m "docs: estrutura inicial"
   git branch -M main
   git remote add origin https://github.com/leandrocrodrigues-code/vd-docs.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. O workflow "Publicar documentação" roda sozinho. Site no ar em `https://leandrocrodrigues-code.github.io/vd-docs/`.

## Login do editor (uma vez só, ~15 min)

O GitHub Pages não tem servidor, então o login do editor passa por um serviço pequeno e gratuito: o **sveltia-cms-auth**, open source, rodando no Cloudflare Workers (plano free).

1. **Cloudflare:** crie uma conta grátis e, no README do [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth), clique em **Deploy to Cloudflare Workers**. Anote a URL gerada (ex.: `https://vd-docs-auth.SEU-USUARIO.workers.dev`).
2. **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**:
   - Homepage URL: `https://leandrocrodrigues-code.github.io/vd-docs/`
   - Authorization callback URL: `https://vd-docs-auth.SEU-USUARIO.workers.dev/callback`
   - Anote o **Client ID** e gere um **Client Secret**.
3. **Cloudflare → Worker → Settings → Variables**:
   - `GITHUB_CLIENT_ID` = Client ID
   - `GITHUB_CLIENT_SECRET` = Client Secret (marque como *Encrypt*)
   - `ALLOWED_DOMAINS` = `leandrocrodrigues-code.github.io`
4. Em `static/admin/config.yml`, troque `base_url` pela URL do Worker, faça commit e push.

## Dar acesso de edição a um designer

Repositório → **Settings → Collaborators → Add people** → usuário GitHub da pessoa → permissão **Write**. Ela aceita o convite por e-mail e já consegue entrar em `/admin`. Sem limite de pessoas.

Pra tirar o acesso, remova a pessoa da mesma tela.

## Fluxo de publicação

O editor está em modo **editorial**: cada alteração vira um rascunho, passa por "Em revisão" e só vai pro ar quando alguém clica **Publicar**. Por baixo, cada rascunho é um Pull Request, então tudo fica com histórico e dá pra desfazer.

## Atualizar os Fundamentos quando os tokens mudarem

Por enquanto, copie os arquivos de `vd-design-bridge/tokens/*.json` pra `tokens/` e faça push. O build regera as páginas. Depois dá pra automatizar: um workflow no `vd-design-bridge` que copia os tokens pra cá a cada sync do Figma.

## Migrar pra infraestrutura da TOTVS

Nada fica preso ao GitHub pessoal:

| O quê | Onde mudar |
|---|---|
| Repositório | `static/admin/config.yml` → `backend.repo` (e `GITHUB_USER`/`REPO` em `docusaurus.config.js`) |
| Endereço do site | Variáveis `SITE_URL` e `BASE_URL` no build (ou os padrões em `docusaurus.config.js`) |
| GitHub Enterprise | `backend.api_root` no config.yml + `GITHUB_HOSTNAME` no serviço de login |
| Servidor interno / VPN | `npm run build` gera a pasta `build/`, que é HTML estático e roda em qualquer servidor (Nginx, IIS, Apache) |
| Serviço de login | O sveltia-cms-auth também roda fora do Cloudflare, ou use outro OAuth proxy do Decap no servidor da TOTVS |

O conteúdo é só Markdown no Git. Trocar de plataforma no futuro = levar a pasta `docs/`.

## Pendências

- Logo: `static/img/logo.svg` é um placeholder. Substituir pelo logo oficial TOTVS (versão branca, altura ~28px).
- Migração do conteúdo do ZeroHeight (via MCP do ZeroHeight).
- Cores de gráfico no Dark: ainda não existem nos tokens.
