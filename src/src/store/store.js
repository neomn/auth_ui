import Vuex from 'vuex'
import { loginOptions } from "./loginOptions.js";
import { registerOptions } from "./registerOptions.js";
import { recoverOptions } from "./recoverOptions.js";
import { manageInputsDisplay } from "./InputsDisplayManager.js";
import validationStatus from "../components/ValidationStatus.vue";

export const store = new Vuex.Store({
    strict: true,
    state: {
        theme: 'dark',
        selectedNavButton: 'login',
        currentAuthMethod: 'sms',
        currentlyFocusedInput: '',
        v$: null ,
        allInputsAreValid: false,
        formInputs: {
            phone_number:       {inputId: 'phone_number', placeHolder: 'Phone Number', display: true, type: 'number', max_length: '12', value: '', dirty:false, valid:false, validationRules:{} },
            email:              {inputId: 'email', placeHolder: 'Email', display: false, type: 'email', max_length: '50', value: '', dirty:false, valid:false, validationRules:{} },
            first_name:         {inputId: 'first_name', placeHolder: 'First Name', display: false, type: 'text', max_length: '30', value: '', dirty:false, valid:false, validationRules:{} },
            last_name:          {inputId: 'last_name', placeHolder: 'Last Name', display: false, type: 'text', max_length: '30', value: '', dirty:false, valid:false, validationRules:{} },
            password:           {inputId: 'password', placeHolder: 'Password', display: true, type: 'password', max_length: '20', value: '', dirty:false, valid:false, validationRules:{} },
            confirm_password:   {inputId: 'confirm_password', placeHolder: 'Enter Password Again', display: false, type: 'password', max_length: '20',  value: '', dirty:false, valid:false, validationRules:{} },
            one_time_token:     {inputId: 'one_time_token', placeHolder: 'Token', display: false, type: 'number', max_length: '6', value: '', dirty:false, valid:false, validationRules:{} },
        },
        buttons: {
            login:      {placeHolder: 'Login', display: true},
            register:   {placeHolder: 'Register', display: false},
            recover:    {placeHolder: 'Recover', display: false},
            check:      {placeHolder: 'Check', display: false},
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
        theme:                  state => { return state.theme },
        selectedNavButton:      state => { return state.selectedNavButton },
        formInputs:             state => { return state.formInputs },
        buttons:                state => { return state.buttons },
        currentAuthMethod:      state => { return state.currentAuthMethod },
        authMethods:            state => { return state.authMethods },
        icons:                  state => { return state.assets.icons },
        currentlyFocusedInput:  state => { return state.currentlyFocusedInput },
        allInputsAreValid:      state => { return state.allInputsAreValid },
        v$:                     state => { return state.v$ },
    },

    mutations: {
        updateV$Object: (state, v$) => {state.v$ = v$},
        changeTheme: (state, payload) => { state.theme = payload },
        changeCurrentAuthMethod: (state, payload) => { state.currentAuthMethod = payload },
        changeSelectedNavButton: (state, payload) => { state.selectedNavButton = payload },
        updateCurrentlyFocusedInput: (state, input) => { state.currentlyFocusedInput = input },
        updateAllInputsAreValidProperty: (state, validationStatus) => { state.allInputsAreValid = validationStatus },
        updateInputComponent: (state, route) => {
            if (route === 'login')      { manageInputsDisplay (state, loginOptions) }
            if (route === 'register')   { manageInputsDisplay (state, registerOptions) }
            if (route === 'recover')    { manageInputsDisplay (state, recoverOptions) }
        },
        updateFormInputValue: (state, payload) => {
            state.formInputs[payload.inputId].value = payload.value
        },
        updateFormInputValidateAndDirtyProperties: () => {

        },
    },

    actions: {
        changeTheme: (context, payload) => { context.commit('changeTheme', payload) },
        changeCurrentAuthMethod: (context, payload) => { context.commit('changeCurrentAuthMethod', payload) },
        changeSelectedNavButton: (context, payload) => { context.commit('changeSelectedNavButton', payload) },
        updateInputComponent: (context, route) => { context.commit('updateInputComponent', route) },
        updateFormInputValue: (context, payload) => { context.commit('updateFormInputValue', payload) },
        updateFormInputValidateAndDirtyProperties: (context, payload) => {context.commit('updateFormInputValidateAndDirtyProperties',payload)},
        updateCurrentlyFocusedInput: (context, input) => {context.commit('updateCurrentlyFocusedInput',input)},
        updateAllInputsAreValidProperty: (context, validationStatus) => { context.commit('updateAllInputsAreValidProperty',validationStatus)},
        updateV$Object: (context, v$) => {context.commit('updateV$Object', v$)},
    },

    modules: {}
})

