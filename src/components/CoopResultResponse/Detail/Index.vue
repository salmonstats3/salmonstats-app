<template>
  <div class="item" :class="result.isClear ? 'is-clear' : 'is-failure'">
    <div>
      <span>{{ result.isClear ? 'Clear!!' : 'Failure' }}</span>
    </div>
    <span>{{ dayjs(result.playTime).format("M/D hh:mm") }}</span>
    <div v-for="player in result.players">
      <span>{{ player.name }}</span>
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
  margin-bottom: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.is-clear {
  background-color: aliceblue;
}
</style>