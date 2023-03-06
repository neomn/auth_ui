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
            payload.rules = validationRules[input.inputId]
            store.commit("updateValidAndInvalidRules", payload)
        })
    },
    syncFormInputPassedAndPendingRules(v$, inputId){

        // if (!store.getters.formInputs[inputId].value){
        //     console.log('empty')
        //     v$[inputId].$reset()
        // }
        let passedRules = []
        let pendingRules = []
        Object.keys(validationRules[inputId]).forEach(rule => {
            v$[inputId][rule].$invalid ? pendingRules.push(rule) : passedRules.push(rule)
        })
        store.commit('updateValidAndInvalidRules', {inputId: inputId, rules: passedRules, valid:true})
        store.commit('updateValidAndInvalidRules', {inputId: inputId, rules: pendingRules, valid:false})

        console.log('valid > ' + store.getters.validRules(inputId)+ "\n")
        console.log('invalid > ' + store.getters.invalidRules(inputId)+ "\n")
        console.log("\n")
    }
}

