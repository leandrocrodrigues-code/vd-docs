// Transforma um link "sozinho na linha" do Figma ou do Storybook em embed (iframe).
// Assim o designer só cola a URL no editor — sem código.
const FIGMA = /^https:\/\/([\w-]+\.)?figma\.com\/(proto|design|file|board|slides)\//;
const STORYBOOK = /^https:\/\/[^\s]+\/iframe\.html\?/;

function urlOf(p) {
  if (p.children.length !== 1) return null;
  const c = p.children[0];
  if (c.type === 'link' && c.children.length <= 1) return c.url;
  if (c.type === 'text') return c.value.trim();
  return null;
}

export default function remarkEmbeds() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      for (const child of node.children) {
        if (child.type === 'paragraph') {
          const url = urlOf(child);
          if (url && !/\s/.test(url) && (FIGMA.test(url) || STORYBOOK.test(url))) {
            const isFigma = FIGMA.test(url);
            const src = isFigma
              ? `https://embed.figma.com/${url.replace(FIGMA, (_m, _s, kind) => kind + '/')}${url.includes('?') ? '&' : '?'}embed-host=vd-docs`
              : url;
            child.children = [];
            child.data = {
              hName: 'iframe',
              hProperties: {
                src,
                className: ['vd-embed', isFigma ? 'vd-embed--figma' : 'vd-embed--storybook'],
                allowFullScreen: true,
                loading: 'lazy',
                title: isFigma ? 'Figma' : 'Storybook',
              },
            };
            continue;
          }
        }
        walk(child);
      }
    };
    walk(tree);
  };
}
