const _ = require("lodash");

module.exports = {
  title: 'Kokorice',
  description: 'Fresh from the plantation',
  head: [
    ['link', {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'}],
    //['script', {src: 'http://localhost:8098'}]
  ],
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Tags', link: '/tag/'},
      {text: 'About', link: '/about/'},
      {text: 'GitHub', link: 'https://github.com/duffyd'}
    ],
    smoothScroll: true,
    footer: {
      copyright: [
        {
          text: 'Built in VuePress',
          link: 'https://vuepress.vuejs.org',
        },
        {
          text: 'Fresh from the plantation',
        },
      ],
    },
    feed: {
      canonical_base: 'https://kokorice.org',
      sort: entries => _.reverse(_.sortBy(entries, "date"))
    },
    sitemap: {
      hostname: "https://kokorice.org/"
    }
  },
  plugins: [
    //['migrate', require('../build/migrate')],
    ['@vuepress/back-to-top'],
    ['@vuepress/active-header-links'],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-189681629-1' 
      }
    ],
    ['@vuepress/blog',
      {
        frontmatters: [
          {
            id: "tag",
            keys: ['tag', 'tags'],
            path: '/tag/',
            frontmatter: {title: 'Tag'}
          }
        ],
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
          }
        ],
        globalPagination: {
          sorter: (prev, next) => {
            const dayjs = require('dayjs')
            const prevTime = dayjs(prev.frontmatter.date)
            const nextTime = dayjs(next.frontmatter.date)
            return prevTime - nextTime > 0 ? -1 : 1
          }
        }
      }
    ],
    ['@vuepress/last-updated', false],
    ['reading-time'],
    ['reading-progress'],
    ['flexsearch']
  ]
}
