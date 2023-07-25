// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require("./lib/shapes.js");
const SVG = require('./lib/svg.js');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
}

inquirer
  .prompt([
    {
      type: "input",
      message: "Choose 3 characters for the text of your logo",
      name: "textName",
      validate: function (input) {
        if (input.length <= 3) {
          return true;
        }
        return "Must enter a value of no more than 3 characters";
      },
    },

    {
      type: "input",
      message: "Choose desired text color",
      name: "textColor",
    },

    {
      type: "list",
      message: "Please select a shape for your logo",
      choices: ["Triangle", "Circle", "Square"],
      name: "logoShape",
    },

    {
      type: "input",
      message: "Please select shape color",
      name: "shapeColor",
    },
  ])

  .then((res) => {
    const { textName, textColor, logoShape, shapeColor } = res;

    let shape;
    switch (logoShape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Square":
        shape = new Square();
        break;
      default:
        shape = new Triangle();
        break;
    }
    shape.setColor(shapeColor);

    const svg = new SVG();
    svg.setText(textName, textColor);
    svg.setShape(shape);

    const svgString = svg.render();
    writeToFile("logo.svg", svgString);
  });
