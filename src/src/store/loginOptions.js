
const loginOptions = {
    authMethods: ['sms','email','google','linkedin'],
    formInputs: {
        sms: ['phone_number','password'],
        email: ['email','password'],
        google: [],
        linkedin: [],
    },
    buttons: {
        sms: ['login'],
        email: ['login'],
        google: ['login'],
        linkedin: ['login'],
    },
}

export { loginOptions }