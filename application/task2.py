import random

def promp_user():
    value = input("Guess the integer from 0 - 100: ")
    return value

def game(result):
    value = int(promp_user())
    if value < result:
        print("Your guess is lower than the result.")
        return game(result)
    elif value > result:
        print("Your guess is larger than the result.")
        return game(result)
    else:
        return f"You guessed the value {result} correctly!"

if __name__ == "__main__":
    result = random.randint(0, 100)
    print(game(result))
