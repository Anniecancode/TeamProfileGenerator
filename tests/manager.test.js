const fs = require('fs')
const Manager = require('../libs/manager')

describe('manager', () => {

    describe('number', () => {
        it('should set users office number input', () => {
            const value = 321
            const manager = new Manager('Annie', 123, 'abc@hotmail.com', value);
        
            expect(manager.number).toBe(value);
        });
    });

    describe('getNumber', () => {
        it('should return users office number input', () => {
            const value = 321
            const manager = new Manager('Annie', 123, 'abc@hotmail.com', value);
        
            expect(manager.getNumber()).toBe(value);
        })
    });

    describe('getRole', () => {
        it('should return users role choice', () => {
            const value = 'Manager'
            const manager = new Manager('Annie', 123, 'abc@hotmail.com', 321);
        
            expect(manager.getRole()).toBe(value);
        })
    });

})