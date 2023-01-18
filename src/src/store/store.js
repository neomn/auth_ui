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
        changeTheme: (state, payload) => {
            state.theme = payload
        },
        changeAuthMethod: (state, payload) => {
            state.authMethodCurrentLocation = payload
        }
    },
    actions: {
        changeAuthMethod: (context, payload) => {
            context.commit('changeAuthMethod', payload)
        },
    },
    modules: {

    }
})