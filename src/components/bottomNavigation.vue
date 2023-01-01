<script setup lang="ts">
import {ref} from "@vue/reactivity";
import {useDisplay} from "vuetify";

const display = ref(useDisplay())
</script>

<template>
  <v-bottom-navigation v-show="display.smAndDown">
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn>
      <span>Schedules</span>
      <v-icon>mdi-calendar</v-icon>
    </v-btn>
    <v-btn>
      <span>Results</span>
      <v-icon>mdi-text-box-search</v-icon>
    </v-btn>
    <v-btn>
      <span>Settings</span>
      <v-icon>mdi-settings</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
</style>
