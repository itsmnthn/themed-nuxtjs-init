<template>
  <div
    class="theme-wrapepr"
    :class="{'theme--dark' : theme.dark, 'theme--default' : theme.light}"
  >
    <div class="app-wrapper">
      <Navbar :onThemeChange="changeTheme" />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Navbar from '~/components/navbar.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters("app", ["theme"])
  },
  methods: {
    changeTheme () {
      let selectedTheme = this.theme
      selectedTheme.light = !selectedTheme.light
      selectedTheme.dark = !selectedTheme.dark
      if (selectedTheme.dark) localStorage.setItem('theme', 'dark')
      if (selectedTheme.light) localStorage.setItem('theme', 'light')
      this.$store.commit('app/theme', { theme: selectedTheme })
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
