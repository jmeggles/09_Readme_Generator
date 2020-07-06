// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([{
        type: "input",
        message: "What is your project's title?",
        name: "title"
    }, 
    {
        type: "input",
        message: "What is the project about?",
        name: "about"
    },
    {
        type: "input",
        message: "What was the motivation for this project?",
        name: "motivation"
    },
    {
        type: "input",
        message: "How to use this...",
        name: "usage"
    },
    {
        type: "input",
        message: "How to install...?",
        name: "install"
    },
    {
        type: "input",
        message: "Who could benefit from this project?",
        name: "benefit"
    },
    {
        type: "input",
        message: "",
        name: ""
    },
    }])
    .then(answer => {
        generateReadMe(answer)
    })

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
        type: "input",
        message: "What is your project's title?",
        name: "title"
    }, {
        type: "input",
        message: "How do you install this?",
        name: "install"
    }])
    .then(answer => {
        generateReadMe(answer)
    })

