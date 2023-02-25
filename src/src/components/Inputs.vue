<template>
  <div class="flex flex-col content-end text-white bg-gray-800 overflow-hidden ">
    <div v-auto-animate id="inputs" class="flex flex-col justify-start items-center basis-4/6 w-full mt-2 sm:pt-10 overflow-x-hidden overflow-y-scroll">
      <FormInput inputId="phone_number" @inputFocused="inputFocused('phone_number')" @inputFocusedOut="inputFocusedOut('phone_number')" @inputValueHasChanged="inputValueHasChanged('phone_number')" :icon="icons.formInputs.phone_number" :type="formInputs.phone_number.type" :placeholder="formInputs.phone_number.placeHolder" v-if="formInputs.phone_number.display" class=""/>
      <FormInput inputId="email" @inputFocused="inputFocused('email')" @inputFocusedOut="inputFocusedOut('email')" @inputValueHasChanged="inputValueHasChanged('email')" :icon="icons.formInputs.email" :placeholder="formInputs.email.placeHolder" v-if="formInputs.email.display" class=""/>
      <FormInput inputId="first_name" @inputFocused="inputFocused('first_name')" @inputFocusedOut="inputFocusedOut('first_name')" @inputValueHasChanged="inputValueHasChanged('first_name')" :icon="icons.formInputs.first_name" :placeholder="formInputs.first_name.placeHolder" v-if="formInputs.first_name.display" class=""/>
      <FormInput inputId="last_name" @inputFocused="inputFocused('last_name')" @inputFocusedOut="inputFocusedOut('last_name')" @inputValueHasChanged="inputValueHasChanged('last_name')" :icon="icons.formInputs.last_name" :placeholder="formInputs.last_name.placeHolder" v-if="formInputs.last_name.display" class=""/>
      <FormInput inputId="password" @inputFocused="inputFocused('password')" @inputFocusedOut="inputFocusedOut('password')" @inputValueHasChanged="inputValueHasChanged('password')" :icon="icons.formInputs.password" :placeholder="formInputs.password.placeHolder" v-if="formInputs.password.display" class=""/>
      <FormInput inputId="confirm_password" @inputFocused="inputFocused('confirm_password')" @inputFocusedOut="inputFocusedOut('confirm_password')" @inputValueHasChanged="inputValueHasChanged('confirm_password')" :icon="icons.formInputs.confirm_password" :placeholder="formInputs.confirm_password.placeHolder" v-if="formInputs.confirm_password.display" class=""/>
      <FormInput inputId="one_time_token" @inputFocused="inputFocused('one_time_token')" @inputFocusedOut="inputFocusedOut('one_time_token')" @inputValueHasChanged="inputValueHasChanged('one_time_token')" :icon="icons.formInputs.one_time_token" :placeholder="formInputs.one_time_token.placeHolder" v-if="formInputs.one_time_token.display" class=""/>
    </div>
    <div v-auto-animate id="submitButton" class=" basis-2/6 flex justify-around items-center w-full">
      <Button id="login" @click="login" :text="buttons.login.placeHolder" v-if="buttons.login.display"/>
      <Button id="register" :text="buttons.register.placeHolder" v-if="buttons.register.display"/>
      <Button id="recover" :text="buttons.recover.placeHolder" v-if="buttons.recover.display"/>
      <Button id="check" :text="buttons.check.placeholder" v-if="buttons.check.display"/>
    </div>
  </div>
</template>



<script>
import FormInput from "./FormInput.vue";
import Button from "./Button.vue";
import {validationRules} from "../store/validationOperations.js";
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, alpha, numeric, email, } from "@vuelidate/validators";

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
  },
  mounted() {
    this.$store.dispatch('updateInputComponent', this.$route.name)

    this.$watch( ()=> this.$route.path,(to, from)=> {
      console.log('route has changed from ' +from+' to '+to )
    })

    this.$watch( ()=>this.$store.state.currentAuthMethod, (to, from)=>{
      console.log('auth method has changed' + to)
    })

  },


  methods: {
    login(){
      this.touchVisibleInputs()
      // console.log(validationRules)
    },
    register(){
      this.touchVisibleInputs()
    },
    recover(){
      this.touchVisibleInputs()
    },
    inputValueHasChanged(inputId){
      this.v$.$validate()
      console.log(this.v$)
    },
    inputFocused(inputId){
      this.updateCurrentlyFocusedInput(inputId)
      // this.touchFocusedInput(inputId)
      this.v$[inputId].$validate()
      console.log(this.v$[inputId].$errors)
    },
    inputFocusedOut(inputId){
      console.log('inputs focused out '+ inputId)
    },
    touchVisibleInputs(){
      this.v$.$reset()
      Object.values(this.formInputs).forEach((input) => {
        if (input.display)
          this.v$[input.inputId].$touch()
      })
      console.log(this.v$.$errors)
    },
    updateCurrentlyFocusedInput(input){
      this.$store.dispatch("updateCurrentlyFocusedInput",input)
    },
    touchFocusedInput(inputId){
      this.v$[inputId].$touch()
    },
    untouchFocusedInput(inputId){
      this.v$[inputId].$reset()
    },
    makeAllVisibleInputsDirty(){
    },

  },


  validations(){

    return validationRules

    // return {
    //   phone_number: {
    //     $autoDirty:true,
    //     required,
    //     numeric,
    //     minLength: minLength(11),
    //     maxLength: maxLength(11),
    //   },
    //   email: {
    //     $autoDirty:true,
    //     required,
    //     email,
    //     maxLength: maxLength(64),
    //   },
    //   first_name: {
    //     $autoDirty:true,
    //     required,
    //     alpha,
    //     minLength: minLength(32),
    //     maxLength: maxLength(32),
    //   },
    //   last_name: {
    //     $autoDirty:true,
    //     required,
    //     alpha,
    //     minLength: minLength(32),
    //     maxLength: maxLength(32),
    //   },
    //   password: {
    //     $autoDirty:true,
    //     required,
    //     minLength: minLength(8),
    //     maxLength: maxLength(32),
    //   },
    //   one_time_token: {
    //     $autoDirty:true,
    //     required,
    //     numeric,
    //     minLength: minLength(6),
    //     maxLength: maxLength(6),
    //   },
    // }

  },

}

</script>