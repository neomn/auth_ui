<template>
  <div class="flex flex-col content-end text-white bg-gray-800 overflow-hidden ">
    <div v-auto-animate id="inputs" class="flex flex-col justify-start items-center basis-4/6 w-full mt-2 sm:pt-10 overflow-x-hidden overflow-y-scroll">
      <FormInput id="phone_number" :placeholder="Object.keys(formInputs)[0]" v-if="formInputs.phone_number.display" class=""/>
      <FormInput id="email" :placeholder="Object.keys(formInputs)[1]" v-if="formInputs.email.display" class=""/>
      <FormInput id="first_name" :placeholder="Object.keys(formInputs)[2]" v-if="formInputs.first_name.display" class=""/>
      <FormInput id="last_name" :placeholder="Object.keys(formInputs)[3]" v-if="formInputs.last_name.display" class=""/>
      <FormInput id="password" :placeholder="Object.keys(formInputs)[4]" v-if="formInputs.password.display" class=""/>
      <FormInput id="confirm_password" :placeholder="Object.keys(formInputs)[5]" v-if="formInputs.confirm_password.display" class=""/>
      <FormInput id="one_time_token" :placeholder="Object.keys(formInputs)[6]" v-if="formInputs.one_time_token.display" class=""/>
    </div>
    <div v-auto-animate id="submitButton" class=" basis-2/6 flex justify-around items-center w-full">
      <Button id="login" :text="Object.keys(buttons)[0]" v-if="buttons.login.display"/>
      <Button id="register" :text="Object.keys(buttons)[1]" v-if="buttons.register.display"/>
      <Button id="recover" :text="Object.keys(buttons)[2]" v-if="buttons.recover.display"/>
      <Button id="check" :text="Object.keys(buttons)[3]" v-if="buttons.check.display"/>
    </div>
  </div>
</template>



<script>
import FormInput from "./FormInput.vue";
import Button from "./Button.vue";

export default{
  components: {FormInput, Button},
  computed: {
    authMethod(){return this.$store.getters.authMethod },
    formInputs(){return this.$store.getters.formInputs},
    buttons(){return this.$store.getters.buttons},
  },
  mounted() {
    this.$store.dispatch('updateInputComponent', this.$route.name)
  },
  methods: {

  },
}

</script>