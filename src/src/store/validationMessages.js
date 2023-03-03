import {validationRules} from "./validationRules.js";
export const validationMessages = {
    required: 'is required',
    alpha: 'should be alphabetic',
    email: 'should be valid email address',
    numeric: 'should be numeric',
    maxLength: {
        numeric: 'should be :max digits max',
        alpha: 'should be :max character max',
    },
}