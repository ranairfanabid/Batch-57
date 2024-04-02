"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const name1 = inquirer_1.default.prompt([
    {
        type: "input",
        name: "First number",
        message: "enter your first numvber"
    }
]);
