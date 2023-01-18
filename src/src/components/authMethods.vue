<template>
  <div class="flex justify-center sm:justify-center items-center bg-gray-800">
    <button v-on:click="changeAuthMethod('sms')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(authMethod==='sms')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/sms.png" alt=""></button>
    <button v-on:click="changeAuthMethod('email')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(authMethod==='email')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/email.png" alt=""></button>
    <button v-on:click="changeAuthMethod('google')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(authMethod==='google')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/google.png" alt=""></button>
    <button v-on:click="changeAuthMethod('linkedin')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(authMethod==='linkedin')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/linkedin.png" alt=""></button>
  </div>
</template>

<script>
export default {
  computed: {
    authMethod() {return this.$store.getters.appState.authMethod},
  },
  methods: {
    changeAuthMethod(method){ this.$store.dispatch('changeAuthMethod', method)},
  }
}

</script>