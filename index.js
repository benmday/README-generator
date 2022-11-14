// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {
  generateMarkdown,
  renderLicenseBadge,
} = require("./utils/generateMarkdown");

const questions = [
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
    name: "credits",
    message: "Enter credits (if applicable):",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license:",
    choices: ["MIT", "Creative Commons", "Apache", "GNU GPL v3"],
  },
  {
    type: "input",
    name: "contributions",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Template successfully created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(
      ({
        title,
        description,
        installation,
        usage,
        credits,
        license,
        contributions,
        tests,
        github,
        email,
      }) => {
        const md = generateMarkdown(
          title,
          description,
          installation,
          usage,
          credits,
          license,
          contributions,
          tests,
          github,
          email
        );

        console.log(renderLicenseBadge(license));

        writeToFile("README.md", md);
      }
    );
}

// Function call to initialize app
init();