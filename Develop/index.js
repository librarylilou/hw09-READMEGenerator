// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project-',
        name: 'description',
    }, {
        type: 'input',
        message: 'Describe your installation process-',
        name: 'installation',
    }, {
        type: 'input',
        message: 'Provide usage information-',
        name: 'usage',
    }, {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    }, {
        type: 'input',
        message: 'What are your testing instructions?',
        name: 'instructions',
    },

])
    .then((response) =>
        response.data === response.message
            ? console.log('PARTY!')
            : console.log('UHM?')
    );


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
