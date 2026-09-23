import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="vd-hero">
      <div className="vd-hero__inner">
        <p className="vd-hero__eyebrow">TOTVS · Varejo & Distribuição</p>
        <h1 className="vd-hero__title">Design System V&D</h1>
        <p className="vd-hero__lede">
          Fundamentos, componentes e templates que conectam design e código
          nos produtos em POUi e Delphi.
        </p>
        <div className="vd-hero__cta">
          <Link className="button button--primary button--lg" to="/docs/vida-ds/">
            Explorar o Vida DS
          </Link>
          <Link className="button button--secondary button--lg" to={siteConfig.customFields.storybookUrl}>
            Ver Storybook
          </Link>
        </div>
      </div>
    </header>
  );
}

const FEATURES = [
  {
    to: '/docs/vida-ds/',
    title: 'Vida DS',
    desc: 'Componentes, estilos, tokens e comportamentos — o núcleo do design system.',
  },
  {
    to: '/docs/nosso-time/',
    title: 'Nosso Time',
    desc: 'Quem somos, princípios, processo e ferramentas do dia a dia.',
  },
  {
    to: '/docs/research-ops/',
    title: 'Research Ops',
    desc: 'Como fazemos pesquisa: repositório, templates, glossário e LGPD.',
  },
  {
    to: '/docs/guias/',
    title: 'Guias',
    desc: 'Templates de tela e o passo a passo pra editar a documentação.',
  },
];

const PILARES = [
  {title: 'Unidade', desc: 'Uma experiência unificada, consistente entre todos os produtos.'},
  {title: 'Função', desc: 'Interfaces agradáveis e funcionais, priorizando o trabalho real do usuário.'},
  {title: 'Utilidade', desc: 'Jornadas personalizadas que resolvem os problemas de cada cliente.'},
];

export default function Home() {
  return (
    <Layout title="Design System V&D" description="Documentação do Design System do Varejo & Distribuição (TOTVS).">
      <Hero />
      <main className="vd-home">
        <section className="vd-section">
          <h2 className="vd-section__title">Por onde começar</h2>
          <div className="vd-cards vd-cards--home">
            {FEATURES.map(f => (
              <Link key={f.to} to={f.to} className="vd-card">
                <strong>{f.title}</strong>
                <span>{f.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="vd-section vd-section--muted">
          <h2 className="vd-section__title">Três princípios que guiam nosso trabalho</h2>
          <div className="vd-pilares">
            {PILARES.map(p => (
              <div key={p.title} className="vd-pilar">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="vd-section">
          <h2 className="vd-section__title">Fontes da verdade</h2>
          <div className="vd-cards vd-cards--home">
            <a className="vd-card" href="https://www.figma.com/design/LO37QXwojd3vklS4R2mGqJ/VD" target="_blank" rel="noopener">
              <strong>Figma</strong>
              <span>Arquivo oficial de design do V&D.</span>
            </a>
            <a className="vd-card" href="https://leandrocrodrigues-code.github.io/vd-design-bridge/" target="_blank" rel="noopener">
              <strong>Storybook</strong>
              <span>Código pronto pra copiar (POUi e Delphi).</span>
            </a>
            <a className="vd-card" href="https://github.com/leandrocrodrigues-code/vd-docs/tree/main/tokens" target="_blank" rel="noopener">
              <strong>Tokens</strong>
              <span>JSONs brutos que alimentam docs e código.</span>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
