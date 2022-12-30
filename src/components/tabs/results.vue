<script setup lang="ts">
import { ApiResults } from "@/types/ApiResponse";
import Loading from "@/components/loading.vue"
import InfiniteLoading from "v3-infinite-loading";
const results = ref<CoopResultResponse[]>([]);
const page = ref(0);
const total = ref(0);

const loadData = async ($state: any) => {
  await refresh();
  if (results.value.length === 0) $state.complete();
  if (results.value.length % 25 === 0) {
    $state.loaded();
  } else {
    $state.complete();
  }
  page.value++;
};

const runtimeConfig = useRuntimeConfig();
const { pending, refresh } = useFetch<ApiResults>(
  `${runtimeConfig.public.apiUrlBase}v1/results`,
  {
    params: {
      sort: "playTime",
      order: "desc",
    },
    onRequest({ options }) {
      // NOTE: offsetの値がずっと変わらなかったのでonRequestで制御
      if(options.params) {
        options.params.offset = 25 * page.value;
      }
    },
    onResponse({ response }) {
      const { results: resResults, total: resTotal } = response._data;
      results.value = [...results.value, ...resResults];
      total.value = resTotal;
    },
    immediate: false,
  },
);
</script>

<template>
  <div class="page">
    <div class="coop-result-list">
      <CoopResultResponseListItem v-for="result in results" :key="`result-${result.salmonId}`" :result="result" />
    </div>
    <InfiniteLoading @infinite="loadData" class="infinite-loading" />
  </div>
  <template v-if="pending">
    <Loading />
  </template>
</template>

<style lang="scss" scoped>
.page {
  overflow: scroll;
  background-color: var(--color-background);
  width: 100%;
  min-width: 375px;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 29.5px;

  .loading {
    padding-top: 50px;
    text-align: center;
  }
}

.infinite-loading {
  margin: 0 auto;
  text-align: center;
}

.coop-result-list {
  display: grid;
  gap: 1px;
}
</style>
