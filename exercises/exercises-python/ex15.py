# Exercise 15

# Asks for a argument variable (argv).
from sys import argv

# Create the strings(script, filename) for the(=) argument variable(argv).
script, filename = argv

# Create the string(txt) for command(open) with the filename.
txt = open(filename)

# Print the message about opening the file with the formatted string(filename).
print(f"Here's your file {filename}:")
# Uses the function Read, then print what is in the txt string, which is the filename argument with the command open.
print(txt.read())

# Print this text above the input text
print("Type the filename again:")
# Input text that calls for the filename
file_again = input("> ")

# Command open to open the file_again string for the input, where the user put the file name.
txt_again = open(file_again)

# Print command to the txt_again string which is the open command of the file_again string of the input of the filename together with the .read command
print(txt_again.read())
