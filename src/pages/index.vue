<template>
  <div class="page">
    <div>
      <div class="sticky">
        <span>{{ results.length }}/{{ total }}件</span>
        <!-- <small>{{ page }} page</small> -->
      </div>
      <div class="coop-result-list">
        <CoopResultResponseListItem v-for="result in results" :key="`result-${result.salmonId}`" :result="result" />
      </div>
      <InfiniteLoading @infinite="loadData" class="inifinite-loading" />
    </div>
    <div class="loading" v-if="pending">Loading ...</div>
  </div>
</template>

<script setup lang="ts">
import { ApiResults } from "@/types/ApiResponse";
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
    method: "GET",
    params: {
      sort: "playTime",
      order: "desc",
    },
    onRequest({ options }) {
      // NOTE: offsetの値がずっと変わらなかったのでonRequestで制御
      if (options.params) {
        options.params.offset = 25 * page.value
      }
    },
    onResponse({ response }) {
      const { results: resResults, total: resTotal } = response._data
      results.value = [...results.value, ...resResults];
      total.value = resTotal;
    }
  }
);

</script>

<style lang="scss" scoped>
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

.infinite-loading {
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.coop-result-list {
  display: grid;
  gap: 1px;
}
</style>
