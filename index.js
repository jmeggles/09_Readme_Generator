const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require("fs");

// array of questions for user to answer based on project info
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
        },
        {
            type: "input",
            name: "about",
            message: "What is the project about?"
        },
        {
            type: "input",
            name: "motivation",
            message: "What was the motivation for this project?"
        },
        {
            type: "input",
            name: "installation",
            message: "How to install..."
        },
        {
            type: "input",
            name: "usage",
            message: "How to operate...."
        },
        {
            type: "input",
            name: "benefit",
            message: "Who could benefit from this project?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license",
            choices: [
                "MIT",
                "Apache License 2.0",
                "GNU",
                "ISC",
                "none (no license)"
            ]
        },
        {
            type: "input",
            name: "credits",
            message: "Who assisted on this project (shout outs)?"
        },
        {
            type: "input",
            name: "tests",
            message: "Have tests been applied to this project?"
        },
        {
            type: "input",
            name: "contribute",
            message: "Would you like others to contribute to this project? If so, how?"
        },
    ])
// answers are written to the markdown file
    .then(answer => generateReadMe(answer))

function generateReadMe(data) {
    fs.writeFile('README.md', generateMarkdown(data), function (err) {
        if (err) throw err;
    })
}