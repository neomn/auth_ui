import {store} from "./store.js";

function validationOperations (v$, action){
    if (noFormInputIsVisible()){
        setActionButtonVisibility(true)
        return
    }
    setActionButtonVisibility(false)
    if (action){
        getInvalidFormInputs(v$)
    }
}

function noFormInputIsVisible() {
    return visibleFormInputs().length <= 0
}

function setActionButtonVisibility(value){
    store.commit('updateAllInputsAreValidProperty', value)
}

function visibleFormInputs(){
    const result = Object.values(store.getters.formInputs).map(formInput => { return formInput.display? formInput.inputId:null })
    return result.filter(item => item !== null)
}

function getInvalidFormInputs(v$){
    // visibleFormInputs().forEach(input => { v$[input].$touch() })
    // visibleFormInputs().forEach(input => { v$[input].$validate() })
    v$.phone_number.$touch()
    v$.$nextTick(() => {
        console.log(v$)
    });
    // console.log(v$)
}


export { validationOperations }