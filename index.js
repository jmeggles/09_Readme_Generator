// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");


// questions for user to answer based on project info
inquirer
    .prompt([{
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
        name: "install",
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
        message: "Choose the licensing you would like to use for your application.",
        choices: [
            "MIT",
            "Apache License 2.0",
            "GNU",
            "ISC",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Would you like other users to contribute?  If so, how?"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide tests for users here, to demo the project and its use."
    },
])
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







// const inquirer = require('inquirer');
// const fs = require('fs');

// inquirer
//     .prompt([{
//         type: "input",
//         message: "What is your project's title?",
//         name: "title"
//     }, {
//         type: "input",
//         message: "How do you install this?",
//         name: "install"
//     }])
//     .then(answer => {
//         generateReadMe(answer)
//     })

// // var answer === {title: "batman", install: "npm i"}
// // var data = answer;
// // var data === {title: "batman", install: "npm i"}

// // Object.keys(data) === ['title', 'install']
// // Object.values(data) === ['batman', 'npm i']
// // Object.entries(data) === [['title', 'batman'], ['install', 'npm i']]
// function generateReadMe(data) {
//     fs.readFile('template.md', 'utf8', function (err, md) {
//         if (err) throw err;
        
//         // Object.keys(data).forEach(key => {
//         //     // console.log(key, data[key])
//         //     md = md.replace('{{' + key + '}}', data[key])
//         // })
        
//         var keys = Object.keys(data);
//         for(var i = 0; i < keys.length; i++){
//             var key = keys[i];

//             md = md.replace('{{' + key + '}}', data[key])
//         }

//         // md = md.replace('{{title}}', data.title)
//         // md = md.replace('{{install}}', data.install)

//         fs.writeFile('output.md', md, function (err) {
//             if (err) throw err;
//         })
//     })

//     // var md = `# Title: ${data.title}

//     // # Instructions: 
//     // '''
//     // ${data.install}
//     // '''
//     // `;


//     // fs.writeFile('output.md', md, function (err) {
//     //     if (err) throw err;
//     // })
// }

