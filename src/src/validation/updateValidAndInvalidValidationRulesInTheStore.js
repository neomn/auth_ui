import {store} from "../store/store.js";
import {validationRules} from "./validationRules.js";

export const sync = {
    init(){
        Object.values(store.getters.formInputs).forEach(input => {
            let payload = {
                inputId: input.inputId,
                rules: [],
                valid: false,
            }
            payload.rules = Object.keys(validationRules[input.inputId])
            store.commit("updateValidAndInvalidRules", payload)
        })
    },
    syncFormInputPassedAndPendingRules(v$, inputId){
        let passedRules = []
        let pendingRules = []
        if (store.getters.formInputs[inputId].value){
            Object.keys(validationRules[inputId]).forEach(rule => {
                v$[inputId][rule].$invalid ? pendingRules.push(rule) : passedRules.push(rule)
            })
        } else pendingRules = Object.keys(validationRules[inputId])
        store.commit('updateValidAndInvalidRules', {inputId: inputId, rules: passedRules, valid:true})
        store.commit('updateValidAndInvalidRules', {inputId: inputId, rules: pendingRules, valid:false})
    },
    updateInputValidity(inputId){
        store.getters.formInputs[inputId].pendingValidationRules ?
            store.commit()
    }
}

