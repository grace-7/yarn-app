<template>
  <form class="input"> 
    <label for="newPattern"></label>
    <span>Please copy and paste your pattern below:</span>
    <textarea rows="10" id="input" v-model="message" placeholder="add multiple lines"></textarea>
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

  function convert() {
    outputtedPattern.value = translatePattern(message.value);
      
  }

  function translatePattern(pattern) {

  }

  function translateLine(line) {
    console.log("here loop through line");
    for (let i = 0; i < message.value.length; i++){

      let splitAtRow = message.value.split("Row" || "Round");
      outputtedPattern.value = splitAtRow;


    }
  }

  function translateInstruction(instruction) {
    console.log("here loop through instruction");
    let splitAtComma = message.value.split(",");

    for (let i = 0; i < splitAtComma.length; i++){
      console.log("here");
      outputtedPattern.value = converter.toWords(message.value);
    }
  }

  function translateToken(token) {
    console.log("here loop through token");
    for (let i = 0; i < message.value.length; i++) {
      let instruction = document.getElementById("input").value;
      if (instruction === "ch") {
        instruction === "chain"
      }
      if (instruction === "sc") {
        instruction === "single crochet"
      }
      if (instruction === "dc") {
        instruction === "single crochet"
      }
      if (instruction === "sc") {
        instruction === "double crochet"
      }
      if (instruction === "trc") {
        instruction === "treble crochet"
      }
      if (instruction === "ss") {
        instruction === "slip stitch"
      }
      if (instruction === "sp") {
        instruction === "space"
      }
      outputtedPattern = instruction;
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