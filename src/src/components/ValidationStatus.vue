<template>
  <div class="rounded-lg overflow-y-scroll">
    <div v-if="validRulesForFocusedInput" class="pl-4 text-sm text-lime-500">
      <ul v-auto-animate class="gap-0">
        <li v-for="rule in this.validRulesForFocusedInput" class="space-y-0">
          <small >{{rule}}</small>
        </li>
      </ul>
    </div>
    <div v-if="invalidRulesForFocusedInput" class="pl-4 text-sm text-red-500">
      <ul v-auto-animate class="gap-0">
        <li v-for="rule in this.invalidRulesForFocusedInput" class="space-y-0">
          <small >{{rule}}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: "ValidationStatus",
  computed: {
    focusedInput(){ return this.$store.getters.currentlyFocusedInput },
    validRulesForFocusedInput(){
      if (this.focusedInput && this.$store.getters.validRules(this.focusedInput))
          return this.$store.getters.validRules(this.focusedInput)
    },
    invalidRulesForFocusedInput(){
      if (this.focusedInput && this.$store.getters.invalidRules(this.focusedInput))
        return this.$store.getters.invalidRules(this.focusedInput)
    },
  },
}
</script>