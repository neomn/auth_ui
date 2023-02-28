import {store} from "./store.js";

export const validationOperations = {

    checkStatus(v$, action) {
        if (this.noFormInputIsVisible()) {
            this.setActionButtonVisibility(true)
            return
        }
        this.setActionButtonVisibility(false)
        if (action) {
            this.getInvalidFormInputs(v$)
        }
    },

    noFormInputIsVisible() {
        return this.visibleFormInputs().length <= 0
    },

    setActionButtonVisibility(value) {
        store.commit('updateAllInputsAreValidProperty', value)
    },

    visibleFormInputs() {
        const result = Object.values(store.getters.formInputs).map(formInput => { return formInput.display ? formInput.inputId : null })
        return result.filter(item => item !== null)
    },

    getInvalidFormInputs(v$) {
        this.visibleFormInputs().forEach(input => { v$[input].$touch() })
        this.visibleFormInputs().forEach(input => { v$[input].$validate() })
        console.log(v$)
    },
}


