const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = [
  {
    type: "input",
    message: "What is this project's title?",
    name: "title"
  },
  {
    type: "input",
    message: "What is the description for this project?",
    name: "description"
  },
  {
    type: "input",
    message: "What are this project's install instructions?",
    name: "install",
    default: "npm i"
  },
  {
    type: "input",
    message: "What is this project used for?",
    name: "usage"
  },
  {
    type: "input",
    message: "What is your Table of Contents?",
    name: "tableOfContents"
  },
  {
    type: "input",
    message: "What commands should be run to run tests?",
    name: "tests",
    default: "npm run test"
  },
  {
    type: "input",
    message: "Who needs credit on this project?",
    name: "credits"
  },
  {
    type: "input",
    message: "How does someone contribute to this project?",
    name: "contribute"
  },
  {
    type: "list",
    message: "How is this project licensed?",
    name: "license",
    choices: ["Apache", "Boost Software", "Creative Commons", "GNU", "ISC", "MIT", "Mozilla Public", "The Unlicense", "Other"]
  }
]

//function to create and write into README
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README was successfully generated!")
  );
}

//function to initialize the app
function init() {
  console.log("Initializing...");

  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

//function call to initialize app
init();