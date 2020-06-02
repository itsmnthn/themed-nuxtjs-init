<template>
  <div class="container-fluid">
    <nav class="navbar">
      <a class="btn btn-default d-flex">
        <span class="align-self-center brand">Brand goes here</span>
      </a>

      <ul class="navbar-nav ml-auto flex-row">
        <li class="nav-item  d-flex">
          <a
            class="theme-switch d-flex align-self-center"
            @click="onThemeChange()"
          >
            <span
              class="switcher d-flex justify-content-center"
              :class="{'active': theme.light}"
            >
              <img
                class="align-self-center"
                src="~/static/icons/sun.svg"
                alt="sun"
              >
            </span>

            <span
              class="switcher d-flex justify-content-center"
              :class="{'active': theme.dark}"
            >
              <img
                class="align-self-center"
                src="~/static/icons/moon-dark.svg"
                alt="sun"
              >
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "nuxt-class-component";
import { mapGetters } from "vuex";

@Component({
  props: {
    onThemeChange: {
      type: Function,
      required: true
    }
  },
  components: {
  },
  computed: {
    ...mapGetters("app", ["theme"])
  }
})

export default class Navbar extends Vue {
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
