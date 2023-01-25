<template>
  <div class="flex flex-col content-end text-white bg-gray-800 overflow-hidden ">
    <div v-auto-animate id="inputs" class="flex flex-col justify-start items-center basis-4/6 w-full mt-2 sm:pt-10 overflow-x-hidden overflow-y-scroll">
      <FormInput id="phone_number" :placeholder="Object.keys(activeFormInputs)[0]" v-if="activeFormInputs.phone_number.display" class=""/>
      <FormInput id="email" :placeholder="Object.keys(activeFormInputs)[1]" v-if="activeFormInputs.email.display" class=""/>
      <FormInput id="first_name" :placeholder="Object.keys(activeFormInputs)[2]" v-if="activeFormInputs.first_name.display" class=""/>
      <FormInput id="last_name" :placeholder="Object.keys(activeFormInputs)[3]" v-if="activeFormInputs.last_name.display" class=""/>
      <FormInput id="password" :placeholder="Object.keys(activeFormInputs)[4]" v-if="activeFormInputs.password.display" class=""/>
      <FormInput id="confirm_password" :placeholder="Object.keys(activeFormInputs)[5]" v-if="activeFormInputs.confirm_password.display" class=""/>
      <FormInput id="one_time_token" :placeholder="Object.keys(activeFormInputs)[6]" v-if="activeFormInputs.one_time_token.display" class=""/>
    </div>
    <div v-auto-animate id="submitButton" class=" basis-2/6 flex justify-around items-center w-full">
      <Button id="login" :text="Object.keys(activeButtons)[0]" v-if="activeButtons.login.display"/>
      <Button id="register" :text="Object.keys(activeButtons)[1]" v-if="activeButtons.register.display"/>
      <Button id="recover" :text="Object.keys(activeButtons)[2]" v-if="activeButtons.recover.display"/>
      <Button id="check" :text="Object.keys(activeButtons)[3]" v-if="activeButtons.check.display"/>
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
    activeFormInputs(){return this.$store.getters.activeFormInputs},
    activeButtons(){return this.$store.getters.activeButtons},
  },
  mounted() {

  },
  methods: {

  },
}

</script>