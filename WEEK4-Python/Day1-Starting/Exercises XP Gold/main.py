# Exercise 1 : Hello World-I Love Python
# Print the following output in one line of code:
#     Hello world
#     Hello world
#     Hello world
#     Hello world
#     I love python
#     I love python
#     I love python
#     I love python

print('Hello world \n' *4 + 'I love python \n' *4)

# Exercise 2 : What Is The Season ?
# Ask the user to input a month (1 to 12).
# Display the season of the month received :
#   Spring runs from March (3) to May (5)
#   Summer runs from June (6) to August (8)
#   Autumn runs from September (9) to November (11)
#   Winter runs from December (12) to February (2)

user = input('write a month number:  ')
month = int(user)
season = ''

if month >= 3 and month <= 5:
    season = 'Spring'
elif month >= 6 and month <= 8:
    season = 'Summer'
elif month >= 9 and month <= 11:
    season = 'Autumn'
elif month >= 12 and month <= 2:
    season = 'Winter'
    
print("Season is: ", season)