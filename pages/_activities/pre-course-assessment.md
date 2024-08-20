---
layout: two-column
title: "Pre-Course Assessment"
type: tutorial
abbreviation: Activity 1
draft: 1
points: 6
num: 2
---

# The Questions
1) Write a function called add_nums that takes two numbers as arguments and returns their sum. 

2) Write a loop (any kind of loop you want) that prints the integers from 1 to 100 in order (e.g., 1, 2, 3, …, 99, 100). Don't worry about line breaks.

3) What is the output of this code block (which is written in Python):
```python
a = 3
b = 2
while b > 0:
   a -= b
   b += a
   print(a, b)
```
4) What will print to the screen, given the following code block below (written in Python)?

```python
a = True
b = True
c = False


if a and c:
   print('squirrel')
elif a:
   print('lion')


if a and not c:
   print('cat')
elif a:
   print('dog')
elif not c:
   print('penguin')
```

# Answers

## 1. Write a function called add_nums that takes two numbers as arguments and returns their sum. 
If I invoke your function as follows, it will return the number 9: add_nums(4, 5)

### JavaScript
```js
function add_nums(num1, num2) { 
    return num1 + num2; 
}
const result = add_nums(4, 5);
console.log("The sum is:", result);
```

### Java
```java
public class Main {
    public static int add_nums(int num1, int num2) {
        return num1 + num2;
    }

    public static void main(String[] args) {
        int result = add_nums(4, 5);
        System.out.println("The sum is: " + result);  // Output will be 15
    }
}
```

### Python
```python
def add_nums(num1, num2):
    return num1 + num2

result = add_nums(4, 5)
print("The sum is:", result)  # Output will be 15
```

## 2. Write a loop (any kind of loop you want) that prints the integers from 1 to 100 in order (e.g., 1, 2, 3, …, 99, 100).
Don't worry about line breaks.


### JavaScript
```js
// Using a for loop
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

### Java
```java
public class Main {
    public static void main(String[] args) {
        // Using a for loop
        for (int i = 1; i <= 100; i++) {
            System.out.println(i + " ");
        }
    }
}
```

### Python
```python
# Using a for loop
for i in range(1, 101):
    print(i)
```


## 3. What is the output of this code block (which is written in Python):
```python
a = 3
b = 2
while b > 0:
   a -= b
   b += a
   print(a, b)
```

### Answer:
```
1 3
-2 1
-3 -2
```

## 4. What will print to the screen, given the following code block below (written in Python)?

```python
a = True
b = True
c = False


if a and c:
   print('squirrel')
elif a:
   print('lion')


if a and not c:
   print('cat')
elif a:
   print('dog')
elif not c:
   print('penguin')


print('giraffe')
```

### Answer:
```
lion
cat
giraffe
```
