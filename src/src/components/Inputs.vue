<template>
  <div class="flex flex-col content-end text-white bg-gray-800 overflow-hidden ">
    <div id="inputs" class="flex flex-col justify-start items-center basis-4/6 w-full mt-2 sm:pt-10 overflow-x-hidden overflow-y-scroll">
      <FormInput id="phone_number" v-if="activeFormInputs.phone_number.display" class=""/>
      <FormInput id="email" v-if="activeFormInputs.email.display" class=""/>
      <FormInput id="password" v-if="activeFormInputs.password.display" class=""/>
      <FormInput id="confirm_password" v-if="activeFormInputs.confirm_password.display" class=""/>
      <FormInput id="first_name" v-if="activeFormInputs.first_name.display" class=""/>
      <FormInput id="last_name" v-if="activeFormInputs.last_name.display" class=""/>
      <FormInput id="one_time_token" v-if="activeFormInputs.one_time_token.display" class=""/>
    </div>
    <div id="submitButton" class=" basis-2/6 flex justify-around items-center w-full">
      <Button id="login" v-if="activeButtons.login.display"/>
      <Button id="register" v-if="activeButtons.register.display"/>
      <Button id="recover" v-if="activeButtons.recover.display"/>
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
    activeButtons(){return this.$store.getters.activeButtons},
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