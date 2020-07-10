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
  - [Screenshots_and_GIFs](#Screenshots_and_GIFs)
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

 ## Screenshots_and_GIFs
  - ![Project gif](https://media.giphy)
  - ![alt text](./image/path/filename.png)
  - ![alt text](./image/path/filename.png)

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
