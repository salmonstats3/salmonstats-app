// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  runtimeConfig: {
    public: {
      apiUrlBase: process.env.NUXT_API_URL_BASE
    }
  }
})
