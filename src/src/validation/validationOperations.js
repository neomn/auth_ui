import {store} from "../store/store.js";

export const validationOperations = {

    updateActionButtonVisibility() {
        this.noFormInputIsVisible() ? this.setActionButtonVisibility(true): this.setActionButtonVisibility(false)
    },

    noFormInputIsVisible() {
        return this.visibleFormInputs().length <= 0
    },

    setActionButtonVisibility(value) {
        store.commit('updateAllInputsAreValidProperty', value)
    },

    visibleFormInputs() {
        const result = Object.values(store.getters.formInputs).map(formInput => {
            return formInput.display ? formInput.inputId : null
        })
        return result.filter(item => item !== null)
    },

    getInvalidFormInputs(v$) {
        console.log(this.visibleFormInputs())
    },

    pulseInvalidInputs(){
        store.commit('updatePulseInvalidInputs', true)
        setTimeout(() => {
            store.commit('updatePulseInvalidInputs', false)
        }, 1000)
    },
}


