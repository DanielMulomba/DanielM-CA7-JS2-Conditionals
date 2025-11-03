// Bear Ninja Hunter Game

// 1 – Welcome message and get player's name
let playerName = prompt("Welcome to Bear Ninja Hunter! Please enter your name to get started:");
alert("Hi " + playerName + "! Let's play Bear Ninja Hunter!");

// 2 – Hard code the computer choice
let computerChoice = "Bear";

// 3 – Ask the user for their choice
let userChoice = prompt("Who are you: Bear, Ninja, or Hunter?");

// 4 – Display user and computer choices in console
console.log(playerName + ", you chose " + userChoice + "!");
console.log("The computer chose " + computerChoice + "!");

// 5 – Determine the winner using if...else if
let winnerMessage = "";

if (userChoice === computerChoice) {
  winnerMessage = "It's a Tie!";
} else if (userChoice === "Bear" && computerChoice === "Ninja") {
  winnerMessage = "You Win!!";
} else if (userChoice === "Ninja" && computerChoice === "Hunter") {
  winnerMessage = "You Win!!";
} else if (userChoice === "Hunter" && computerChoice === "Bear") {
  winnerMessage = "You Win!!";
} else {
  winnerMessage = "Computer Wins!!";
}

// 6 – Output results using concatenation and both output methods
document.getElementById("welcome").innerHTML = "Welcome " + playerName + "!";
document.getElementById("user-choice").innerHTML =
  playerName + ", you chose " + userChoice + "!<br>The computer chose " + computerChoice + "!";
document.getElementById("game-result").innerHTML = winnerMessage;

// 7 – Also show result in console using a switch (new concept)
switch (winnerMessage) {
  case "You Win!!":
    console.log("Congratulations " + playerName + "! You defeated the computer!");
    break;
  case "Computer Wins!!":
    console.log("Sorry " + playerName + ", the computer wins this round.");
    break;
  default:
    console.log("It's a tie, " + playerName + "!");
}