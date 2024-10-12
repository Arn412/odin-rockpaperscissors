let humanScore = 0, computerScore = 0;
const humanScoreDisplay = document.querySelector("#humanscoredisplay")
const computerScoreDisplay = document.querySelector("#computerscoredisplay")
const winnerDisplay = document.querySelector("#winner")

humanScoreDisplay.innerHTML = humanScore
computerScoreDisplay.innerHTML = computerScore
const resultdiv = document.querySelector("#result")
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock"
    }
    else if (choice == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissors?")
    choice = choice.toLowerCase()
    return choice
}
let playRound = function (humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice == computerChoice) {
        winner = "none"
    }

    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            winner = "computer"
        }
        else {
            winner = "human"
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            winner = "computer"
        }
        else {
            winner = "human"
        }
    }
    else {
        if (computerChoice == "rock") {
            winner = "computer"
        }
        else {
            winner = "human"
        }
    }

    if (winner == "computer") {
        console.log(computerChoice + " beats " + humanChoice + ", you lose!")
        resultdiv.innerHTML = (computerChoice + " beats " + humanChoice + ", you lose!")
        computerScore++
    }
    else if (winner == "human") {
        console.log(humanChoice + " beats " + computerChoice + ", you win!")
        resultdiv.innerHTML = (humanChoice + " beats " + computerChoice + ", you win!")
        humanScore++
    }
    else {
        console.log(humanChoice + " and " + computerChoice + " are the same!")
        resultdiv.innerHTML = humanChoice + " and " + computerChoice + " are the same!"
    }
    humanScoreDisplay.innerHTML = humanScore
    computerScoreDisplay.innerHTML = computerScore

    if (humanScore == 5 && computerScore < 5) {
        winnerDisplay.innerHTML = "<h2>You Win!:D</h2>"
    }
    else if (computerScore == 5 && humanScore < 5) {
        winnerDisplay.innerHTML = "<h2>You Lose!, Computer wins D:</h2>"
    }



}






const rockb = document.querySelector(".rock-button")
rockb.onclick = () => playRound("rock", getComputerChoice())

const paperb = document.querySelector(".paper-button")
paperb.onclick = () => playRound("paper", getComputerChoice())

const scissorsb = document.querySelector(".scissors-button")
scissorsb.onclick = () => playRound("scissors", getComputerChoice())