
import {alpha, email, maxLength, minLength, numeric, required} from "@vuelidate/validators";

export const validationRules = {
    phone_number: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
    },
    email: {
        required,
        email,
        maxLength: maxLength(64),
    },
    first_name: {
        required,
        alpha,
        minLength: minLength(32),
        maxLength: maxLength(32),
    },
    last_name: {
        required,
        alpha,
        minLength: minLength(32),
        maxLength: maxLength(32),
    },
    password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(32),
    },
    one_time_token: {
        required,
        numeric,
        minLength: minLength(6),
        maxLength: maxLength(6),
    },
}