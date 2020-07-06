const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require("fs");
// const util = require("util");

// array of questions for user to answer based on project info
// const questions = [
// function generatePrompts() {
//     return 
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
            message: "Who contributed/collaborated on this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Have tests applied to this project?"
        },
        {
            type: "input",
            name: "contribute",
            message: "Would you like others to contribute to this project? If so, how?"
        },
        {
            type: "input",
            name: "github",
            message: "Your GitHub Username:"
        },
        {
            type: "input",
            name: "email",
            message: "Your email:"
        }
    ])
    .then(answer => generateReadMe(answer))

function generateReadMe(data) {
    fs.writeFile('README.md', generateMarkdown(data), function (err) {
        if (err) throw err;
    })

}

//     // ??  used in class ??
//     const fileName = data.name.toLowerCase().split('').join('') + ".json";

//     // function to write README file
//     fs.writeFile("README", md, function (err) {
//         if (err) {
//         console.log(err);
//     }
//     console.log("Success! Created markdown file!");
// });




// // // used in class example
// //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err){

// //         if (err) {
// //         return console.log(err);
// //      }
// //         console.log("Success");
// //     });
// // });

//     // function to initialize program
//     // async function init() {
//     //     try {
//     //         const answers = await questions();
//     //         const mdFile = generateMarkdown(answers);

//     //         await writeFileAsync("README.md", mdFile);
//     //     } 
//     //     catch(err) {
//     //         console.log(err);
//     //     }
//     //     console.log("Successfully created markdown file!");
//     // });


//     // function call to initialize program
//     init();   