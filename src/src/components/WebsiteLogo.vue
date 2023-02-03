<template>
  <div class="flex justify-center items-center border-2 border-gray-900 rounded-2xl text-white bg-gray-800 overflow-hidden">
    <label for="" class=" m-2 text-2xl">Easy</label>
    <img class="w-20 m-2" :src="icons.brand.logo">
  </div>
</template>

<script>

export default {
  computed: {
    icons(){return this.$store.state.assets.icons}
  },
}

</script>