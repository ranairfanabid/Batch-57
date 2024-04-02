import inquirer from "inquirer";
const name1 = inquirer.prompt([
    {
        type:"input",
        name:"First number",
        message:"enter your first numvber"
    },
{
    type:"input",
    name:"second number",
    message:"enter your second numvber"  
},
{
    type:"operator",
        name:"Operator",
        choices:["+","-","/","*"],
        message:"Select operator"
}
])