// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

// Include class and subclasses
const Manager = require('./libs/manager')
const Engineer = require('./libs/engineer');
const Intern = require('./libs/intern');

// Include html-render layout
const render = require('./libs/renderHTML')

// Set location & name for the html generated
const folder = path.resolve(__dirname, './dist')
const file = path.join(folder, 'TeamGenerated.html')


const teams = []


welcome = console.log(`Please build your team`);

// Command line questions for manager
const getManager = () => {
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
    ])
    .then((data) => {
        const manager = new Manager (data.managerName, data.managerId, data.managerEmail, data.managerNumber)
        teams.push(manager);
        teamMember()
    })
}

// Command line questions for engineer
const getEngineer = () => {
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
    ])
    .then((data) => {
        const engineer = new Engineer (data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        teams.push(engineer);
        teamMember()
    })
}

// Command line questions for intern
const getIntern = () => {
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
    ])
    .then((data) => {
        const intern = new Intern (data.internName, data.internId, data.internEmail, data.internSchool)
        teams.push(intern);
        teamMember()
    })
}

// Command line questions for user to choose roles
const teamMember = () => {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No more team member to add'],
            name: "teamMember"
        }
    ])
    // Command line quesions switch according to user's choice
    .then((choice) => {
        switch (choice.teamMember) {
            case 'Engineer': 
            getEngineer();
            break;
            case 'Intern': 
            getIntern();
            break;
            default: 
            getTeams()
        }
    })
}


// Generate html according to user's answers
const getTeams = () => {
    fs.writeFile(file, render(teams), (err) => 
    err? console.error(err): console.log(`success!`))
}


getManager()

