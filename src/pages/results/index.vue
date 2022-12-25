<template>
  <h1>Result List</h1>
  <div v-if="pending"> Loading ... </div>
  <div v-else>
    <div class="sticky">
      <span>{{ results.length }}/{{ total }}件</span>
      <!-- <small>{{ page }} page</small> -->
    </div>
    <div class="coop-result-items">
      <CoopResultResponseListItem v-for="result in results" :key="`result-${result.salmonId}`" :result="result" />
    </div>
    <InfiniteLoading @infinite="loadData" class="inifinite-loading" />
  </div>
</template>

<script setup lang="ts">
import { ApiResults } from '@/types/ApiResponse'
import InfiniteLoading from 'v3-infinite-loading'
const results = ref<CoopResultResponse[]>([])
const page = ref(1)
const total = ref(0)

const loadData = async ($state: any) => {
  page.value++
  await fetchResults()
  if (results.value.length === 0) $state.complete()
  if (results.value.length % 25 === 0) {
    $state.loaded()
  } else {
    $state.complete()
  }
}

const runtimeConfig = useRuntimeConfig()
const {
  pending,
  data,
} = await useLazyFetch<ApiResults>(`${runtimeConfig.public.apiUrlBase}v1/results?offset=0&limit=25&sort=desc&order=playTime`, {
  key: `results-page-${page.value}`,
  params: {
    offset: (25 * (page.value - 1)),
  },
})

const fetchResults = async () => {
  data.value = await $fetch<ApiResults>(`${runtimeConfig.public.apiUrlBase}v1/results?offset=0&limit=25&sort=desc&order=playTime`, {
    method: "GET",
    query: {
      offset: (25 * (page.value - 1)),
    },
  });
}

watchEffect(() => {
  if (data.value?.results) {
    results.value = [
      ...results.value,
      ...data.value.results
    ]
    // 一覧 -> 詳細 -> 一覧（戻る）などの時に配列のデータがおかしい。重複があったり、IDの並びがおかしかったり。 useState とかで管理すれば大丈夫（？）
    // results.value = [
    //   ...results.value,
    //   ...data.value.results.filter(newResult => results.value.map(e => e.salmonId).includes(newResult.salmonId))
    // ]
    total.value = data.value.total
  }
})

</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 0;
  background-color: white;
  padding: 10px 0;
  font-size: 16px;
  text-align: right;
  border-bottom: solid 1px;
}

.inifinite-loading {
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.coop-result-items {
  display: grid;
  gap: 1px;
}
</style>
