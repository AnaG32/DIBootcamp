# Daily Challenge

# Using the input function, ask the user for a string. The string must be 10 characters long
#   If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.

user = input('Write a string')
if len(user) < 10:
    print('string not long enough')
elif len(user) > 10:
    print('string too long')
else:
    print('string is 10 characters long')

# Then, print the first and last characters of the given text.

print('first character', user[0])
print('last character', user[-1])

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. 

output = ''
for character in user:
    output += character
    print(output)

# Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method).
import random
userlist = list(user)
random.shuffle(userlist)
result = ''.join(userlist)
print(result)
