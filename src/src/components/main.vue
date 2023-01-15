<template>
  <div class="flex flex-col sm:flex-row bg-gray-700">
    <WebsiteLogo class="basis-4/12 sm:basis-1/2 m-2 mb-1 sm:mb-2 "/>
    <div class="basis-8/12 sm:basis-1/2 m-2 mt-1 sm:mt-2 border-2 border-gray-900 rounded-2xl overflow-hidden ">
      <loginInputs class="h-4/6"/>
      <SocialMediaLogin class="h-1/6"/>
      <NavButtons class="h-1/6"/>
    </div>
  </div>
</template>


<script>
import WebsiteLogo from "./websiteLogo.vue";
import LoginInputs from "./loginInputs.vue";
import SocialMediaLogin from "./socialMediaLogin.vue";
import RegisterInputs from "./registerInputs.vue";
import NavButtons from "./navButtons.vue"

export default {
  components: {WebsiteLogo, SocialMediaLogin, LoginInputs, RegisterInputs, NavButtons},
  name: 'main',

  data() {
    return {
      pageTitle: 'test',
      route: this.$route.name
    }
  },
  mounted() {
    // console.log(this.route)
  },
  methods: {

  }
}

</script>