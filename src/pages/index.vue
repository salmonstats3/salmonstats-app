<script setup lang="ts">
import ResultsView from "@/components/tabs/results.vue"
</script>
<template>
  <div class="page">
    <div class="loading" v-if="pending">Loading ...</div>
    <div v-else>
      <div class="coop-result-list">
        <CoopResultResponseListItem v-for="result in results" :key="`result-${result.salmonId}`" :result="result" />
      </div>
      <InfiniteLoading @infinite="loadData" class="inifinite-loading" />
    </div>
  </div>
</template>

<template>
  <ResultsView />
</template>

<style lang="scss" scoped>

</style>
