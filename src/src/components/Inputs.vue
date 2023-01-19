<template>
  <div class="flex flex-col text-white bg-gray-800 overflow-hidden ">
    <div id="inputs" class="basis-5/6 w-full sm:pt-10 overflow-x-hidden overflow-x-scroll">
      <FormInput class="border"/>
      <FormInput class="border"/>
      <FormInput class="border"/>
      <FormInput class="border"/>
    </div>
    <div id="submitButton" class="basis-1/6 flex justify-around items-center w-full">
      <Button/>
    </div>
  </div>
</template>



<script>
import FormInput from "./FormInput.vue";
import Button from "./Button.vue";

export default{
  components: {FormInput, Button},
  data(){
    return {
      allInputs: ['email','phone_number',],
      activeInputs: [],
    }
  },
  methods: {
    setActiveInputs(){

    }
  },
}

</script>