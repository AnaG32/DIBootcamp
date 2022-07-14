# Exercises XP


# Exercise 1 : Set
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {1, 2, 3, 4}

my_fav_numbers.add(7)
my_fav_numbers.add(200)
print(my_fav_numbers)

my_fav_numbers .remove(200)
print(my_fav_numbers)

friend_fav_numbers = {20, 30, 40, 5000}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("our favorites numbers are: ", our_fav_numbers)


# Exercise 2 : Tuple
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
## No, because tuples are immutable and thus their sum cannot be changed. A new tuple will need to be created.


# Exercise 3 : List
#  Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
counter = basket.count("Apples")
print(basket)
print(counter)
basket=[]
print(basket)    


# Exercise 4: Floats
# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

## float is a number which have decimals, an intenger doesnt have decimals

list=[]
for i in range(3,11):
    number= i/2
    list.append(number)
print(list)


# Exercise 5: For Loop
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for i in range(1, 21):
    print(i)

for i in range(1, 21):
    if (i - 1) %2 == 0:
        print(i)

# Exercise 6: While Loop
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

my_name = "Ana"
user_name = input("Whats your name?")

while user_name != my_name:
    user_name=input("Whats your name?")


# Exercise 7: Favorite Fruits
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

favfruits = input("Which are your favorite fruits? (seperate your answers with a space)")
fruitsList = favfruits.split(' ')
print(fruitsList)

otherfruit= input("write another fruit")

if otherfruit in fruitsList:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")


# Exercise 8: Who Ordered A Pizza ?
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

topping = input("write a pizza topping")
toppingList = []

while 'quit' not in toppingList:
    toppingList = input('Do you want more toppings for the pizza? type quit when finish \n')
    if toppingList == 'quit':
        break
    topping.append(toppingList)
    print('ok, adding {} to the pizza'.format(toppingList))

totalPrice = 10 + 2.5 * len(topping)
print('so all of ur toppings are: {} \n and the price is {} \n'.format(topping, totalPrice))

