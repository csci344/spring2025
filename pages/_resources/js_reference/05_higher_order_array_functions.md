---
layout: two-column-resources
title: Higher Order Array Functions
nav_order: 5
parent: JavaScript Resources
---

Higher order array functions are functions that take other functions as arguments or return a function. They are a powerful way to manipulate arrays and are a core concept in JavaScript. You can read more about <a href="https://eloquentjavascript.net/05_higher_order.html" target="_blank">the concept of higher order functions here</a>. Some of the most common higher order array functions -- `forEach`, `map`, `filter`, `reduce`, and `find` -- are also covered in <a href="https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods" target="_blank">this Digital Ocean article</a>.
## 1. forEach Method

The `forEach` method is like a tour guide that visits each item in an array one by one. It's a simpler way to loop through arrays compared to traditional `for` loops. You can <a href="https://www.youtube.com/watch?v=K_CxaSPjd1c" target="_blank">learn more about the forEach method here</a>.

### Basic Syntax
```javascript
// Let's say we have a list of students
const students = ['Alice', 'Bob', 'Charlie'];

// forEach visits each student and does something
students.forEach(function(student) {
    console.log(`Hello, ${student}!`);
});
// Prints:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!

// You can also write it with an arrow function
students.forEach(student => console.log(`Hello, ${student}!`));
```

### How forEach Works
```javascript
// forEach will invoke the callback function with three arguments:
// 1. The item itself
// 2. The index (position)
// 3. The original array

const grades = ['A', 'B', 'C'];

grades.forEach((grade, index, array) => {
    console.log(`Grade ${index + 1} of ${array.length}: ${grade}`);
});
// Prints:
// Grade 1 of 3: A
// Grade 2 of 3: B
// Grade 3 of 3: C
```

### Practical Examples

#### Updating DOM Elements
```javascript
// Add a class to multiple elements
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    paragraph.classList.add('highlight');
});
```

#### Calculating Totals
```javascript
// Calculate total cost of items
const prices = [10, 20, 30];
let total = 0;

prices.forEach(price => {
    total += price;
});
// total is now 60
```

### Important Notes
- You can't break out of a forEach loop (use a regular for loop if you need to)
- It always processes all items in the array
- It doesn't return anything (use map if you need to create a new array)

## 2. map Method

The `map` method is very similar to the `forEach` method. The only difference is that it **returns a new array** (the `forEach` method doesn't return anything). You can <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">learn more about the map method here</a>.

### Basic Syntax
```javascript
// Let's say we have a list of students
const students = ['Alice', 'Bob', 'Charlie'];       

// We want to create a new array with the length of each student's name
const nameLengths = students.map(student => student.length);

console.log(nameLengths);
// Prints: [5, 3, 7]
```                 

### How map Works
```javascript
// map will invoke the callback function with three arguments (just like forEach):
// 1. The item itself
// 2. The index (position)
// 3. The original array

const numbers = [1, 2, 3, 4, 5];

numbers.map((number, index, array) => {
    console.log(`Processing ${number} at position ${index} of ${array.length}`);
    return number * 2;
});
// Prints:
// Processing 1 at position 0 of 5
// Processing 2 at position 1 of 5
// Processing 3 at position 2 of 5
// Processing 4 at position 3 of 5
// Processing 5 at position 4 of 5
// Returns: [2, 4, 6, 8, 10]
```             

### Practical Examples

#### Updating DOM Elements
```javascript
// Add a class to multiple elements
const paragraphs = document.querySelectorAll('p');  
paragraphs.forEach(paragraph => {
    paragraph.classList.add('highlight');
});
```

#### Calculating Totals
```javascript   
// Calculate total cost of items
const prices = [10, 20, 30];
let total = 0;

prices.forEach(price => {
    total += price;
}); 
// total is now 60
```

### Important Notes
- map always returns a new array
- It doesn't modify the original array
- The returned array will always have the same length as the original array

## 3. filter Method

The `filter` method creates a new array containing only the elements that pass a certain test. Think of it like a sieve that only lets certain items through. You can <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">learn more about the filter method here</a>.

### Basic Syntax
```javascript
// Let's say we have a list of numbers
const numbers = [1, 2, 3, 4, 5, 6];

// Filter out only the even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
// Prints: [2, 4, 6]
```

### How filter Works
```javascript
// filter will invoke the callback function with three arguments (just like map and forEach):
// 1. The item itself
// 2. The index (position)
// 3. The original array

const scores = [95, 60, 78, 85, 45];

const passingScores = scores.filter((score, index, array) => {
    console.log(`Checking score ${score} at position ${index}`);
    return score >= 70;
});
// Prints scores being checked
// Returns: [95, 78, 85]
```

### Practical Examples

#### Filtering Objects
```javascript
const students = [
    { name: 'Alice', grade: 95 },
    { name: 'Bob', grade: 65 },
    { name: 'Charlie', grade: 85 }
];

const honorsStudents = students.filter(student => student.grade >= 80);
// Returns: [{name: 'Alice', grade: 95}, {name: 'Charlie', grade: 85}]
```

#### Removing Empty Values
```javascript
const values = ['hello', '', 'world', null, undefined, 'javascript'];
const cleanValues = values.filter(value => value);
// Returns: ['hello', 'world', 'javascript']
```

### Important Notes
- filter returns a new array
- The new array might be shorter than the original
- The original array is not modified
- Elements are only included if the callback returns true

## 4. reduce Method

The `reduce` method combines all elements in an array into a single value. Think of it like a snowball rolling down a hill, collecting snow as it goes. You can <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank">learn more about the reduce method here</a>.

### Basic Syntax
```javascript
// Let's add up all numbers in an array
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);  // 0 is the initial value
console.log(sum); // Prints: 10
```

### How reduce Works
```javascript
// reduce will invoke the callback function with four arguments:
// 1. Accumulator (running total)
// 2. Current value
// 3. Current index
// 4. Original array

const numbers = [1, 2, 3];
numbers.reduce((acc, curr, idx, arr) => {
    console.log(`Accumulator: ${acc}, Current: ${curr}, Index: ${idx}`);
    return acc + curr;
}, 0);
// Prints:
// Accumulator: 0, Current: 1, Index: 0
// Accumulator: 1, Current: 2, Index: 1
// Accumulator: 3, Current: 3, Index: 2
```

### Practical Examples

#### Creating an tally of each item in an array
```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
// Returns: { apple: 2, banana: 2, orange: 1 }
```

#### Flattening Arrays
```javascript
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((flat, current) => {
    return [...flat, ...current];
}, []);
// Returns: [1, 2, 3, 4, 5, 6]
```

### Important Notes:
- reduce returns a single value (which can be any type)
- The initial value is optional but recommended
- Great for calculations and transformations

## 5. find Method

The `find` method returns the first element in an array that satisfies a certain condition. Think of it like a detective searching for a specific item. You can <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank">learn more about the find method here</a>.

### Basic Syntax 
```javascript
// Let's say we have a list of students
const students = [
    { name: 'Alice', grade: 95 },
    { name: 'Bob', grade: 65 },
    { name: 'Charlie', grade: 85 }
];          

// We want to find the first student with a grade of 95
const student = students.find(student => student.grade === 95);
console.log(student);
// Returns: { name: 'Alice', grade: 95 }
``` 

### How find Works
```javascript
// find will invoke the callback function with three arguments (just like map and forEach):
// 1. The item itself
// 2. The index (position)
// 3. The original array    

const numbers = [1, 2, 3, 4, 5];
numbers.find((number, index, array) => {
    console.log(`Checking ${number} at position ${index}`);
    return number === 3;
}); 
// Prints:
// Checking 1 at position 0
// Checking 2 at position 1
// Checking 3 at position 2
// Returns: 3
``` 

### Practical Examples

#### Finding a specific item
```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const user = users.find(user => user.id === 2);
console.log(user);
// Returns: { id: 2, name: 'Bob' }
```

#### Finding the first even number
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find(number => number % 2 === 0);
console.log(evenNumber);
// Returns: 2
```

### Important Notes
- find returns the first element that satisfies the condition
- If no element satisfies the condition, it returns undefined
- It doesn't modify the original array

