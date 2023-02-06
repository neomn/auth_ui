<template>
  <div class="flex justify-start items-center w-11/12 h-8 m-1  border border-gray-900 rounded-lg text-gray-300 bg-gray-600 overflow-hidden">
    <img :src="icon" class="w-4 h-4 mx-2">
    <input v-model="inputValue" @input="test" :type="type" :placeholder="placeholder" class="w-full px-2 bg-gray-600">
  </div>
<!--  <label>{{value}}</label>-->
</template>

<script>
export default {
  name: "FormInput",
  props: ['inputId','icon', 'type', 'placeholder'],
  computed: {
    inputValue: {
      get(){return this.$store.getters.formInputs[this.inputId].value},
      set(value){this.$store.dispatch('updateFormInputValue',{ inputId: this.inputId, value: value})},
    },
  },
  methods: {
    test(value){
      console.log(this.inputValue)
    }
  }
}
</script>