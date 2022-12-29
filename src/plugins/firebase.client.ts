import { initializeApp } from 'firebase/app'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseArojectId,
    storageBucket: config.public.firebaseAtorageBucket,
    messagingSenderId: config.public.firebaseAessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseAeasurementId,
  }
  initializeApp(firebaseConfig)
})