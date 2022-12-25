<template>
  <div class="wave-item">
    <div class="waveId">
      <span>WAVE{{ wave.waveId }}</span>
    </div>
    <div class="ikura">
      <div v-if="wave.goldenIkuraNum">
        <span>{{ wave.goldenIkuraNum }}</span>
        <span>/</span>
        <span>{{ wave.quotaNum }}</span>
      </div>
      <div v-else>
        <span>-</span>
      </div>
    </div>
    <div class="info">
      <span>{{ $t(`CoopHistory.WaveLevel${wave.waterLevel}`) }}</span>
      <br />
      <span>{{ $t(`CoopEvent.${typeToString(wave.eventType)}`) }}</span>
      <br>
      <div class="goldenIkuraPopNum">
        <img src="@/assets/images/gold-ikura.542af9c3faf6cd81f558fb11d2206995.svg" alt="gold-ikura">
        <span>{{ wave.goldenIkuraPopNum }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { typeToString } from "@/util/eventType"
type Props = {
  wave: CoopResultResponse["waves"][number];
};
const { wave } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.wave-item {
  margin: 2px;
  padding: 6px;
  width: 120px;
  text-align: center;
  background-color: yellow;
  color: black;
  .waveId {
    padding-bottom: 4px;
  }
  .ikura {
    margin: 0 -10px;
    padding: 4px 0px;
    background-color: black;
    color: white;
  }
  .info {
    margin-top: 10px;
    padding-bottom: 5px;
    font-size: 13px;
  }
  .goldenIkuraPopNum {
    img, span {
      vertical-align: middle;
    }
  }
}
</style>
