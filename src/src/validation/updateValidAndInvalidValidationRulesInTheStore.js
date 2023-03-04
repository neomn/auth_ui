import {store} from "../store/store.js";
import {validationRules} from "./validationRules.js";

export const sync = {
    init(){
        Object.values(store.getters.formInputs).forEach(input => {
            input.pendingValidationRules = validationRules[input.inputId]
        })
    },
}

