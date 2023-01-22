<template>
  <div class="flex justify-around sm:justify-evenly items-center border-t border-gray-600 sm:border-0 text-sm text-gray-400 bg-gray-800 overflow-hidden">
    <router-link :to="{name:'login'}" @click="onClickNavButtons('login')" class="basis-1/3 sm:basis-1/6 m-1 flex flex-col items-center p-1" v-bind:class="(this.$route.name === 'login')? 'border-b border-lime-400 rounded-lg':''">
      <img src="src/assets/icons/login.png" class="w-6"/>
      <p class="">Login</p>
    </router-link>
    <router-link :to="{name:'register'}" @click="onClickNavButtons('register')" class="basis-1/3 sm:basis-1/6 m-1 flex flex-col items-center p-1" v-bind:class="(this.$route.name === 'register')? 'border-b border-lime-400 rounded-lg':''">
      <img src="src/assets/icons/register.png" class="w-6 "/>
      <p class="">Register</p>
    </router-link>
    <router-link :to="{name:'recover'}" @click="onClickNavButtons('recover')" class="basis-1/3 sm:basis-1/6 m-1 flex flex-col items-center p-1" v-bind:class="(this.$route.name === 'recover')? 'border-b border-lime-400 rounded-lg':''">
      <img src="src/assets/icons/recover.png" alt="" class="w-6"/>
      <p class="">Recover</p>
    </router-link>
  </div>
</template>



<script>
export default {
  computed: {

  },
  methods: {
    onClickNavButtons(clickedButton){
      this.$store.dispatch('changeSelectedNavButton', clickedButton)
    },
  }
}
</script>