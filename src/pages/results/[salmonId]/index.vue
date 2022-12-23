<template>
  <h1>Result Detail</h1>
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
  data,
} = await useFetch<CoopResultResponse>(`${runtimeConfig.public.apiUrlBase}v1/results/${route.params.salmonId}`)
console.log(data.value)
const result = data.value
</script>