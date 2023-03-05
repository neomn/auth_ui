import {store} from "../store/store.js";
import {validationRules} from "./validationRules.js";

export const sync = {
    init(){
        Object.values(store.getters.formInputs).forEach(input => {
            // input.pendingValidationRules = validationRules[input.inputId]
            console.log(input.inputId)
            console.log(Object.keys(validationRules[input.inputId]))
        })
        // console.log(Object.keys(validationRules['first_name']))
    },
}

