<template>
  <v-layout column align-center>
    <img class="logo" src="logo.png">
    <v-form class="login-form" v-model="valid">
      <v-text-field label="ID" v-model="id" :rules="nameRules" required></v-text-field>
      <v-text-field label="PW" v-model="pw" :rules="emailRules" required></v-text-field>
      <v-btn class="start" color="white">Success</v-btn>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  name: 'login',
  data: function() {
    return {
      id: '',
      pw: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin QuadVertexColors($v0, $v1, $v2, $v3) {
  background: radial-gradient(
      circle at 0 0,
      rgb(229, 170, 74),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 100% 0,
      rgb(206, 72, 63),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 0 100%,
      rgb(88, 167, 96),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(0, 255, 0, 0.5),
      rgba(0, 255, 0, 0) 70.71%
    );
}

.layout {
  height: 100%;
  background: #020305;
  .logo {
    position: absolute;
    top: 15%;
  }
  .login-form {
    position: absolute;
    top: 50%;
  }
  .start {
    @include QuadVertexColors(red, magenta, yellow, black);
  }
}
</style>
