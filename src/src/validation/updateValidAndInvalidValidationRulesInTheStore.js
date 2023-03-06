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
    syncFormInputPassedAndPendingRules(inputId){
        //get all rules for form input
        Object.keys(validationRules[inputId]).forEach(rule => {

        })

        // iterate through all rules
        //if rule is valid then put it on passed rules else put in on pending rules
    }
}

