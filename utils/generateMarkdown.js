// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description 
  ${answers.about}

  !

  ## Table of Contents:
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Beneift](#Benefit)
  - [License](#License)
  - [Tests](#Tests)
  - [Contribute](#Contribute)
  - [Questions](#Questions)

  ## Motivation
  ${answers.motivation}

  ## Installation
  ${answers.install}

  ## Usage
  ${answers.usage}

  ## Benefit
  ${answers.benefit}

  ## License
  ${answers.license}

  ## Tests
  ${answers.tests}

  ## Contribute
  ${answers.contribute}

  ## Github
  ${answers.github}

`;
}

module.exports = generateMarkdown;
