module.exports = {
  title: 'Elena Volpato',
  base: '/',
  dest: 'public',
  description: 'using theme Mediumish theme with VuePress and Forestry',
  //logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Elena',
      //avatar: '',
      link: 'https://www.linkedin.com/in/elenavolpato/',
      linktext: 'Follow',
      },
 
      
    ],
    footer: {
      contact: [
        /*{
          type: 'github',
          link: 'https://github.com/wowthemesnet/mediumish-vuepress-blog-theme',
        },*/
        {
          type: 'gitlab',
          link: '#https://gitlab.com/elena_volpato',
        },
        
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/elenavolpato/',
        },
        {
          type: 'mail',
          link: 'elena.volpato@gmail.com',
        },
      
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
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link: 'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },

    sitemap: {
      hostname: ''
    },
   
    feed: {
      canonical_base: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    },
    smoothScroll: true
  },
}
