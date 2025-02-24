---
layout: two-column-resources
title: "Basic Programming Practice"
nav_order: 2
parent: JavaScript Resources
---

Please complete the practice exercises using Node.js:

## 1. Conditionals

### Practice with Conditionals: Which Decade?
Write a JavaScript program that prompts the user for their age, converts the input to a number, and then logs a message indicating which decade of their life they are in:
* If the age is between 20-29, log 'You are in your 20s'
* If between 30-39, log 'You are in your 30s'
* If between 40-49, log 'You are in your 40s'
* Otherwise, log 'IDK'
{:.compact}

### Practice with Conditionals: Color Mixer
Write a JavaScript program that asks the user which paints they are mixing (red, blue, yellow) by prompting them with binary choices (1 for yes, 0 for no). Convert these inputs to boolean values, determine the resulting color based on the combinations of paints used, and then log the resulting color to the console. The color combinations are as follows:
* red + blue + yellow &rarr; black
* red + blue &rarr; purple
* red + yellow &rarr; orange
* blue + yellow &rarr; green
* red only &rarr; red
* blue only &rarr; blue
* yellow only &rarr; yellow
* none &rarr; white
{:.compact}

## 2. Loops
### Practice with While Loops: Output the numbers 0-99
1. Using a while loop, output the numbers 0-99 to the console in **ascending** order (0, 1, 2, 3,...,999).
1. Using a while loop, output the numbers 0-99 to the console in **descending** order (99, 98, 97,...,0).
1. Using a while loop, output only the even numbers between 0 and 99 (hint: use the modulus operator).
1. Using a while loop, output only the odd numbers between 0 and 99 (hint: use the modulus operator).


### Practice with For Loops: Output the numbers 0-99
1. Using a for loop, output the numbers 0-99 to the console in **ascending** order (0, 1, 2, 3,...,999).
1. Using a for loop, output the numbers 0-99 to the console in **descending** order (99, 98, 97,...,0).
1. Using a for loop, output only the even numbers between 0 and 99.
1. Using a for loop, output only the odd numbers between 0 and 99.

### Practice with For Loops: Reverse a string
Write a program that takes any string and prints it in reverse order.


### Practice with For Loops: Sum of the numbers in an array
Write a program that uses a for loop to find the sum of an array of numbers. Your loop should be able to figure this out regardless of the length of the array and the values contained in the array (so long as they are numbers).

```js
//Sample arrays:
let array1 = [12, 45, 3, 22, 48, 9, 27, 30, 5, 44, 20];
let array2 = [6, 31, 39, 2, 47, 21, 37, 13, 50, 28, 14, 19, 32, 4, 42, 23, 15, 46, 12, 49];
let array3 = [20, 26, 41, 8, ];
```


### Practice with For Loops: Biggest number in an array
Write a program that uses a for loop to find the biggest number in an array of numbers. Your loop should be able to figure this out regardless of the length of the array and the values contained in the array (so long as they are numbers).

```js
//Sample arrays:
let array1 = [12, 45, 3, 22, 48, 9, 27, 30, 5, 44, 20];
let array2 = [6, 31, 39, 2, 47, 21, 37, 13, 50, 28, 14, 19, 32, 4, 42, 23, 15, 46, 12, 49];
let array3 = [20, 26, 41, 8, ];
```

## 3. Functions


### Find the Square
Write a function `square` that takes a number as an argument and returns its square. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(square(5)); // Outputs: 25
console.log(square(10)); // Outputs: 100
```

### Even or Odd?
Write a function `isEven` that takes a number as an argument and returns true if the number is even, and false if it is odd. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(isEven(4)); // Outputs: true
console.log(isEven(7)); // Outputs: false
```

### Max of Three
Write a function `maxOfThree` that takes three numbers as arguments and returns the largest of the three. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(maxOfThree(5, 10, 3)); // Outputs: 10
console.log(maxOfThree(7, 2, 8)); // Outputs: 8
```

### Factorial
Write a function `factorial` that takes a non-negative integer as an argument and returns its factorial. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(factorial(5)); // Outputs: 120
console.log(factorial(0)); // Outputs: 1
```

### Sum of an Array of Numbers
Write a function `sumArray` that takes an array of numbers and returns the sum of all the numbers in the array. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(sumArray([1, 2, 3, 4])); // Outputs: 10
console.log(sumArray([5, 6, 7])); // Outputs: 18
```