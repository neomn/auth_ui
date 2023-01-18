import Vuex from 'vuex'

export const store = new Vuex.Store({
    state: {
        theme: 'dark',
        navButtonCurrentLocation: 'login',
        authMethodCurrentLocation: 'sms',
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        appState: (state) => {
            return state
        },
    },
    modules: {

    }
})