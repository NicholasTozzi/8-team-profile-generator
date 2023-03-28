//! template bootstrap used for most functions
/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */

const generateManager = (manager) => {
  return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"> ${manager.name}</h5>
    <p class="card-text"> Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">email: ${manager.email}</li>
    <li class="list-group-item">Office Number: ${manager.office}</li>
  </ul>
  <div class="card-body">
  </div>
</div> 
`;
};

const generateEngineer = (engineer) => {
  return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title"> ${engineer.name}</h5>
        <p class="card-text"> engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">email: ${engineer.email}</li>
        <li class="list-group-item"> Github: <a href="https://github.com/${engineer.github}"> ${engineer.github}</a></p>
      </ul>
      <div class="card-body">
      </div>
    </div> 
    `;
};

const generateIntern = (intern) => {
  return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title"> ${intern.name}</h5>
        <p class="card-text"> intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">email: ${intern.email}</li>
        <li class="list-group-item">school: ${intern.school}</li>
      </ul>
      <div class="card-body">
      </div>
    </div> 
    `;
};

const generateHTML = (data) => {
  const teamArray = [];

  for (let x = 0; x < data.length; x++) {
    const employee = data[x];
    const employeeRole = employee.getRole();

    if (employeeRole === "Manager") {
      const managerCard = generateManager(employee);
      teamArray.push(managerCard);
    } else if (employeeRole == "Engineer") {
      const engineerCard = generateEngineer(employee);
      teamArray.push(engineerCard);
    } else if (employeeRole == "Intern") {
      const internCard = generateIntern(employee);
      teamArray.push(internCard);
    }
  }

  const generatedCards = teamArray.join("");

  const createTeam = templateHTML(generatedCards);
  return createTeam;
};

const templateHTML = (generatedCards) => {
  return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <link href="../html/style.css" rel="stylesheet">
            <title>Team Profile Generator</title>
            </head>
        <body>
        <header>
            <h1 class="headTxt">My Team</h1>
        </header>
        <section class="container">
            <div class="row">
                ${generatedCards}
            </div>    
        </section>  
        </body>
        </html>`;
};

module.exports = generateHTML;
