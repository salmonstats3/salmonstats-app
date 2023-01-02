<script setup lang="ts">
import dayjs from 'dayjs'
import { transpose } from 'matrix-transpose'
import Special from '@/components/models/special/Image.vue'
type Props = {
  result: CoopResultResponse;
};
const { result } = defineProps<Props>()
const specialUsage: number[][] = transpose(result.players.map((player) => {
  const specialId: number = player.specialId
  return player.specialCounts.map(count => Array(count).fill(specialId))
})).map(value => value.flatMap(value => value))
</script>

<template>
  <div class="coop-result" :class="result.isClear ? 'clear' : 'failure'">
    <div class="coop-result-summary">
      <div class="coop-result-summary-content">
        <div class="coop-result-job-result">
          <span>{{ result.isClear ? $t('CoopHistory.Clear') : $t('CoopHistory.Failure') }}</span>
        </div>
        <div class="coop-result-ikura">
          <div>
            <small>{{ $t("CoopHistory.GoldenDeliverCount") }}</small>
            <br>
            <span class="ikura-num">{{ result.goldenIkuraNum }}</span>
          </div>
          <div>
            <small>{{ $t("CoopHistory.DeliverCount") }}</small>
            <br>
            <span class="ikura-num">{{ result.ikuraNum }}</span>
          </div>
        </div>
        <div class="coop-result-play-time">
          <span>{{ dayjs(result.playTime).format("YYYY/M/D hh:mm") }}</span>
        </div>
      </div>
    </div>
    <div class="coop-result-wave-results">
      <ModelsWaveCoopResultResponse v-for="wave in result.waves" :key="wave.waveId" class="wave-item" :wave="wave" />
    </div>
    <div class="coop-result-wave-results coop-result-special">
      <div v-for="usages in specialUsage" class="special-images">
        <template v-for="specialId in usages">
          <span class="rounded-icon-wrapper">
            <Special :special-id="specialId" />
          </span>
        </template>
      </div>
    </div>
    <ModelsPlayerCoopResultResponse :players="result.players" />
    <!-- <div style="margin-top: 100px">
      <p v-for="(item, key) in result"><small>{{ key }}</small> : <span>{{ item }}</span></p>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.coop-result {
  width: 100%;
  height: calc(100% - 96px);
  min-width: var(--content-min-width);
  max-width: var(--content-max-width);
  margin: 0 auto;
  overflow: scroll;

  .coop-result-summary-content {
    background: var(--color-background-darker);
    padding-bottom: 10px;
    border-radius: 10px;
  }

  .coop-result-summary {
    padding: 10px;
    margin-bottom: 12px;
    text-align: center;

    .coop-result-job-result {
      font-family: var(--font-family-s1);
      font-size: 24px;
      color: yellowgreen;
      padding: 8px;
    }

    .coop-result-ikura {
      font-family: var(--font-family-s2);
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        margin: 0 20px;
      }

      .ikura-num {
        font-size: 24px;
      }
    }

    .coop-result-play-time {
      font-family: var(--font-family-s2);
      margin-top: 12px;
      text-align: center;
      font-size: 12px;
    }
  }
}

.rounded-icon-wrapper {
  img {
    object-fit: contain;
    align-items: center;
    background-color: black;
    display: inline-grid;
    justify-items: center;
    border-radius: 26.66%;

    width: 18px;
    height: 18px;
    margin-bottom: 3px;
    margin-right: 3px;
  }
}

.special-images {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  grid-auto-flow: column;
  justify-content: center;
  margin-bottom: -3px;
  margin-right: -3px;
  padding-top: 5px;
  padding-bottom: 15px;
}

.coop-result-special {
  display: grid;
  gap: 1px;
  grid-auto-columns: minmax(25%, 100px);
  grid-auto-flow: column;
  margin: 0 10px;
  position: relative;
  margin-bottom: 15px;
}

.coop-result-wave-results {
  display: grid;
  gap: 1px;
  grid-auto-columns: minmax(25%, 100px);
  grid-auto-flow: column;
  margin: 0 10px;
  position: relative;
  justify-content: center;
}
</style>
