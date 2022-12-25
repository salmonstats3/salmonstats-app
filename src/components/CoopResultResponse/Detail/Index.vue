<template>
  <div class="page" :class="result.isClear ? 'is-clear' : 'is-failure'">
    <div class="summary">
      <div class="isClear">
        <span>{{ result.isClear ? "Clear!!" : "Failure" }}</span>
      </div>
      <div class="ikura">
        <div>
          <small>{{ $t("CoopHistory.GoldenDeliverCount") }}</small>
          <br />
          <span class="ikuraNum">{{ result.goldenIkuraNum }}</span>
        </div>
        <div>
          <small>{{ $t("CoopHistory.DeliverCount") }}</small>
          <br />
          <span class="ikuraNum">{{ result.ikuraNum }}</span>
        </div>
      </div>
      <div class="playTime">
        <span>{{ dayjs(result.playTime).format("YYYY/M/D hh:mm") }}</span>
      </div>
    </div>
    <div class="waves">
      <ModelsWaveCoopResultResponse
        class="wave-item"
        v-for="wave in result.waves"
        :wave="wave"
        :key="`wave-${wave.waveId}`"
      />
    </div>
    <ModelsPlayerCoopResultResponse :players="result.players" />
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

<style scoped lang="scss">
.page {
  height: 100vh;
  padding: 12px;
  div {
    border-radius: 6px;
  }
  .summary {
    background-color: rgb(30, 30, 30);
    padding: 10px;
    margin-bottom: 12px;
    text-align: center;
    .isClear {
      font-size: 24px;
      color: yellowgreen;
      padding: 8px;
    }
    .ikura {
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        margin: 0 20px;
      }
      .ikuraNum {
        font-size: 32px;
      }
    }
    .playTime {
      margin-top: 12px;
      text-align: center;
      font-size: 12px;
    }
  }
  .waves {
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
  }
}
</style>
