# Daily Challenge

# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
#   Make sure the letters are the keys.
#   Make sure the letters are strings.
#   Make sure the indexes are stored in a list and those lists are values.

word = input("Write a word: ")
word_dict = {}
word_index = 0

for i in word:
    if i in word_dict:
        word_dict[i].append(word_index)
    if i not in word_dict:
        word_dict[i] = []
        word_dict[i].append(word_index)
    word_index += 1

print(word_dict)



# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.

items_purchase = {
  "Water": "$10",
  "Bread": "$30",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"
wallet = int(wallet[1:len(wallet)])

items_purchase1 = {x: int(y[1:len(y)]) for x,y in items_purchase.items()}
print(items_purchase1)

afford = list()

for key,value in items_purchase1.items():
    # print(key,value)
    if value<=wallet:
        afford.append(key)

if afford == []:
    print('Nothing')
else:
    print(afford)


