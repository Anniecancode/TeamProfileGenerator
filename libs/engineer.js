const inquirer = require('inquirer')
const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email);
        this.github = github
    }

    getGithub(){
        return console.log(`Github username is ${this.github}`)
    }

    getRole(){
        return 'engineer'
    }
}
function getEngineer(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "What is your engineer's email address?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is your engineer's Github username?",
            name: "engineerGithub"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No more team member to add'],
            name: "teamMember"
        }
    ])
    .then((data) => {
        const engineer = new Engineer (data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        engineer.getName();
        engineer.getId();
        engineer.getEmail();
        engineer.getGithub();
    })
}


module.exports = {
    Engineer,
    getEngineer
}