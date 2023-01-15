<template>
  <div class="flex justify-center sm:justify-center items-center bg-gray-800">
    <button class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(route === 'login')? '':'grayscale'" ><img src="src/assets/icons/email.png" alt=""></button>
    <button class=" w-10 h-10 m-2 grayscale hover:grayscale-0 rounded-full"><img src="src/assets/icons/463816.png" alt=""></button>
    <button class=" w-10 h-10 m-2 grayscale hover:grayscale-0 rounded-full"><img src="src/assets/icons/google.png" alt=""></button>
    <button class=" w-10 h-10 m-2 grayscale hover:grayscale-0 rounded-full"><img src="src/assets/icons/145807.png" alt=""></button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      route: this.$route.name
    }
  },
}

</script>