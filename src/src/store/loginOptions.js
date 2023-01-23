
const inputsForSms = {formInputs: ['phone_number'], buttons: ['send_sms']}
const inputsForEmail = {formInputs: ['phone_number'], buttons: ['send_sms']}
const inputsForGoogle = {formInputs: ['phone_number'], buttons: ['send_sms']}
const inputsForLinkedin = {formInputs: ['phone_number'], buttons: ['send_sms']}

function displaySmsInputsForLogin(state){
    console.log(state)
    state.activeFormInputs.first_name = true
    state.activeFormInputs.phone_number.display = true
    state.activeFormInputs.password.display = true
    state.activeFormInputs.email.display = true
    state.activeFormInputs.last_name.display = false
    state.activeFormInputs.confirm_password.display = false
    state.activeFormInputs.one_time_token.display = false
}


// function inputsForLoginUsingSms() {
    // store.state.activeFormInputs.phone_number.display = true
    // store.state.activeFormInputs.password.display = true
    // store.state.activeFormInputs.email.display = false
    // store.state.activeFormInputs.first_name.display = false
    // store.state.activeFormInputs.last_name.display = false
    // store.state.activeFormInputs.confirm_password.display = false
    // store.state.activeFormInputs.one_time_token.display = false
    //
    // store.state.activeButtons.login.display = true
    // store.state.activeButtons.register.display = false
    // store.state.activeButtons.recover.display = false

// }

function inputsForLoginUsingEmail() {
    store.state.activeFormInputs.email.display = true
    store.state.activeFormInputs.password.display = true
    store.state.activeFormInputs.phone_number.display = false
    store.state.activeFormInputs.first_name.display = false
    store.state.activeFormInputs.last_name.display = false
    store.state.activeFormInputs.confirm_password.display = false
    store.state.activeFormInputs.one_time_token.display = false

    store.state.activeButtons.login.display = true
    store.state.activeButtons.register.display = true
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

    store.state.activeButtons.login.display = false
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

    store.state.activeButtons.login.display = false
    store.state.activeButtons.register.display = false
    store.state.activeButtons.recover.display = false
}

export {displaySmsInputsForLogin}