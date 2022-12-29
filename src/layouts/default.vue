<script setup lang="ts">
import TabBar from "@/components/tabbar.vue";
</script>

<template>
  <div class="container">
    <Header />
    <slot />
    <TabBar />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.container {
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
