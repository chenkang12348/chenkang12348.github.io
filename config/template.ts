import { resolve } from 'path';
const createTemplate = (tag: string) => {
  return `---\ntitle: '${tag}'\nactive: 'blog'\ncatalogue: true\ntag: '${tag}'\n---\n`;
};

export const getArticleHeader = (tag: string) => {
  let path = resolve(__dirname, `../src/views/article/${tag}`);
  if (tag === 'All') path = resolve(__dirname, `../src/views/article`);
  return {
    tag,
    template: createTemplate(tag),
    path,
  };
};
