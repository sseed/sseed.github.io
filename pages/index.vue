<template>
  <v-layout column justify-center align-center>
    <img class="splash" src="splash1.png">
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<style lang="scss" scoped>
.layout {
  background: #020305;
}
</style>

