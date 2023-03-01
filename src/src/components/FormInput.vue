<template>
  <div ref="input" class="flex justify-start items-center w-11/12 h-8 m-1  border border-gray-900 rounded-lg text-gray-300 bg-gray-600 overflow-hidden" :class="(true) ? 'border-lime-400':'border-red-400'">
    <img :src="icon" class="w-4 h-4 mx-2">
    <input v-model="inputValue" @focus="inputFocused" @focusout="inputFocusedOut" @input="inputValueHasChanged(inputId, inputValue)" :type="type" :placeholder="placeholder" class="w-full px-2 bg-gray-600 focus:outline-none">
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: ['inputId','icon', 'type', 'placeholder'],
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
      this.$emit('inputFocused')
    },
    inputFocusedOut(){
      this.$emit('inputFocusedOut')
    },



    // changeInputRingColor(inputId){
    //   const validColor = 'border-lime-400'
    //   const invalidColor = 'border-red-600'
    //
    //   if ( this.inputValidProperty ){
    //     this.$refs.input.classList.remove(invalidColor)
    //     this.$refs.input.classList.add(validColor)
    //     return
    //   }
    //
    //   this.$refs.input.classList.remove(validColor)
    //   this.$refs.input.classList.add(invalidColor)
    // },


    applyInputIsRequiredEffect(){
      console.log('apply effect')
      const effect = "  border-2 border-red-600 "
    },
  }
}
</script>