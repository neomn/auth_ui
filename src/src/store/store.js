import Vuex from 'vuex'
import { loginOptions } from "./loginOptions.js";
import { registerOptions } from "./registerOptions.js";
import { recoverOptions } from "./recoverOptions.js";
import { manage } from "./displayManager.js";

export const store = new Vuex.Store({
    state: {
        theme: 'dark',
        selectedNavButton: 'login',
        currentAuthMethod: 'sms',
        activeFormInputs: {
            phone_number: {display: true, value: ''},
            email: {display: false, value: ''},
            first_name: {display: false, value: ''},
            last_name: {display: false, value: ''},
            password: {display: true, value: ''},
            confirm_password: {display: false, value: ''},
            one_time_token: {display: false, value: ''},
        },
        activeButtons: {
            login: {display: true},
            register: {display: false},
            recover: {display: false},
            check: {display: false},
        },
        authMethods: {
            sms: { display: true },
            email: { display: true },
            google: { display: true },
            linkedin: { display: true },
        },
    },

    getters: {
        theme: state => {
            return state.theme
        },
        authMethod: state => {
            return state.currentAuthMethod
        },
        selectedNavButton: state => {
            return state.selectedNavButton
        },
        activeFormInputs: state => {
            return state.activeFormInputs
        },
        activeButtons: state => {
            return state.activeButtons
        },
        currentAuthMethod: state => {
          return state.currentAuthMethod
        },
        authMethods: (state) => {
            return state.authMethods
        }
    },

    mutations: {
        changeTheme: (state, payload) => {
            state.theme = payload
        },
        changeCurrentAuthMethod: (state, payload) => {
            state.currentAuthMethod = payload
        },
        changeSelectedNavButton: (state, payload) => {
            state.selectedNavButton = payload
        },
        updateInputComponent: (state, route) => {
            if (route === 'login'){ manage (state, loginOptions) }
            if (route === 'register'){ manage (state, registerOptions) }
            if (route === 'recover'){ manage (state, recoverOptions) }
        },
    },

    actions: {
        changeTheme: (context, payload) => {
            context.commit('changeTheme', payload)
        },
        changeCurrentAuthMethod: (context, payload) => {
            context.commit('changeCurrentAuthMethod', payload)
        },
        changeSelectedNavButton: (context, payload) => {
            context.commit('changeSelectedNavButton', payload)
        },
        updateInputComponent: (context, route) => {
            context.commit('updateInputComponent', route)
        },
    },

    modules: {

    }
})

