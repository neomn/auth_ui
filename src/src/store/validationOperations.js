
import {store} from "./store.js";

function validationOperations (action){
    const currentAuthMethod = store.getters.currentAuthMethod
    console.log(currentAuthMethod)
}

export { validationOperations }