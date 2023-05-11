
const Choice = ["Rock","Paper","Scissors"]
function ComputerChoice(Choice){

let item = Choice[Math.floor(Math.random()*Choice.length)]
    return item;
}
console.log(ComputerChoice(Choice));

const playerinput = "Rock"
function outcome(playerinput, ComputerChoice){
input = playerinput.toLowerCase();
inputPC = ComputerChoice.toLowerCase();
outcome = ""
if(input === inputPC){
    outcome += "It's a draw"
}
if(input === "rock"){
    if(inputPC === "scissors"){
        outcome += "Player wins since " + input + " beats " + inputPC
    }
    if(inputPC === "paper"){
        outcome += "PC wins since " + inputPC + " beats " + input
    }
}
if(input === "paper"){
    if(inputPC === "rock"){
        outcome += "Player wins since " + input + " beats " + inputPC
    }
    if(inputPC === "scissors"){
        outcome += "PC wins since " + inputPC + " beats " + input
    }
}
if(input === "scissors"){
    if(inputPC === "paper"){
        outcome += "Player wins since " + input + " beats " + inputPC
    }
    if(inputPC === "rock"){
        outcome += "PC wins since " + inputPC + " beats " + input
    }
}
return outcome;

}

console.log(outcome(playerinput, ComputerChoice(Choice)))