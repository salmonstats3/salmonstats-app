<template>
  <!-- <h1>Result List</h1> -->
  <div v-if="pending || !data"> Loading ... </div>
  <div v-else>
    <CoopResultResponseListItem 
      v-for="result in results"
      :result="result"
    />
    <InfiniteLoading />
  </div>
</template>

<script setup lang="ts">
import { ApiResults } from '@/types/ApiResponse'
// import InfiniteLoading from "v3-infinite-loading"

const runtimeConfig = useRuntimeConfig()
const {
  pending,
  data,
} = await useFetch<ApiResults>(`${runtimeConfig.public.apiUrlBase}v1/results`)
console.log(data.value)
const results = data.value?.results
</script>