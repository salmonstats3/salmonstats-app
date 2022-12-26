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
            <br />
            <span class="ikura-num">{{ result.goldenIkuraNum }}</span>
          </div>
          <div>
            <small>{{ $t("CoopHistory.DeliverCount") }}</small>
            <br />
            <span class="ikura-num">{{ result.ikuraNum }}</span>
          </div>
        </div>
        <div class="coop-result-play-time">
          <span>{{ dayjs(result.playTime).format("YYYY/M/D hh:mm") }}</span>
        </div>
      </div>
    </div>
    <div class="coop-result-wave-results">
      <ModelsWaveCoopResultResponse class="wave-item" v-for="wave in result.waves" :wave="wave" :key="wave.waveId" />
    </div>
    <!-- <ModelsPlayerCoopResultResponse :players="result.players" /> -->
    <!-- <div style="margin-top: 100px">
      <p v-for="(item, key) in result"><small>{{ key }}</small> : <span>{{ item }}</span></p>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
type Props = {
  result: CoopResultResponse;
};
const { result } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.coop-result {
  // height: 100vh;
  width: 100%;
  min-width: var(--content-min-width);
  max-width: var(--content-max-width);
  margin: 0 auto;

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
        font-size: 32px;
      }
    }

    .coop-result-play-time {
      font-family: var(--font-family-s2);
      margin-top: 12px;
      text-align: center;
      font-size: 12px;
    }
  }

  .coop-result-wave-results {
    display: grid;
    gap: 1px;
    grid-auto-columns: minmax(25%, 100px);
    grid-auto-flow: column;
    margin: 0 10px;
    position: relative;
  }
}
</style>
