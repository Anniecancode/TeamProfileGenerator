class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    }

    getName(){
        return console.log(`The name is ${this.name}`)
    }   

    getId(){
        return console.log(`The nane is ${this.id}`)
    }

    getEmail(){
        return console.log(`The nane is ${this.email}`)
    }

    getRoll(){
        return 'Employee'
    }
}


module.exports = Employee
   