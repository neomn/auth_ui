
import {store} from "./store.js";

function inputsForLoginUsingSms() {
    store.state.activeFormInputs.phone_number.display = true
    store.state.activeFormInputs.password.display = true
    store.state.activeFormInputs.email.display = false
    store.state.activeFormInputs.first_name.display = false
    store.state.activeFormInputs.last_name.display = false
    store.state.activeFormInputs.confirm_password.display = false
    store.state.activeFormInputs.one_time_token.display = false

    store.state.activeButtons.login.display = true
    store.state.activeButtons.register.display = false
    store.state.activeButtons.recover.display = false
}

function inputsForLoginUsingEmail() {
    store.state.activeFormInputs.email.display = true
    store.state.activeFormInputs.password.display = true
    store.state.activeFormInputs.phone_number.display = false
    store.state.activeFormInputs.first_name.display = false
    store.state.activeFormInputs.last_name.display = false
    store.state.activeFormInputs.confirm_password.display = false
    store.state.activeFormInputs.one_time_token.display = false

    store.state.activeButtons.login.display = true
    store.state.activeButtons.register.display = false
    store.state.activeButtons.recover.display = false
}

function inputsForLoginUsingGoogle() {
    store.state.activeFormInputs.phone_number.display = false
    store.state.activeFormInputs.password.display = false
    store.state.activeFormInputs.email.display = false
    store.state.activeFormInputs.first_name.display = false
    store.state.activeFormInputs.last_name.display = false
    store.state.activeFormInputs.confirm_password.display = false
    store.state.activeFormInputs.one_time_token.display = false

    store.state.activeButtons.login.display = true
    store.state.activeButtons.register.display = false
    store.state.activeButtons.recover.display = false
}

function inputsForLoginUsinglinkedin() {
    store.state.activeFormInputs.phone_number.display = false
    store.state.activeFormInputs.password.display = false
    store.state.activeFormInputs.email.display = false
    store.state.activeFormInputs.first_name.display = false
    store.state.activeFormInputs.last_name.display = false
    store.state.activeFormInputs.confirm_password.display = false
    store.state.activeFormInputs.one_time_token.display = false

    store.state.activeButtons.login.display = true
    store.state.activeButtons.register.display = false
    store.state.activeButtons.recover.display = false
}

export {inputsForLoginUsingSms, inputsForLoginUsingEmail, inputsForLoginUsingGoogle, inputsForLoginUsinglinkedin}