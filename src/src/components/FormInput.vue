<template>
  <div ref="input" class="flex justify-start items-center w-11/12 h-8 m-1  border border-gray-900 rounded-lg text-gray-300
        bg-gray-600 overflow-hidden"
        :class="`${ inputIsFocused && inputValue.toString().length<=0 ? 'border-gray-300' : ''}
                 ${ inputIsFocused && inputValue.toString().length>0 && !inputIsValid  ? 'border-red-500' : ''}
                 ${ inputIsFocused && inputValue.toString().length>0 && inputIsValid ? 'border-lime-500' : ''}
                 ${ inputIsValid ? 'border-lime-500' : ''}
                 ${ pingInvalidInputs ? 'border-yellow-500' : ''}  `">
    <img :src="icon" class="w-4 h-4 mx-2">
    <input v-model="inputValue" @focus="inputFocused" @focusout="inputFocusedOut" @input="inputValueHasChanged(inputId, inputValue)" :type="type" :placeholder="placeholder" class="w-full px-2 bg-gray-600 focus:outline-none">
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
    pingInvalidInputs() { return this.$store.getters.pingInvalidInputs }
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