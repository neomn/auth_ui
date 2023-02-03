<template>
  <div class="flex justify-center items-center w-24 h-8 rounded border border-lime-300 ">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ['text'],
}
</script>