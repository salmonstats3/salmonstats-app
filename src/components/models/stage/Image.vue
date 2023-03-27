<script setup lang="ts">
type Props = {
  stageId: number;
};

const { stageId } = defineProps<Props>();
</script>
<template>
  <img v-if="stageId === 1"
    src="@/static/media/stage/be584c7c7f547b8cbac318617f646680541f88071bc71db73cd461eb3ea6326e_0.png" alt="">
  <img v-else-if="stageId === 2"
    src="@/static/media/stage/3418d2d89ef84288c78915b9acb63b4ad48df7bfcb48c27d6597920787e147ec_0.png" alt="">
  <img v-else-if="stageId === 6"
    src="@/static/media/stage/1a29476c1ab5fdbc813e2df99cd290ce56dfe29755b97f671a7250e5f77f4961_0.png" alt="">
  <img v-else-if="stageId === 7"
    src="@/static/media/stage/f1e4df4cff1dc5e0acc66a9654fecf949224f7e4f6bd36305d4600ac3fa3db7b_0.png" alt="">
  <img v-else-if="stageId === 100"
    src="@/static/media/stage/2276a46e42a11637776ebc15cf2d46a589f1dba34a76d5c940c418ed7371d071_0.png" alt="">
</template>

<style lang="scss" scoped>

</style>
