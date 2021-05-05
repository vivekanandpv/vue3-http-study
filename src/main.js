import { createApp } from 'vue';
import App from './App.vue';
import { reqresInstance, typicodeInstance } from './services/http-client';

//  injector configuration has changed in Vue 3
//  Vue.use doesn't work anymore

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
