// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description 
  ${answers.about}

  ## Table of Contents:
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Beneift] (#Benefit)
  - [License](#License)
  - [Contribute](#Contribute)
  - [Tests](#Tests)
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

  ## Contribute
  ${answers.contribute}

  ## Tests
  ${answers.tests}

  ## Github
  ${answers.github}

  ## Questions
  ${answers.questions}
`;
}

module.exports = generateMarkdown;
