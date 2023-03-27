<script setup lang="ts">
defineProps<{ id: number }>()
// TODO IDに合ったstage画像を紐付ける
</script>

<template>
  <img v-if="id === 1" src="@/assets/stages/5000.png" alt="">
  <img v-else-if="id === 2" src="@/assets/stages/5000.png" alt="">
  <img v-else-if="id === 6" src="@/assets/stages/5000.png" alt="">
  <img v-else-if="id === 7" src="@/assets/stages/5000.png" alt="">
  <img v-else src="@/assets/stages/5000.png" alt="">
</template>

<style scoped>

</style>
