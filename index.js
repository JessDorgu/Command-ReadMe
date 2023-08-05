// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ()=> {
    return inquirer.prompt ([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please give a description of your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "Please explain how to install",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide instuctions and examples for user",
        },
        {
            type: "input",
            name: "contributing",
            message: "Please give instructions on how others can contribute to this project.",
        },
        {
            type: "input",
            name: "test",
            message: "Please explain any testing you wrote for this project and how to use.",
        },
        {
            type: "list",
            name: "license",
            message: "Select type of license.",
            choices:[
                "MIT",
                "APCHE2.0",
                "BSD-3",
                "ISC",
                "NONE"
            ]
        },
        {
            type: "input",
            name: "githubname",
            message: "What is your GitHub profile name?",
        },
        {
            type: "input",
            name: "githublink",
            message: "What is your GitHub profile link?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
    ]);
};
// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile('readme.md', data, (err) =>
    err ? console.log(err) : console.log('Successfully created new read me')
    );
}


const init = () => {
    questions()
    .then((answers) => writeFile('readme.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote a new ReadMe!'))
    .catch((err) => console.error(err));
};

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
