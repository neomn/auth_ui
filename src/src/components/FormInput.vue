<template>
  <div class="relative flex justify-center items-center w-11/12 h-8 mt-1">
    <div  class="absolute w-11/12 h-8 rounded-lg "
          :class="`${ inputIsFocused && inputValue.toString().length<=0 ? 'border border-gray-300' : ''}
                   ${ inputIsFocused && inputValue.toString().length>0 && !inputIsValid  ? 'border border-red-500' : ''}
                   ${ inputIsFocused && inputValue.toString().length>0 && inputIsValid ? 'border border-lime-500' : ''}
                   ${ inputIsValid ? 'border border-lime-500' : ''}
                   ${ inputIsVisible && !inputIsValid && pulseInvalidInputs ? 'animate-pulse border border-red-500' : ''}  `">
    </div>
    <div class="flex justify-start items-center w-11/12 h-8 p-[1px] rounded-lg z-10 ">
      <div class=" flex justify-start items-center w-full h-full rounded-lg text-gray-300 bg-gray-600 overflow-hidden ">
        <img :src="icon" class="w-4 h-4 mx-2">
        <input v-model="inputValue" @focus="inputFocused" @focusout="inputFocusedOut"
               @input="inputValueHasChanged(inputId, inputValue)" :type="type" :placeholder="placeholder"
               class="w-full px-2 bg-gray-600 focus:outline-none">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "FormInput",
  props: ['inputId','icon', 'type', 'placeholder'],
  data(){
    return {
      inputIsFocused: false,
    }
  },
  computed: {
    inputValue: {
      get(){return this.$store.getters.formInputs[this.inputId].value},
      set(value){this.$store.dispatch('updateFormInputValue',{ inputId: this.inputId, value: value})},
    },
    inputIsValid() { return this.$store.getters.inputIsValid(this.inputId) },
    inputIsVisible() { return this.$store.getters.inputIsVisible(this.inputId) },
    pulseInvalidInputs() { return this.$store.getters.pulseInvalidInputs }
  },
  methods: {
    inputValueHasChanged(inputId){
      this.$emit('inputValueHasChanged')
      this.printStatus()
    },
    inputFocused(){
      this.inputIsFocused = true
      this.$emit('inputFocused')
      this.printStatus()
    },
    inputFocusedOut(){
      this.inputIsFocused = false
      this.$emit('inputFocusedOut')
      this.printStatus()

    },
    printStatus(){
      // console.log(this.inputId+ ' focus status > '+ this.inputIsFocused+ "\n")
      // console.log(this.inputId+ ' length > '+ this.inputValue.toString().length+ "\n")
      // console.log(this.inputId+ ' validation status > '+ this.inputIsValid+ "\n\n")
    }
  }
}
</script>