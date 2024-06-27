/*
For now, try a few practice rounds using pseudocode to guide your problem-solving logic. For example, write out pseudocode (both casual and formal) that does the following:

a function that returns the sum of two numbers

given two numbers
take first number and add it to the second number
store the results of the sum in a variable
return that results of adding both of those numbers

START
given two numbers
SET a variable to store the sum of two numbers
add first number to second number
SET results of that to variable declared earlier
PRINT results
END

--------------
a function that takes an array of strings, and returns a string that is all those strings concatenated together

given an array of strings
declare an empty string
iterate through the array
  - on each iteration, add the current array element to the string
after iterating through the array, return the string

given an array of strings
SET combinedElements = ''
WHILE index <= length of array
 combinedElements += current array element
PRINT combinedElements

---------------
a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:
everyOther([1,4,7,2,5]); // => [1,7,5]

given an array of integers
declare an empty array
iterate through the input array
 - if the current index is evenly divisible
  - push the current element to the output array
return output array

given an array of integers
SET outputArray = []
WHILE index <= length of array
 IF index % 2 === 0
  PUSH current element to output array
PRINT outputArray

---------------
a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

given a string and a target character
declare a count starting at 0
iterate through string
 - check if target is equal to current string element
    - increment count by 1
 - check if count is equal to 3
    - return current index
return null

given a string and a target character

SET count = 0
WHILE index <= length of string
  IF current element === target
    count += 1
  IF count === 3
    PRINT index

PRINT NULL
-----------------
a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance: merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

given two arrays

declare an empty array
iterate through array length of array - if both are same length pick one - else pick smaller one
 - check if current index is evenly divisible
   - push current element of first array to output array
   - push current element of second array to output array
return output array

given two arrays

SET outputArray = []
WHILE index <= length of array
  IF current index % 2 === 0
    push curr ele of 1st arr to outputArray
    push curr ele of 2nd arr to outputArray
PRINT outputArray
*/