import Vuex from 'vuex'
import {sms_login, email_login, google_login, linkedin_login} from "./loginOptions.js";

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

           if (route === 'login'){

               if (state.authMethod === 'sms'){
                   state.activeFormInputs.phone_number.display = true
                   state.activeFormInputs.email.display = false
                   state.activeFormInputs.first_name.display = false
                   state.activeFormInputs.last_name.display = false
                   state.activeFormInputs.password.display = true
                   state.activeFormInputs.confirm_password.display = false
                   state.activeFormInputs.one_time_token.display = false
               }
               if (state.authMethod === 'email'){
                   state.activeFormInputs.phone_number.display = false
                   state.activeFormInputs.email.display = true
                   state.activeFormInputs.first_name.display = false
                   state.activeFormInputs.last_name.display = false
                   state.activeFormInputs.password.display = true
                   state.activeFormInputs.confirm_password.display = false
                   state.activeFormInputs.one_time_token.display = false
               }
               if (state.authMethod === 'google'){
                   Object.entries(state.activeFormInputs).forEach(input => {input.display = false})
               }
               if (state.authMethod === 'linkedin'){
                   state.activeFormInputs.phone_number.display = false
                   state.activeFormInputs.email.display = false
                   state.activeFormInputs.first_name.display = false
                   state.activeFormInputs.last_name.display = false
                   state.activeFormInputs.password.display = false
                   state.activeFormInputs.confirm_password.display = false
                   state.activeFormInputs.one_time_token.display = false
               }
           }

            if (route === 'register'){

                if (state.authMethod === 'sms'){

                }
                if (state.authMethod === 'email'){

                }
                if (state.authMethod === 'google'){

                }
                if (state.authMethod === 'linkedin'){

                }
            }

            if (route === 'linkedin'){

                if (state.authMethod === 'sms'){

                }
                if (state.authMethod === 'email'){

                }
                if (state.authMethod === 'google'){

                }
                if (state.authMethod === 'linkedin'){

                }
            }
        },
        changeActiveButtons: (state, payload) => {

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
        }
    },
    modules: {

    }
})

