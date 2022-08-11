const inquirer = require('inquirer')

class Employee {
    constructor (name, id){
        this.name = name;
        this.id = id;
    }

    getName(title)
        {
        title = "team manager's"
        question[
            {
                type: 'input',
                message: 'What is the ${title} name?',
                name: 'employeename'
            }  
        ]
    }   

    
}

inquirer.prompt(question)


module.exports = {
    Employee,
    inquirer
}