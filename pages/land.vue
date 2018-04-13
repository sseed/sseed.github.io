<template>
  <v-layout class="outter-box">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-layout class="title">
        SEED LAND
      </v-layout>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout class="summary">
      <v-layout class="info">
        소방관 눈물 닦아주기 법
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<style lang="scss" scoped>
.outter-box {
  height: 100vh;
  width: 100vw;
  display: grid;
  position: relative;
  grid-template-rows: 58px 64px 1fr;
  .toolbar {
    background: #020305;
    .title {
      position: absolute;
      width: 100%;
      padding-top: 4px;
      font-family: 'Big John';
      justify-content: center;
      align-items: center;
    }
  }
  .summary {
    height: 48px;
    color: rgba(255, 255, 255, 0.6);
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 100px;
  }
}
</style>
