// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CoA Wiki',
  tagline: 'Code of Ardonia Wiki Site',
  favicon: 'img/logo.webp',

  // Set the production url of your site here
  url: 'https://docs.ardonia.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Code of Ardonia', // Usually your GitHub org/user name.
  projectName: 'CoA-Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.webp',
      navbar: {
        title: 'CoA Wiki',
        logo: {
          alt: 'CoA Logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Libraries',
            items: [
              { to: '/docs/library/neptune', label: 'Neptune' },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Mods',
            items: [
              { to: '/docs/mod/mobs-banner', label: 'Mobs Banner' },
              { to: '/docs/mod/tameable', label: 'Tameable' },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Modpacks',
            items: [
              { to: '/', label: 'Under Construction' },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Utilities',
            items: [
              { to: '/docs/utility/ardoni-skin-generator', label: 'Ardoni Skin Generator' },
            ]
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/CodeOfArdonia',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/NDzz2upqAk',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'CoA Website',
                to: 'https://www.ardonia.net',
              },
              {
                label: 'Works',
                href: 'https://www.ardonia.net/works',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Code of Ardonia, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  // plugins: [
  //   [
  //     require.resolve("@cmfcmf/docusaurus-search-local"),
  //     {
  //       // Options here
  //     },
  //   ],
  // ],
};

export default config;
