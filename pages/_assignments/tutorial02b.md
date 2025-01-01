---
layout: assignment-two-column
title: Programming Refresher 
type: tutorial
abbreviation: Tutorial 2b
draft: 0
points: 6
num: 2
---

## Part 1. Setting Up Your Development Environment

### 1. Install Visual Studio Code (if you haven't already)
Download and install Visual Studio Code: <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>. 
* This does not need to be done if you are working on the computer lab computers -- just if you're working on your laptop.

### 2. Organize your files
<a href="/spring2025/course-files/tutorials/tutorial02b.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>


File management and organization are an essential part of programming and web development. As such, we suggest the following system:
1. Create a course folder called **csci344** somewhere on your computer. Many people store theirs in Documents or on their Desktop.
2. Create a **tutorials** folder inside of your csci344 folder.
3. Download the `tutorial02b.zip` file, unzip it (ask if you’re new to zipping / unzipping files and I will help you) and move the unzipped tutorial02 folder into the `csci344/tutorials` folder (see diagram below).


```
csci344
    ├── tutorials
    │   └── tutorial02b
    │   ...
    │   
    └── lectures
        ├── lecture03
        └── lecture04
```

### 3. Take a look at your files
You will be ***editing*** your files using VS Code (or another code editor of your choice), and ***viewing*** your rendered files in your web browser.

#### A. View file in Visual Studio Code
1. Open VS Code (your code editor).
2. Add your entire csci344 folder to VS Code by 
   * clicking `File >> Add Folder to Workspace...`  
   * and then navigating to your csci344 folder (wherever you saved it)
3. Open your index.html file inside of the `tutorial02b` folder and take a look at it. You should see a very simple HTML file that looks like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.min.js" defer></script>
    <script src="utilities.js" defer></script>
    <script src="main.js" defer></script>
    <title>Circles</title>
</head>

<body>
    <main>
    </main>
</body>

</html>
```

This HTML file uses a third-party library called `p5.js` to draw various shapes on an HTML5 canvas. You can <a href="https://p5js.org/reference/" target="_blank">take a look at the documentation here</a>. For this tutorial, you will be editing the `main.js` file:

```js
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    draw5Circles();
    //draw5RedSquares();
    drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5Circles() {
    noFill();
    // fill('red');
    circle(100, 200, 50); // centerX, centerY, diameter
    circle(100, 250, 50);
    circle(100, 300, 50);
    circle(100, 350, 50);
    circle(100, 400, 50);
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}
```

The most important thing to understand in the `main.js` file is that `setup()` runs when the page first loads. This means that if you want to draw anything, the `setup()` function needs to invoke the function that does the drawing.
* Note in the code sample above, `draw5Circles()` is invoked in the setup. If you uncomment `draw5RedSquares()`, 5 squares will be drawn as well.

#### B. View file in Web Browser 
Once you’ve taken a look at the code in VS Code, view it in your browser using the Live Server plugin you installed on Monday. It should look something like this:

<img class="frame small" src="/spring2025/assets/images/tutorials/tutorial02/circles.png" />

Try uncommenting **`draw5RedSquares();`** to see what happens!

## Part 2. Completing the Exercises
Now that you're set up, please complete the 6 tasks below. You are more than welcome to work collaboratively on this assignment and to use ChatGPT -- not as a replacement for critical thinking, but as a way to refresh yourself on important programming techniques.


{:#step1}
### 1. While Loop - 5 Times
Create a function called `draw5CirclesWhile()` that uses a while loop to draw the same 5 circles. Instead of copying the same circle function invocation 5 times, your function will use a **while loop** instead. Each time the loop iterates, the circle should be drawn below the previous. Don't forget to invoke your new function inside of the `setup()` function body. Consider using different x-positions for your circles so that they don't draw on top of the existing ones. Pseudocode:

```python
while less that 5 circles drawn:
    draw another circle directly below the first
```

### 2. For Loop - 5 Times
Create a function called `draw5CirclesFor()` that uses a for loop to draw the same 5 circles. Instead of copying the same circle function invocation 5 times, your function will use a **for loop** instead. Each time the loop iterates, the circle should be drawn below the previous. Don't forget to invoke your new function inside of the `setup()` function body. Consider using different x-positions for your circles so that they don't draw on top of the existing ones.

### 3. For Loop - N Times
Create a function called `drawNCircles(n)` that uses a for loop to draw any number of circles in a vertical column. If I invoke your function as follows: `drawNCircles(20)` it should draw 20 circles in a vertical column. Consider using different starting x and y position for your circles so that they don't draw on top of the existing ones.

### 4. For Loop - More flexibility
Create a function called `drawNCirclesFlexible(n, size, x, y)` that uses a for loop to draw  a column of circles of any size, starting at any x, y position. If I invoke your function as follows: `drawNCirclesFlexible(30, 25, 400, 0)` it should produce the following picture:

<img class="frame small" src="/spring2025/assets/images/tutorials/tutorial02/flexi-circles.png" />

### 5. For Loop - Even more flexibility
Create a function called `drawNShapesFlexible(n, size, x, y, shape)` that uses a for loop to draw  a column of shapes of any size, starting at any x, y position. If the shape === "circle", it will draw a column of circles. Otherwise it will draw a column of squares.

### 6. For Loop - Still more flexibility
Create a function called `drawNShapesDirectionFlexible(n, size, x, y, shape, direction)` that uses a for loop to draw  a column of shapes of any size, starting at any x, y position. 
* If the shape === "circle", it will draw a column of circles. Otherwise it will draw a column of squares.
* If direction === "row", it will draw a column of shapes. Otherwise it will draw a column of shapes.

### 7. [Optional] Make some algorithmic art
Create some interesting art based on the techniques you experimented with. Use the `fill()` function to change the colors. Use the `Math.random()` function to randomly place your shapes, or to randomly change the sizes and colors of your shapes.


> ## For Folks Wanting More Programming Practice...
> I highly recommend that you review all of [these introductory exercises](../resources/programming-review#step6), using JavaScript. Here's a suggested workflow:
> 
> 1. Review the reference materials (e.g., data, expressions and statements, control, etc.)
> 2. Select a problem to try (say, 6.1.1. Data Type Conversion).
> 3. Make a new directory inside of your `csci344` folder called `programming-practice`
> 4. Inside of your `programming-practice`, create a file called `data-type-practice.mjs` (`.mjs` indicates that you're making a JavaScript module).
> 5. Write the code to solve the problem.
> 6. Open GitBash (Windows) or Terminal (Mac) and navigate to your `programming-practice` folder. If you don't know how to do this, come to office hours.
> 7. Test your solution using the node interpreter on the command line:<br>`node data-type-practice.mjs`
>
> If you have any questions about how to do this, please come to office hours!


## What to turn in
Please commit and push all of your edits to GitHub. Then, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission.
