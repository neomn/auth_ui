<template>
  <div class="flex justify-center items-center w-24 h-8 rounded border border-gray-600" >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ['text'],
}
</script>