<template>
  <div class="rounded-lg overflow-y-scroll">
    <div v-if="validRulesForFocusedInput">
      {{this.validRulesForFocusedInput}}
    </div>
    <div v-if="invalidRulesForFocusedInput" class="pl-4 text-sm text-red-400">
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
    validRulesForFocusedInput(){
      if (this.focusedInput && !this.isEmptyObject(this.$store.getters.validRules(this.focusedInput)))
          return this.$store.getters.validRules(this.focusedInput)
    },
    // invalidRulesForFocusedInput(){
    //   const invalidRules = this.$store.getters.invalidRules(this.focusedInput)
    //   if (this.focusedInput && !this.isEmptyObject(invalidRules))
    //     return invalidRules
    // },
    invalidRulesForFocusedInput(){
      if (this.focusedInput)
        return this.$store.getters.invalidRules(this.focusedInput)
      return ''
    },
  },
  methods: {
    debounce(callback, wait=300){
      let timeout
      return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => { callback(...args)  }, wait)
      }
    },
    isEmptyObject(object){
      return Object.keys(object).length === 0
    },
  },
}
</script>