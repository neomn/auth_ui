<template>
  <div class="rounded-lg overflow-y-scroll">
    <div>
<!--      {{this.validRulesForFocusedInput}}-->
    </div>
    <div class="pl-4 text-sm text-red-400">
      <ul v-auto-animate class="gap-0">
        <li v-for="rule in Object.keys(this.invalidRulesForFocusedInput)" class="space-y-0">
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
    validRulesForFocusedInput(){ return this.$store.getters.validRules(this.focusedInput) },
    invalidRulesForFocusedInput(){ return this.$store.getters.invalidRules(this.focusedInput) },
  },
  methods: {

  },
}
</script>