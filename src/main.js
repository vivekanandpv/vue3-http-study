import Vue, { createApp } from 'vue';
import App from './App.vue';
import { reqresInstance, typicodeInstance } from './services/http-client';

Vue.use({
  install(Vue) {
    Vue.prototype.$reresService = reqresInstance;
    Vue.prototype.$typicodeService = typicodeInstance;
  },
});

createApp(App).mount('#app');
