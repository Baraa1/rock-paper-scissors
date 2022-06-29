# rock-paper-scissors

# Variables: Three constant variables rock, paper, scissors
# Inputs: a choice from the three variables for the player and a choice for the computer. 2 inputs.
# Outputs: the winner.
# algorithm: 
# take the user input, generate a random computer choice, compare them, print the winner
# Pseudocode:
#   create three constant variables ROCK, PAPER, SCISSORS with lower case values
#   prompt the user to choose one of the three choices by calling the function and passing his choice in the call
#   take the user choice and convert it to lower case
#   if the user choice does not match the variables display wrong choice message
#   create a function to generate a random computer choice
#       take the three variables
#       generate a random number and save it in a local variable
#       if the number is divisble by 2 return ROCK
#       else if the number is divisble by 3 return PAPER
#       else return SCISSORS
#   create a function to compare the user choice with the computer choice that takes two parameters user choice and computer choice
#       if user pick rock
#           if computer pick scissors
#               return user won
#           else if computer picks paper
#               return computer won
#           else
#               return draw
#       else if user pick scissors
#           if computer picks paper
#               return user won
#           else if computer picks rock
#               return computer won
#           else
#               return draw
#       else if user picks paper
#           if computer picks rock
#               return user won
#           else if computer picks scissors
#               return computer won
#           else
#               return draw