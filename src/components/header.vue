<script setup lang="ts">
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <div class="navigation-bar">
    <div class="navigation-bar-leading"></div>
    <div class="navigation-bar-content">
      <span>{{ title }}</span>
    </div>
    <div class="navigation-bar-trailing"></div>
  </div>
</template>

<style scoped lang="scss">
.navigation-bar {
  top: 0;
  position: sticky;
  align-items: center;
  background-color: black;
  display: grid;
  grid-template-columns: 5rem 1fr 5rem;
  height: 48px;
  line-height: 1;
  min-height: 48px;
  width: 100%;
}

.navigation-bar-content {
  color: azure;
  font-family: var(--font-family-s1);
  font-size: 15px;
  line-height: 2;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
}

.navigation-bar-leading {
  padding: 0 0 0 10px;
}

.navigation-bar-trailing {
  padding: 0 10px 0 0;
}
</style>
