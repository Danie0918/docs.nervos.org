/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
const path = require('path');

// List of projects/orgs using your project for the users page.
const siteConfig = {
  customDocsPath: path.basename(__dirname) + '/docs',

  title: 'Nervos CKB Docs', // Title for your website.
  tagline: 'This is the documentation site for Nervos CKB',
  url: 'https://nervosnetwork.github.io', // Your website URL
  baseUrl: '/docs-new/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs-new',
  organizationName: 'nervosnetwork',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'basics/introduction', label: 'Basics'},
    {doc: 'reference/introduction', label: 'Reference'},
    {doc: 'labs/introduction', label: 'Labs'},
    {doc: 'integrate/introduction', label: 'Integrate'},
    {doc: 'essays/introduction', label: 'Essays'}
  ],


  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#00ce88',
    secondaryColor: '#1c4071',
  },

  /* Custom fonts for website */
  fonts: {
    lato: [
      "Lato",
      "sans-serif"
    ],
  },

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Lato&display=swap"
  ],

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()}  Nervos Foundation. All Rights Reserved.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // TODO: apply a new one if necessary
  algolia: {
    apiKey: 'ef49666369943baa0a93aedc37511318',
    indexName: 'nervos-ckb',
    placeholder: 'Search',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  socialLinks: [
    {
      label: 'Twitter',
      icon: 'img/footer_twitter.png',
      url: 'https://twitter.com/nervosnetwork'
    },
    {
      label: 'Blog',
      icon: 'img/footer_medium.png',
      url: 'https://medium.com/nervosnetwork'
    },
    {
      label: 'Telegram',
      icon: 'img/footer_telegram.png',
      url: 'https://t.me/nervosnetwork'
    },
    {
      label: 'Reddit',
      icon: 'img/footer_reddit.png',
      url: 'https://www.reddit.com/r/NervosNetwork/'
    },
    {
      label: 'YouTube',
      icon: 'img/footer_youtube.png',
      url: 'https://www.youtube.com/channel/UCONuJGdMzUY0Y6jrPBOzH7A'
    },
    {
      label: 'Forum',
      icon: 'img/footer_forum.png',
      url: 'https://talk.nervos.org/'
    }
  ],

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
