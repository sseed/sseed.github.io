<template>
  <v-layout class="outter-box">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-layout class="title">
        SEED
      </v-layout>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout class="search-box">
      <v-icon color="seedg">
        search
      </v-icon>
    </v-layout>
    <v-layout class="cover-image">
    </v-layout>
    <v-layout class="tabs">
      <v-layout v-for="tab in tabs" :key="tab" class="text">
        {{ tab }}
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      tabs: ['사회', '정치', '경제', '문화', '과학']
    }
  }
}
</script>

<style lang="scss" scoped>
.outter-box {
  height: 100vh;
  width: 100vw;
  display: grid;
  position: relative;
  grid-template-rows: 64px 170px 58px 1fr;
  .toolbar {
    background: #020305;
    background-image: url('/today_seeds.png');
    background-size: 100%;
    .title {
      padding-top: 4px;
      font-family: 'Big John';
      justify-content: center;
      align-items: center;
    }
  }
  .search-box {
    background: #020305;
    position: absolute;
    width: 90%;
    height: 48px;
    border: 1px rgb(88, 167, 96) solid;
    margin-top: 64px;
    margin-bottom: 8px;
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 100px;
    i {
      margin-top: 2px;
      margin-left: 12px;
    }
  }
  .cover-image {
    margin-top: 20px;
    height: 150px;
    background-image: url('/seed_cover1.png');
    background-size: 100%;
  }
  .tabs {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 5px rgb(88, 167, 96) solid;
    .text {
      color: rgba(255, 255, 255, 0.6);
      justify-self: center;
      align-self: center;
    }
  }
}
</style>
