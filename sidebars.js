/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
 
  // But you can create a sidebar manually
  
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
   };
module.exports = {
  sidebar1: [{ type: 'autogenerated', dirName: 'UserGuide' }], // Automatically generates sidebar from 'AdminGuide' directory
  sidebar2: [{ type: 'autogenerated', dirName: 'FAQs' }], // Automatically generates sidebar from 'FAQs' directory
  sidebar3: [{ type: 'autogenerated', dirName: 'Resources' }], // Automatically generates sidebar from 'Respources' directory
  sidebar4: [{ type: 'autogenerated', dirName: 'ReleaseNotes' }], // Automatically generates sidebar from 'APIs' directory
};

export default sidebars;
