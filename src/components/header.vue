<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { ref } from 'vue'
import { useTitle } from '~/composables/useTitle'

const { state } = useTitle()
const display = ref(useDisplay())
</script>

<template>
  <v-app-bar color="background" app fixed class="app-bar">
    <v-app-bar-nav-icon v-show="display.mdAndUp" />
    <v-app-bar-title>{{ state.title }}</v-app-bar-title>

    <v-spacer />
    TODO: login user
  </v-app-bar>
</template>

<style scoped lang="scss">
.app-bar {
  width: 100%
}
</style>
