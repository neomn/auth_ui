
import {store} from "./store.js";

function validationOperations (action){
    const currentAuthMethod = store.getters.currentAuthMethod
}

function visibleFormInputs(){
    const result = Object.values(store.getters.formInputs).map(formInput => { return formInput.display? formInput.inputId:null })
    return result.filter(item => item !== null)
}


export { validationOperations }