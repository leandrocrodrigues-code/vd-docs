// Copia o editor (Decap CMS) de node_modules para static/admin/decap.
// Assim o editor é servido pelo próprio site — não depende de CDN externo
// (importante na rede/VPN da TOTVS).
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const src = path.join(root, 'node_modules', 'decap-cms', 'dist');
const dest = path.join(root, 'static', 'admin', 'decap');
fs.rmSync(dest, {recursive: true, force: true});
fs.mkdirSync(dest, {recursive: true});
let n = 0;
for (const f of fs.readdirSync(src)) {
  if (f.endsWith('decap-cms.js') || f.endsWith('.decap-cms.js')) {
    fs.copyFileSync(path.join(src, f), path.join(dest, f));
    n++;
  }
}
console.log(`Editor copiado (${n} arquivos) para static/admin/decap/`);
