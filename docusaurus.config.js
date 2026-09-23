// @ts-check
// Configuração do site de documentação do Design System V&D (TOTVS).
// Troca de hospedagem (GitHub pessoal → servidor TOTVS) = mudar só SITE_URL,
// BASE_URL e o repo em static/admin/config.yml.
import {themes as prismThemes} from 'prism-react-renderer';
import remarkEmbeds from './src/plugins/remark-embeds.js';

const GITHUB_USER = 'leandrocrodrigues-code';
const REPO = 'vd-docs';
const SITE_URL = process.env.SITE_URL || `https://${GITHUB_USER}.github.io`;
const BASE_URL = process.env.BASE_URL || `/${REPO}/`;
const STORYBOOK_URL = `https://${GITHUB_USER}.github.io/vd-design-bridge/`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Design System V&D',
  tagline: 'Fundamentos, componentes e templates do V&D',
  favicon: 'img/favicon.svg',
  future: {v4: true},

  url: SITE_URL,
  baseUrl: BASE_URL,
  organizationName: GITHUB_USER,
  projectName: REPO,

  onBrokenLinks: 'warn',
  markdown: {
    // .md = Markdown puro (o que o editor visual grava — seguro pra quem não programa)
    // .mdx = páginas com componentes (geradas a partir dos tokens)
    format: 'detect',
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },

  customFields: {storybookUrl: STORYBOOK_URL},

  i18n: {defaultLocale: 'pt-BR', locales: ['pt-BR']},

  // Fonte Lato servida pelo próprio site (sem Google Fonts)
  clientModules: [
    require.resolve('@fontsource/lato/400.css'),
    require.resolve('@fontsource/lato/700.css'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkEmbeds],
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['pt', 'en'],
        docsRouteBasePath: '/',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
      navbar: {
        title: 'Design System V&D',
        logo: {alt: 'TOTVS', src: 'img/logo.svg', srcDark: 'img/logo-dark.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Documentação'},
          {href: STORYBOOK_URL, label: 'Storybook', position: 'right'},
          {href: 'pathname:///admin/', label: 'Editar', position: 'right', target: '_self'},
        ],
      },
      footer: {
        style: 'light',
        copyright: `TOTVS · Varejo & Distribuição — Design System V&D`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
      tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
    }),
};

export default config;
