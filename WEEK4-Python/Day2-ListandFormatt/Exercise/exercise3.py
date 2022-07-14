# Exercise
# Loops
# Print the numbers from 1 to 10 using while loop


current_number = 1 
while current_number <= 10:    
    print(current_number)   
    current_number += 1

# Infinite loops
# 

secret_number = 4

while True:
  user_number = input('Guess the secret number between 1 to 10: ')
  if int(user_number) == secret_number:
    print('Congrats! You win!')
    break
  else:
    print('Wrong guess...')