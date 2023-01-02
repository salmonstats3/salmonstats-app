import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

interface State {
  title: string
}

export const useTitle = defineStore('title', () => {
  const { t } = useI18n()
  const state = reactive<State>({
    title: 'no title'
  })
  const setTitle = (titleKey: string) => {
    const title = t(`page-title.${titleKey}`)
    state.title = title || ''
  }

  return {
    state,
    setTitle
  }
})
