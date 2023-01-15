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
  <div class="container">
    <template v-if="result === null">
      <Loading />
    </template>
    <template v-else>
      <CoopResultResponseDetail :result="result!" />
    </template>
  </div>
</template>

<style scoped>
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

/* max-width: 768px;*/
/* margin: 0 auto 30px;*/
/* background-color: rgb(50, 50, 50);*/
}
</style>
