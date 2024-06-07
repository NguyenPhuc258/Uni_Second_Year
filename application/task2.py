def convert_list_to_int(lst):
  result = 0
  multiplier = 10

  for element in lst:
    result *= multiplier
    result += element

  return result

if __name__ == "__main__":
  given_list = [8,3,5,1]
  print(convert_list_to_int(given_list))