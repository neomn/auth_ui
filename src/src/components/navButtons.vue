<template>
  <div class="flex justify-around sm:justify-evenly items-center border-t border-gray-600 sm:border-0 text-sm text-gray-400 bg-gray-800 overflow-hidden">
    <router-link :to="{name:'login'}" class="basis-1/3 sm:basis-1/6 m-1 flex flex-col items-center p-1 border-b border-lime-400 rounded-lg ">
      <img src="src/assets/icons/login.png" class="w-6"/>
      <p class="">Login</p>
    </router-link>
    <router-link :to="{name:'register'}" class="basis-1/3 sm:basis-1/6 m-1 flex flex-col items-center p-1">
      <img src="src/assets/icons/3631696.png" class="w-6 "/>
      <p class="">Register</p>
    </router-link>
    <router-link :to="{name:'recover'}" class="basis-1/3 sm:basis-1/6 m-1 flex flex-col items-center p-1">
      <img src="src/assets/icons/1745504.png" alt="" class="w-6"/>
      <p class="">Recover</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>