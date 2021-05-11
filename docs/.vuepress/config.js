module.exports = {
  title: 'elena volpato',
  base: '/',
  logo: './assets/img/mylogo.svg',
  head: [
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
    ["link", { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '194x194', href: '/favicon-194x194.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', color: '#af8c22', href: '/safari-pinned-tab.svg' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ["meta", { name: "apple-mobile-web-app-title", content: "elenavolpato" }],
    ["meta", { name: "application-name", content: "elenavolpato" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffc40d" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  theme: require.resolve('../../'),
  themeConfig: {
    authors: [
      {
        name: 'Elena Volpato',
        avatar: '/assets/img/elena.png',
        link: '/assets/img/mylogo.png',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        /*{
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/wowthemesnet/mediumish-vuepress-blog-theme',
        },*/
        {
          type: 'gitlab',
          link: 'https://gitlab.com/elena_volpato',
        },
        {
          type: 'linkedin',
          link: 'https://br.linkedin.com/in/elenavolpato/en-us',
        },
        {
          type: 'mail',
          link: 'talkto@elenavolpato.me',
        },
        /*{
          type: 'instagram',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },*/
        {
          type: 'twitter',
          link: 'https://twitter.com/valpatuska',
        },
        {
          type: 'web',
          link: 'www.elenavolpato.me',
        }
      ],
      copyright: [
        /*{
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },*/
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link: 'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },

    /*sitemap: {
      hostname: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    },*/
    smoothScroll: true
  },
}
