module.exports = {
  title: 'Kokorice',
  description: 'Fresh from the plantation',
  head: [
    ['link', {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'}]
  ],
  theme: '@vuepress/theme-blog',
  themeConfig: {
    sidebar: [
      ['http://www.jw.org', 'jw.org']
    ],
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
      rss: true,
      atom: true,
      json: true
    },
    sitemap: {
      hostname: "https://kokorice.org/"
    }
  },
  plugins: [
    ['migrate', require('../build/migrate')],
    ['@vuepress/back-to-top'],
    ['@vuepress/active-header-links'],
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
            const prevTime = dayjs(prev.frontmatter.createdAt)
            const nextTime = dayjs(next.frontmatter.createdAt)
            return prevTime - nextTime > 0 ? 1 : -1
          }
        }
      }
    ]
  ]
}
