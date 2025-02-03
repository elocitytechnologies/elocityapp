// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HIEV Mobile App',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://help.hiev.ca',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Elocity', // Usually your GitHub org/user name.
  projectName: 'Technical Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap',
      rel: 'stylesheet',
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
         sidebarPath: require.resolve('./sidebars.js'),
		  // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
    //      editUrl:
      //      'https://github.com/imyogeshs/apiculus',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
		  
		
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
    //      editUrl:
      //      'https://github.com/indiqus/docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        
		theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

plugins: [
[
require.resolve("@easyops-cn/docusaurus-search-local"),
{
	hashed: true,
},
],
],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
		docs: {
      sidebar: {
        autoCollapseCategories: true,
		hideable: true,

      },
	 
	  
    },
      // Replace with your project's social card
      image: 'img/elocity-social-card.png',
      navbar: {
        title: '',
		// hideOnScroll: true,
        logo: {
          alt: 'Elocity',
          src: 'img/logo.svg',
        },
        items: [
          
		  {
            type: 'docSidebar',
            sidebarId: 'sidebar1',
            position: 'left',
            label: 'User Guide',
			position: "left",
          },
	 
		 {
            type: 'docSidebar',
            sidebarId: 'sidebar2',
            position: 'left',
            label: 'FAQs',
          },
		 
		  
		  {
            type: 'docSidebar',
            sidebarId: 'sidebar3',
            position: 'left',
            label: 'Resources',
          },
		  
		  {
            type: 'docSidebar',
            sidebarId: 'sidebar4',
            position: 'left',
            label: 'Release Notes',
          },
		  
	/*	  Here is how you create a drop-down
		  {
          type: 'dropdown',
          label: 'Resources',
          position: 'left', // Can be 'left' or 'right'
          items: [
            {
              label: 'Data Sheets',
             to: '/docs/UserGuide/GettingStarted/Download',
            },
            {
              label: 'Global APIs',
              href: 'https://swagger.apiculus.io',
            },	
          ],
        },
		   */
		  
		  {
          to: '/docs/UserGuide/GettingStarted/Download', // Change to the desired link
          label: 'Download App', // The label of your button
          position: 'right',
          className: 'button button--primary', // Add button classes here
        },
		  	  
		  ],
      },
    /*  footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Service Providers',
                to: '/docs/intro',
              },
			  			  {
                label: 'Release Notes',
                to: '/docs/category/release-notes',
              },
			  {
                label: 'FAQs',
                to: '/docs/FAQs/FAQs',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Apiculus, Inc.`,
      },
	  */
	  
	  /* Algolia Search is here.
	 
	  
	  algolia: {
      appId: "LR4IO8TKPQ",
      apiKey: "86496eb0535959e8d78cff40e68ba3b8",
      indexName: "apiculus",
      contextualSearch: true,
      searchParameters: {
      facetFilters: ["keywords"]
      }
    },
	*/
	
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};



export default config;

