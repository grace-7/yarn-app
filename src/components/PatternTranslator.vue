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
// import converter from 'number-to-words'

export default {

setup(props, ctx) {
  let message = ref("");
  let outputtedPattern = ref("");

  function convert() {
    outputtedPattern.value = translatePattern(message.value);
  }

  function translatePattern(pattern) {
    for (let i = 0; i < pattern.length; i++) {
      pattern = translateLine(message.value.split(/\r?\n/));
    }
    return pattern;
  }

  function translateLine(line) {
    for (let i = 0; i < line.length; i++){
      line = translateInstruction(message.value.split("Row" || "Round"));
    }
    return line;
  }

  function translateInstruction(instruction) {
    for (let i = 0; i < instruction.length; i++){
      instruction = translateToken(message.value.split(","));
      // instruction = translateToken(converter.toWords(message.value));
    }
    return instruction;
  }

  function translateToken(token) {
    for (let i = 0; i < token.length; i++) {
      if (token === "ch") {
        token === "chain"
      }
      if (token === "sc") {
        token === "single crochet"
      }
      if (token === "dc") {
        token === "single crochet"
      }
      if (token === "sc") {
        token === "double crochet"
      }
      if (token === "trc") {
        token === "treble crochet"
      }
      if (token === "ss") {
        token === "slip stitch"
      }
      if (token === "sp") {
        token === "space"
      }
    }
    return token;
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