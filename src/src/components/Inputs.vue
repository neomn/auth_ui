<template>
  <div class="flex flex-col text-white bg-gray-800 overflow-hidden border-2">
    <div id="inputs" class="basis-5/6 w-full border">
       <div class="border">1</div>
       <div class="border">2</div>
       <div class="border">3</div>
       <div class="border">4</div>
    </div>
    <div id="submitButton" class="basis-1/6 w-full border">
      submit
    </div>
  </div>
</template>



<script>
import FormInput from "./FormInput.vue";
export default{
  components: {FormInput,},
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