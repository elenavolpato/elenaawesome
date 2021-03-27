module.exports = {
  title: 'Elena Volpato',
  base: '/',
  logo: './assets/img/mylogo.svg',
  
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
    {
      name: 'Elena Volpato',
      avatar: '/assets/img/elena.png',
      link: '/assets/img/mylogo.png',
      linktext: 'Follow',
      }, 
    {
      name: 'Sal',
      avatar: '/assets/img/sal.jpg',
      link: '/assets/img/mylogo.png',
      linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
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
