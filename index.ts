#!/urs/bin/env  node

import inquirer from "inquirer";

let todos = [];
let condition = 0;

while( condition <= 5 ){
let addTask =  await inquirer.prompt([
  {
    name: "todo",

    type: "input",

    message: "what you want to add in your Todos",

    choices: ["Delete" ," select ", "item"]
  },
  {
    name: "addmore",

    type: "confirm",

    message: "Do you want to add more",

    default : "false"
    
  },


]

); 
todos.push(addTask.todo);
condition = addTask.addmore
console.log(todos);
console.log(condition)
condition++;
}