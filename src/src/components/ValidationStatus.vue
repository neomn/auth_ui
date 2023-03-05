<template>
  <div class="rounded-lg overflow-y-scroll">
    <div>
<!--      {{this.validRulesForFocusedInput}}-->
    </div>
    <div class="text-red-400">
      {{Object.keys(this.invalidRulesForFocusedInput)}}
    </div>
  </div>
</template>

<script>


export default {
  name: "ValidationStatus",
  computed: {
    focusedInput(){ return this.$store.getters.currentlyFocusedInput },
    validRulesForFocusedInput(){ return this.$store.getters.validRules(this.focusedInput) },
    invalidRulesForFocusedInput(){ return this.$store.getters.invalidRules(this.focusedInput) },
  },
}
</script>