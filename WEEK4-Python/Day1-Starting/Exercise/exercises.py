# Exercise 1
# In the python shell, Create a variable called `my_age`, use python to know how old you will be in 123879 years

from ast import AnnAssign


myAge = 32
years = 123879

print(myAge + years) # 123911 

# Exercise 2
# Create a variable called first_name and a variable called last_name, and then print your full name using those two variables.

first_name = 'Ana'
last_name = 'Guttmann'

print(first_name + " " +  last_name) # Ana Guttmann


# Exercise 3 
# Place a comment next to each variable. The comments will:
#   Explain what each variable does
#   Find out the type of each
#   Format each variable into a print statement

cars = 100 # this creates a variable type: int
print("There are", cars, "cars available.")

space_in_a_car = 4.0 # this creates a variable type: float
print("There are only", drivers, "drivers available.")

drivers = 30 # this creates a variable type: int
print("There are only", drivers, "drivers available.")

passengers = 90 # this creates a variable type: int
print("There are", passengers, "today")

cars_not_driven = cars - drivers # this creates a variable type: int
cars_driven = drivers # this creates a variable type: int
print("There will be", cars_not_driven, "empty cars today.")


carpool_capacity = cars_driven * space_in_a_car
print("We can transport", carpool_capacity, "people today.")

average_passengers_per_car = passengers / cars_driven # this creates a variable type: float
print("We need to put about", average_passengers_per_car,"in each car.")


# Exercise 4
# Analyze the code below and predict what the outcome will be. Check the results in your python shell.
age = input("How old are you? ") # creates a variable with an input type string
print("You are {} years old".format(age)) # print the input with some text

# Exercise 5 - Conditionals
# Ask the user for a number between 1 and 100
#   If the number is a multiple of three, print "Fizz"
#   If the number is a multiple of five, print "Buzz".
#   If the number is a multiple is a multiples of both three and five, print "FizzBuzz" instead.

number = input("Write a number between 1 and 100")

if number % 3:
  print('Fizz')

if number % 5:
    print('Buzz')

if number % 3 and number % 5:
    print('FizzBuzz')













