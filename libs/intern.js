const inquirer = require('inquirer')
const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);
        this.school = school
    }

    getSchool(){
        return console.log(`The school is ${this.school}`)
    }

    getRole(){
        return 'intern'
    }
}
function getIntern(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is your intern's email address?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No more team member to add'],
            name: "teamMember"
        }
    ])
    .then((data) => {
        const intern = new Intern (data.internName, data.internId, data.internEmail, data.internSchool)
        intern.getName();
        intern.getId();
        intern.getEmail();
        intern.getSchool();
    })
}


module.exports = {
    Intern,
    getIntern
}