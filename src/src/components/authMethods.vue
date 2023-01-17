<template>
  <div class="flex justify-center sm:justify-center items-center bg-gray-800">
    <button v-on:click="changeSelectedMethod('sms')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(selectedMethod==='sms')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/sms.png" alt=""></button>
    <button v-on:click="changeSelectedMethod('email')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(selectedMethod==='email')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/email.png" alt=""></button>
    <button v-on:click="changeSelectedMethod('google')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(selectedMethod==='google')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/google.png" alt=""></button>
    <button v-on:click="changeSelectedMethod('linkedin')" class=" w-10 h-10 m-2 hover:grayscale-0 rounded-full" v-bind:class="(selectedMethod==='linkedin')? 'grayscale-0':'grayscale'"><img src="src/assets/icons/linkedin.png" alt=""></button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      selectedMethod: 'sms',  // options >> sms,email,google,linkedIn , default: sms
    }
  },
  // computed: {
  //   authMethodCurrentLocation(){
  //     return this.$store.state.authMethodCurrentLocation
  //   }
  // },
  mounted() {
    // console.log(this.authMethodCurrentLocation())
  },
  methods: {
    // change auth method (email-sms-google-linkedIn)
    changeSelectedMethod(method){
      this.selectedMethod = method
    },
  }
}

</script>