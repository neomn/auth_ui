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
}

