import Vuex from 'vuex'
import { loginOptions } from "./loginOptions.js";
// import {displayRegisterInputs, displayRegisterAuthMethods} from "./registerOptions.js";
// import {displayRecoverInputs, displayRecoverAuthMethods} from "./recoverOptions.js";
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
        // changeActiveInputs:(state, payload) => {
        //     if (payload === 'login'){ displayLoginOptions(state) }
        //     if (payload === 'register'){ displayRegisterInputs(state) }
        //     if (payload === 'recover'){ displayRecoverInputs(state) }
        // },
        // setWhichAuthMethodsToDisplay: (state, currentRoute) => {
        //     if (currentRoute === 'login'){ displayLoginAuthMethods(state) }
        //     if (currentRoute === 'register'){ displayRegisterAuthMethods(state) }
        //     if (currentRoute === 'recover'){ displayRecoverAuthMethods(state) }
        // },
        updateInputComponent: (state, route) => {
            if (route === 'login'){ manage (state, loginOptions) }
            // if (route === 'register'){ displayRegisterAuthMethods(state) }
            // if (route === 'recover'){ displayRecoverAuthMethods(state) }
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
        // changeActiveInputs: (context, payload) => {
        //     context.commit('changeActiveInputs', payload)
        // },
        // setWhichAuthMethodsToDisplay: (context, currentRoute) => {
        //     context.commit('setWhichAuthMethodsToDisplay', currentRoute)
        // },
        updateInputComponent: (context, route) => {
            context.commit('updateInputComponent', route)
        },
    },

    modules: {

    }
})

