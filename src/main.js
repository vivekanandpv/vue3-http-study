import Vue, { createApp } from 'vue';
import App from './App.vue';
import { reqresInstance, typicodeInstance } from './services/http-client';

createApp(App)
  .use({
    install(Vue) {
      console.log(Vue);
      Vue.config.globalProperties.$reqresService = reqresInstance;
    },
  })
  .use({
    install(Vue) {
      console.log(Vue);
      Vue.config.globalProperties.$typicodeService = typicodeInstance;
    },
  })
  .mount('#app');
