// lib/svg.js

class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeElement}
      ${this.textElement}
    </svg>`;
  }

  setText(text, color) {
    if (text.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }

    // Calculate the center of the SVG
    const centerX = 200;
    const centerY = 100;

    // Calculate the position for the text
    const fontSize = 60;

    // The textX and textY coordinates are adjusted to center the text
    const textX = centerX - (text.length * (fontSize * 0.3)); // Adjusting for character spacing
    const textY = centerY + fontSize / 4; // Center vertically

    this.textElement = `<text x="${textX}" y="${textY}" font-size="${fontSize}" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = SVG;

