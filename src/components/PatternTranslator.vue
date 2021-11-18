<template>
  <form class="input"> 
    <label for="newPattern"></label>
    <span>Please copy and paste your pattern below:</span>
    <textarea id="input" v-model="message" placeholder="add multiple lines"></textarea>
  </form>
  <button @click="convert()" id="botConvert" class="btn">
    Convert
  </button>
  <button @click="saveButton()" class="btn">
    Save
  </button>
  <div class="outputPattern">
    {{ outputtedPattern }}
  </div>
</template>

<script>

import { ref } from 'vue';
import converter from 'number-to-words'

export default {

setup(props, ctx) {
  let message = ref("");
  let outputtedPattern = ref("");

  function convert(){


    for (let i = 0; i < message.value.length; i++){

    let splitAtRow = message.value.split("Row" || "Round");


    }

    
      // ch = 'chain' 
      // sc = 'single crochet'
      // dc = 'double crochet'
      // tr = 'treble crochet'
      // ss = 'slip stitch'
      // sp = 'space'
      
  }

  function loopThroughLine(){

    let splitAtComma = message.value.split(",");

    for (let i = 0; i < splitAtComma.length; i++){
      console.log("here");
      outputtedPattern.value = converter.toWords(message.value);
    }
  }


  function saveButton() {
      ctx.emit('saveButton')
    }

  return {
    message,
    outputtedPattern, 
    convert,
    saveButton
  }

}

//   name: 'saveButton',
//   props: {
//     text: String
//   },
//   data: function () {
//     return {
//       outputtedPattern: "",
//       message: ""
//     }
//   },
//   methods: {
//     convert(){
      
//     },

//     saveButton() {
//       // this.$emit('btn-click')
//       console.log(this.message)
//     },
//   },
}


</script>


<style scoped>
.textarea {
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.input {
  display: flex;
  flex-direction: column;
}


</style>