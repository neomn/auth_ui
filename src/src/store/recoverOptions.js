
const recoverOptions = {
    authMethods: ['sms','email'],
    formInputs: {
        sms: ['phone_number'],
        email: ['email'],
        google: [],
        linkedin: [],
    },
    buttons: {
        sms: ['recover'],
        email: ['recover'],
        google: [],
        linkedin: [],
    },
}

export { recoverOptions }