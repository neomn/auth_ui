import Vuex from 'vuex'
import { loginOptions } from "./loginOptions.js";
import { registerOptions } from "./registerOptions.js";
import { recoverOptions } from "./recoverOptions.js";
import { manageInputsDisplay } from "./InputsDisplayManager.js";

export const store = new Vuex.Store({
    strict: true,
    state: {
        theme: 'dark',
        selectedNavButton: 'login',
        currentAuthMethod: 'sms',
        currentlyFocusedInput: '',
        visibleInputsAreValid: false,
        applyPulseEffectForInvalidInputs: false,
        formInputs: {
            phone_number:   {inputId: 'phone_number',       placeHolder: 'Phone Number',  display: true,  type: 'number',    value: '', dirty:false, valid:false, passedValidationRules:[], pendingValidationRules:[] },
            email:          {inputId: 'email',              placeHolder: 'Email',         display: false, type: 'email',     value: '', dirty:false, valid:false, passedValidationRules:[], pendingValidationRules:[] },
            first_name:     {inputId: 'first_name',         placeHolder: 'First Name',    display: false, type: 'text',      value: '', dirty:false, valid:false, passedValidationRules:[], pendingValidationRules:[] },
            last_name:      {inputId: 'last_name',          placeHolder: 'Last Name',     display: false, type: 'text',      value: '', dirty:false, valid:false, passedValidationRules:[], pendingValidationRules:[] },
            password:       {inputId: 'password',           placeHolder: 'Password',      display: true,  type: 'password',  value: '', dirty:false, valid:false, passedValidationRules:[], pendingValidationRules:[] },
            one_time_token: {inputId: 'one_time_token',     placeHolder: 'Token',         display: false, type: 'number',    value: '', dirty:false, valid:false, passedValidationRules:[], pendingValidationRules:[] },
        },
        buttons: {
            login:      {placeHolder: 'Login',    display: true},
            register:   {placeHolder: 'Register', display: false},
            recover:    {placeHolder: 'Recover',  display: false},
            check:      {placeHolder: 'Check',    display: false},
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
        visibleInputsAreValid:  state => { return state.visibleInputsAreValid },
        pulseInvalidInputs:     state => { return state.applyPulseEffectForInvalidInputs },
        inputIsValid:           state => (inputId) => { return state.formInputs[inputId].valid },
        inputIsVisible:         state => (inputId) => { return state.formInputs[inputId].display },
        validRules:             state => (inputId) => { return state.formInputs[inputId].passedValidationRules },
        invalidRules:           state => (inputId) => { return state.formInputs[inputId].pendingValidationRules },
    },

    mutations: {
        changeTheme: (state, payload) => { state.theme = payload },
        changeCurrentAuthMethod: (state, payload) => { state.currentAuthMethod = payload },
        changeSelectedNavButton: (state, payload) => { state.selectedNavButton = payload },
        updateCurrentlyFocusedInput: (state, input) => { state.currentlyFocusedInput = input },
        updateVisibleInputsAreValid: (state, validationStatus) => { state.visibleInputsAreValid = validationStatus },
        updatePulseInvalidInputs: (state, value) => { state.applyPulseEffectForInvalidInputs = value },
        updateInputComponent: (state, route) => {
            if (route === 'login')      { manageInputsDisplay (state, loginOptions) }
            if (route === 'register')   { manageInputsDisplay (state, registerOptions) }
            if (route === 'recover')    { manageInputsDisplay (state, recoverOptions) }
        },
        updateFormInputValue: (state, payload) => {
            state.formInputs[payload.inputId].value = payload.value
        },
        updateFormInputValidity: (state, payload) => {
            state.formInputs[payload.inputId].valid = payload.valid
        },
        updateValidAndInvalidRules: (state, payload) => {
            let inputId = payload.inputId
            let rules = payload.rules
            let valid = payload.valid
            valid ? state.formInputs[inputId].passedValidationRules = rules : state.formInputs[inputId].pendingValidationRules = rules
        },
    },

    actions: {
        changeTheme:                   (context, payload)          => { context.commit('changeTheme', payload) },
        changeCurrentAuthMethod:       (context, payload)          => { context.commit('changeCurrentAuthMethod', payload) },
        changeSelectedNavButton:       (context, payload)          => { context.commit('changeSelectedNavButton', payload) },
        updateInputComponent:          (context, route)            => { context.commit('updateInputComponent', route) },
        updateFormInputValue:          (context, payload)          => { context.commit('updateFormInputValue', payload) },
        updateCurrentlyFocusedInput:   (context, input)            => {context.commit('updateCurrentlyFocusedInput',input)},
        updateVisibleInputsAreValid:   (context, validationStatus) => { context.commit('updateVisibleInputsAreValid',validationStatus)},
        updateFormInputValidity:       (context, payload)          => {context.commit('updateFormInputValidity', payload)},
        updatePulseInvalidInputs:      (context, value)            => { context.commit('updatePulseInvalidInputs', value) },
        updateValidAndInvalidRules:    (context, payload)          => { context.commit("updateValidAndInvalidRules", payload) }
    },

    modules: {}
})

