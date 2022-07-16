# Daily Challenge

# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.

number = int(input("write a number "))
len = int(input("write a length "))

result = [i * number for i in range(1, len+1)]
print(result)


# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Example: user's word : "ppoeemm" ➞ "poem"

word = input("write any word  ")
new_word = word.split(",")
