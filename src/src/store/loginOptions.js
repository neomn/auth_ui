
const inputsForSms = {formInputs: ['phone_number','email'], buttons: ['send_sms']}
const inputsForEmail = {formInputs: ['phone_number'], buttons: ['send_sms']}
const inputsForGoogle = {formInputs: ['phone_number'], buttons: ['send_sms']}
const inputsForLinkedin = {formInputs: ['phone_number'], buttons: ['send_sms']}

function displaySmsInputsForLogin(state){

    Object.entries(state.activeFormInputs).forEach((formInput) => {
        inputsForSms.formInputs.includes(formInput[0]) ? formInput[1].display = true : formInput[1].display = false
    })
    Object.entries(state.activeButtons).forEach((button) => {
        inputsForSms.buttons.includes(button[0]) ? button[1].display = true : button[1].display = false
    })
}


export {displaySmsInputsForLogin}