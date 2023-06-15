// setting variables and requiring Inquirer and FS

const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Triangle, Circle } = require("./shapes");

inquirer
    .prompt([
      {
        type: "input",
        message:
          "Choose 3 characters for the text of your logo",
        name: "textName",
      },
      
      {
        type: "input",
        message:
          "Choose desired text color",
        name: "textColor",
      },
      
      {
        type: "list",
        message: "Please select a shape for your logo",
        choices: ["Triangle", "Square", "Circle"],
        name: "logoShape",
      },
     
      {
        type: "input",
        message:
          "Please select shape color",
        name: "shapeColor",
      },
    ])

    
.then

 
