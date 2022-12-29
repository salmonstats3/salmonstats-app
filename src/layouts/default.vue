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
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  // max-width: 768px;
  // margin: 0 auto 30px;
  // background-color: rgb(50, 50, 50);
}
</style>
