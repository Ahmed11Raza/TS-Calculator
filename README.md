# TS-Calculator
//ASKING QUESTION FROM USER THROUGH INQUIRER:

const answers = await inquirer.prompt([
    {message: "Enter Firstnumber",type:"number",name:"firstnumber"},
    {message: "Enter Secondnumber",type:"number",name:"secondnumber"},
    {
        message: "select one operator to perform an operations",
        type: "list",
        name: "operator",
        choices: ["Addition ","Subtraction","Multiplication","Division"],
    },
]);

// CONDITIONAL STATEMENT IF- ELSE

if(answers.operator === "Addition"){
console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "Subtraction"){
console.log(answers.firstnumber - answers.secondnumber);
}
else if  (answers.operator === "Multiplication"){
console.log(answers.firstnumber * answers.secondnumber);
}
else if  (answers.operator === "Division"){
console.log(answers.firstnumber / answers.secondnumber);
}
else{
    console.log("INVALID INPUT");
}

