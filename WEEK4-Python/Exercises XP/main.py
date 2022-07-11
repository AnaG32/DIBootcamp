# Exercises XP

# Exercise 1 : Hello World
# Print the following output in one line of code:
    # Hello world
    # Hello world
    # Hello world
    # Hello world

print('Hello world \n' *4)


# Exercise 2 : Some Math
# Write code that calculates the result of: (99^3) * 8 (99 to the power of 3 times 8)

print((99**3)*8) # 7762392



# Exercise 3 : What Is The Output?
# Predict the output of the following code snippets:

5 < 3 # False
3 == 3 # True
3 == "3"  # False
# "3" > 3  #  Error
"Hello" == "hello" # False"
"Hello" == 'hello' # True


#  Exercise 4 : Your Computer Brand
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = 'asus'
print('I have a ' + computer_brand + ' computer')


# Exercise 5 : Your Information
# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

name = 'Ana'
age = 32
shoeSize = 36
info = 'Hello, my name is ' + name + ', Im ' + str(age) + ' years old and im short so my shoe size is ' + str(shoeSize)
print(info)


# Exercise 6 : A & B
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

a = input("Write a number between 1 and 100  ")
b = input("Write another number between 1 and 100  ")

if a > b:
    print('Hello World')



# Exercise 7 : Odd Or Even
# Write code that asks the user for a number and determines whether this number is odd or even.

number = input("Write a number")
if int(number) % 2 == 0:
    print(number + " is an even number.")
else:
    print(number + " is an odd number.")


# Exercise 8 : What’s Your Name ?
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

username = input("Write your name without capital letters  ")
myname = 'ana'
if username == myname:
    print("You have a beautiful name")
else:
    print("You have an ugly name")
    print('Finished')


# Exercise 9 : Tall Enough To Ride A Roller Coaster
# Write code that will ask the user for their height in inches.
#    If they are over 145cm print a message that states they are tall enough to ride.
#    If they are not tall enough print a message that says they need to grow some more to ride.


height = input("write your height in inches  ")
if int(height) > 145:
    print("You are tall enough to ride")
else:
    print("You need to grow some more to ride.")
    print('Finished')