import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import * as VueGL from "vue-gl";

Vue.config.productionTip = false;


Object.keys(VueGL).forEach(name => {
  Vue.component(name, VueGL[name]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
