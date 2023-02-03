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
            phone_number: {placeHolder: 'Phone Number', display: true, type: 'number', max_length: '12', value: ''},
            email: {placeHolder: 'Email', display: false, type: 'email', max_length: '50', value: ''},
            first_name: {placeHolder: 'First Name', display: false, type: 'text', max_length: '30', value: ''},
            last_name: {placeHolder: 'Last Name', display: false, type: 'text', max_length: '30', value: ''},
            password: {placeHolder: 'Password', display: true, type: 'password', max_length: '20', value: ''},
            confirm_password: {placeHolder: 'Enter Password Again', display: false, max_length: '20', type: 'password', value: ''},
            one_time_token: {placeHolder: 'Token', display: false, type: 'number', max_length: '6', value: ''},
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
        assets: {
            icons: {
                brand: {
                  logo: "/src/assets/icons/iot.png",
                },
                formInputs: {
                    phone_number: "/src/assets/icons/formInput-mobile.png",
                    email: "/src/assets/icons/formInput-email.png",
                    first_name: "/src/assets/icons/formInput-user-info.png",
                    last_name: "/src/assets/icons/formInput-user-info.png",
                    password: "/src/assets/icons/formInput-password.png",
                    confirm_password: "/src/assets/icons/formInput-password.png",
                    one_time_token: "",
                },
                navButtons: {},
                buttons: {},
            },
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
        },
        icons: state => {
            return state.assets.icons
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

