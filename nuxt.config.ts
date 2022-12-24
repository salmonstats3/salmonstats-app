import ja from "./locales/JPja.json";
import en from "./locales/USen.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  runtimeConfig: {
    public: {
      apiUrlBase: process.env.NUXT_API_URL_BASE,
    },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "ja", name: "Japanese", iso: "ja_JP" },
      { code: "en", name: "English", iso: "en-US" },
    ],
    defaultLocale: "ja",
    vueI18n: {
      messages: {
        ja: ja,
        en: en,
      },
      fallbackLocale: "ja",
      legacy: false,
    },
  },
});
