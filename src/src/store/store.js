import Vuex from 'vuex'

export const store = new Vuex.Store({
    state: {
        theme: 'dark',
        selectedNavButton: 'login',
        authMethod: 'sms',
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
            state.authMethod = payload
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