# Escape sequence
weather = "Is's kind of sunny" # Use "" if you have any ' inside your text
print(weather)

weather2 = "Is's \t kind of sunny" # Add a tab after
print(weather2)

weather3 = "Is's kind of sunny \n hope you have a good day" # Move to new line
print(weather3)

# formatted strings

name = 'Johnny'
age = 45

#diferent ways to print variables:
print('hi ' + name + ', you are ' + str(age) + ' years old') 
print(f'hi {name}. You are {age} years old') # format recomended
print('hi {}. You are {} years old'.format('Johnny', '55'))
print('hi {}. You are {} years old'.format(name, age))
print('hi {0}. You are {1} years old'.format(name, age))
print('hi {newName}. You are {age} years old'.format(newName='Sally', age=30))


# String indexes

selfish = 'me me me'
print(selfish[0]) # m
print(selfish) # me me me
print(selfish[0:7]) # me me m
print(selfish[0:8:2]) # m em

selfish = '0123456789'
print(selfish[:5]) # 01234
print(selfish[::1]) # 012345678
print(selfish[-1]) # negative means start at the end >>> 9
print(selfish[::-1]) # get the reverse of the string >>> 987654321

# Exercise
# Guess the output of each print statement before you click RUN!
python = 'I am PYHTON'
print(python[1:4]) # am
print(python[1:]) # I
print(python[:]) # I am PYHTON
print(python[1:100]) # am PYHTON
print(python[-1]) # N
print(python[-4]) # H
print(python[:-3]) # I am PY
print(python[-3:]) # TON
print(python[::-1]) # NOTHYP ma I











