// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Project Name
  ${answers.title}

  - [Link to project]
  - [Link to project]

  - ![](https://media.giphy)
  - [Project image]<img src="filename" width=600>
  - [Project image]<img src="filename" width=600>

  ## Overview 
  ${answers.about}

  ## Badges
  ${answers.about}

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

  ## Credits
  ${answers.credits}

  ## Tests
  ${answers.tests}

  ## Contribute
  ${answers.contribute}
`;
}

module.exports = generateMarkdown;
