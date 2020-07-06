// function to generate markdown for README
// all items to show as the template on the markdown file
function generateMarkdown(answers) {
  return `
  # Project Name
  ${answers.title}

  ## Overview 
  ${answers.about}

  ## Table of Contents:
  - [Links](#Links)
  - [Screenshots](#Screenshots)
  - [Motivation](#Motivation)
  - [Installation](#Installation)
  - [How_to_use](#How_to_use)
  - [Benefit](#Benefit)
  - [License](#License)
  - [Tests](#Tests)
  - [Contribute](#Contribute)

 ## Links
  - [Link to project]
  - [Link to project]

 ## Screenshots
  - ![Project gif](https://media.giphy)
  - [Project image]<img src="filename" width=600>
  - [Project image]<img src="filename" width=600>

  ## Motivation
  ${answers.motivation}

  ## Installation
  ${answers.installation}

  ## How_to_use
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

  © Copyright 2020
`;
}

module.exports = generateMarkdown;
