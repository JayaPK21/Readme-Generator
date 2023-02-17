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
        choices: ['MIT', 'Open Software License 3.0', 'Microsoft Public License', 'Academic Free License v3.0']
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
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then((response) => {

        console.log(generateMarkdown(response));
        //writeToFile(fileName, generateMarkdown(response));
        
    });

}

// function call to initialize program
init();
