username = input('write your username')
password = input('write your password')


password_length = len(password)
hidden_password = '*' * password_length

print(f'{username}, your password, {password}, is {len(password)} letters long')