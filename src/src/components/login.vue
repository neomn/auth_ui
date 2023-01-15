<template>
  <div class="flex flex-col sm:flex-row bg-gray-600">
    <WebsiteLogo class="basis-4/12 sm:basis-1/2 m-2 "/>
    <div class="basis-8/12 sm:basis-1/2 border-2 border-red-600">
      <loginInputs class="h-2/4"/>
      <SocialMediaLogin class="h-1/4"/>
      <Buttons class="h-1/4"/>
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

  data() {
    return {
      pageTitle: 'test',
    }
  },
  mounted() {

  }
}

</script>