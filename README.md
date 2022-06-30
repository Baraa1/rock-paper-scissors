# rock-paper-scissors

# Variables: Three constant variables rock, paper, scissors and two for user score and computer score
# Inputs: a choice from the three variables for the player and a choice for the computer. 2 inputs.
# Outputs: the winner.
# algorithm: 
# take the user input, generate a random computer choice, compare them, print the winner
# Pseudocode:
#   create three constant variables ROCK, PAPER, SCISSORS with lower case values
#   create user score and computer score variables
#   prompt the user to choose one of the three choices and save the choice in a variable
#   create a check_answer function to check the user answer and prompt him to change it if it's wrong and call it
#   check if user input is not null
#       if null display wrong choice message
#       prompt the user to change his answer
#       call the check_answer function again to verify the new answer
#       else
#           take the user choice and convert it to lower case
#           if the user choice does not match the variables
#               display wrong choice message
#               prompt the user to change his answer
#               call the check_answer function again to verify the new answer
#   create a function to generate a random computer choice
#       take the three variables
#       generate a random number and save it in a local variable
#       if the number is divisble by 2 return ROCK
#       else if the number is divisble by 3 return PAPER
#       else return SCISSORS
#   create a function to compare the user choice with the computer choice that takes two parameters user choice and computer choice
#       if user pick rock
#           if computer pick scissors
#               user score +1
#               return user won
#           else if computer picks paper
#               computer score +1
#               return computer won
#           else
#               return draw
#       else if user pick scissors
#           if computer picks paper
#               user score +1
#               return user won
#           else if computer picks rock
#               computer score +1
#               return computer won
#           else
#               return draw
#       else if user picks paper
#           if computer picks rock
#               user score +1
#               return user won
#           else if computer picks scissors
#               computer score +1
#               return computer won
#           else
#               return draw
#   create a function called game to make a 5 round game and keep the score
#       while user score or computer score is less than 5 repeat the following steps
#           if user_score or computer score is more than 0
#               prompt the user to choose one of the three choices again and save it in the same variable
#               chech the user's new anaswer by calling the check answer function
#           call the computerPlay function and save the returned value in a variable
#           call the playRound function to determine the winner and save the returned value in a variable
#           display the winner using console.log and the PlayRound return value                       