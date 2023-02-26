import {store} from "./store.js";

function validationOperations (v$, action){
    checkIfNoFormInputIsVisible()
}

function checkIfNoFormInputIsVisible() {
    console.log(visibleFormInputs())
    // if (visibleFormInputs().length <= 0)
    //     console.log('invisible')
    // store.commit('updateAllInputsAreValidProperty', true)
}

function visibleFormInputs(){
    const result = Object.values(store.getters.formInputs).map(formInput => { return formInput.display? formInput.inputId:null })
    return result.filter(item => item !== null)
}



function touchVisibleInputs(){
    this.v$.$reset()
    Object.values(this.formInputs).forEach((input) => {
        if (input.display)
            this.v$[input.inputId].$touch()
    })
    // console.log(this.v$.$errors)
}


function makeAllVisibleInputsDirty(){
}

export { validationOperations }