// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "Creative Commons":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";

    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "GNU GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(
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
) {
  return `# ${title}

  ${renderLicenseBadge(license)}

  ## Description
  
  ${description}
  
  
  ## Table of Contents
  
  - [Title](#title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  
  ${installation}
  
  
  ## Usage
  
  ${usage}
      
  
  ## Credits
  
  ${credits}
  
  
  ## License
  
  This software is licensed under the ${license} license.
  
  ---
  
  
  ## How to Contribute
  
  ${contributions}
  
  
  ## Tests
  
  ${tests}
  
  
  ## Questions
  
  Please forward any and all questions to ${email}
  
  GitHub username: ${github}`;
}

module.exports = {
  renderLicenseBadge,
  generateMarkdown,
};