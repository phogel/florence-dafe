/**
 * Adds `target` and `rel` attributes to external links in markdown.
 *
 * Replaces the unmaintained `gatsby-remark-external-links` (last published 2022,
 * and pulling in the Babel 6 runtime). There is no maintained npm equivalent that
 * works here: `remark-external-links` is deprecated in favour of
 * `rehype-external-links`, and `gatsby-transformer-remark` offers no way to run
 * rehype plugins — it is pinned to remark 13 / unified 9.
 *
 * Options:
 *   target - attribute value, or `null` to leave `target` unset. Default `_blank`.
 *   rel    - attribute value, or `null` to leave `rel` unset. Default
 *            `nofollow noopener noreferrer`.
 */

const DEFAULT_TARGET = '_blank';
const DEFAULT_REL = 'nofollow noopener noreferrer';

/** A URL is treated as external when it carries a scheme (`https:`, `mailto:`) or is protocol-relative. */
const ABSOLUTE_URL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

/** Depth-first walk over the mdast, invoking `fn` for every node of `type`. */
const visit = (node, type, fn) => {
  if (!node || typeof node !== 'object') return;
  if (node.type === type) fn(node);
  if (Array.isArray(node.children)) {
    for (const child of node.children) visit(child, type, fn);
  }
};

const findDefinition = (tree, identifier) => {
  let match;
  visit(tree, 'definition', (node) => {
    if (match === undefined && node.identifier === identifier) match = node;
  });
  return match;
};

module.exports = ({ markdownAST }, options = {}) => {
  const { target = DEFAULT_TARGET, rel = DEFAULT_REL } = options;

  const applyTo = (link, url) => {
    if (typeof url !== 'string' || !ABSOLUTE_URL.test(url)) return;

    // Merge rather than replace, so attributes set by other remark plugins survive.
    link.data = link.data || {};
    link.data.hProperties = link.data.hProperties || {};

    if (target !== null) link.data.hProperties.target = target;
    if (rel !== null) link.data.hProperties.rel = rel;
  };

  // Reference-style links (`[text][ref]`) carry their URL on the matching definition.
  visit(markdownAST, 'linkReference', (link) => {
    const definition = findDefinition(markdownAST, link.identifier);
    if (definition) applyTo(link, definition.url);
  });

  visit(markdownAST, 'link', (link) => applyTo(link, link.url));
};
