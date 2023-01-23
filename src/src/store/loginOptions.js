
const inputsForSms = {formInputs: ['phone_number'], buttons: ['login']}
const inputsForEmail = {formInputs: ['email','password'], buttons: ['login','register']}
const inputsForGoogle = {formInputs: [], buttons: []}
const inputsForLinkedin = {formInputs: [], buttons: []}

function displayLoginInputs(state){
    if (inputsForSms.formInputs.length > 0){
        Object.entries(state.activeFormInputs).forEach((formInput) => {
            inputsForSms.formInputs.includes(formInput[0]) ? formInput[1].display = true : formInput[1].display = false
        })
    } else {
        Object.entries(state.activeFormInputs).forEach((formInput) => {
            formInput[1].display = false
        })
    }

    if (inputsForSms.buttons.length > 0){
        Object.entries(state.activeButtons).forEach((button) => {
            inputsForSms.buttons.includes(button[0]) ? button[1].display = true : button[1].display = false
        })
    }else {
        Object.entries(state.activeButtons).forEach((button) => {
            button[1].display = false
        })
    }

    console.log(Object.values(state.activeFormInputs))
}




export {displayLoginInputs}