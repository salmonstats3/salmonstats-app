import { inject, InjectionKey } from 'vue'
import { ApiResults } from '~/types/ApiResponse'

interface ScheduleState {
  schedule: any,
  results: any[],
}

interface Return {
state: ScheduleState,
  pending: any,
  refresh: any,
}

const injectionKey: InjectionKey<Return> = Symbol('ScheduleStateKey')

/**
 * スケジュール情報と機能を提供する
 * TODO: scheduleを一意に定めるIDを渡して、onResponseで絞り込む？
 */
export function useSchedule (id: string) {
  const state = ref<ScheduleState>({
    schedule: {
      startTime: '',
      weaponList: [],
      rareWeapon: null,
      endTime: '',
      stageId: -1,
      setting: 'CoopNormalSetting'
    },
    results: []
  })
  const page = ref(0)
  const runtimeConfig = useRuntimeConfig()
  const { pending, refresh } = useLazyFetch<ApiResults>(
    `${runtimeConfig.public.apiUrlBase}v1/schedules`,
    {
      params: {},
      onRequest ({ options }) {
        if (options.params) {
          options.params.offset = 25 * page.value
        }
      },
      onResponse () {
        // TODO 固定値ではなくresponseの値を格納する
        state.value.schedule = {
          startTime: '2022-09-08T08:00:00Z',
          weaponList: [
            10,
            5010,
            1010,
            2010
          ],
          rareWeapon: null,
          endTime: '2022-09-10T00:00:00Z',
          stageId: 2,
          setting: 'CoopNormalSetting'
        }
      },
      immediate: true
    }
  )

  const ret : Return = {
    state: state.value,
    pending,
    refresh
  }

  provide(injectionKey, ret)

  return ret
}

export function injectScheduleState (): Return {
  return <Return>inject(injectionKey)
}
