// Gera as páginas de Fundamentos (cores, tipografia, espaçamento) a partir de /tokens.
// Rodar: npm run tokens   (o build roda sozinho antes de publicar)
// Não editar as páginas geradas à mão — elas são sobrescritas.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, 'tokens', f), 'utf8'));
const out = path.join(root, 'docs', 'vida-ds', 'estilos');
fs.mkdirSync(out, {recursive: true});

const AVISO =
  '{/* ARQUIVO GERADO por scripts/gerar-fundamentos.mjs a partir de /tokens. Não edite à mão. */}';

function flat(obj, prefix = []) {
  const res = [];
  for (const [k, v] of Object.entries(obj)) {
    if (k.startsWith('_')) continue;
    if (v && typeof v === 'object' && 'value' in v) res.push({path: [...prefix, k], value: v.value});
    else if (v && typeof v === 'object') res.push(...flat(v, [...prefix, k]));
  }
  return res;
}

const ORDER = ['pure', 'card', 'container', 'highlight', 'on-brand', 'inverse', '01', '02', '03'];
const sortKeys = (a, b) => {
  const ia = ORDER.indexOf(a), ib = ORDER.indexOf(b);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b);
};
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const nomeGrupo = (p) => p.map((s) => cap(s.replace(/-\(brand\)/, ' (brand)').replace(/-/g, ' '))).join(' / ');
const figmaName = (p) => 'Colors/' + p.map(cap).join('/');
// Mesma regra de tokens/index.ts do vd-design-bridge (colorCssVars)
const cssVar = (p) =>
  '--vd-color-' +
  p.join('-').toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

// ---------- Cores ----------
const light = flat(read('colors.json').color);
const darkMap = new Map(flat(read('colors.dark.override.json').color).map((t) => [t.path.join('/'), t.value]));

const groups = new Map();
for (const t of light) {
  const key = t.path.slice(0, -1).join('/');
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(t);
}
const groupOrder = (k) =>
  k.startsWith('surface') ? 0 : k.startsWith('content') ? 1 : k.startsWith('feedback') ? 2 : 3;
const sortedGroups = [...groups.keys()].sort((a, b) => groupOrder(a) - groupOrder(b) || a.localeCompare(b));

let cores = `---
title: Cores
sidebar_position: 1
description: Paleta de cores do V&D em Light e Dark, gerada dos tokens.
---

${AVISO}

# Cores

Cada cartão mostra o valor **Light** (metade esquerda) e **Dark** (metade direita).
O nome em \`Colors/...\` é o nome exato da Variable no Figma; o \`--vd-color-...\` é a
variável CSS usada no código.

`;
let secao = '';
for (const g of sortedGroups) {
  const top = g.split('/')[0];
  if (top !== secao) {
    secao = top;
    const titulos = {surface: 'Superfície', content: 'Conteúdo', feedback: 'Feedback', chart: 'Gráficos'};
    cores += `\n## ${titulos[top] || cap(top)}\n`;
  }
  const items = groups.get(g).sort((a, b) => sortKeys(a.path.at(-1), b.path.at(-1)));
  cores += `\n### ${nomeGrupo(g.split('/'))}\n\n<div className="vd-swatches">\n`;
  for (const t of items) {
    const id = t.path.join('/');
    const dark = darkMap.get(id);
    const bg = dark
      ? `linear-gradient(90deg, ${t.value} 50%, ${dark} 50%)`
      : t.value;
    cores += `  <div className="vd-swatch">
    <div className="vd-swatch__chip" style={{background: '${bg}'}} />
    <div className="vd-swatch__info">
      <div className="vd-swatch__name">${cap(t.path.at(-1))}</div>
      <div className="vd-swatch__value">${t.value.toUpperCase()}${dark ? ` · ${dark.toUpperCase()}` : ''}</div>
      <div className="vd-swatch__value">${figmaName(t.path)}</div>
      <div className="vd-swatch__value">${cssVar(t.path)}</div>
    </div>
  </div>
`;
  }
  cores += `</div>\n`;
}
cores += `
:::note Gráficos no Dark
As cores de gráfico ainda não têm valores Dark no repositório de tokens — por isso aparecem só com o valor Light.
:::
`;
fs.writeFileSync(path.join(out, 'cores.mdx'), cores);

// ---------- Tipografia ----------
const typo = read('typography.json').typography;
const px = (v) => (/^\d+$/.test(v) ? `${v}px` : v);
const byNum = (a, b) => parseFloat(a.value) - parseFloat(b.value);
const sizes = flat(typo.size).filter((t) => t.value !== '0').sort(byNum).reverse();
const lh = flat(typo['line-height']).filter((t) => t.value !== '0').sort(byNum);
const families = [...new Set(flat(typo.family).map((t) => t.value))];

let tipografia = `---
title: Tipografia
sidebar_position: 2
description: Família, pesos, tamanhos e alturas de linha do V&D.
---

${AVISO}

# Tipografia

**Família:** ${families.join(', ')} — usada em títulos, parágrafos, overline, descrição e legenda.

**Pesos:** ${flat(typo.weight).map((t) => t.value).join(' e ')}.

## Tamanhos

| Token (Figma) | Valor | Exemplo |
|---|---|---|
${sizes
  .map(
    (t) =>
      `| \`Font/Size/${t.path.join('/')}\` | ${px(t.value)} | <span style={{fontSize: '${px(t.value)}', lineHeight: 1.2}}>Aa Label</span> |`,
  )
  .join('\n')}

## Altura de linha

| Token (Figma) | Valor |
|---|---|
${lh.map((t) => `| \`Font/Line height/${t.path.join('/')}\` | ${px(t.value)} |`).join('\n')}
`;
fs.writeFileSync(path.join(out, 'tipografia.mdx'), tipografia);

// ---------- Espaçamento, raio e dimensões ----------
const bar = (v) =>
  `<span style={{display: 'inline-block', height: 12, width: '${v}', background: 'var(--vd-brand-pure)', borderRadius: 2, verticalAlign: 'middle'}} />`;
const tabela = (list, prefixo, visual) =>
  `| Token (Figma) | Valor | |\n|---|---|---|\n` +
  list.map((t) => `| \`${prefixo}/${t.path.join('/')}\` | ${t.value} | ${visual(t.value)} |`).join('\n');

const spacing = flat(read('spacing.json').spacing).sort(byNum);
const radius = flat(read('radius.json').radius).sort(byNum);
const box = (v) =>
  `<span style={{display: 'inline-block', width: 40, height: 40, border: '2px solid var(--vd-brand-highlight)', borderRadius: '${v}', verticalAlign: 'middle'}} />`;

let esp = `---
title: Espaçamento e raio
sidebar_position: 3
description: Escalas de espaçamento e de raio de borda do V&D.
---

${AVISO}

# Espaçamento e raio

## Espaçamento

${tabela(spacing, 'Spacing', bar)}

## Raio de borda

${tabela(radius, 'Corner radius', box)}
`;
fs.writeFileSync(path.join(out, 'espacamento.mdx'), esp);

console.log('Fundamentos gerados em docs/vida-ds/estilos/');
