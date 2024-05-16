//import {a} from "./index.js";
//console.log(a);
import inquirer from "inquirer";
const questions = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first number.",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number."
    },
    {
        type: "list",
        name: "operator",
        message: "select your operator.",
        choices: ["+", "-", "*", "/"],
    }
]);
function sum(num1, num2) {
    const result = num1 + num2;
    console.log(`sum of ${num1} and ${num2}=${result}`);
}
function subtract(num1, num2) {
    const result = num1 - num2;
    console.log(`subtraction of ${num1} and ${num2}=${result}`);
}
function multilpy(num1, num2) {
    const result = num1 * num2;
    console.log(`Multiplication ${num1} and ${num2}=${result}`);
}
function division(num1, num2) {
    const result = num1 / num2;
    console.log(`Division of ${num1} and ${num2}=${result}`);
}
console.log("questions", questions);
if (questions.operator === "+") {
    console.log("This is sum");
    sum(questions.num1, questions.num2);
}
else if (questions.operator === "-") {
    console.log("This is subtract");
    subtract(questions.num1, questions.num2);
}
else if (questions.operator === "*") {
    console.log("This is multiplication");
    multilpy(questions.num1, questions.num2);
}
else if (questions.operator === "/") {
    console.log("This is division");
    division(questions.num1, questions.num2);
}
else {
    console.log("invalid operator. Please select valid operator from LOV.");
}
