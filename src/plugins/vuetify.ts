import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {createPinia} from "pinia";
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomTheme = {
    dark: true,
    colors: {
      black: '#000000',
      background: '#1e1e1e',
      primary: '#EC5D41',
      secondary: '#71F455',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    }
  }


  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme,
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);


  //TODO 本来別ファイルで定義するべき
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia)
});
