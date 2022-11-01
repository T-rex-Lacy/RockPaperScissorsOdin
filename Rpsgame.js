

function GetComputerChoice(){
    let rps = ["Rock","Paper","Scissors"]; //Array of options
    let random = Math.floor(Math.random() * rps.length); //use Math operator to generate random value
    let NewRandom = rps[random]; //store the random value in new variable
    return NewRandom;
}
