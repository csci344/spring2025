---
layout: two-column-resources
title: "Programming Review Using JavaScript"
nav_order: 2
has_children: true
---

For those of you who are rusty on programming, please complete the following "crash course" on programming. The course covers some of the basic concepts in computer programming using JavaScript. After taking a look at these resources, please complete the practice exercises using Node.js:

1. [Data](#step1)
1. [Expressions & Statements](#step2)
1. [Control](#step3)
1. [Objects & Classes](#step4)
1. [Other Important Concepts](#step5)
1. [Exercises](#step6)

{:#step1}
## 1. Data
### 1.1. Data Types
JavaScript has 8 data types. Each datatype has particular capabilities and behaviors that are important to understand:

| | Type | Description | Example |
|--|--|--|--|
| 1 | number  | For numbers of any kind: integer or floating-point| 1.4, 33, 99999999 |
| 2 | bigint  | For storing very large integers that can't be represented by the number datatype | BigInt("123456789012345678901234567890") |
| 3 | string | For strings (text). A string may have one or more characters, there’s no separate single-character type | "hello world!" |
| 4 | boolean | for true/false. | true, false |
| 5 | null | for unknown values – has a single value null | null |
| 6 | undefined | for unassigned values – has a single value undefined | undefined |
| 7 | object | for more complex data structures.| { name: "ralph", species: "dog" } | 
| 8 | symbol | for unique identifiers (we won’t be using this one) | |
 
#### 1.1.1. Use the `typeof` operator to figure out the type of data you have...

```js
console.log(typeof "hello world!");
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 23.4);
console.log(typeof 4500);
console.log(typeof [1, 3, 4, 6]);
console.log(typeof { name: "Lester", species: "dog", age: 15});
```

#### 1.1.2. Use the built-in DataType classes to convert between data types...

```js
// String(), Number(), Boolean()
// 1. Convert a number to a string
let myString = String(123); // number is an argument

// 2. Convert a string to a number:
let myNum = Number("123");

// 3. Convert a string to a boolean
console.log(Boolean("true"), typeof Boolean("true"));
```
* <a href="https://www.w3schools.com/jsref/jsref_number.asp" target="_blank">W3 Schools: Number Conversions</a>
* <a href="https://www.w3schools.com/jsref/jsref_string.asp" target="_blank">W3 Schools: String Conversions</a>
* <a href="https://www.w3schools.com/jsref/jsref_obj_boolean.asp" target="_blank">W3 Schools: Boolean Conversions</a>
{:.compact}

### 1.2. Variables

* Variables are containers for storing and / or referencing data
* Variables can also be used to assign an alias to a function, variable, object, or class
* Variables are created by using a declaration keyword (var, const, or let)
* Variables can be declared and assigned within the same statement, or they can be separated
* You assign values to variables using the assignment operator (equal sign)
* Variables are **case-sensitive**
* While the JavaScript interpreter doesn't care what you name things, variable names are typically mnemonic and "camel case" in JavaScript
{:.compact}


JavaScript is a *dynamically typed language*, which means that you don't need to explicitly declare the type of a variable when you create it. The type is determined automatically based on the value assigned to the variable, and it can change as the program runs. For instance:

```js
let myVar = 42;              // variable is a number
console.log(typeof myVar);   // "number"

myVar = "Hello, world!";     // now variable is a string
console.log(typeof myVar);   // "string"

myVar = true;                // now variable is a boolean
console.log(typeof myVar);   // "boolean"
```

In the example above, `myVar` starts out as a number data type (line 1), then changes to a string (line 4), and then changes to a boolean (line 7).


#### 1.2.1. Sample Naming Conventions (Mnemonic & Camel Case)
```js
// variable names:
let timeLeftTilEndOfClass = 35;
let firstName = "Jazmin";
let lastName = "Morales";
```

#### 1.2.2. Declaring Variables
In JavaScript, there are three keywords for declaring variables: let, const, and var.

**`let`**
Means that the variable may be reassigned / can be changed.

**`const`**
Means that the variable won"t be reassigned. It’s "immutable." Used in cases where you declare and assign once, but don’t change it afterwards.

**`var`**
For this class: try to avoid (o)ld way to do things prior to ES6). This is not because of efficiency, but because of communication -- “The weakest signal available”. When you see it, it's kind of ambiguous:
* "The variable may or may not be reassigned" (who knows!?)
* "The variable may or may not be needed on the global object (`window`)

{:#step2}
## 2. Expressions & Statements

### 2.1. Expressions
An expression is any valid unit of code that resolves to a value (after it is evaluated by an interpreter). Some examples of expressions that all resolve to the value `9`:

```js
let myVar = 9;          // 9 is a "constant" expression. Cannot be simplified further
myVar = 11 - 2;     // 11 - 2 and 3 * 3 are expressions involving arithmetic operators
myVar = 3 * 3;
```
Expressions are evaluated to their simplest form by the JavaScript interpreter before moving onto the next statement.

### 2.2. Statements
A statement *performs an action* while an expression *produces a value*. Some examples of statements include:

```js
let var1;
var1 = 40;
if (var1 > 5) { ... }
```
In the code block above:
* line 1 declares a new variable (names it and allocates some memory for storage)
* line 2 assigns the value 40 to the variable var1
* line 3 checks if the expression inside the parenthesis is true or false
{:.compact}


### 2.3. Operators
Operators perform fairly simple tasks (addition, subtraction, comparison, assignment, etc.). The operators shown below typically require two  (operands) and 

#### 2.3.1. Arithmetic Operators

| Operator | Meaning | Description | 
|--|--|--|
| + | Addition | Adds values on either side of the operator | 
| - | Subtraction | Subtracts right hand operand from left hand operand | 
| * | Multiplication | Multiplies values on either side of the operator | 
| / | Division | Divides left hand operand by right hand operand | 
| ** | Exponent | Performs exponential (power) calculation on operators | 
| % | Modulus | Divides left hand operand by right hand operand; returns remainder | 
| ++ | Increment | Adds 1 to the number | 
| -- | Decrement | Subtracts 1 from the number |

#### 2.3.2. Comparison Operators
Comparison operators always evaluate to `true` or `false` and are often used with if/else statements and loops.

| Operator | Meaning |
|--|--|
| == | Equality |
| === | Strict Equality (both values and data types match) |
| != | Not Equal |
| >, >= | Greater than; greater than or equal to |
| <, <= | Less than; Less than or equal to |

See <a href="https://www.w3schools.com/js/js_comparisons.asp" target="_blank">W3 Schools</a> for more information and examples.

### 2.3.3. Logical Operators

| Operator | Meaning | Explanation |
|--|--|
| && | and | If both operands are true, then the "and expression" also evaluates to true. Otherwise, the "and expression" evaluates to false. | 
| \|\| | or | If either or both of the operands are true, then the "or expression" also evaluates to true. Otherwise, the "or expression" evaluates to false.  |
| ! | not | if the operand is false, then the "not" of the operand is true (and vice versa). |

### 2.3.4. Assignment Operators
Assignment operators are used to assign values to variables. Here are some of the most common assignment operators:

| Operator | Meaning | Explanation |
|--|--|
| = | assignment | Assign the value on the right of the `=` to the variable on the left of the `=`. | 
| += | add and assign | Adds the value of a variable by a specified value and then assigns the result back to that variable.  |
| -= | subtract and assign | Subtracts the value of a variable by a specified value and then assigns the result back to that variable.  |
| *= | multiply and assign | Multiplies the value of a variable by a specified value and then assigns the result back to that variable.  |
| /= | divide and assign | Divides the value of a variable by a specified value and then assigns the result back to that variable.  |

Examples:

```js
let x = 5;
x += 3;         // Adds 3 to the value stored in x and then reassigns the result to x
console.log(x); // Outputs 8

x -= 2;         // Subtracts 2 from the value stored in x and ressigns the result to x
console.log(x); // Outputs 6

x *= 4;         // Multiplies the value stored in x by 4 and ressigns the result to x
console.log(x); // Outputs 24

x /= 3;         // Dividies the value stored in x by 3 and ressigns the result to x
console.log(x); // Outputs 8
```


### 2.4. Functions
* Functions are a way to encapsulate and re-use code
* With functions, you can perform the same operations over and over using different data
* JavaScript has many built-in functions
* You can also create your own functions
* Functions have to be defined before they are "called" or "invoked"
{:.compact}

#### 2.4.1. Syntax
While there are many different ways to define functions, the simplest way to do so is by using the function declaration syntax. Here is an example:

```js
function addTwoNums(num1, num2) {
    return num1 + num2;
}
```

Creating a function in this way involves:

{:.compact}
1. Using the `function` keyword to indicate to the interpreter that you are creating a function.
2. Naming the function (e.g. `addTwoNums`) -- note that we're using camel case in this example.
3. Defining a set of optional parameters (e.g., `num1` and `num2`)
4. Defining the function body, which defines what you actually want the function to do -- in this case add the values stored in `num1` and `num2` so that you can return the result.
    * Note that if you do not return a value from the function body, the default return value is `null`
    {:.compact}

You can learn more about JavaScript functions here:
* <a href="https://www.w3schools.com/js/js_functions.asp" target="_blank">W3 Schools: JavaScript Functions</a>
* <a href="https://www.youtube.com/watch?v=FOD408a0EzU" target="_blank">Web Dev Simplified: How To Create/Use Functions</a>
* <a href="https://www.youtube.com/watch?v=TkFN6e9ZDMw" target="_blank">Web Dev Simplified: Variable Scoping</a>
{:.compact}

{:#step3}
## 3. Control
In programming, **control** refers to the techniques that determine the flow of execution of a program. This includes the order in which statements, instructions, or functions are executed based on conditions, loops, or other control structures.
### 3.1. If...Else

#### 3.1.1. `if` Statement
The `if` statement is the most basic form of conditional control. It checks a condition, and if the condition evaluates to true, the block of code within the `if` statement is executed. Example:

```js
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");  // This code runs because the condition is true
}
```

#### 3.1.2. `else` Statement
The `else` statement is used in conjunction with the `if` statement. It defines a block of code that will be executed if the condition in the `if` statement evaluates to false. Example: 

```js
let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");  // This code runs because the condition is false
}
```

#### 3.1.3. `if/else if/else` Statement
The `if/else if/else` statement is used when you need to check multiple conditions. You start with an `if` statement, followed by one or more `else if` statements to check additional conditions. If none of the conditions are true, the `else` block (if included) is executed as a fallback. Example:

```js
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");  // This code runs because the score is between 80 and 89
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D or lower");
}
```

#### 3.1.4. References
* <a href="https://www.w3schools.com/jsref/jsref_if.asp" target="_blank">W3 Schools: JavaScript If...Else Statements</a>
* <a href="https://www.youtube.com/watch?v=EumXak7TyQ0" target="_blank">Web Dev Simplified: Why I Don't Use Else When Programming</a>. Interesting perspective on writing cleaner code w/if statements

### 3.2. Loops
In JavaScript, loops are used to repeatedly execute a block of code as long as a specified condition is true. JavaScript provides several types of loops to handle different looping scenarios:

#### 3.2.1. `while` Loop
The while loop repeats a block of code as long as the specified condition evaluates to true. It is ideal for situations where the number of iterations is not known beforehand. Example:

```js
let i = 0;
while (i < 5) {
    console.log(i);  // Outputs 0, 1, 2, 3, 4
    i++;
}
```
Note that in the example above...
1. Statements on lines 3 and 4 keep repeating until the `i < 5` condition is no longer true. In other words, eventually the value stored in the variable `i` will be 5 or greater, making the `i < 5` expression false.
2. If the counter `i` is not incremented each time the code block executes, the loop will never terminate. In other words, the loop will never break and the code block will keep printing `0` because the value of `i` never changes.


#### 3.2.2. `for` Loop
The for loop is the most commonly used loop. It repeats a block of code a specified number of times, based on the initialization, condition, and iteration expressions. Example: 

```js
for (let i = 0; i < 5; i++) {
    console.log(i);  // Outputs 0, 1, 2, 3, 4
}
```
Note that in the example above...
1. The first statement (`let i = 0`) in the loop header runs **before the loop begins**,
2. The second statement (`i < 5`) is checked **before entering the loop** on every iteration, and 
3. The third statement (`i++`) runs at the end of every iteration

#### 3.2.3. `for...of` Loop
The `for...of` loop is used to iterate over the values of an iterable object (e.g., arrays, strings, maps, sets, etc.). It provides a more straightforward syntax for iterating over array elements and other iterable objects without having to manually index the iterable object. Example:

```js
const myArray = ["dog", "cat", "bird", "fish"];

for (let item of myArray) {
    console.log(item);  // Outputs dog, cat, bird, fish
}
```

#### 3.2.4. References
* <a href="https://www.youtube.com/results?search_query=web+dev+simplified+loops" target="_blank">Code Academy: Conceptual Overview</a> (Video)
* <a href="https://www.youtube.com/watch?v=Kn06785pkJg" target="_blank">codeSTACKr: JavaScript Loops Made Easy</a> (Video)
* <a href="https://www.w3schools.com/jsref/jsref_while.asp" target="_blank">W3 Schools: While Loops</a> (Reference)
* <a href="https://www.w3schools.com/jsref/jsref_for.asp" target="_blank">W3 Schools: For Loops</a> (Reference)
* <a href="https://www.w3schools.com/jsref/jsref_forof.asp" target="_blank">W3 Schools: For...Of Loops</a> (Reference)

{:#step4}
## 4. Objects & Classes
Nice video explanation here:
* <a href="https://www.youtube.com/watch?v=5AWRivBk0Gw" target="_blank">Web Dev Simplified: What are Classes, Objects, and Constructors?
</a> (Video)

{:#step5}
## 5. Other Important Concepts
(I will be adding to this throughout the semester)

### 5.1. Arrays
Arrays in JavaScript are objects used to store multiple values in a single variable. They can hold elements of any type, including numbers, strings, objects, other arrays, and more. They also provide various methods for managing and manipulating collections of data. 

There are numerous resources that go over key array methods and approaches. That said, make sure you understand how to...
1. Create, read, modify, add, and remove elements from an array. 
2. Some commonly used JavaScript array methods (see video below).

Here is an example of some common JavaScript array uses:

```js
// Create an array
let fruits = ["apple", "banana", "cherry"];

// Add elements to the array
fruits.push("date");         // Adds "date" to the end of the array
fruits.unshift("apricot");   // Adds "apricot" to the beginning of the array
console.log("After adding elements:", fruits); 
// Outputs: ["apricot", "apple", "banana", "cherry", "date"]

// Remove elements from the array
fruits.pop();                // Removes the last element ("date")
fruits.shift();              // Removes the first element ("apricot")
console.log("After removing elements:", fruits); 
// Outputs: ["apple", "banana", "cherry"]

// Access elements in the array
console.log("First element:", fruits[0]);   // Outputs: "apple"
console.log("Second element:", fruits[1]);  // Outputs: "banana"

// Modify elements in the array
fruits[1] = "blueberry";    // Change the second element to "blueberry"
console.log("After modifying elements:", fruits); 
// Outputs: ["apple", "blueberry", "cherry"]

// Delete elements from the array
delete fruits[0];           // Deletes the first element, leaves an undefined hole
console.log("After deleting an element:", fruits); 
// Outputs: [undefined, "blueberry", "cherry"]
```


References
* <a href="https://www.w3schools.com/js/js_arrays.asp" target="_blank">W3 Schools: JavaScript Arrays</a> (Reference)
* <a href="https://dev.to/shrihankp/higher-order-array-methods-in-javascript-14e7" target="_blank">Higher Order Array Methods in JavaScript</a> (Reference)
* <a href="https://www.youtube.com/watch?v=R8rmfD9Y5-c" target="_blank">Web Dev Simplified: 8 Must Know JavaScript Array Methods</a> (Video): `filter`, `map`, `find`, `forEach`, `some`, `every`, `reduce`, `includes`

{:#step6}
## 6. Exercises


### 6.1. Input / Output
#### 6.1.1. Data Type Conversion
Write a JavaScript program that prompts the user to enter two numbers, converts the inputs to numbers, and then logs the sum of these two numbers to the console. 
* In order to ask for input from the user, you will need to install an external module called `prompt-sync`:<br>`npm install prompt-sync`. 

Here is some code to get you started:

```js
// npm install prompt-sync:
// note that if you were to run this code in your browser, the
// input() function is a built-in function
import p from "prompt-sync";
const prompt = p();

let num1 = prompt("Enter your first number: ");
// your code here...

```

To run your code, save your code as a node module (e.g., `add-nums.mjs`) and then run it with the node.js interpreter (e.g., `node add-nums.mjs`).

### 6.2. Conditionals

#### 6.2.1. Practice with Conditionals: Which Decade?
Write a JavaScript program that prompts the user for their age, converts the input to a number, and then logs a message indicating which decade of their life they are in:
* If the age is between 20-29, log 'You are in your 20s'
* If between 30-39, log 'You are in your 30s'
* If between 40-49, log 'You are in your 40s'
* Otherwise, log 'IDK'
{:.compact}

#### 6.2.2. Practice with Conditionals: Color Mixer
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

### 6.3. Loops
#### 6.3.1. Practice with While Loops: Output the numbers 0-99
1. Using a while loop, output the numbers 0-99 to the console in **ascending** order (0, 1, 2, 3,...,999).
1. Using a while loop, output the numbers 0-99 to the console in **descending** order (99, 98, 97,...,0).
1. Using a while loop, output only the even numbers between 0 and 99 (hint: use the modulus operator).
1. Using a while loop, output only the odd numbers between 0 and 99 (hint: use the modulus operator).


#### 6.3.2. Practice with For Loops: Output the numbers 0-99
1. Using a for loop, output the numbers 0-99 to the console in **ascending** order (0, 1, 2, 3,...,999).
1. Using a for loop, output the numbers 0-99 to the console in **descending** order (99, 98, 97,...,0).
1. Using a for loop, output only the even numbers between 0 and 99.
1. Using a for loop, output only the odd numbers between 0 and 99.

#### 6.3.3. Practice with For Loops: Reverse a string
Write a program that takes any string and prints it in reverse order.


#### 6.3.4. Practice with For Loops: Sum of the numbers in an array
Write a program that uses a for loop to find the sum of an array of numbers. Your loop should be able to figure this out regardless of the length of the array and the values contained in the array (so long as they are numbers).

```js
//Sample arrays:
let array1 = [12, 45, 3, 22, 48, 9, 27, 30, 5, 44, 20];
let array2 = [6, 31, 39, 2, 47, 21, 37, 13, 50, 28, 14, 19, 32, 4, 42, 23, 15, 46, 12, 49];
let array3 = [20, 26, 41, 8, ];
```


#### 6.3.5. Practice with For Loops: Biggest number in an array
Write a program that uses a for loop to find the biggest number in an array of numbers. Your loop should be able to figure this out regardless of the length of the array and the values contained in the array (so long as they are numbers).

```js
//Sample arrays:
let array1 = [12, 45, 3, 22, 48, 9, 27, 30, 5, 44, 20];
let array2 = [6, 31, 39, 2, 47, 21, 37, 13, 50, 28, 14, 19, 32, 4, 42, 23, 15, 46, 12, 49];
let array3 = [20, 26, 41, 8, ];
```

### 6.4. Functions

#### 6.4.1. Find the Square
Write a function `square` that takes a number as an argument and returns its square. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(square(5)); // Outputs: 25
console.log(square(10)); // Outputs: 100
```

#### 6.4.2. Even or Odd?
Write a function `isEven` that takes a number as an argument and returns true if the number is even, and false if it is odd. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(isEven(4)); // Outputs: true
console.log(isEven(7)); // Outputs: false
```

#### 6.4.3. Max of Three
Write a function `maxOfThree` that takes three numbers as arguments and returns the largest of the three. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(maxOfThree(5, 10, 3)); // Outputs: 10
console.log(maxOfThree(7, 2, 8)); // Outputs: 8
```

#### 6.4.4. Factorial
Write a function `factorial` that takes a non-negative integer as an argument and returns its factorial. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(factorial(5)); // Outputs: 120
console.log(factorial(0)); // Outputs: 1
```

#### 6.4.5. Sum of an Array of Numbers
Write a function `sumArray` that takes an array of numbers and returns the sum of all the numbers in the array. Then test your function with several different function invocations (see example invocations below).

```js
// sample function calls below:
console.log(sumArray([1, 2, 3, 4])); // Outputs: 10
console.log(sumArray([5, 6, 7])); // Outputs: 18
```