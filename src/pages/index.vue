<script setup lang="ts">
import ResultsView from '@/components/tabs/results.vue'
import { useTitle } from '~/composables/useTitle'
useTitle().setTitle('index')
</script>

<template>
  <div class="container">
    <ResultsView />
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 64px;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  // max-width: 768px;
  // margin: 0 auto 30px;
  // background-color: rgb(50, 50, 50);
}
</style>
