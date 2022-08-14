// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

// Include class and subclasses
const Employee = require('./libs/employee')
const  Manager = require('./libs/manager')
const Engineer = require('./libs/engineer');
const Intern = require('./libs/intern');

const render = require('./libs/renderHTML')

const renderDir = path.resolve(__dirname, "output");
const renderPath = path.join(renderDir, "TeamGenerate.html");

const teams = []
const ids = []

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
    // Command line quesions switch according to user's choice
    .then((data) => {
        const manager = new Manager (data.managerName, data.managerId, data.managerEmail, data.managerNumber)
        teams.push(manager);
        ids.push(data.managerId);
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
        ids.push(data.engineerId);
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
        ids.push(data.internId);
        teamMember()
    })
}

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
    .then((data) => {
        switch (data.teamMember) {
            case 'Enigineer': 
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


const getTeams = () => {
    fs.writeFileSync(renderPath, render(teams), "utf-8")
}


getManager()