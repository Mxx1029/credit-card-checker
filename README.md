# Basic JavaScript Credit Card Number Validation


JavaScript program as part of a challenge project on Codecademy. Functions to validate credit card numbers, find invalid cards, turn them into valid numbers.

## Project Goals

Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. 
You’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. 

## Prerequisites

Introduction to JavaScript (up to and including Arrays and Loops)

## Project Requirements

1. To start you get 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided credit cards in a single array.You’ll use these arrays later to check if your functions are working properly.

2. Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.
To find out if a credit card number is valid or not, use the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. 
The calculations in the Luhn algorithm can be broken down as the following steps:

a. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.

b. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.

c. Sum up all the digits in the credit card number.

d. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

- Alternatively, another series of steps that accomplishes the same goal can be found at Free Formatter’s Luhn algorithm implementation.
If you’re following Free Formatter’s method, it is replicated by following these steps:

a. Remove the last element from the array, (but remember, you don’t want to alter the original array!).

b. Reverse the array (now without the last digit).

c. Multiply the digits in odd positions (e.g. first digit, third, fifth…etc) by 2. If the resulting number is over 9, subtract 9 from the number.

d. Add up all the numbers in the array as well as the dropped digit from step 1. If the sum modulo 10 is 0 then the array contains a valid number. 

e. Conversely, if the result is any number but 0, then the array contains an invalid number.

3. Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.

4. After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.

Currently, there 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:

3	- Amex (American Express)

4	- Visa

5	- Mastercard

6	- Discover

If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.

idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.

5. If you’d like to challenge yourself further, you could consider the following:

- Use different credit card numbers from a credit card number generator and validator site and test if your functions work for all types of credit cards.
- To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
- Create a function that will convert invalid numbers into valid numbers.



