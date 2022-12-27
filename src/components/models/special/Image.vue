<template>
  <img v-if="specialId === 1"
    src="@/assets/images/7269f1fa71d746d7b86ca2a71fc24c6ea4c764077ee50d692f80eddeaff90f1d_0.png" alt="">
  <img v-else-if="specialId === 20006"
    src="@/assets/images/bd327d1b64372dedefd32adb28bea62a5b6152d93aada5d9fc4f669a1955d6d4_0.png" alt="">
  <img v-else-if="specialId === 20007"
    src="@/assets/images/463eedc60013608666b260c79ac8c352f9795c3d0cce074d3fbbdbd2c054a56d_0.png" alt="">
  <img v-else-if="specialId === 20009"
    src="@/assets/images/fa8d49e8c850ee69f0231976208a913384e73dc0a39e6fb00806f6aa3da8a1ee_0.png" alt="">
  <img v-else-if="specialId === 20010"
    src="@/assets/images/252059408283fbcb69ca9c18b98effd3b8653ab73b7349c42472281e5a1c38f9_0.png" alt="">
  <img v-else-if="specialId === 20012"
    src="@/assets/images/680379f8b83e5f9e033b828360827bc2f0e08c34df1abcc23de3d059fe2ac435_0.png" alt="">
  <img v-else-if="specialId === 20013"
    src="@/assets/images/0785cb4979024a83aaa2196e287e232d5d7e4ac959895a650c30ed00fedbc714_0.png" alt="">
  <img v-else-if="specialId === 20014"
    src="@/assets/images/680379f8b83e5f9e033b828360827bc2f0e08c34df1abcc23de3d059fe2ac435_0.png" alt="">
  <img v-else src="@/assets/weapons/unknown.png" alt="" />
</template>

<script setup lang="ts">
type Props = {
  specialId: CoopResultResponse["players"][number]['specialId'];
};

const { specialId } = defineProps<Props>();
</script>

<style lang="scss" scoped>
img {
  width: 80%;
  object-fit: contain;
  max-width: 100%;
  align-items: center;
  background-color: black;
  display: inline-grid;
  justify-items: center;
  border-radius: 26.66%;

  width: 18px;
  height: 18px;
  margin-bottom: 3px;
  margin-right: 3px;
}
</style>
