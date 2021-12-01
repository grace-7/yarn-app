/**
 * Creates the instructions in a pattern based on a raw input string
 *
 * @param {string} rawText raw text for a pattern coming from the user
 */
function createSteps(rawText) {
  console.log(rawText);
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
function createPattern({ patternName, project, yarn, hookSize, steps }) {
  console.log({ patternName, project, yarn, hookSize, steps });
  return {
    name: "Pattern name",
    project: "hat",
    yarn: {
      weight: 3,
      length: 1000,
      fiber: "cotton",
    },
    hookSize: 3,
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
