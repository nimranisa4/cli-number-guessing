#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user input gessing number
// 3) compaire error input with computer generated number and show result

const randomNumber = Math.floor(Math.random()* 10 + 1);
console.log(randomNumber);



const answer = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "plz guess a number between 1-10:",
    }
]);

//console.log(answer);

if(answer.userGuessedNumber === randomNumber){
    console.log("congratulation you guessed right number.");
    
}else{
    console.log("you guessed wrong number");
    
}
