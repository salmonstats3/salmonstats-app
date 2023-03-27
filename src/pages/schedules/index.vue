<script setup lang="ts">
import { useTitle } from '~/composables/useTitle'
import { ApiResults } from '~/types/ApiResponse'
import ScheduleCard from '~/components/schedules/list/scheduleCard.vue'
useTitle().setTitle('schedules')
const page = ref(0)

const runtimeConfig = useRuntimeConfig()
const { data: schedules, pending, refresh } = useFetch<ApiResults>(
    `${runtimeConfig.public.apiUrlBase}v1/schedules`,
    {
      params: {},
      onRequest ({ options }) {
        // NOTE: offsetの値がずっと変わらなかったのでonRequestで制御
        if (options.params) {
          options.params.offset = 25 * page.value
        }
      }
    }
)

</script>

<template>
  <v-container>
    <div v-for="schedule in schedules" :key="schedule" class="mt-2">
      <schedule-card :schedule="schedule" />
    </div>
  </v-container>
</template>

<style lang="scss" scoped>

</style>
