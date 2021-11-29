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
    translatePattern(message.value).forEach(element => console.log(element));

    outputtedPattern.value = translatePattern(message.value);

    // translatePattern(message.value).forEach(element => outputtedPattern.value += element);
  }

  // function testPattern(){
  //   const patternTest = "Row 1 - Ch 311\nRow 2 - Sc in 2nd loop from hook, 310 sc, ch 1, turn \nRow 3-365 - 310 sc, ch 1, turn"
  //   translatePattern(patternTest);
  // }

  function translatePattern(pattern) {
    for (let i = 0; i < translateLine(pattern).length; i++) {
      pattern = translateLine(message.value.split(/\r?\n/));
    }
      return pattern;
  }

  function translateLine(line) {
    for (let i = 0; i < translateInstruction(line).length; i++){
      line = translateInstruction(message.value.split("-"));
    }
      return line;
    
  }

  function translateInstruction(instruction) {
    for (let i = 0; i < translateToken(instruction).length; i++){
      instruction = translateToken(message.value.split(","));
      // instruction = translateToken(converter.toWords(message.value));
    }
      return instruction;
  }

  function translateToken(token) {
    for (let i = 0; i < token.length; i++) {
      if (token.toUpperCase === "CH") {
        token = "chain"
        }
      if (token.toUpperCase === "SC") {
        token = "single crochet"
      }
      if (token.toUpperCase === "DC") {
        token = "double crochet"
      }
      if (token.toUpperCase === "TRB") {
        token = "treble crochet"
      }
      if (token.toUpperCase === "SS") {
        token = "slip stitch"
      }
      if (token.toUpperCase === "SP") {
        token = "space"
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
    // testPattern,
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

.outputpattern {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
}


</style>