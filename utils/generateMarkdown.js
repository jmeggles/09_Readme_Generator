// function to generate markdown for README
// all items to show as the template on the markdown file
function generateMarkdown(answers) {
  return `
  # Project Name
  ${answers.title}

  ## Overview 
  ${answers.about}

  - [Link to project]
  - [Link to project]

  - ![Project gif](https://media.giphy)
  - [Project image]<img src="filename" width=600>
  - [Project image]<img src="filename" width=600>

  ## Badges
  

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

  © Copyright 2020
`;
}

module.exports = generateMarkdown;
