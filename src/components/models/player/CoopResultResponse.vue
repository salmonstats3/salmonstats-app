<template>
  <div class="coop-result-response">
    <div class="player-item" v-for="player in players">
      <div class="name">
        <span>{{ player.name }}</span>
        <br>
        <small class="bossKillCountsTotal">{{ $t('CoopHistory.Enemy')}} {{ player.bossKillCountsTotal }}</small>
      </div>
      <div class="weapons">
        <span class="weapon-item" v-for="weaponId in player.weaponList ">
          <ModelsWeaponImage :weapon-id="weaponId" />
        </span>
        <br>
        <ModelsSpecialIamge class="special" :special-id="player.specialId"/>
      </div>
      <div class="result">
        <div>
          <img src="@/assets/images/gold-ikura.542af9c3faf6cd81f558fb11d2206995.svg" alt="gold-ikura">
          <span>{{ player.goldenIkuraNum }}</span>
        </div>
        <div>
          <img src="@/assets/images/ikura.b84a6213dc0a5053e99b63d9be7dd4d3.svg" alt="ikura">
          <span>{{ player.ikuraNum }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { numToString } from "@/util/weapon"
type Props = {
  players: CoopResultResponse["players"];
};
const { players } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.coop-result-response {
  max-width: 450px;
  border-radius: 6px;
  margin: 0 auto;
  padding: 0px 8px;
  background-color: rgb(210, 100, 0);
  color: white;
  .player-item {
    margin-right: -12px;
    margin-left: -12px;
    &:not(:last-child) {
      border-bottom: 1px solid rgb(55, 55, 55);
    }
    display: flex;
    align-items: center;
    padding: 0 12px;
    & > div {
      flex-grow: 0;
      padding: 8px 6px;
    }
    .name {
      flex-grow: 1;
      font-size: 16px;
      line-height: 20px;
      .bossKillCountsTotal {
        color: rgb(220, 220, 220);
        font-size: 12px;
        line-height: 14px;
      }
    }
    .weapons {
      font-size: 10px;
      .weapon-item {
        margin-right: 1px;
      }
      .special {
        text-align: right;
      }
    }
    .result {
      font-size: 14px;
      text-align: right;
      img {
        width: 12px;
        margin-right: 4px;
      }
    }
  }
}
</style>