<script setup lang="ts">
import { useTitle } from '~/composables/useTitle'
import { injectScheduleState } from '~/components/schedules/hooks/useSchedule'
useTitle().setTitle('schedules-id-rankings')

const { state } = injectScheduleState()

</script>

<template>
  <v-row class="justify-center">
    ランキング
    {{ state }}
  </v-row>
</template>

<style lang="scss" scoped>

</style>
