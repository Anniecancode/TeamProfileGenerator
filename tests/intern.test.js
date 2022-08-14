const fs = require('fs')
const Intern = require('../libs/intern')

describe('intern', () => {

    describe('school', () => {
        it('should set users school input', () => {
            const value = 'theUni'
            const intern = new Intern('Annie', 123, 'abc@hotmail.com', value);
        
            expect(intern.school).toBe(value);
        });
    });

    describe('getSchool', () => {
        it('should return users school input', () => {
            const value = 'theUni'
            const intern = new Intern('Annie', 123, 'abc@hotmail.com', value);
        
            expect(intern.getSchool()).toBe(value);
        })
    });

    describe('getRole', () => {
        it('should return users role choice', () => {
            const value = 'Intern'
            const intern = new Intern('Annie', 123, 'abc@hotmail.com', 'theUni');
        
            expect(intern.getRole()).toBe(value);
        })
    });

})