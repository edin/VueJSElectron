import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Vue from 'vue';



import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import * as VueGL from "vue-gl";


Vue.config.productionTip = false;

//Import and register components
import TodoItem    from "./components/TodoItem.vue";
import TodoForm    from "./components/TodoForm.vue";
import CommentItem from "./components/CommentItem.vue";
import CommentForm from "./components/CommentForm.vue";

Vue.component("TodoItem", TodoItem);
Vue.component("TodoForm", TodoForm);
Vue.component("CommentItem", CommentItem);
Vue.component("CommentForm", CommentForm);


Object.keys(VueGL).forEach(name => {
  Vue.component(name, VueGL[name]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
