<template>
  <div class="item" :class="result.isClear ? 'is-clear' : 'is-failure'"
    @click.top="$router.push(`results/${result.salmonId}`)">
    <div class="isClear">
      <span>{{ result.isClear ? $t('CoopHistory.Clear') : $t('CoopHistory.Failure') }}</span>
    </div>
    <div class="playTime">
      <span>{{ dayjs(result.playTime).format('YYYY MM/DD HH:mm') }}</span>
      <!-- <span>{{ dayjs(result.playTime).fromNow() }}</span> -->
    </div>
    <div class="ikura">
      <div>
        <img src="@/assets/images/gold-ikura.542af9c3faf6cd81f558fb11d2206995.svg" alt="gold-ikura">
        <span>{{ result.goldenIkuraNum }}</span>
      </div>
      <div>
        <img src="@/assets/images/ikura.b84a6213dc0a5053e99b63d9be7dd4d3.svg" alt="ikura">
        <span>{{ result.ikuraNum }}</span>
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
.item {
  border-bottom: 1px solid rgb(30, 30, 30);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  &.is-clear {
    background-color: rgb(210, 100, 0);
    color: rgb(250, 250, 250);
  }
  &.is-failure {
    background-color: rgb(160, 100, 0);
  }
  &:hover, &:active {
    cursor: pointer;
    background-color: rgb(130, 100, 0);
  }
}

.isClear {
  font-size: 16px;
  margin-right: 12px;
}

.playTime {
  font-size: 12px;
}

.ikura {
  font-size: 16px;
  margin-left: auto;
  margin-right: 0;
  text-align: right;
  img {
    margin-right: 4px;
    height: 14px;
  }
}
</style>
