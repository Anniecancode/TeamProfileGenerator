const fs = require('fs')
const Engineer = require('../libs/engineer')

describe('engineer', () => {

    describe('github', () => {
        it('should set users github input', () => {
            const value = 'Annie123'
            const engineer = new Engineer('Annie', 123, 'abc@hotmail.com', value);
        
            expect(engineer.github).toBe(value);
        });
    });

    describe('getGithub', () => {
        it('should return users github input', () => {
            const value = 'Annie123'
            const engineer = new Engineer('Annie', 123, 'abc@hotmail.com', value);
        
            expect(engineer.getGithub()).toBe(value);
        })
    });

    describe('getRole', () => {
        it('should return users role choice', () => {
            const value = 'Engineer'
            const engineer = new Engineer('Annie', 123, 'abc@hotmail.com', 'Annie123');
        
            expect(engineer.getRole()).toBe(value);
        })
    });

})