// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// const questions = [
//   {
//     type: "input",
//     name: "title",
//     message: "What is the title of your project?",
//   },
//   {
//     type: "input",
//     name: "description",
//     message: "Write a brief description of your project:",
//   },
//   {
//     type: "input",
//     name: "installation",
//     message: "Enter installation instructions:",
//   },
//   {
//     type: "input",
//     name: "usage",
//     message: "Enter usage information:",
//   },
//   {
//     type: "input",
//     name: "contributions",
//     message: "Enter contribution guidelines:",
//   },
//   {
//     type: "input",
//     name: "test",
//     message: "Enter test instructions:",
//   },
//   {
//     type: "checkbox",
//     name: "license",
//     message: "Choose a license:",
//     choices: ["MIT", "Creative Commons", "WTFPL", "The Unlicense"],
//   },
//   {
//     type: "input",
//     name: "github",
//     message: "Enter GitHub username:",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "Enter your email:",
//   },
// ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//     err ? console.error(err) : console.log("Template successfully created!")
//   );
// }

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Write a brief description of your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
      },
      {
        type: "input",
        name: "contributions",
        message: "Enter contribution guidelines:",
      },
      {
        type: "input",
        name: "test",
        message: "Enter test instructions:",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Choose a license:",
        choices: ["MIT", "Creative Commons", "WTFPL", "The Unlicense"],
      },
      {
        type: "input",
        name: "github",
        message: "Enter GitHub username:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email:",
      },
    ])
    .then((response) =>
      fs.writeFile("README.md", JSON.stringify(response, null, 2), (err) =>
        err ? console.error(err) : console.log("Template successfully created!")
      )
    );
}

// Function call to initialize app
init();
