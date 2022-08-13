const inquirer = require('inquirer')
const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, number){
        super (name, id, email);
        this.number = number
    }

    getNumber(){
        return console.log(`The number is ${this.number}`)
    }

    getRole(){
        return 'Manager'
    }
}
function getManager(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "managerId"
        },
        {
            type: "input",
            message: "What is the team manager's email address?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerNumber"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No more team member to add'],
            name: "teamMember"
        }
    ])
    .then((data) => {
        const manager = new Manager (data.managerName, data.managerId, data.managerEmail, data.managerNumber)
        manager.getName();
        manager.getId();
        manager.getEmail();
        manager.getNumber();
    })
}


module.exports = {
    Manager,
    getManager
}
    