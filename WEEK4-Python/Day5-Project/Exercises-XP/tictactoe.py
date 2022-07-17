# Mini project - Tic Tac Toe

# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

from ast import While
import time

board = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " " 
    ]

winner = None

def play():
    global winner
    display_board()
    
    for i in range(5):
        print("Player 1 - Use X")
        value = "X"
        player_input(value) # jugada
        check_win() # hubo ganardor
    
        if winner != "X" and 1 < 4: 
            for j in range(3):
                print("Player 2 - Use O")
                value = "O"
                player_input(value)
                check_win()
            
                if winner == "O":
                    print("Congratulation! Player 2 is the winner")
                break
        elif winner == "X":
            print("Congratulation! Player 1 is the winner")
            break
        else:
            print("Anyone is the winner")

def check_win():
    global winner
    row_control()
    column_control()
    diagonal_control()

def row_control():
    global winner
    if board[0] == board[1] == board[2] != "-":
        winner = board[0]
    elif board[3] == board[4] == board[5] != "-":
        winner = board[3]
    elif board[6] == board[7] == board[8] != "-":
        winner[6]

def column_control():
    global winner
    if board[0] == board[3] == board[6] != "-":
        winner = board[0]
    elif board[1] == board[4] == board[7] != "-":
        winner = board[1]
    elif board[2] == board[5] == board[8] != "-":
        winner = board[2]
        
def diagonal_control():
    global winner
    if board[0] == board[4] == board[8] != "-":
        winner = board[0]
    elif board[2] == board[4] == board[6] != "-":
        winner = board[2]
        
        
def player_input(value):
    write_input = False
    
    While write_input == False:
        position = int(input("Choose a position between 1 and 9"))
        position -= 1
    
        if table[position] == "-":
            write_input = True
        else:
            print("Choose an empty position")
    
    board[position] = value
    display_board()
        

def display_board():
    
    print("\n")
    print(board[0] + " | " + board[1] + " | " + board[2] + "   1 | 2 | 3 ")
    print(board[3] + " | " + board[4] + " | " + board[5] + "   4 | 5 | 6 ")
    print(board[6] + " | " + board[7] + " | " + board[8] + "   7 | 8 | 9 ")
    print("\n")

play()