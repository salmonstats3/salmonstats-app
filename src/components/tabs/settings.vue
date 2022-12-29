<template>
  <div class="settings-page">
    <div v-if="!authState.currentUser">
      <span>ログインしてください</span>
      <div>
        <button @click.stop="loginWithTwitter" v-if="!authState.isLogin">ログイン with Twitter</button>
      </div>
    </div>
    <div v-else>
      <img v-if="authState.currentUser.photoURL" :src="authState.currentUser.photoURL" alt="">
      <span>{{ authState.currentUser.displayName }}</span>
      <br>
      <button @click.stop="logoutWithTwitter">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { state: authState, loginWithTwitter, logoutWithTwitter, onAuthStateChanged } = useAuth();

onMounted(() => {
  // todo on default.vue (?)
  onAuthStateChanged()
})

</script>
