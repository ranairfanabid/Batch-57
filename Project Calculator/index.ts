import inquirer from "inquirer";

const name1 = inquirer.prompt([
    {
        type:"input",
        name:"First number",
        message:"enter your first number"
    },
{
    type:"input",
    name:"second number",
    message:"enter your second number"  
},
{
    type:"operator",
        name:"Operator",
        choices:["+","-","/","*"],
        message:"Select operator"
}
])