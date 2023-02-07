<template>
  <div v-auto-animate class=" flex flex-col justify-center border-2 border-gray-900 rounded-2xl text-white bg-gray-800 overflow-hidden">
    <div class="flex justify-center items-center ">
      <label for="" class=" m-2 text-2xl">Easy</label>
      <img class="w-20 m-2" :src="icons.brand.logo">
    </div>
    <ValidationStatus v-if="true" class="m-2 grow"/>
  </div>
</template>

<script>
import ValidationStatus from "./ValidationStatus.vue";

export default {
  components: {ValidationStatus},
  computed: {
    icons(){return this.$store.state.assets.icons}
  },
}

</script>