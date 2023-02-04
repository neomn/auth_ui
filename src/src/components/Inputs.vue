<template>
  <div class="flex flex-col content-end text-white bg-gray-800 overflow-hidden ">
    <div v-auto-animate id="inputs" class="flex flex-col justify-start items-center basis-4/6 w-full mt-2 sm:pt-10 overflow-x-hidden overflow-y-scroll">
      <FormInput id="phone_number" v-model="phone_number" :icon="icons.formInputs.phone_number" :type="formInputs.phone_number.type" :placeholder="formInputs.phone_number.placeHolder" v-if="formInputs.phone_number.display" class=""/>
      <FormInput id="email" :icon="icons.formInputs.email" :placeholder="formInputs.email.placeHolder" v-if="formInputs.email.display" class=""/>
      <FormInput id="first_name" :icon="icons.formInputs.first_name" :placeholder="formInputs.first_name.placeHolder" v-if="formInputs.first_name.display" class=""/>
      <FormInput id="last_name" :icon="icons.formInputs.last_name" :placeholder="formInputs.last_name.placeHolder" v-if="formInputs.last_name.display" class=""/>
      <FormInput id="password"  :icon="icons.formInputs.password" :placeholder="formInputs.password.placeHolder" v-if="formInputs.password.display" class=""/>
      <FormInput id="confirm_password" :icon="icons.formInputs.confirm_password" :placeholder="formInputs.confirm_password.placeHolder" v-if="formInputs.confirm_password.display" class=""/>
      <FormInput id="one_time_token" :icon="icons.formInputs.one_time_token" :placeholder="formInputs.one_time_token.placeHolder" v-if="formInputs.one_time_token.display" class=""/>
    </div>
    <div v-auto-animate id="submitButton" class=" basis-2/6 flex justify-around items-center w-full">
      <Button id="login" :text="buttons.login.placeHolder" v-if="buttons.login.display"/>
      <Button id="register" :text="buttons.register.placeHolder" v-if="buttons.register.display"/>
      <Button id="recover" :text="buttons.recover.placeHolder" v-if="buttons.recover.display"/>
      <Button id="check" :text="buttons.check.placeholder" v-if="buttons.check.display"/>
<!--      <p>{{ phone_number }}</p>-->
    </div>
  </div>
</template>



<script>
import FormInput from "./FormInput.vue";
import Button from "./Button.vue";

export default{
  components: {FormInput, Button},
  computed: {
    formInputs(){return this.$store.getters.formInputs},
    buttons(){return this.$store.getters.buttons},
    icons(){return this.$store.getters.icons},
    phone_number(){return this.$store.state.getters.formInputs.phone_number.value},

  },
  mounted() {
    this.$store.dispatch('updateInputComponent', this.$route.name)
  },
}

</script>