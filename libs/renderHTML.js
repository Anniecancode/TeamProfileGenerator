// Include packages needed for this application
const fs = require('fs')
const path = require ('path')

// Include html template
const dist = path.resolve(__dirname, '../dist')

// Render role section to html
const render = teams =>{
    const renderHTML = []

    renderHTML.push(...teams
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => renderManager(manager)));
    renderHTML.push(...teams
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => renderEngineer(engineer)));
    renderHTML.push(...teams
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => renderIntern(intern)));

    return renderTeams(renderHTML.join(''))
}

// Render command line answers to html
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(dist, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "Number", manager.getNumber());
    return template;
  };
  
  const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(dist, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
  };
  
  const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(dist, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
  };
  
  const renderTeams = renderHTML => {
    const template = fs.readFileSync(path.resolve(dist, "team.html"), "utf8");
    return replacePlaceholders(template, "team", renderHTML);
  };
  
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };
  
  
  module.exports = render;

