import Vuex from 'vuex'

export const store = new Vuex.Store({
    state: {
        theme: 'dark',
        navButtonCurrentLocation: 'login',
        authMethodCurrentLocation: 'sms',
    },
    getters: {
        appState: state => {
            return state
        },
    },
    mutations: {
        changeTheme: state => {

        },
        changeAuthMethod: (state, payload) => {
            state.authMethodCurrentLocation = payload
        }
    },
    actions: {

    },
    modules: {

    }
})