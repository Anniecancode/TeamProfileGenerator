const fs = require('fs')
const Employee = require('../libs/employee')


describe('employee', () => {

    describe ('set', () => {

        describe('name', () => {
            it('should set users name input', () => {
                const value = 'Annie'
                const employee = new Employee(value);
            
                expect(employee.name).toBe(value);
            })
        });

        describe('id', () => {
            it('should set users id input', () => {
                const value = 123
                const employee = new Employee('Annie', value);
            
                expect(employee.id).toBe(value);
            })
        });

        describe('email', () => {
            it('should set users email input', () => {
                const value = 'abc@hotmail.com'
                const employee = new Employee('Annie', 123, value);
            
                expect(employee.email).toBe(value);
            });
        });
    });

    describe('get', () => {

        describe('getName', () => {
            it('should return users name input', () => {
                const value = 'Annie'
                const employee = new Employee(value);
            
                expect(employee.getName()).toBe(value);
            })
        });

        describe('getId', () => {
            it('should return users id input', () => {
                const value = 123
                const employee = new Employee('Annie', value);
            
                expect(employee.getId()).toBe(value);
            })
        });

        describe('getEmail', () => {
            it('should return users email input', () => {
                const value = 'abc@hotmail.com'
                const employee = new Employee('Annie', 123, value);
            
                expect(employee.getEmail()).toBe(value);
            }) 
        });

        describe('getRole', () => {
            it('should return users role choice', () => {
                const value = 'Employee'
                const employee = new Employee('Annie', 123, 'abc@hotmail.com');
            
                expect(employee.getRole()).toBe(value);
            })
        });
    });

})
