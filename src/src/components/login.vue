<script>
import Inputs from "./inputs.vue";
import SocialMediaLogin from "./socialMediaLogin.vue";
import Buttons from "./buttons.vue"
export default {
  components: {SocialMediaLogin, Inputs, Buttons}
}
</script>
<template>
  <div class="flex flex-col m-2 mt-1 sm:m-2 sm:ml-1 border-2 border-gray-900 rounded-2xl text-white bg-gray-700">
    <inputs class="basis-8/12"/>
    <SocialMediaLogin class="basis-3/12 sm:basis-2/12 m-2 mt-1 mb-1 border-2 border-gray-900 rounded-2xl"/>
    <Buttons class="basis-2/12 sm:basis-1/12 m-2 mt-1 border-2 border-gray-900 rounded-2xl"/>
  </div>
</template>