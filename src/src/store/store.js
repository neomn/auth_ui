import Vuex from 'vuex'
import {displaySmsInputsForLogin} from "./loginOptions.js";



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
            let route = payload

            if (route === 'login'){ displaySmsInputsForLogin(state) }

           // if (route === 'login'){
           //     if (state.authMethod === 'sms'){ inputsForLoginUsingSms() }
           //     if (state.authMethod === 'email'){ inputsForLoginUsingEmail() }
           //     if (state.authMethod === 'google'){ inputsForLoginUsingGoogle() }
           //     if (state.authMethod === 'linkedin'){ inputsForLoginUsinglinkedin() }
           // }

           // if (route === 'register'){
           //     if (state.authMethod === 'sms'){}
           //      if (state.authMethod === 'email'){}
           //      if (state.authMethod === 'google'){}
           //      if (state.authMethod === 'linkedin'){}
           //  }
           //
           //  if (route === 'linkedin'){
           //      if (state.authMethod === 'sms'){}
           //      if (state.authMethod === 'email'){}
           //      if (state.authMethod === 'google'){}
           //      if (state.authMethod === 'linkedin'){
           //      }
           //  }
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

