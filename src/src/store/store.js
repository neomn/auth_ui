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
        formInputs: {
            phone_number: {display: true, value: ''},
            email: {display: false, value: ''},
            first_name: {display: false, value: ''},
            last_name: {display: false, value: ''},
            password: {display: true, value: ''},
            confirm_password: {display: false, value: ''},
            one_time_token: {display: false, value: ''},
        },
        buttons: {
            login: {placeHolder: 'Login', display: true},
            register: {placeHolder: 'Register', display: false},
            recover: {placeHolder: 'Recover', display: false},
            check: {placeHolder: 'Check', display: false},
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
        selectedNavButton: state => {
            return state.selectedNavButton
        },
        formInputs: state => {
            return state.formInputs
        },
        buttons: state => {
            return state.buttons
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

