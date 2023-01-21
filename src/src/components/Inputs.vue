<template>
  <div class="flex flex-col content-end text-white bg-gray-800 overflow-hidden ">
    <div id="inputs" class="flex flex-col justify-start items-center basis-4/6 w-full mt-2 sm:pt-10 overflow-x-hidden overflow-y-scroll">
      <FormInput v-if="authMethod ==='sms'" class=""/>
      <FormInput v-if="authMethod ==='sms'" class=""/>
      <FormInput v-if="authMethod ===''" class=""/>
      <FormInput v-if="authMethod ===''" class=""/>
    </div>
    <div id="submitButton" class=" basis-2/6 flex justify-around items-center w-full">
      <Button/>
    </div>
  </div>
</template>



<script>
import {sms_login, email_login, google_login, linkedin_login} from "../store/loginOptions.js";
import FormInput from "./FormInput.vue";
import Button from "./Button.vue";

export default{
  components: {FormInput, Button},
  data(){
    return {
      activeInputs: {},
      // placeholders: this.activeInputs.keys
    }
  },
  computed: {
    authMethod(){return this.$store.getters.authMethod }
  },
  mounted() {
    this.setActiveInputs()
    console.log('active inputs>')
    console.log(this.activeInputs)
  },
  methods: {
    setActiveInputs(){
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
    }
  },
}

</script>