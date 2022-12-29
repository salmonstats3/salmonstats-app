<script setup lang="ts">
import { ApiResults } from "@/types/ApiResponse";
import Loading from "@/components/loading.vue"
import InfiniteLoading from "v3-infinite-loading";
const results = ref<CoopResultResponse[]>([]);
const page = ref(1);
const total = ref(0);

const loadData = async ($state: any) => {
  page.value++;
  await fetchResults();
  if (results.value.length === 0) $state.complete();
  if (results.value.length % 25 === 0) {
    $state.loaded();
  } else {
    $state.complete();
  }
};

const runtimeConfig = useRuntimeConfig();
const { pending, data } = await useLazyFetch<ApiResults>(
  `${runtimeConfig.public.apiUrlBase}v1/results`,
  {
    key: `results-page-${page.value}`,
    params: {
      sort: "playTime",
      order: "desc",
      offset: 25 * (page.value - 1),
    },
  }
);

const fetchResults = async () => {
  data.value = await $fetch<ApiResults>(
    `${runtimeConfig.public.apiUrlBase}v1/results`,
    {
      method: "GET",
      query: {
        sort: "playTime",
        order: "desc",
        offset: 25 * (page.value - 1),
      },
    }
  );
};

watchEffect(() => {
  if (data.value?.results) {
    results.value = [...results.value, ...data.value.results];
    // 一覧 -> 詳細 -> 一覧（戻る）などの時に配列のデータがおかしい。重複があったり、IDの並びがおかしかったり。 useState とかで管理すれば大丈夫（？）
    // results.value = [
    //   ...results.value,
    //   ...data.value.results.filter(newResult => results.value.map(e => e.salmonId).includes(newResult.salmonId))
    // ]
    total.value = data.value.total;
  }
});
</script>
<template>
  <template v-if="pending">
    <Loading />
  </template>
  <div class="page" v-else>
    <div class="coop-result-list">
      <CoopResultResponseListItem v-for="result in results" :key="`result-${result.salmonId}`" :result="result" />
    </div>
    <InfiniteLoading @infinite="loadData" class="inifinite-loading" />
  </div>
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

.inifinite-loading {
  margin: 0 auto;
  text-align: center;
}

.coop-result-list {
  display: grid;
  gap: 1px;
}
</style>
