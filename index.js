//Generate HTML
const generateHTML = require("./src/generateHTML");
//Node Modules
const fs = require("fs");
const inquirer = require("inquirer");
const addEmployee = require("./lib");
// const { writeFile } = require("fs").promises; //what is this
// Team Member
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

function addWorker() {
    if(!Manager) {
        inquirer.prompt([
        Manager.managerPrompt(),
    ])   
    }
    inquirer.prompt([
        {
            type:"list",
            name:"addEmployee",
            message: "select an employee you would like to add!",
            choices:['Intern','Engineer', 'Manager','No more employees!']
          },
    renderPrompt(choices),
    ])
//add manager if there is not one. Manager should be the first person added



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
