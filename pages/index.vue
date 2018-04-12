<template>
  <v-layout column justify-center align-center>
    <img class="splash" src="splash1.png">
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

const a = 1
console.log(a)


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

