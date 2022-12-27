<template>
  <div v-if="pending || !result"> Loading ... </div>
  <div v-else>
    <CoopResultResponseDetail :result="result" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const {
  pending,
  data: result,
} = useFetch<CoopResultResponse>(`${runtimeConfig.public.apiUrlBase}v1/results/${route.params.salmonId}`)
</script>
