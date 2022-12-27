<script setup lang="ts">
import Weapon from "@/components/models/weapon/Image.vue"
import Special from '@/components/models/special/Image.vue'
// import { numToString } from "@/util/weapon"
type Props = {
  players: CoopResultResponse["players"];
};
const { players } = defineProps<Props>();
</script>

<template>
  <div class="coop-result-member-result-wrapper">
    <div class="coop-result-member-result">
      <template v-for="player in players" :key="player.pid">
        <div class="member-name-content">
          <div class="member-name">{{ player.name }}</div>
          <div class="member-defeated-count">
            <span>{{ $t('CoopHistory.Enemy') }}</span>
            <span class="num">{{ player.bossKillCountsTotal }}</span>
          </div>
        </div>
        <div class="member-weapon-content">
          <div class="member-weapon-images">
            <template v-for="weaponId in player.weaponList">
              <Weapon :weaponId="weaponId" />
            </template>
            <Special :specialId="player.specialId" />
          </div>
        </div>
        <div class="member-result-content-wrapper">
          <div class="member-result-content">
            <div class="golden-ikura">
              <img src="@/static/media/gold-ikura.542af9c3faf6cd81f558fb11d2206995.svg" />
              <span class="num">{{ player.goldenIkuraNum }}</span>
            </div>
            <div class="ikura">
              <img src="@/static/media/ikura.b84a6213dc0a5053e99b63d9be7dd4d3.svg" />
              <span class="num">{{ player.ikuraNum }}</span>
            </div>
            <div class="rescue">
              <img src="@/static/media/helped-squid.de450df6088a71f5519d242fc581d49c.svg" />
              <span class="num">{{ player.helpCount }}</span>
            </div>
            <div class="death">
              <img src="@/static/media/holpen-squid.4913eb25a33651ac3d452c5c379e84b8.svg" />
              <span class="num">{{ player.deadCount }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.member-result-content-wrapper {
  align-items: center;
  background: var(--color-salmon-orange);
  display: flex;
  font-family: var(--font-family-s2);
  justify-content: center;
  padding-right: 8px;
}

.member-result-content {
  background: rgba(0, 0, 0, .7);
  border-radius: 10px;
  display: grid;
  font-size: 12px;
  gap: 5px;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, minmax(max-content, auto));
  grid-template-rows: repeat(2, auto);
  padding: 4px;
  width: 100%;

  .golden-ikura,
  .ikura,
  .rescue,
  .death {
    align-items: center;
    display: grid;
    gap: 2px;
    grid-auto-flow: column;
    width: 100%;
  }

  .golden-ikura img {
    height: 16px;
    object-fit: contain;
    width: 22px;
  }

  .ikura img {
    height: 16px;
    object-fit: contain;
    width: 22px;
  }

  .rescue img,
  .death img {
    height: 16px;
    object-fit: contain;
    width: 32px;
  }
}

.member-weapon-content {
  align-items: center;
  background: var(--color-salmon-orange);
  display: flex;
  font-family: var(--font-family-s2);
  justify-content: center;
  padding-right: 8px;
}

.member-weapon-images {
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(3, auto);

  img {
    width: 16px;
    height: 16px;
    padding: 2px;
    background-color: #212121;
    border-radius: 26.66%;
  }
}

.coop-result-member-result-wrapper {
  margin: 0 10px;
}

.coop-result-member-result {
  // border-radius: 10px;
  display: grid;
  grid-template-columns: auto min-content min-content;
  line-height: 1;
  overflow: hidden;
  row-gap: 1px;
}

.member-name-content {
  background: var(--color-salmon-orange);
  display: flex;
  flex: 1 1;
  flex-direction: column;
  font-family: var(--font-family-s2);
  font-size: 15px;
  justify-content: center;
  line-height: 1.3;
  padding: 10px;
  text-shadow: 1px 1px 0 rgb(0 0 0 / 25%);

  .member-defeated-count {
    font-size: 11px;
    opacity: .7;
  }
}
</style>
