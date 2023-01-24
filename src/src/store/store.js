import Vuex from 'vuex'
import {displayLoginInputs} from "./loginOptions.js";
import {displayRegisterInputs} from "./registerOptions.js";
import {displayRecoverInputs} from "./recoverOptions.js";

export const store = new Vuex.Store({
    state: {
        theme: 'dark',
        selectedNavButton: 'login',
        authMethod: 'sms',
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
        }
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
        activeButtons: state => {
            return state.activeButtons
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
        changeActiveInputs:(state, payload) => {
            if (payload === 'login'){ displayLoginInputs(state) }
            if (payload === 'register'){ displayRegisterInputs(state) }
            if (payload === 'recover'){ displayRecoverInputs(state) }
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
        changeActiveInputs: (context, payload) => {
            context.commit('changeActiveInputs', payload)
        },
    },
    modules: {

    }
})

