<template>
  <div class="flex justify-center items-center w-24 h-8 rounded border" :class="(allInputsAreValid) ? 'border-lime-300':'border-gray-600' ">
    {{ text }}
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