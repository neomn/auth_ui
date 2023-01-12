<script>
import LoginInputs from "./loginInputs.vue";
import SocialMediaLogin from "./socialMediaLogin.vue";
import RegisterInputs from "./registerInputs.vue";
import Buttons from "./buttons.vue"
export default {
  components: {SocialMediaLogin, LoginInputs, RegisterInputs, Buttons}
}
</script>
<template>
  <div class="flex flex-col sm:justify-center m-2 mt-1 sm:m-2 sm:ml-1 border-2 border-gray-900 rounded-2xl text-white bg-gray-700">
    <loginInputs v-if="false" class="basis-8/12"/>
    <RegisterInputs v-if="true" class="basis-8/12 border"/>
    <SocialMediaLogin class="basis-3/12 sm:basis-2/12"/>
    <Buttons class="basis-2/12 sm:basis-2/12 border-t border-gray-800 sm:border-none"/>
  </div>
</template>