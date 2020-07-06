// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Project Name
  ${answers.title}

  ![Project image](project-img-url)


  ## Description 
  ${answers.about}

  !

  ## Table of Contents:
  - [Installation](#Installation)
  - [How to use](#Usage)
  - [Benefit](#Benefit)
  - [License](#License)
  - [Tests](#Tests)
  - [Contribute](#Contribute)
  - [Github Username](#Questions)
  - [Email](#Email) 

  ## Motivation
  ${answers.motivation}

  ## Installation
  ${answers.install}

  ## How to use
  ${answers.usage}

  ## Benefit
  ${answers.benefit}

  ## License
  ${answers.license}

  ## Tests
  ${answers.tests}

  ## Contribute
  ${answers.contribute}

  ## Github Username
  ${answers.github}

  ## Email
  ${answers.email}
`;
}

module.exports = generateMarkdown;
