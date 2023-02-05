<template>
  <div class="flex flex-col content-end text-white bg-gray-800 overflow-hidden ">
    <div v-auto-animate id="inputs" class="flex flex-col justify-start items-center basis-4/6 w-full mt-2 sm:pt-10 overflow-x-hidden overflow-y-scroll">
      <FormInput inputId="phone_number" :icon="icons.formInputs.phone_number" :type="formInputs.phone_number.type" :placeholder="formInputs.phone_number.placeHolder" v-if="formInputs.phone_number.display" class=""/>
      <FormInput inputId="email" :icon="icons.formInputs.email" :placeholder="formInputs.email.placeHolder" v-if="formInputs.email.display" class=""/>
      <FormInput inputId="first_name" :icon="icons.formInputs.first_name" :placeholder="formInputs.first_name.placeHolder" v-if="formInputs.first_name.display" class=""/>
      <FormInput inputId="last_name" :icon="icons.formInputs.last_name" :placeholder="formInputs.last_name.placeHolder" v-if="formInputs.last_name.display" class=""/>
      <FormInput inputId="password"  :icon="icons.formInputs.password" :placeholder="formInputs.password.placeHolder" v-if="formInputs.password.display" class=""/>
      <FormInput inputId="confirm_password" :icon="icons.formInputs.confirm_password" :placeholder="formInputs.confirm_password.placeHolder" v-if="formInputs.confirm_password.display" class=""/>
      <FormInput inputId="one_time_token" :icon="icons.formInputs.one_time_token" :placeholder="formInputs.one_time_token.placeHolder" v-if="formInputs.one_time_token.display" class=""/>
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
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'


export default{
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return {
      first_name:'',
      last_name:'',
      phone_number:'',
      email:'',
      password:'',
    }
  },
  components: {FormInput, Button},
  computed: {
    formInputs(){return this.$store.getters.formInputs},
    buttons(){return this.$store.getters.buttons},
    icons(){return this.$store.getters.icons},
  },
  mounted() {
    this.$store.dispatch('updateInputComponent', this.$route.name)
  },
  validations(){
    return {
      test: { required }
    }
  },
  methods: {
    login(){
      if (this.v$.error)
        alert('validation error')
      else
        alert('successful')
    }
  },
}

</script>