
const registerOptions = {
    authMethods: ['sms','email','google','linkedin'],
    formInputs: {
        sms: ['phone_number','first_name','last_name','password'],
        email: ['email','first_name','last_name', 'password'],
        google: [],
        linkedin: [],
    },
    buttons: {
        sms: ['register'],
        email: ['register'],
        google: ['register'],
        linkedin: ['register'],
    },
}

export { registerOptions }