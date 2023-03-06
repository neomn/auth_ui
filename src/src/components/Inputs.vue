<template>
  <div class="flex flex-col content-end text-white bg-gray-800 overflow-hidden ">
    <div v-auto-animate id="inputs" class="flex flex-col justify-start items-center basis-4/6 w-full mt-2 sm:pt-10 overflow-x-hidden overflow-y-scroll">
      <FormInput inputId="phone_number" @inputFocused="inputFocused('phone_number')" @inputFocusedOut="inputFocusedOut('phone_number')" @inputValueHasChanged="inputValueHasChanged('phone_number')" :icon="icons.formInputs.phone_number" :type="formInputs.phone_number.type" :placeholder="formInputs.phone_number.placeHolder" v-if="formInputs.phone_number.display" class=""/>
      <FormInput inputId="email" @inputFocused="inputFocused('email')" @inputFocusedOut="inputFocusedOut('email')" @inputValueHasChanged="inputValueHasChanged('email')" :icon="icons.formInputs.email" :placeholder="formInputs.email.placeHolder" v-if="formInputs.email.display" class=""/>
      <FormInput inputId="first_name" @inputFocused="inputFocused('first_name')" @inputFocusedOut="inputFocusedOut('first_name')" @inputValueHasChanged="inputValueHasChanged('first_name')" :icon="icons.formInputs.first_name" :placeholder="formInputs.first_name.placeHolder" v-if="formInputs.first_name.display" class=""/>
      <FormInput inputId="last_name" @inputFocused="inputFocused('last_name')" @inputFocusedOut="inputFocusedOut('last_name')" @inputValueHasChanged="inputValueHasChanged('last_name')" :icon="icons.formInputs.last_name" :placeholder="formInputs.last_name.placeHolder" v-if="formInputs.last_name.display" class=""/>
      <FormInput inputId="password" @inputFocused="inputFocused('password')" @inputFocusedOut="inputFocusedOut('password')" @inputValueHasChanged="inputValueHasChanged('password')" :icon="icons.formInputs.password" :placeholder="formInputs.password.placeHolder" v-if="formInputs.password.display" class=""/>
<!--      <FormInput inputId="confirm_password" @inputFocused="inputFocused('confirm_password')" @inputFocusedOut="inputFocusedOut('confirm_password')" @inputValueHasChanged="inputValueHasChanged('confirm_password')" :icon="icons.formInputs.confirm_password" :placeholder="formInputs.confirm_password.placeHolder" v-if="formInputs.confirm_password.display" class=""/>-->
      <FormInput inputId="one_time_token" @inputFocused="inputFocused('one_time_token')" @inputFocusedOut="inputFocusedOut('one_time_token')" @inputValueHasChanged="inputValueHasChanged('one_time_token')" :icon="icons.formInputs.one_time_token" :placeholder="formInputs.one_time_token.placeHolder" v-if="formInputs.one_time_token.display" class=""/>
    </div>
    <div v-auto-animate id="submitButton" class=" basis-2/6 flex justify-around items-center w-full">
      <Button id="login" @click="loginOperations" :text="buttons.login.placeHolder" v-if="buttons.login.display"/>
      <Button id="register" @click="registerOperations" :text="buttons.register.placeHolder" v-if="buttons.register.display"/>
      <Button id="recover" @click="recoverOperations" :text="buttons.recover.placeHolder" v-if="buttons.recover.display"/>
      <Button id="check" :text="buttons.check.placeholder" v-if="buttons.check.display"/>
    </div>
  </div>
</template>



<script>
import FormInput from "./FormInput.vue";
import Button from "./Button.vue";
import {validationRules} from "../validation/validationRules.js";
import {validationOperations} from "../validation/validationOperations.js";
import {sync} from "../validation/updateValidAndInvalidValidationRulesInTheStore.js";
import useVuelidate from '@vuelidate/core'

export default{
  data(){
    return {
      v$: useVuelidate(),
    }
  },
  components: {FormInput, Button},
  computed: {
    formInputs(){return this.$store.getters.formInputs},
    buttons(){return this.$store.getters.buttons},
    icons(){return this.$store.getters.icons},
    phone_number(){ return this.$store.getters.formInputs.phone_number.value},
    email(){ return this.$store.getters.formInputs.email.value},
    first_name(){ return this.$store.getters.formInputs.first_name.value},
    last_name(){ return this.$store.getters.formInputs.last_name.value},
    password(){ return this.$store.getters.formInputs.password.value},
    one_time_token(){ return this.$store.getters.formInputs.one_time_token.value},
    inputValidProperty: {
      get(inputId){return this.$store.getters.formInputs[inputId].valid},
      set(inputId, value){this.$store.dispatch('updateFormInputValidateAndDirtyProperties',{ inputId: inputId, valid: value})},
    },
    allInputsAreValid: {
      get: () => { return this.$store.getters.allInputsAreValid },
      set: (validationStatus) => { this.$store.dispatch('updateAllInputsAreValidProperty', validationStatus) },
    },
    pulseInvalidInputs: {
      get: () => { return this.$store.getters.pulseInvalidInputs },
      set: (value) => { this.$store.dispatch('updatePulseInvalidInputs', value) },
    },


  },
  mounted() {
    sync.init()
    this.$store.dispatch('updateInputComponent', this.$route.name)

    this.$watch( ()=> this.$route.path,(to, from)=> {
      validationOperations.updateActionButtonVisibility()
    })

    this.$watch( ()=>this.$store.state.currentAuthMethod, (to, from)=>{
      validationOperations.updateActionButtonVisibility()
    })
  },


  methods: {
    async loginOperations(){
      validationOperations.pulseInvalidInputs()
      // await validationOperations.getInvalidFormInputs(this.v$)
      // console.log(this.v$)
      // this.v$.phone_number.$touch()
      // this.v$.phone_number.$validate()
      // console.log(this.v$.phone_number)
    },
    registerOperations(){
      validationOperations.pulseInvalidInputs()
      validationOperations.updateActionButtonVisibility(this.v$, 'register')
    },
    recoverOperations(){
      validationOperations.pulseInvalidInputs()
      validationOperations.updateActionButtonVisibility(this.v$,'recover')
    },
    sendLoginRequest(){

    },
    sendRegisterRequest(){

    },
    sendRecoverRequest(){

    },
    async inputValueHasChanged(inputId){
      // console.log(this.v$.phone_number.required.$invalid)
      await sync.syncFormInputPassedAndPendingRules(this.v$, inputId)
    },
    inputFocused(inputId){
      this.updateCurrentlyFocusedInput(inputId)
    },
    inputFocusedOut(inputId){
      this.updateCurrentlyFocusedInput('')
    },
    updateCurrentlyFocusedInput(inputId){
      this.$store.dispatch("updateCurrentlyFocusedInput",inputId)
    },

  },

  validations() {
    return validationRules
  },
}

</script>