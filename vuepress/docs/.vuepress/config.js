const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mojaloop Business Operations Framework',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    /*docsDir: 'mojaloop-business-docs/vuepress/docs',*/
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guides',
        link: '/guides/',
      }
      /*{
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }*/
    ],
    sidebar: {
      '/guides/': [
        {
          title: 'Technical Operations Guide',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'tech_ops_introduction',
            'incident_management',
            'problem_management',
            'change_management',
            'release_management',
            'defect_triage',
            'ticket_creation',
            'key_terms_kpis',
            'incident_management_escalation_matrix',
            'service_level_agreements'
          ]
        },
        {
          title: 'Settlement Management Guide',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'settlement_management_introduction'
          ]
        }
      ]
    }
    /*sidebar: {
      '/guides/': getSidebar('Technical Operations Guide', 'Settlement Management Guide'),
      /'/technical_operations_guide/': getSidebarTechOps('Technical Operations Guide')
    }*/
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}

/*function getSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: true,
      sidebarDepth: 2,
      children: [
        'tech_ops_introduction',
        'incident_management'
      ]
    },
    {
      title: groupB,
      collapsable: true,
      sidebarDepth: 2,
      children: [
        'settlement_management_introduction'
      ]
    }
  ]
}*/

/*function getSidebarTechOps (groupB) {
  return [
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '',
        'incident_management'
      ]
    }
  ]
}*/