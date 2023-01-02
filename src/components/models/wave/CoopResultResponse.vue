<script setup lang="ts">
import { typeToString } from '@/util/eventType'
type Props = {
  wave: CoopResultResponse['waves'][number];
};
const { wave } = defineProps<Props>()

const waterLevel = (waterLevel: number) => {
  switch (waterLevel) {
    case 0:
      return 'low'
    case 1:
      return 'middle'
    case 2:
      return 'high'
  }
}
</script>

<template>
  <div class="wave-result">
    <div class="wave-result-content">
      <div class="wave-water-level" :class="waterLevel(wave.waterLevel)" />
      <div class="wave-num">
        <span v-if="wave.waveId != 4">WAVE {{ wave.waveId }}</span>
        <span v-else>{{ $t('CoopHistory.ExWave') }}</span>
        <span class="wave-result-tag">{{ $t(wave.isClear ? 'CoopHistory.Gj' : 'CoopHistory.Ng') }}</span>
      </div>
      <div class="quota-num">
        <span v-if="wave.goldenIkuraNum">{{ wave.goldenIkuraNum }}/{{ wave.quotaNum }}</span>
        <span v-else>{{ $t('CoopEnemy.SakelienGiant') }}</span>
      </div>
      <div class="wave-info">
        <div>{{ $t(`CoopHistory.WaveLevel${wave.waterLevel}`) }}</div>
        <div>{{ $t(`CoopEvent.${typeToString(wave.eventType)}`) }}</div>
      </div>
      <div class="pop-num">
        <img src="@/assets/images/gold-ikura.542af9c3faf6cd81f558fb11d2206995.svg" alt="gold-ikura">
        <span class="num">{{ wave.goldenIkuraPopNum }}</span>
      </div>
      <div class="pop-num-note">
        {{ $t('CoopHistory.Available') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wave-num {
  * {
    white-space: nowrap;
  }

  display: flex;
  font-size: 13px;
  justify-content: center;
  margin: 0 auto;
  padding: 7px 0 4px;
  position: relative;
}

.wave-water-level {
  &.high {
    height: 50%;
  }

  &.middle {
    height: 30%;
  }

  &.low {
    height: 10%;
  }

  background: black;
  bottom: 0;
  content: "";
  left: 0;
  opacity: .15;
  position: absolute;
  right: 0;

  &::before {
    background: url("@/static/media/wave-bg.91c46cd1065b6e467f09.svg");
    content: "";
    height: 10px;
    left: 0;
    position: absolute;
    right: 0;
    top: 1px;
    transform: translateY(-100%);
    width: 100%;
  }

}

.pop-num {
  align-items: center;
  color: rgba(0, 0, 0, .6);
  display: flex;
  font-size: 11px;
  font-style: normal;
  justify-content: center;
  position: relative;
  text-align: center;

  img {
    margin-right: 2px;
  }
}

.pop-num-note {
  color: rgba(0, 0, 0, .6);
  font-size: 9px;
  font-style: normal;
  margin-bottom: 5px;
  text-align: center;
}

.wave-info {
  flex: 1 1;
  font-size: 12px;
  padding: 10px 0;

  div {
    padding-bottom: 6px;
  }
}

.wave-result {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  // background-color: var(--color-yellow);
}

.wave-result-tag {
  background: rgba(0, 0, 0, .8);
  border-radius: 30px;
  color: var(--color-green);
  display: inline-block;
  font-size: 12px;
  line-height: 14px;
  margin-left: 3px;
  padding: 0 4px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-2px, -50%);
}

.wave-result-content {
  background: var(--color-salmon-yellow);
  color: black;
  flex: 1 1;
  flex-direction: column;
  font-family: var(--font-family-s2);
  line-height: 1;
  position: relative;
  z-index: -1;
}

.quota-num {
  background: rgba(0, 0, 0, .8);
  color: #fff;
  font-size: 17px;
  height: 25px;
  line-height: 1.2;
  position: relative;

  span {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
