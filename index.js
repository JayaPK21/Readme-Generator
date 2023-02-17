const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your Project Title? ',
        name: 'title'
    },

    {
        type: 'list',
        message: 'Select a License for your project from the following list: ',
        name: 'license',
        choices: ['Apache 2.0 License', 'MIT', 'Boost Software License 1.0', 'IBM Public License Version 1.0', 'ISC']
    },

    {
        type: 'input',
        message: 'Enter a description about your project: ',
        name: 'description'
    },

    {
        type: 'input',
        message: 'Enter the Installation instructions for your application: ',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'Enter the Usage instructions for your application: ',
        name: 'usage'
    },

    {
        type: 'input',
        message: 'How can others contribute towards this project? ',
        name: 'contributing'
    },

    {
        type: 'input',
        message: 'Enter some test cases for your application: ',
        name: 'tests'
    },

    {
        type: 'input',
        message: 'Enter your email id for users to contact you with questions: ',
        name: 'emailID'
    },

    {
        type: 'input',
        message: 'Enter your GitHub User Name: ',
        name: 'githubUserName'
    }
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log(`ReadMe file for project Successfully generated and can be found in file, ${fileName}`));
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then((response) => {

        writeToFile('GeneratedReadMe.md', generateMarkdown(response));
        
    });

}

// function call to initialize program
init();
