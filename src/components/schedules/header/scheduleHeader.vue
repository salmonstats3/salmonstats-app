<script setup lang="ts">
import dayjs from 'dayjs'
import StageImage from '~/components/models/stage/StageImage.vue'

type Props = {
  schedule: any
}
defineProps<Props>()
// TODO: idとステージ名のマッピングを定義して表示する

</script>

<template>
  <div style="position:relative;">
    <div style="position:absolute; top: 10px; left: 10px; text-shadow: 1px 2px 2px #000000;">
      <div>start: {{ dayjs(schedule.startTime).format('YYYY/MM/DD HH:mm') }}</div>
      <div>end: {{ dayjs(schedule.endTime).format('YYYY/MM/DD HH:mm') }}</div>
    </div>
    <div style="position:absolute; bottom: 10px; left: 10px; text-shadow: 1px 2px 2px #000000">
      シェケナダム
    </div>
    <StageImage :id="schedule.stageId" class="stage-image" />
  </div>
</template>
<style scoped>
.stage-image {
  width: 500px;
}
</style>
