import Vuex from 'vuex'

export const store = new Vuex.Store({
    state: {
        theme: 'dark',
        selectedNavButton: 'login',
        authMethod: 'sms',
    },
    getters: {
        theme: state => {
            return state.theme
        },
        authMethod: state => {
            return state.authMethod
        },
        selectedNabButton: state => {
            return state.selectedNavButton
        },
    },
    mutations: {
        changeTheme: (state, payload) => {
            state.theme = payload
        },
        changeAuthMethod: (state, payload) => {
            state.authMethod = payload
        },
        changeSelectedNavButton: (state, payload) => {
            state.selectedNavButton = payload
        },
    },
    actions: {
        changeAuthMethod: (context, payload) => {
            context.commit('changeAuthMethod', payload)
        },
    },
    modules: {

    }
})