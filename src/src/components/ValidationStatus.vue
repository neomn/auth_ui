<template>
  <div class="rounded-lg">
    {{this.focusedInput}}
  </div>
</template>

<script>


export default {
  name: "ValidationStatus",
  computed: {
    focusedInput(){ return this.$store.getters.currentlyFocusedInput }
  },
}
</script>