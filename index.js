import inquirer from 'inquirer'
import generateMarkdown from './generateMarkdown.js'


inquirer.prompt([
{
    type: "input",
    name: "title",
    message: "What is the name of the project?",
},
{
    type: "input",
    name: "description",
    message: "describe the project",
},
{
    type: "input",
    name: "installation",
    message: "list the instructions to install",
},
{
    type: "input",
    name: "usage",
    message: "Usage?",
},
{
    type: "input",
    name: "license",
    message: "What license were used?",
},
{
    type: "input",
    name: "email",
    message: "What is your email?",
},
{
    type: "input",
    name: "github",
    message: "What is my github?",
},



])
  .then(answers => {
    console.log(answers)


  })
  .catch(error => console.log(error))
