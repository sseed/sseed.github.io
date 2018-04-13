<template>
  <v-layout column justify-center align-center>
    <img class="splash" src="splash1.png">
  </v-layout>
</template>

<script>
export default {
  name: 'splash',
  mounted() {
    setTimeout(() => {
      this.$router.push('home')
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  background: #020305;
  .splash {
    // width: 100%;
    height: 100%;
  }
}
</style>

