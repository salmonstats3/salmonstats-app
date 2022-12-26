<template>
  <div class="coop-result-item" :class="result.isClear ? 'clear' : 'failure'"
    @click.top="$router.push(`results/${result.salmonId}`)">
    <div class="coop-result-job-result" :class="result.isClear ? 'clear' : 'failure'">
      <span>{{ result.isClear ? $t('CoopHistory.Clear') : $t('CoopHistory.Failure') }}</span>
    </div>
    <div class="coop-result-play-time">
      <span>{{ dayjs(result.playTime).format('YYYY MM/DD HH:mm') }}</span>
      <!-- <span>{{ dayjs(result.playTime).fromNow() }}</span> -->
    </div>
    <div class="coop-result-ikura">
      <div>
        <img src="@/assets/images/gold-ikura.542af9c3faf6cd81f558fb11d2206995.svg" alt="golden-ikura">
        <span class="num">{{ result.goldenIkuraNum }}</span>
      </div>
      <div>
        <img src="@/assets/images/ikura.b84a6213dc0a5053e99b63d9be7dd4d3.svg" alt="ikura">
        <span class="num">{{ result.ikuraNum }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs"
type Props = {
  result: CoopResultResponse
}
const { result } = defineProps<Props>()
</script>

<style scoped lang="scss">
.coop-result-item {
  padding: 12px 18px;
  display: flex;
  align-items: center;
  color: azure;

  &.clear {
    background-color: var(--color-salmon-orange);
  }

  &.failure {
    background-color: var(--color-salmon-orange-darker);
  }

  &:hover,
  &:active {
    cursor: pointer;
    background-color: var(--color-red);
  }
}

.coop-result-job-result {
  font-family: var(--font-family-s1);
  font-size: 16px;
  margin-right: 12px;

  &.clear {
    color: var(--color-yellow);
  }
}

.coop-result-play-time {
  font-family: var(--font-family-s2);
  font-size: 12px;
}

.coop-result-ikura {
  font-family: var(--font-family-s2);
  font-size: 16px;
  margin-left: auto;
  margin-right: 0;
  text-align: right;

  img {
    margin-right: 4px;
    height: 14px;
  }
}

.num::before {
  content: "x";
  padding-right: 2px;
}
</style>
