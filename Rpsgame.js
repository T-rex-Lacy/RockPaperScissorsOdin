const PlayerInput = prompt("Rock,Paper or Scissors?").toUpperCase(); //prompt to get players choice
const ComputerInput = GetComputerChoice().toUpperCase();

function GetComputerChoice(){
    let rps = ["Rock","Paper","Scissors"]; //Array of options
    let random = Math.floor(Math.random() * rps.length); //use Math operator to generate random value
    let NewRandom = rps[random]; //store the random value in new variable
    return NewRandom;
}


function PlayGame(PlayerInput,ComputerInput){ //function to test different outcomes in the game using if.. else if statments and && operators.
        if (PlayerInput === "ROCK" && ComputerInput === "PAPER" ){
            return "you lose,Paper beats rock";
        } else if(PlayerInput === "ROCK" && ComputerInput === "ROCK" ){
            return "It's a tie! rock = rock";
        }else if (PlayerInput == "ROCK" && ComputerInput == "SCISSORS"){
            return "you WIN rock beats scissors"; 
        } else if(PlayerInput == "PAPER" && ComputerInput == "SCISSORS" ){
            return "you lose Scissors beats paper";
        } else if (PlayerInput == "PAPER" && ComputerInput == "ROCK"){
            return "you WIN paper beats rock"; 
        }else if (PlayerInput == "PAPER" && ComputerInput == "PAPER"){
            return "It's a tie paper = paper";
        }else if (PlayerInput == "SCISSORS" && ComputerInput == "PAPER"){
            return "you win scissors beats paper";
        }else if (PlayerInput == "SCISSORS" && ComputerInput == "ROCK"){
            return "you lose rock beats scissors";
        }else if (PlayerInput == "SCISSORS" && ComputerInput == "SCISSORS"){
            return "It's a tie scissors = scissors";
        }else{
            return "Not a valid answer! PLease enter Rock, Paper,or Scissors.";
        }

}

console.log(ComputerInput);
console.log(PlayGame(PlayerInput,ComputerInput));