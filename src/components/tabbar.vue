<script setup lang="ts">
  const router = useRouter()
</script>

<template>
  <div class="tab-bar">
    <div class="tab-container">
      <ul>
        <li class="home" @click="router.push('/')">
          <span>{{ $t('Common.Home') }}</span>
        </li>
        <li class="schedules">
          <span>{{ $t('StageSchedule.Title') }}</span>
        </li>
        <li class="records">
          <span>{{ $t('Record.Title') }}</span>
        </li>
        <li class="results">
          <span>{{ $t('CoopHistory.History') }}</span>
        </li>
        <li class="settings" @click="router.push('/settings')">
          <span>{{ $t('Settings.Title') }}</span>
        </li>
      </ul>
    </div>
    <button class="refresh-button"></button>
  </div>
</template>

<style scoped lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 5000;

  ul {
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    padding: 0 8px;
    box-sizing: border-box;
    list-style-type: none;
  }

  li {
    position: relative;
    cursor: pointer;
    width: 20%;
    height: 48px;
    background-position: center top -70px;
    background-repeat: no-repeat;
    background-size: 45px 120px;
    font-weight: 700;
  }

  .refresh-button {
    position: absolute;
    bottom: calc(env(safe-area-inset-bottom) + 60px);
    right: 12px;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: rgba(50, 50, 50, .9);
    box-shadow: 1px 1px 0 rgb(0 0 0 / 80%);
  }
}

.tab-bar .tab-container:before {
  position: absolute;
  display: block;
  content: "";
  border-top: 1px solid #ccc;
  opacity: .15;
  width: 100%;
  height: 0;
  top: -1px;
  left: 0;
}

.tab-container {
  position: relative;
  width: 100%;
  background: black;
  text-align: center;
  padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar li span {
  font-family: var(--font-family-s2);
  position: absolute;
  display: block;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0 0 2px;
  font-size: 9px;
  // cursor: pointer;
  // color: var(--color-gray)
}
</style>
