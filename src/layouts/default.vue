<script setup lang="ts">
import TabBar from '@/components/tabbar.vue'
import BottomNavigation from '~/components/bottomNavigation.vue'
</script>

<template>
  <v-app style="background-color: var(--color-background)">
    <Header style="margin-bottom: 64px" />
    <v-main>
      <slot />
      <!-- <TabBar /> -->
    </v-main>
    <BottomNavigation />
  </v-app>
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
