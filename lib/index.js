const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

const generateHTML = require("../src/generateHTML");

const team = [];

const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "enter name for manager",
        name: "name",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            console.log("please input valid value");
          }
        },
      },
      {
        type: "input",
        message: "Enter employee ID:",
        name: "id",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            console.log("please input valid value");
          }
        },
      },
      {
        type: "input",
        message: "Enter E-Mail Address:",
        name: "email",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            console.log("please input valid value");
          }
        },
      },
      {
        type: "input",
        message: "Enter Office Number:",
        name: "office",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            console.log("please input valid value");
          }
        },
      },
    ])
    .then((managerData) => {
      const { name, id, email, office } = managerData;
      const manager = new Manager(name, id, email, office);
      team.push(manager);
    });
}; //!end of Manager Questions

const employeeQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "is your role an Enginner or Intern?",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        message: "Enter Name:",
        name: "name",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            console.log("please input valid value");
          }
        },
      },
      {
        type: "input",
        message: "Enter Employee ID:",
        name: "id",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            console.log("please input valid value");
          }
        },
      },
      {
        type: "input",
        message: "Enter valid E-Mail Address:",
        name: "email",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            console.log("please input valid value");
          }
        },
      },
      {
        when: (input) => input.role === "Engineer",
        type: "input",
        message: "Enter Github Username:",
        name: "github",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            console.log("please input valid value");
          }
        },
      },
      {
        when: (input) => input.role === "Intern",
        type: "input",
        message: "Enter School:",
        name: "school",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            console.log("please input valid value");
          }
        },
      },
      {
        type: "confirm",
        name: "more",
        message: "Add more team members?",
      },
    ])
    .then(function (employeeData) {
      let { name, id, email, role, github, school, more } = employeeData;
      let employee;

      if (role == "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role == "Intern") {
        employee = new Intern(name, id, email, school);
      }

      team.push(employee);

      if (more) {
        return employeeQuestions(team);
      } else {
        return team;
      }
    });
}; //!end of Employee Questions

const generateFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Team has been generated in index.html!");
    }
  });
};

managerQuestions()
  .then(employeeQuestions)
  .then(function (team) {
    return generateHTML(team);
  })
  .then(function (HTML) {
    return generateFile(HTML);
  })
  .catch(function (err) {
    console.log(err);
  });
