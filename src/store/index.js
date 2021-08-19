import Vuex from 'vuex';
import Vue from 'vue';

import songs from './modules/songs';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        ...songs.state
    },
    mutations: {
        ...songs.mutations
    },
    actions: {
        ...songs.actions
    },
    getters: {
        ...songs.getters
    }
});

global.store = store;

export default store;
