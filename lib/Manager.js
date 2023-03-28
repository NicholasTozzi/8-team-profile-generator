const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  // managerPrompt() {
  //   inquirer
  //     .prompt([
  //       {
  //         type: "input",
  //         name: "name",
  //         message: "What is the managers name?",
  //       },

  //       {
  //         type: "input",
  //         name: "id",
  //         message: "What is the  managers ID number?",
  //       },

  //       {
  //         type: "input",
  //         name: "email",
  //         message: "What is the managers email address?",
  //       },

  //       {
  //         type: "input",
  //         name: "officeNumber",
  //         message: "What is the managers office number?",
  //       },
  //       {
  //         type: "list",
  //         name: "promtAgain",
  //         message: "Would you like to add another employee?",
  //         choices: ["Yes, No"],
  //         //if yes, prompt user to original prompt
  //         //if no, do generateHTML
  //       },
  //     ])
  //     .then((manager) => {
  //       const managerInfo = new Manager(
  //         manager.name,
  //         manager.id,
  //         manager.email,
  //         manager.officeNumber
  //       );
  //       teamArray.push(manager);
  //     });
  // }
}

module.exports = Manager;
