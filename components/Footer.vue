<template>
  <footer class="themefooter">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col">
          <div v-if="contact" class="contacts">
            <div
              v-for="item in contact"
              :key="item.iconComponent"
              class="contact-item"
            >
              <NavLink :link="item.link">
                <component :is="item.iconComponent"></component>
                {{ item.text }}
              </NavLink>
            </div>
          </div>
          <ul v-if="copyright" class="list-unstyled">
            <li
              v-for="item in copyright"
              :key="item.text"
              class="copyright-item"
            >
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  CodepenIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TwitterIcon,
} from 'vue-feather-icons'

export default {
  components: {
    CodepenIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    PhoneIcon,
    TwitterIcon,
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'gitlab':
          return 'GitlabIcon'
        case 'linkedin':
          return 'LinkedinIcon'
        case 'twitter':
          return 'TwitterIcon'
      }
    },
  },
}
</script>
