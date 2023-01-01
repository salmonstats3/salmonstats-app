import JPja from "./locales/JPja.json";
import JPjaCustom from "./locales/custom/JPja.json";
import USen from "./locales/USen.json";
import CNzh from "./locales/CNzh.json";
import EUde from "./locales/EUde.json";
import EUen from "./locales/EUen.json";
import EUfr from "./locales/EUfr.json";
import EUit from "./locales/EUit.json";
import EUnl from "./locales/EUnl.json";
import KRko from "./locales/KRko.json";
import TWzh from "./locales/TWzh.json";
import USes from "./locales/USes.json";
import USfr from "./locales/USfr.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    '~/plugins/vuetify',
  ],
  modules: ["@nuxtjs/i18n"],
  css: ["@/layouts/style.scss", "@/assets/styles/app.scss", "vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  srcDir: "src/",
  build: {
    transpile: ["vuetify"],
  },
  runtimeConfig: {
    public: {
      apiUrlBase: process.env.NUXT_API_URL_BASE,
    },
  },
  i18n: {
    defaultLocale: "JPja",
    vueI18n: {
      messages: {
        JPja: {...JPja, ...JPjaCustom},
        USen: USen,
        CNzh: CNzh,
        EUde: EUde,
        EUen: EUen,
        EUfr: EUfr,
        EUit: EUit,
        EUnl: EUnl,
        KRko: KRko,
        TWzh: TWzh,
        USes: USes,
        USfr: USfr,
      },
      fallbackLocale: "JPja",
      legacy: false,
    },
  },
});
