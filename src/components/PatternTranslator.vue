<template>
  <form class="input"> 
    <label for="newPattern"></label>
    <span>Please copy and paste your pattern below:</span>
    <textarea rows="10" id="input" v-model="message" placeholder="add multiple lines"></textarea>
  </form>
  <button @click="convert()" id="botConvert" class="btn">
    Convert
  </button>

  <p> Pattern Name </p>
  <input id="inputFeild" v-model="patternName" placeholder="Pattern Name">
  <p> Project Type </p>
  <input id="inputFeild" v-model="projectType" placeholder="Project Type">
  <p> Yarn Length </p>
  <input id="inputFeild" v-model="yarnLength" placeholder="Yarn Length">
  <br>

  <p>Yarn Weight</p>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option value="0">0: Lace</option>
    <option value="1">1: Super Fine</option>
    <option value="2">2: Fine</option>
    <option value="3">3: Light</option>
    <option value="4">4: Medium</option>
    <option value="5">5: Bulky</option>
    <option value="6">6: Super Bulky</option>
    <option value="7">7: Jumbo</option>
  </select>
  <br>

  <p>Fiber Type</p>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option value="acrylic">Acrylic</option>
    <option value="alpaca">Alpaca</option>
    <option value="cotton">Cotton</option>
    <option value="merinoWool">Merino Wool</option>
    <option value="organic">Organic</option>
    <option value="silk">Silk</option>
    <option value="wool">Wool</option>
    <option value="other">Other</option>
  </select>
  <br>

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

// import {createPattern, createSteps} from '../pattern';

export default {

setup(props, ctx) {
  let message = ref("");
  let outputtedPattern = ref("");

  function convert() {
    translatePattern(message.value).forEach(element => console.log(element));

    outputtedPattern.value = translatePattern(message.value);

    // translatePattern(message.value).forEach(element => outputtedPattern.value += element);
  }

  function translatePattern(pattern) {
    translateToken()
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

.inputFeild {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p {
  display: flex;
  flex-direction: column;
}

.outputpattern {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
}


</style>