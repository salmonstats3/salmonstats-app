<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useRuntimeConfig } from '#app'
import { useTitle } from '~/composables/useTitle'

useTitle().setTitle('schedules-id-results-id')

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const {
  pending,
  data: result
} = useFetch<CoopResultResponse>(`${runtimeConfig.public.apiUrlBase}v1/results/${route.params.salmonId}`)
</script>

<template>
  <template v-if="result === null">
    <Loading />
  </template>
  <template v-else>
    <CoopResultResponseDetail :result="result!" />
  </template>
</template>
