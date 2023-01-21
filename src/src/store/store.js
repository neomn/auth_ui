import Vuex from 'vuex'
import {sms_login, email_login, google_login, linkedin_login} from "./loginOptions.js";

export const store = new Vuex.Store({
    state: {
        theme: 'dark',
        selectedNavButton: 'login',
        authMethod: 'sms',
        activeFormInputs: {
            sms_login,
            email_login,
            google_login,
            linkedin_login,
        },
    },
    getters: {
        theme: state => {
            return state.theme
        },
        authMethod: state => {
            return state.authMethod
        },
        selectedNavButton: state => {
            return state.selectedNavButton
        },
        activeFormInputs: state => {
            return state.activeFormInputs
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
        changeTheme: (context, payload) => {
            context.commit('changeTheme', payload)
        },
        changeAuthMethod: (context, payload) => {
            context.commit('changeAuthMethod', payload)
        },
        changeSelectedNavButton: (context, payload) => {
            context.commit('changeSelectedNavButton', payload)
        },
    },
    modules: {

    }
})

