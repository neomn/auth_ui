<template>
  <div ref="input" class="flex justify-start items-center w-11/12 h-8 m-1  border rounded-lg
        text-gray-300 bg-gray-600 overflow-hidden"
        :class="(inputIsFocused)? 'border-gray-300':'border-gray-900'" >
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
    // inputIsValid: ( inputId ) => {return this.$store.getters.inputIsValid[inputId]},
    inputValue: {
      get(){return this.$store.getters.formInputs[this.inputId].value},
      set(value){this.$store.dispatch('updateFormInputValue',{ inputId: this.inputId, value: value})},
    }
  },
  methods: {
    inputValueHasChanged(inputId){
      this.$emit('inputValueHasChanged')
      // this.changeInputRingColor(inputId)
    },
    inputFocused(){
      this.inputIsFocused = true
      this.$emit('inputFocused')
    },
    inputFocusedOut(){
      this.inputIsFocused = false
      this.$emit('inputFocusedOut')
    },
  }
}
</script>