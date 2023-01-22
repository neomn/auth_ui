<template>
  <div class="flex flex-col content-end text-white bg-gray-800 overflow-hidden ">
    <div id="inputs" class="flex flex-col justify-start items-center basis-4/6 w-full mt-2 sm:pt-10 overflow-x-hidden overflow-y-scroll">
      <FormInput id="phone_number" v-if="activeFormInputs.hasOwnProperty('phone_number')" class=""/>
      <FormInput id="email" v-if="activeFormInputs.hasOwnProperty('email')" class=""/>
      <FormInput id="password" v-if="activeFormInputs.hasOwnProperty('password')" class=""/>
      <FormInput id="confirm_password" v-if="activeFormInputs.hasOwnProperty('confirm_password')" class=""/>
      <FormInput id="first_name" v-if="activeFormInputs.hasOwnProperty('first_name')" class=""/>
      <FormInput id="last_name" v-if="activeFormInputs.hasOwnProperty('last_name')" class=""/>
      <FormInput id="one_time_token" v-if="activeFormInputs.hasOwnProperty('one_time_token')" class=""/>
    </div>
    <div id="submitButton" class=" basis-2/6 flex justify-around items-center w-full">
      <Button id="login"/>
      <Button id="register"/>
      <Button id="recover"/>
    </div>
  </div>
</template>



<script>
import {sms_login, email_login, google_login, linkedin_login} from "../store/loginOptions.js";
import FormInput from "./FormInput.vue";
import Button from "./Button.vue";

export default{
  components: {FormInput, Button},
  computed: {
    authMethod(){return this.$store.getters.authMethod },
    activeFormInputs(){return this.$store.getters.activeFormInputs},
  },
  mounted() {
    console.log('test>> ')
    // console.log(this.activeFormInputs.sms_login.hasOwnProperty('phone_number'))
  },
  methods: {
    setWhichInputsShouldBeDisplayed(){
      if (this.$route.name === 'login'){

        if (this.$store.getters.authMethod === 'sms')
          this.activeInputs = sms_login

        if (this.$store.getters.authMethod === 'email')
          this.activeInputs = email_login

        if (this.$store.getters.authMethod === 'google')
          this.activeInputs = google_login

        if (this.$store.getters.authMethod === 'linkedin')
          this.activeInputs = linkedin_login
      }

      if (this.$route.name === 'register'){

      }

      if (this.$route.name === 'register'){

      }

    }
  },
}

</script>