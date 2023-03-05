<template>
  <div v-auto-animate class=" flex flex-col justify-center border-2 border-gray-900 rounded-2xl text-white bg-gray-800 overflow-hidden">
    <div class="flex justify-center items-center">
      <label for="" class=" m-2 text-2xl">Easy</label>
      <img class="w-20 m-2" :src="icons.brand.logo">
    </div>
    <ValidationStatus v-if="this.anyFocusedInput" class=" m-[2px] mb-1 border border-gray-600 rounded grow "/>
  </div>
</template>



<script>
import ValidationStatus from "./ValidationStatus.vue";


export default {
  components: {ValidationStatus},
  data(){
    return {
      anyFocusedInput: false,
      debounceUpdateAnyFocusedInput: this.debounce(this.updateAnyFocusedInput,200)
    }
  },
  computed: {
    icons(){return this.$store.state.assets.icons},
    currentlyFocusedInput(){ return this.$store.getters.currentlyFocusedInput }
  },
  mounted() {
    this.$watch(() => this.currentlyFocusedInput, (to, from) => {
      this.debounceUpdateAnyFocusedInput()
    })
  },
  methods: {
    updateAnyFocusedInput(){
      this.currentlyFocusedInput ? this.anyFocusedInput = true: this.anyFocusedInput = false
    },
    debounce(callback, wait=1000){
      let timeout
      return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(()=>{ callback(...args) }, wait)
      }
    },
  },
}

</script>