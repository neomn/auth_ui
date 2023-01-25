
const loginAuthMethods = ['sms','email','google']

const inputsForSms = {formInputs: ['phone_number','password'], buttons: ['login']}
const inputsForEmail = {formInputs: ['email','password'], buttons: ['login']}
const inputsForGoogle = {formInputs: [], buttons: []}
const inputsForLinkedin = {formInputs: [], buttons: []}

function displayLoginInputs(state){
    if (state.currentAuthMethod === 'sms') {displaySmsInputs(state)}
    if (state.currentAuthMethod === 'email') {displayEmailInputs(state)}
    if (state.currentAuthMethod === 'google') {displayGoogleInputs(state)}
    if (state.currentAuthMethod === 'linkedin') {displayLinkedinInputs(state)}
}

function displaySmsInputs(state){
    if (inputsForSms.formInputs.length > 0){
        Object.entries(state.activeFormInputs).forEach((formInput) => {
            inputsForSms.formInputs.includes(formInput[0]) ? formInput[1].display = true : formInput[1].display = false
        })
    } else Object.entries(state.activeFormInputs).forEach((formInput) => { formInput[1].display = false })

    if (inputsForSms.buttons.length > 0){
        Object.entries(state.activeButtons).forEach((button) => {
            inputsForSms.buttons.includes(button[0]) ? button[1].display = true : button[1].display = false
        })
    } else  Object.entries(state.activeButtons).forEach((button) => {button[1].display = false })
}


function displayEmailInputs(state) {
    if (inputsForEmail.formInputs.length > 0){
        Object.entries(state.activeFormInputs).forEach((formInput) => {
            inputsForEmail.formInputs.includes(formInput[0]) ? formInput[1].display = true : formInput[1].display = false
        })
    } else Object.entries(state.activeFormInputs).forEach((formInput) => { formInput[1].display = false })

    if (inputsForEmail.buttons.length > 0){
        Object.entries(state.activeButtons).forEach((button) => {
            inputsForEmail.buttons.includes(button[0]) ? button[1].display = true : button[1].display = false
        })
    } else  Object.entries(state.activeButtons).forEach((button) => {button[1].display = false })
}


function displayGoogleInputs(state) {
    if (inputsForGoogle.formInputs.length > 0){
        Object.entries(state.activeFormInputs).forEach((formInput) => {
            inputsForGoogle.formInputs.includes(formInput[0]) ? formInput[1].display = true : formInput[1].display = false
        })
    } else Object.entries(state.activeFormInputs).forEach((formInput) => { formInput[1].display = false })

    if (inputsForGoogle.buttons.length > 0){
        Object.entries(state.activeButtons).forEach((button) => {
            inputsForGoogle.buttons.includes(button[0]) ? button[1].display = true : button[1].display = false
        })
    } else  Object.entries(state.activeButtons).forEach((button) => {button[1].display = false })
}


function displayLinkedinInputs(state) {
    if (inputsForLinkedin.formInputs.length > 0){
        Object.entries(state.activeFormInputs).forEach((formInput) => {
            inputsForLinkedin.formInputs.includes(formInput[0]) ? formInput[1].display = true : formInput[1].display = false
        })
    } else Object.entries(state.activeFormInputs).forEach((formInput) => { formInput[1].display = false })

    if (inputsForLinkedin.buttons.length > 0){
        Object.entries(state.activeButtons).forEach((button) => {
            inputsForLinkedin.buttons.includes(button[0]) ? button[1].display = true : button[1].display = false
        })
    } else  Object.entries(state.activeButtons).forEach((button) => {button[1].display = false })
}

function displayLoginAuthMethods(state){
    let authMethods = Object.keys(state.authMethods)
    authMethods.forEach(method => {
        loginAuthMethods.includes(method) ?
            state.authMethods[method].display = true :
            state.authMethods[method].display = false
    })
    if (loginAuthMethods.length <= 0)
        authMethods.forEach(method => {state.authMethods[method].display = false})
}

export {displayLoginInputs, displayLoginAuthMethods}