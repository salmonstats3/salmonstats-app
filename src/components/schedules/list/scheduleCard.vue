<script setup lang="ts">
import { useDisplay } from 'vuetify'
import dayjs from 'dayjs'
import StageImage from '~/components/models/stage/StageImage.vue'
import WeaponImage from '~/components/models/weapon/Image.vue'

type Props = {
  schedule: any
}
const props = defineProps<Props>()

const router = useRouter()
const onClickCard = () => {
  // TODO v-cardのリンク先は仮。要修正
  router.push(`/schedules/${props.schedule.startTime}/rankings`)
}

const { mobile } = useDisplay()
</script>

<template>
  <v-card :class="mobile? 'mobileCard': 'pcCard'" @click="onClickCard">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div style="position:relative; overflow:hidden">
        <div style="position:absolute; top: 10px; left: 10px; text-shadow: 1px 2px 2px #000000;">
          <div>start: {{ dayjs(schedule.startTime).format('YYYY/MM/DD HH:mm') }}</div>
          <div>end: {{ dayjs(schedule.endTime).format('YYYY/MM/DD HH:mm') }}</div>
        </div>
        <div style="position:absolute; bottom: 10px; left: 10px; text-shadow: 1px 2px 2px #000000">
          シェケナダム
        </div>
        <div style="position:absolute;bottom: 10px;right: 10px">
          <WeaponImage v-for="weapon in schedule.weaponList" :id="weapon" class="mobile? weapon-image-mobile : weapon-image-pc" :weapon-id="weapon" />
        </div>
        <StageImage :id="schedule.stageId" :class="mobile? 'card-img-mobile': 'card-img-pc'" />
      </div>

      <v-card-text>
        ここに結果のサマリが表示される予定
      </v-card-text>
    </div>
  </v-card>
</template>
<style scoped>
.stage-image ::v-deep(img) {
width: 100%
}

.weapon-image-pc {
  width: 50px;
}

.weapon-image-mobile {
  width: 40px;
}

.card-img-pc {
  width: 360px
}

.card-img-mobile {
  width: 300px
}

</style>
