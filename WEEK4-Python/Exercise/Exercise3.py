#augmented assignment operator
from operator import truediv


someValue = 5
someValue += 2 # == someValue = someValue + 2
print(someValue) # 7

# Operator Precedence
print(20 - 3 * 4) # 8
print((20 - 3) + 2 ** 2) # 17*4 = 21

# Bin() And Complex
print(bin(5)) # print the binary number = 0b101
print(int('0b101', 2)) # convert the binary number to an int = 5

# Booleans
# bool it can be true or false
# true = 1
# false = 0

name = 'Andrei'
cool = False
cool = True

# Truthy Vs Falsey
isOld = bool('hello')
licenced = bool(5)

if isOld and licenced:
    print('you are old enough to drive, you have a licence!')
else: 
    print('you are not of age!')
    
username = 'Johny'
password = 1234

if password and username:
    print('you are old enough to drive, you have a licence!')
else: 
    print('you are not of age!')




