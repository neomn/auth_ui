import {validationRules} from "./validationRules.js";
export const validationMessages = {
    required: 'required',
    alpha: 'should be alphabetic',
    email: 'should be valid email address',
    numeric: 'should be numeric',
    maxLength: {
        numeric: 'should be :max digits max',
        alpha: 'should be :max character max',
    },
    minLength: {
        numeric: 'should be :max digits min',
        alpha: 'should be :max character min',
    },
    getMessage(rule, type, ruleValue){

    },
}