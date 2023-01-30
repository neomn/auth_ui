<template>
  <div class="flex justify-start items-center w-11/12 h-8 m-1  border border-gray-900 rounded-lg text-gray-300 bg-gray-600 overflow-hidden">
    <img :src="icon" class="w-4 h-4 mx-2">
    <input id="email" :type="type" :placeholder="placeholder" class="w-full px-2 bg-gray-600">
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: ['icon', 'type', 'placeholder'],
}
</script>