
import {alpha, email, maxLength, minLength, numeric, required} from "@vuelidate/validators";

const validationRules = {
    phone_number: {
        $autoDirty:true,
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
    },
    email: {
        $autoDirty:true,
        required,
        email,
        maxLength: maxLength(64),
    },
    first_name: {
        $autoDirty:true,
        required,
        alpha,
        minLength: minLength(32),
        maxLength: maxLength(32),
    },
    last_name: {
        $autoDirty:true,
        required,
        alpha,
        minLength: minLength(32),
        maxLength: maxLength(32),
    },
    password: {
        $autoDirty:true,
        required,
        minLength: minLength(8),
        maxLength: maxLength(32),
    },
    one_time_token: {
        $autoDirty:true,
        required,
        numeric,
        minLength: minLength(6),
        maxLength: maxLength(6),
    },
}

function validateInput(inputId, value){

}

function allInputsAreValid( currentAuthMethod ){
    return false
}

export {validationRules, }