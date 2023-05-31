// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Links this to the generate markdown javascript file in the utils folder
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Title of Readme?',
        
    },

];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README generated.')
    });
};


// TODO: Create a function to initialize app
function init() {

// This code was taken directly from the inquirer documentation.
inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("Writing answers...")
    writeToFile("README.md", generateMarkdown(answers))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("error1: Prompt couldn't be rendered in the current environment")
    } else {
      // Something else went wrong
      console.log("error2: Something else went wrong")
    }
  });

}

// Function call to initialize app
init();


