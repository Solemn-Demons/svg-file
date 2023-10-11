
class Shape {
    constructor(text, textColor, shape, shapeColor) {
        (this.text = text),
        (this.textColor = textColor),
        (this.shape = shape),
        (this.shapeColor = shapeColor);
    }
}

module.exports = { triangle, circle, square, star};