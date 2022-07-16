from sys import argv

script, filename = argv

txt = open(filename)

print(f"Here's your file {filename}:")
print(txt.read())

print("Type the filename again:")
filename_again = input("> ")

txt_again = open(filename_again)

print(txt_again.read())
