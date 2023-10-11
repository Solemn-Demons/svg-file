const inquirer = require("inquirer")
const { triangle, square, circle, star } = require ('./svg/options.js')

class CLI {
    run() {
        return inquirer 
        .prompt ([
        {
            name: "text", 
            type: "input",
            message: "Add at least two characters"
            validate: (input) =>
            input.length <= 2 ||
        },
        {
            name: "shape",
            type: "list",
            message: "select shape",
            choices: ["triangle", "square", "circle", "star"],
        },
        {
            name: "textColor",
            type: "input",
            message: "Add color"
        },
        {
            name: "shapeColor",
            type: "input"
            message: "Add color"
        },
    ])
    .then(({ text, shape, textColor, shapeColor}) => {
        let shape;
        switch (shape) {
            case "triangle":
                shape = new triangle(text, textColor, shapeColor);
                break;
            case "square":
                shape = new square(text, textColor, shapeColor);
                break;
            case "circle":
                shape = new circle(text, textColor, shapeColor);
                break;
            case "star":
                shape = new star(text, textColor, shapeColor);
                break;
        }
    })
    const svg = new SVG();
    svg.setText(text, textColor);
    svg.setShape(shape, shapeColor);
    return writeFile("logo.svg", svg.render());
}

module.exports = CLI;