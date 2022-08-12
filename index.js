// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./employee')

const emoji = require('node-emoji');
const people = emoji.get('pizza')

console.log(`Please build your team ${people}`)

inquirer
.prompt([
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
        validate: answer => {
            if (answer == ""){
                return console.log(`Please enter valid inputs!`)
            } return true
        } 
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "managerId",
        // validation not working properly
        validate: answer => {
            if (answer !== [0-9]){
                return console.log(`Please enter number bewteen 0-9`)
            }  return true
        }
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail"
    },
])


//.then((data) =>{
    //console.log (`${data.managerName}`)
//})




