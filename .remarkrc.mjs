// ESM config for remark (use this for mdx files)
import preset from 'remark-preset-lint-recommended';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkValidateLinks from 'remark-validate-links';

/** @type {import('unified').Preset} */
export default {
  plugins: [
    preset,
    remarkGfm,
    remarkFrontmatter,       // frontmatter in docs
    remarkValidateLinks      // check interne links/anchors
  ]
};
