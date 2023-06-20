// setting variables and requiring Inquirer and FS

const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle } = require("./lib/shapes.js");
const { log } = require('console');
const SVG = require('./lib/svg.js')

var svgString ="";

// const res = await inquirer.prompt


class Svg{
    constructor(){
        this.textE
    }


}



function writeToFile(fileName,res){

    let
}



inquirer.prompt([
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

    
    .then((res) => {
        // if (res.text.length > 3) {
        //     console.log("Must enter a value of no more than 3 characters");
        //     prompt();
        // } else {
        //     writeToFile("logo.svg", res);
        // }
        console.log("result", res);
      
        let shape;
        switch (res.logoShape) {
          case "circle":
            shape = new Circle();
            break;

          // case "square":
          //   shape = new Square();
          //   break;

          default:
            shape = new Triangle();
            break;
        }
        shape.setColor(shapeColor);

        const svg = new SVG();

        
    })
    
    // prompt();
 
