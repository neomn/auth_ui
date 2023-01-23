
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

export {displaySmsInputsForLogin}