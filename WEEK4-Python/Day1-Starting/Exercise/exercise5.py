magician = True
expert = False

# check if the magician AND expert: "you are a master magician"
# check if magician but not expert: "at least you're getting there"
# if you're not a magician: "you need magic powers"

if magician and expert:
    print("you are a master magician")
elif magician:
    print("at least you're getting there")
else:
    print("you need magic powers")
