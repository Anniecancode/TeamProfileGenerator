// Include packages needed for this application
const fs = require('fs')
const path = require ('path')

// Include html template
const source = path.resolve(__dirname, '../src')

// Render role section to html
const render = teams => {
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

// Render html template
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(source, "manager.html"), "utf8");
    template = replaceL (template, "name", manager.getName());
    template = replaceL (template, "role", manager.getRole());
    template = replaceL (template, "email", manager.getEmail());
    template = replaceL (template, "id", manager.getId());
    template = replaceL (template, "number", manager.getNumber());
    return template;
  };
  
  const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(source, "engineer.html"), "utf8");
    template = replaceL (template, "name", engineer.getName());
    template = replaceL (template, "role", engineer.getRole());
    template = replaceL (template, "email", engineer.getEmail());
    template = replaceL (template, "id", engineer.getId());
    template = replaceL (template, "github", engineer.getGithub());
    return template;
  };
  
  const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(source, "intern.html"), "utf8");
    template = replaceL (template, "name", intern.getName());
    template = replaceL (template, "role", intern.getRole());
    template = replaceL (template, "email", intern.getEmail());
    template = replaceL (template, "id", intern.getId());
    template = replaceL (template, "school", intern.getSchool());
    return template;
  };
  
  const renderTeams = renderHTML => {
    const template = fs.readFileSync(path.resolve(source, "team.html"), "utf8");
    return replaceL (template, "team", renderHTML);
  };
  
  const replaceL = (template, layout, value) => {
    const reg = new RegExp("{{ " + layout + " }}", "gm");
    return template.replace(reg, value);
  };
  
  
  module.exports = render;

