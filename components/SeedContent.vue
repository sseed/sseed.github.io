<template>
	<v-layout class="outter-box">
		<div class="content-title">{{ title }}</div>
	</v-layout>
</template>

<script>
export default {
  name: 'SeedContent',
  props: ['title', 'image']
}
</script>

<style lang="scss" scoped>
.outter-box {
  position: absolute;
  background: #191d35;
  height: 100%;
  width: 100%;
  .content-title {
		justify-self: center;
		align-self: center;
  }
}
</style>
