<template>
  <div class="relative">
    <div class="absolute w-full h-full border rounded"
         :class="(allInputsAreValid) ? ' border-lime-400 shadow shadow-lime-400':'border-gray-600' ">
    </div>
    <div class="flex justify-center items-center w-24 h-8 border rounded"
         :class="(allInputsAreValid) ? 'border-lime-400 shadow shadow-lime-400':'border-gray-600' " >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ['text'],
  computed: {
    allInputsAreValid(){return this.$store.getters.allInputsAreValid },
  }
}
</script>