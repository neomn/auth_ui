<template>
  <div v-auto-animate class="flex justify-center sm:justify-center items-center bg-gray-800">
    <button v-on:click="onClickAuthMethod('sms')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(authMethod==='sms')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/sms.png"></button>
    <button v-on:click="onClickAuthMethod('email')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(authMethod==='email')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/email.png"></button>
    <button v-on:click="onClickAuthMethod('google')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(authMethod==='google')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/google.png"></button>
    <button v-on:click="onClickAuthMethod('linkedin')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(authMethod==='linkedin')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/linkedin.png"></button>
  </div>
</template>

<script>
export default {
  computed: {
    authMethod() {return this.$store.getters.authMethod},
  },
  methods: {
    onClickAuthMethod(method){
      let route = this.$route.name
      this.$store.dispatch('changeAuthMethod', method)
      this.$store.dispatch('changeActiveInputs', route)
    }
  }
}
</script>