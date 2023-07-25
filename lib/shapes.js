
class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };


// create class for square





// const myShape = new Shape
// myShape.setColor('blue')


// function declareHelloAgain(x, y) { 
//     console.log("Hello" + x + "i'm" + y);
//   }
  
//   declareHelloAgain("Ana", "Student");
  