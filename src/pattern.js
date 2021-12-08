/**
 * Creates the instructions in a pattern based on a raw input string
 *
 * @param {string} rawText raw text for a pattern coming from the user
 */
function createSteps(rawText) {
  // let number = rawText.replace(/\D/g, "");
  // if (rawText === number.value) {
  //   roundNumber = number;
  // }

  // split rawText up by line, and only get the non-empty lines
  let lines = rawText.split("\n").filter((line) => line.length > 0);

  for (let i = 0; i < lines.length; i++) {
    let instructions = rawText.split(",").filter((iLine) => iLine.length > 0);
    console.log(instructions);
  }

  return [
    {
      roundNumber: 1,
      instructions: ["instruction 1", "instruction 2"],
    },
    {
      roundNumber: 2,
      instructions: ["instruction 1", "instruction 2"],
    },
    {
      roundNumber: 3,
      instructions: ["instruction 1", "instruction 2"],
    },
  ];
}

/**
 * Creates a Pattern, defined in pattern_type.js
 * @param {object} param0 Object to create a pattern with, has name,
 *    finished project, yarn info, hook size, and the steps created from createSteps
 */
function createPattern({ patternName, project, yarn, steps }) {
  console.log({ patternName, project, yarn, steps });
  return {
    name: "Pattern name",
    project: "hat",
    yarn: {
      weight: 3,
      length: 1000,
      fiber: "cotton",
    },
    steps: [
      {
        roundNumber: 1,
        instructions: ["instruction 1", "instruction 2"],
      },
      {
        roundNumber: 2,
        instructions: ["instruction 1", "instruction 2"],
      },
      {
        roundNumber: 3,
        instructions: ["instruction 1", "instruction 2"],
      },
    ],
  };
}

// function translateToken(word) {
//   console.log(word);
//   return "double crochet";
// }

export { createPattern, createSteps };
