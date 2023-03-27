<script setup lang="ts">
import dayjs from 'dayjs'
import Weapon from '@/components/models/weapon/Image.vue'
import Stage from '@/components/models/stage/Image.vue'

type Props = {
  schedule: CoopScheduleResponse
}
const { schedule } = defineProps<Props>()
</script>

<template>
  <div class="schedule-stage">
    <div class="schedule-stage-content">
      <Stage :stage-id="schedule.stageId" />
    </div>
    <div class="schedule-weapon-list">
      <div class="schedule-weapon-list-wrapper">
        <template v-for="weaponId in schedule.weaponList">
          <Weapon :weapon-id="weaponId" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.schedule-stage {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.schedule-stage-content {
  width: 50%;

  img {
    display: block;
    height: 80px;
    object-fit: cover;
    width: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  // border-bottom-left-radius: 10px;
}

.schedule-weapon-list {
  width: 50%;
  align-items: center;
  background: rgba(0, 0, 0, 25%);
  display: flex;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.schedule-weapon-list-wrapper {
  background: black;
  border-radius: 40px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 7px 5px 0;
  max-width: 180px;
  padding: 5px;
  width: calc(100% - 10px);

  img {
    width: 36px !important;
    height: 36px !important;
    object-fit: cover;
    background-color: black;
  }
}
</style>
