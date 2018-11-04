import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
    state: { count: 0 },
    mutations: {
        increment(state) {
            state.count++;
        },
    },

    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    },

    actions: {
        incrementIfOddOnRootSum({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment');
            }
        }
    }
};

export default new Vuex.Store({
    modules: {
        a: moduleA,
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
});
