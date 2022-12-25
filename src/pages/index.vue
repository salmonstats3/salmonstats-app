<template>
  <div class="page">
    <div class="loading" v-if="pending">Loading ...</div>
    <div v-else>
      <div class="sticky">
        <span>{{ results.length }}/{{ total }}件</span>
        <!-- <small>{{ page }} page</small> -->
      </div>
      <CoopResultResponseListItem
        v-for="result in results"
        :key="`result-${result.salmonId}`"
        :result="result"
      />
      <InfiniteLoading @infinite="loadData" class="inifinite-loading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ApiResults } from "@/types/ApiResponse";
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
      sort: "desc",
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
        sort: "desc",
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

<style scoped lang="scss">
.page {
  padding: {
    right: 16px;
    left: 16px;
  }
  background-color: #282828;
  .loading {
    height: 100vh;
    padding-top: 50px;
    text-align: center;
  }
}
.sticky {
  position: sticky;
  top: 0;
  background-color: #282828;
  padding: 16px;
  font-size: 16px;
  text-align: right;
}

.inifinite-loading {
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
</style>
