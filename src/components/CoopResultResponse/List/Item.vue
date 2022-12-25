<template>
  <div class="coop-result-item" :class="result.isClear ? 'is-clear' : 'is-failure'"
    @click.top="$router.push(`results/${result.salmonId}`)">
    <div class="coop-result item">
      <p>{{ result.isClear ? $t('CoopHistory.Clear') : $t('CoopHistory.Failure') }}</p>
    </div>
    <div class="coop-result-main">
      <div class="coop-result-stage">
        <span>{{ result.schedule.stageId }}</span>
        <span></span>
      </div>
      <div class="coop-result-danger-rate-wrapper">
        <div>
          <span>{{ $t('CoopHistory.DangerRatio') }}</span>
          <span class="coop-result-danger-rate">{{ (result.dangerRate * 100).toFixed(1) }}%</span>
        </div>
      </div>
    </div>
    <div class="coop-result-weapon-list">
      <div v-for="weaponId in result.schedule.weaponList">
        <img class="coop-result-weapon-list-item" :src="imageURL(weaponId)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs"
type Props = {
  result: CoopResultResponse
}
const { result } = defineProps<Props>()
const imageURL = (weaponId: number): string => {
  return new URL(`/assets/weapons/${weaponId}.png`, import.meta.url).href
}
</script>

<style lang= "scss" scoped>
.coop-result-item {
  background-color: var(--color-salmon-orange);
  padding: 5px 0;
  align-items: center;
  display: grid;
  grid-template-columns: 80px auto min-content;
  line-height: 1;
  position: relative;
  color: azure;
  text-decoration: none;
  text-shadow: 1px 1px rgb(0 0 0 / 25%);


  &.is-clear {
    .coop-result {
      color: var(--color-yellow);
    }
  }

  &.is-failure::after {
    background: var(--color-background);
    bottom: 0;
    content: "";
    left: 0;
    opacity: .3;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }
}

.coop-result {
  font-family: var(--font-family-s1);
  font-size: 11px;
  min-width: 80px;
  padding: 0 2px;
  text-align: center;
  width: 80px;

  &.item {
    font-size: 12px;
    line-height: 1.2;
  }
}

.coop-result-stage {
  font-size: 11px;
  line-height: 1.35;
  overflow-wrap: break-word;
  word-break: break-word;
}

.coop-result-danger-rate-wrapper {
  font-family: var(--font-family-s1);
  display: inline-block;
  font-size: 14px;
  line-height: 1.2;
}

.coop-result-danger-rate {
  padding-left: 5px;
}

.coop-result-weapon-list {
  display: flex;
  justify-content: flex-end;
}

.coop-result-weapon-list-item {
  width: 30px;
  height: 30px;

  img {
    z-index: 1;
  }
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
