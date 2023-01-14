<template>
  <div class="flex flex-col sm:flex-row w-full h-full  bg-gray-600">
    <div class="basis-1/4 sm:basis-1/2 border border-white">
      <WebsiteLogo/>
    </div>
    <div class="basis-3/4 sm:basis-1/2">
      <loginInputs class="border border-white" />
      <SocialMediaLogin class="border border-white" />
      <Buttons class="border border-white" />
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