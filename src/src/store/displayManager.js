
function manage(state, options){
    currentAuthMethodIsNotAvailableInRequestedRouteAuthMethods(state, options)
    setWhichAuthMethodsShouldBeDisplayed(state, options.authMethods)
    setWhichFormInputsShouldBeDisplayed(state, options.formInputs)
    setWhichButtonsShouldBeDisplayed(state, options.buttons)
}

function currentAuthMethodIsNotAvailableInRequestedRouteAuthMethods(state, options){
    let currentAuthMethod = state.currentAuthMethod
    let activeAuthMethodsInRequestedRoute = options.authMethods

    if (!activeAuthMethodsInRequestedRoute.includes(currentAuthMethod))
        state.currentAuthMethod = activeAuthMethodsInRequestedRoute[0]
}

function setWhichAuthMethodsShouldBeDisplayed(state, authMethodsToDisplay){
    if (authMethodsToDisplay.length <= 0){
        Object.keys(state.authMethods).forEach((method) => { state.authMethods[method].display = false })
        return
    }
    let authMethods  = Object.keys(state.authMethods)
    authMethods.forEach( method => {
        authMethodsToDisplay.includes(method) ?
            state.authMethods[method].display = true : state.authMethods[method].display = false
    })
}

function setWhichFormInputsShouldBeDisplayed(state, formInputsToDisplay){
    if (formInputsToDisplay.length <= 0){
        Object.keys(state.activeFormInputs).forEach((input) => { state.activeFormInputs[input].display = false })
        return
    }
    Object.keys(formInputsToDisplay).forEach(input => {
       if ( state.currentAuthMethod === input )
           formInputsToDisplay = formInputsToDisplay[input]
    })
    let input  = Object.keys(state.activeFormInputs)
    input.forEach( input => {
        formInputsToDisplay.includes(input) ?
            state.activeFormInputs[input].display = true : state.activeFormInputs[input].display = false
    })
}

function setWhichButtonsShouldBeDisplayed(state, buttonsToDisplay){
    if (buttonsToDisplay.length <= 0){
        Object.keys(state.buttons).forEach((buttons) => { state.buttons[buttons].display = false })
        return
    }
    Object.keys(buttonsToDisplay).forEach(method => {
        if ( state.currentAuthMethod === method )
            buttonsToDisplay = buttonsToDisplay[method]
    })
    let buttons  = Object.keys(state.buttons)
    buttons.forEach( button => {
        buttonsToDisplay.includes(button) ?
            state.buttons[button].display = true : state.buttons[button].display = false
    })
}

export { manage }

