<template>
  <!-- <h1>Result List</h1> -->
  <div v-if="pending"> Loading ... </div>
  <div v-else>
    <CoopResultResponseListItem v-for="result in results" :result="result" />
  </div>
</template>

<script setup lang="ts">
import { ApiResults } from '@/types/ApiResponse'
const runtimeConfig = useRuntimeConfig()
const {
  pending,
  data,
} = await useFetch<ApiResults>(`${runtimeConfig.public.apiUrlBase}v1/results`)
console.log(data.value)
const results = data.value?.results
</script>