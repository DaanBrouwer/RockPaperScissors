
const Choice = ["Rock", "Paper", "Scissors"];

function ComputerChoice(Choice) {
    let item = Choice[Math.floor(Math.random() * Choice.length)];
    return item;
}

function playerChoice() {
    let choice = null;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        choice = button.id;
          });
        return choice;
}





function calculateOutcome(){
const input = playerChoice();
const inputPC = ComputerChoice(Choice);
console.log(input);
console.log(inputPC)
let outcome = ""
if(input === inputPC){
    outcome += "It's a draw"
}
if(input === "Rock"){
    if(inputPC === "Scissors"){
        outcome += "Player wins since " + input + " beats " + inputPC
    }
    if(inputPC === "Paper"){
        outcome += "PC wins since " + inputPC + " beats " + input
    }
}
if(input === "Paper"){
    if(inputPC === "Rock"){
        outcome += "Player wins since " + input + " beats " + inputPC
    }
    if(inputPC === "Scissors"){
        outcome += "PC wins since " + inputPC + " beats " + input
    }
}
if(input === "Scissors"){
    if(inputPC === "Paper"){
        outcome += "Player wins since " + input + " beats " + inputPC
    }
    if(inputPC === "Rock"){
        outcome += "PC wins since " + inputPC + " beats " + input
    }
}
return console.log(outcome);
}


