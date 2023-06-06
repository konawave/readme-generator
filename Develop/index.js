const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = [
  {
    type: "input",
    message: "WWhat is the title of the project?",
    name: "title"
  },
  {
    type: "input",
    message: "What is this project's description?",
    name: "description"
  },
  {
    type: "input",
    message: "What are the install instructions?",
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
    name: "table of contents"
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

// function to write README file
function writeToFile(filename, data) {
  return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(response => {
    writeToFile("sampleREADME.md", generateMarkdown(response))
  });
}

// function call to initialize program
init();