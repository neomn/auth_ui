<template>
  <div v-auto-animate class="flex justify-center sm:justify-center items-center bg-gray-800">
    <button v-if="authMethods.sms.display" v-on:click="onClickAuthMethod('sms')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(currentAuthMethod==='sms')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/sms.png"></button>
    <button v-if="authMethods.email.display" v-on:click="onClickAuthMethod('email')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(currentAuthMethod==='email')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/email.png"></button>
    <button v-if="authMethods.google.display" v-on:click="onClickAuthMethod('google')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(currentAuthMethod==='google')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/google.png"></button>
    <button v-if="authMethods.linkedin.display" v-on:click="onClickAuthMethod('linkedin')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(currentAuthMethod==='linkedin')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/linkedin.png"></button>
  </div>
</template>

<script>
export default {
  computed: {
    currentAuthMethod() {return this.$store.getters.currentAuthMethod},
    authMethods() { return this.$store.getters.authMethods }
  },
  methods: {
    onClickAuthMethod(method){
      let route = this.$route.name
      this.$store.dispatch('changeCurrentAuthMethod', method)
      this.$store.dispatch('updateInputComponent', route)
    }
  }
}
</script>