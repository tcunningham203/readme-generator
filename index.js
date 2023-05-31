// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Links this to the generate markdown javascript file in the utils folder
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
   

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// This code was taken directly from the inquirer documentation.
inquirer
  .prompt([
    {
        type: 'input',
        name: 'testorino',
        message: 'This is a test to see if this works.',
        
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });