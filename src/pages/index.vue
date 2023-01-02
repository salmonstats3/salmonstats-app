<script setup lang="ts">
import ResultsView from '@/components/tabs/results.vue'
import { useTitle } from '~/composables/useTitle'
useTitle().setTitle('index')
</script>

<template>
  <ResultsView />
</template>

<style lang="scss" scoped>

</style>
