<script setup lang="ts">
import { useTitle } from '~/composables/useTitle'
import ScheduleHeader from '~/components/schedules/header/scheduleHeader.vue'
import { useSchedule } from '~/components/schedules/hooks/useSchedule'
useTitle().setTitle('schedules')

const items = [
  { id: 'rankings', name: 'ランキング' },
  { id: 'records', name: '統計' },
  { id: 'results', name: 'リザルト' }
]
const tab = ref('')

const route = await useRoute()
const { scheduleId } = route.params

const { pending, state } = useSchedule(scheduleId as string)

</script>

<template>
  <v-container>
    <v-row class="justify-center">
      <schedule-header :schedule="state.schedule" />
    </v-row>
    <v-row class="justify-center">
      <v-tabs v-model="tab" :items="items.map(i => i.id)">
        <v-tab
          v-for="item in items"
          :key="item.id"
          :value="item.id"
          :to="`/schedules/${scheduleId}/${item.id}`"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-row>
    <nuxt-page />
  </v-container>
</template>

<style lang="scss" scoped>
a:-webkit-any-link {
  color: unset;
  text-decoration: unset;
}
a.v-slide-group-item--active:-webkit-any-link {
  color: var(--color-salmon-green)
}
</style>
