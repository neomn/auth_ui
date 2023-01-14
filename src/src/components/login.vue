<template>
  <div class="flex flex-col sm:flex-row h-screen bg-gray-600">
    <div class="basis-2/6 sm:basis-1/2 border-2 border-amber-600 ">
      <WebsiteLogo/>
    </div>
    <div class="basis-4/6 sm:basis-1/2 mt-2 border-2 border-lime-600">
      <loginInputs class="basis-3/6 border border-white" />
<!--      <SocialMediaLogin class="basis-1/6 border border-white" />-->
<!--      <Buttons class="basis-1/6 border border-white" />-->
    </div>
  </div>
</template>


<script>
import WebsiteLogo from "./websiteLogo.vue";
import LoginInputs from "./loginInputs.vue";
import SocialMediaLogin from "./socialMediaLogin.vue";
import RegisterInputs from "./registerInputs.vue";
import Buttons from "./buttons.vue"

export default {
  components: {WebsiteLogo, SocialMediaLogin, LoginInputs, RegisterInputs, Buttons},
  name: 'login',

  data(){
    return {
      pageTitle: 'test',
    }
  },
  mounted() {

  }
}

</script>