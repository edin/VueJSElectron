import Vue from 'vue';
import Router from 'vue-router';
import OpenGL from './views/OpenGL.vue';
import Vuetify from './views/Vuetify.vue';
import Binding from './views/Binding.vue';
import TodoView from "./views/TodoView.vue";
import TodoDetail from "./views/TodoDetail.vue";
import Plot from "./views/Plot.vue";
import TodoLite from "./views/TodoLite.vue";

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'binding',
            component: Binding,
        },
        {
            path: '/plot',
            name: 'plot',
            component: Plot,
        },        {
            path: '/opengl',
            name: 'opengl',
            component: OpenGL,
        },
        {
            path: '/vuetify',
            name: 'vuetify',
            component: Vuetify,
        },
        {
            path: '/todolite',
            name: 'todolite',
            component: TodoLite,
        },
        {
            path: "/todoview",
            name: "todoview",
            component: TodoView,
            children: [
                {
                    name: "todoitem",
                    path: "todo/:id",
                    component: TodoDetail
                }
            ]
        }
    ]
});
