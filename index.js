// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./libs/employee')
const { Manager, getManager } = require('./libs/manager')

const emoji = require('node-emoji');
const people = emoji.get('pizza')

welcome = console.log(`Please build your team ${people}`);

getManager()
// need to build switch

