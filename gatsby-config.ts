import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Florence Dafe`,
    siteUrl: `https://www.florencedafe.com`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-link-attrs',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
  ],
};

export default config;
