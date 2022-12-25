<template>
  <div class="item" :class="result.isClear ? 'is-clear' : 'is-failure'"
    @click.top="$router.push(`results/${result.salmonId}`)">
    <div class="isClear">
      <span>{{ result.isClear ? $t('CoopHistory.Clear') : $t('CoopHistory.Failure') }}</span>
    </div>
    <!-- <div class="isClear">
      <span>ID: {{ result.salmonId }}</span>
    </div> -->
    <div class="playTime">
      <span>{{ dayjs(result.playTime).format('YYYY MM/DD HH:mm:ss') }}</span>
    </div>
    <div class="ikura">
      <span>{{ result.goldenIkuraNum }}</span>
      <br>
      <span>{{ result.ikuraNum }}</span>
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

<style scoped>
.item {
  color: #282828;
  /* margin-bottom: 16px; */
  border-bottom: 1px solid #282828;
  padding: 12px 8px;
  display: flex;
  align-items: center;
}

/* .is-clear {
  background-color:orange;
}

.is-failure {
  background-color:red;
} */
.isClear {
  font-size: 16px;
  margin-right: 12px;
}

.playTime {
  font-size: 12px;
}

.ikura {
  font-size: 14px;
  margin-left: auto;
  margin-right: 0;
  /*  */
  text-align: right;
  /* padding: 6px 8px; */
  /* min-width: 60px; */
  /* background-color: rgb(250, 250, 250); */
  /* border-radius: 4px */
}
</style>
