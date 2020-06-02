<template>
  <div class="container h-75">
    This is nuxt app with the support of multiple theme
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
@import "~assets/css/theme/theme.scss";

.back {
  @include themed() {
    background: t("bg");
  }
}
</style>
