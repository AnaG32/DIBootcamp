# Exercises XP

# Exercise 1 : Convert Lists Into Dictionaries

# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
#   Expected output:
#   {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

for item in zip(keys, values): 
    print(item)



# Exercise 2 : Cinemax
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# How much does each family member have to pay ?
# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

price = 0

for key in family:
    if family[key] < 3:
        print(f"{key} the ticket is free")
        price += 0 
    if family[key] > 3 and family[key] < 12:
        print(f"{key}, the ticket is $10")
        price += 10
    if family[key] > 12:
        print(f"{key}, the ticket is $15")
        price += 15

print(price)


# Exercise 3: Zara
# Here is some information about a brand.
# Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# Change the number of stores to 2.
# Print a sentence that explains who Zaras clients are.
# Add a key called country_creation with a value of Spain.
# Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# Delete the information about the date of creation.
# Print the last international competitor.
# Print the major clothes colors in the US.
# Print the amount of key value pairs (ie. length of the dictionary).
# Print the keys of the dictionary.
# Create another dictionary called more_on_zara with the following details:

brand = {
    'name': 'Zara', 
    'creation_date': 1975,
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': { 
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']
    }
}

brand['number_stores'] = 2

brand['country_creation'] = 'Spain'

if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

del brand['creation_date']

print(brand['major_color']['US'])

print(len(brand))

print(brand.keys())

more_on_zara={
'creation_date': 1975 ,
'number_stores': 10000
}

brand.update(more_on_zara)
print(brand)

print(brand['number_stores'])