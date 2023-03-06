import {store} from "../store/store.js";
import {validationRules} from "./validationRules.js";

export const sync = {
    init(){
        Object.values(store.getters.formInputs).forEach(input => {
            let payload = {
                inputId: input.inputId,
                rules: {},
                valid: false,
            }
            payload.rules = validationRules[input.inputId]
            store.commit("updateValidAndInvalidRules", payload)
        })
    },
    syncFormInputPassedAndPendingRules(v$, inputId){
        let passedRules = []
        let pendingRules = []
        Object.keys(validationRules[inputId]).forEach(rule => {
            v$[inputId][rule].$invalid ? pendingRules.push(rule) : passedRules.push(rule)
        })
        console.log('passed > ' + passedRules + "\n")
        console.log('passed > ' + pendingRules + "\n")
    }
}

