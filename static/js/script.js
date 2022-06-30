// create three constant variables ROCK, PAPER, SCISSORS with lower case values
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//   create user score and computer score variables
let com_score = 0;
let user_score = 0;

// prompt the user to choose one of the three choices
let user_choice = prompt("Enter your choice", "rock, paper or scissors");
// create a function to check the user answer and prompt him to change it if it's wrong and call it
check_answer (user_choice);
function check_answer (user_choice) {
//  check if user input is not null
    if (user_choice == null)
    {
//      if null display wrong choice message
        alert("Wrong choice!!!");
//      prompt the user to change his answer
        user_choice = prompt("Enter a correct choice", "rock, paper or scissors");
//      call the function again to verify the new answer
        check_answer (user_choice)
    }
//  else
    else {
//      take the user choice and convert it to lower case and save it in a new variable
        let usr_choice = user_choice.toLowerCase();
//      save the new lower case text in the original variable
        user_choice = usr_choice;
//      if the user choice does not match the variables
        if (usr_choice !== ROCK && usr_choice !== PAPER && usr_choice !== SCISSORS) {
//          display wrong choice message
            alert("Wrong choice or spelling!!!");
//          prompt the user to change his answer
            user_choice = prompt("Enter a correct choice", "rock, paper or scissors");
//          call the function again to verify the new answer
            check_answer (user_choice)
        }
    }
}


// create a function to generate a random computer choice
let computerPlay = function () {
//  generate a random number and save it in a local variable
    let n = Math.floor(Math.random() * 1000001);
//  create a computer choice variable
    let computer_choice;
//  if the number is divisble by 5 return ROCK
    if (n % 5 === 0){
        computer_choice = ROCK;
    }
//  else if the number is divisble by 3 return PAPER
    else if (n % 3 === 0) {
        computer_choice = PAPER;
    }
//  else return SCISSORS
    else {
        computer_choice = SCISSORS;
    }
    return computer_choice
}

// create a function to compare the user choice with the computer choice that takes two parameters user choice and computer choice
let playRound = function (playerSelection, computerSelection) {
//  if user pick rock
    if (playerSelection === ROCK){
//      if computer pick scissors
        if (computerSelection === SCISSORS){
//          user score +1
            user_score++;
//          return user won
            return "You Win! Rock beats Scissors";
        }
//      else if computer picks paper
        else if (computerSelection === PAPER) {
//          computer score +1
            com_score++;
//          return computer won
            return "You Lose! Paper beats Rock";
        }
//      else
        else {
//          return draw
            return "Draw!";
        }
    }
//  else if user pick scissors
    else if (playerSelection === SCISSORS){
//      if computer picks paper
        if (computerSelection === PAPER) {
//          user score +1
            user_score++;
//          return user won
            return "You Win! Scissors beat Paper";
        }
//      else if computer picks rock
        else if (computerSelection === ROCK){
//          computer score +1
            com_score++;
//          return computer won
            return "You Lose! Rock beats Scissors";
        }
//      else
        else {
//          return draw
            return "Draw!";
        }
    }

// else if user picks paper
    else if (playerSelection === PAPER) {
//      if computer picks rock
        if (computerSelection === ROCK) {
//          user score +1
            user_score++;
//          return user won
            return "You Win! Paper beats Rock";
        }
//      else if computer picks scissors
        else if (computerSelection === SCISSORS) {
//          computer score +1
            com_score++;
//          return computer won
            return "You Lose! Scissors beats Paper";
        }
//      else
        else {
//          return draw
            return "Draw!";
        }
    }
}

// create a function called game to make a 5 round game and keep the score
let game = function () {
//  while user score or computer score is less than 5 repeat the following steps
    while (user_score < 5 || com_score <5){
//      if user_score or computer score is more than 0
        if (user_score > 0 || com_score > 0) {
//          prompt the user to choose one of the three choices again and save it in the same variable
            user_choice = prompt("Enter your choice", "rock, paper or scissors");   
//          chech the user's new anaswer by calling the check answer function
            check_answer (user_choice);        
        }
//      call the computerPlay function and save the returned value in a variable
        let com_choice = computerPlay();
//      call the playRound function to determine the winner and save the returned value in a variable
        let winner = playRound(user_choice, com_choice);
//      display the winner using console.log and the PlayRound return value
        alert(winner);
    }
    if (user_score >= 5){
        alert("You Won!");
    }
    else if (com_score >= 5) {
        alert("You Lost!");
    }
}

game();