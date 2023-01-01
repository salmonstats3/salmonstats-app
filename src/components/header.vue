<script setup lang="ts">
import { useTitle } from "~/composables/useTitle";
import { useDisplay } from 'vuetify'
import {ref} from "@vue/reactivity";

const {state} = useTitle()
const display = ref(useDisplay())
</script>

<template>
    <v-app-bar color="background" fixed>
      <v-app-bar-nav-icon v-show="display.mdAndUp" />
      <v-app-bar-title>{{ state.title }}</v-app-bar-title>

      <v-spacer />
      TODO: login user
    </v-app-bar>
</template>

<style scoped lang="scss">
// ここになにか書かないとエラーになるのでコメント記載する
</style>
