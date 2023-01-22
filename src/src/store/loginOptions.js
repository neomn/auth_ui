
import {store} from "./store.js";

function inputsForLoginUsingSms() {
    store.state.activeFormInputs.phone_number.display = true
    store.state.activeFormInputs.password.display = true

    store.state.activeFormInputs.email.display = false
    store.state.activeFormInputs.first_name.display = false
    store.state.activeFormInputs.last_name.display = false
    store.state.activeFormInputs.confirm_password.display = false
    store.state.activeFormInputs.one_time_token.display = false
}

function inputsForLoginUsingEmail() {

}

function inputsForLoginUsingGoogle() {

}

function inputsForLoginUsinglinkedin() {

}

export {inputsForLoginUsingSms, inputsForLoginUsingEmail, inputsForLoginUsingGoogle, inputsForLoginUsinglinkedin}