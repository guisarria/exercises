# Exercise 13

from sys import argv
script, first, second, third = argv

print("The script is called:", script)
print("Your first variable is:", first)
print("Your second variable is:", second)
print("Your third variable is:", third)

first_input = input("First input: ")
second_input = input("Second input: ")

print(f"This is your {first_input} and your {second_input}")
