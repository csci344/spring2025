---
layout: two-column
title: "Practice Quiz 2a"
---

Quiz 2a will cover [Topic 5](../topics/topic05) and [Topic 6](../topics/topic06), including [Tutorial 4](../assignments/tutorial04) and [Tutorial 5](../assignments/tutorial05). In addition to studying those materials, the best way to study is by complete the practice quizzes (below):

{:.info}
> ## Written Portion Practice Problems
> Half of quiz 2a will be paper-based. For this portion, you will not be able to use a computer, but you may bring a 1-page cheatsheet. <a href="https://docs.google.com/document/d/1TaFmHDe2Bozqjbvj2x7_vSj7F8AYdxT7R_9e88iVH2g/edit?usp=sharing" target="_blank">Here are some practice problems</a> that you can use to prepare for the paper portion of the quiz.

## Hands-On Coding Portion

Please download the starter files (below) and complete the tasks described below. Read the instructions that are outlined under each task **very carefully.** You must complete each exercise exactly as the instructions indicate to receive full credit. Otherwise, you will receive partial credit for the parts you correctly completed.

<a href="/spring2025/course-files/practice-quizzes/quiz02.zip" class="nu-button">Quiz 2 Starter Files <i class="fas fa-download"></i></a> 

## 1. Change Colors
Open the `exercise01` folder and add click event handlers to all of the div tags. When a div element is clicked, its background should change color (pick any color you like). When you’re done, your page should look like the demo shown below:


<img class="medium frame" src="/spring2025/assets/images/practice-quizzes/quiz02/exercise01.gif" />


## 2. Draw a Monster

Open the `exercise02` folder and create a function called `drawMonster` that draws a picture of a monster as pictured below. The function should have the following parameters defined (in order):
1. `x` (number) -- the x-coordinate of the center of the square(s).
2. `y` (number) -- the y-coordinate of the center of the square(s).
3. `size` (number) -- the width of the larger square. 
4. `color` (number) -- the color of the monster's face.
5. `isSurprised` (boolean) -- whether or not the monster should look surprised

If the argument for `isSurprised` is set to true, a "surprised mouth" should be drawn (smaller). Otherwise, a "regular mouth" should be drawn. When I invoke your function as follows (within the `setup()` function)...


```js
drawMonster(100, 100, 150, '#0bc9cd', false);
drawMonster(300, 200, 75, '#8093f1', true);
drawMonster(100, 325, 100, '#8093f1', false);
drawMonster(250, 375, 125, '#7fb285', true);
drawMonster(550, 200, 250, '#7fb285', false);
```

...the image pictured below should be drawn to the screen:

<img class="medium frame" src="/spring2025/assets/images/practice-quizzes/quiz02/exercise02.png" />

**Implementation suggestions (optional):** 
* Use p5.js's built-in <a href="https://p5js.org/reference/#/p5/rect">rect function</a>.
* If you include this statement, `rectMode(CENTER);` the `rect()` function will treat the x- and y-coordinates as the center of the rectangle (instead of as the top left-hand corner). You can read more about rectMode <a href="https://p5js.org/reference/#/p5/rectMode" target="_blank">here</a>. 




## 3. Course Viewer

Open the `exercise03` folder and examine all of the files. Inside of `main.js`, there is a `fetchCourses` function (already built for you) that fetches all of the UNCA course offerings for Spring, 2023: (<a href="https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/">here</a>). Note that by modifying the year or term in the URL string, you can also view course offerings from previous semesters. Your job is to:

1. Modify the *function body* of the `displayResults(courses)` function so that it outputs to the `#results` element only courses that offered within the **CSCI department.** You may use any kind of loop that you like.
2. Ensure that your HTML snippet displays the following information for each course (using a template literal):
    * Title
    * Instructor
    * Location
    * Days (i.e., which days does the course meet?)
3. Location and Days may be `null`. That's OK for this exercise (though in real life, you'd probably want to output a friendlier message).

<img class="medium frame" src="/spring2025/assets/images/practice-quizzes/quiz02/exercise03.png" />

**Hints**
* Loop through the `courses` array.
* If the current course's `Department` property is "CSCI", then insert an HTML representation of the course into the `<div class="results"></div>` container. 
* Partial credit will be given.
* We went over this in Lectures 22-24 (and there are lecture videos that you can even follow along with).
* A sample of the HTML representation of a course is shown below, and also in `exercise03/template.html`:

```html
 <section class="course">
    <h3>NM 101.001: Digital Design Principles</h3>
    <ul>
        <li>Instructor: Cosette, Ashe</li>
        <li>Location: OWE 305</li>
        <li>Days: MW</li>
    </ul>
</section>
```



## 4. DOM Manipulation 
Open the `exercise04` folder and add event handlers to all of the buttons. When a button is clicked, the image tag should display the corresponding animal (see the `images` folder), and there should be a label below the image describing the picture. When you're done, your page should look like the animation shown below:

<img class="medium frame" src="/spring2025/assets/images/practice-quizzes/quiz02/animals.gif" />

## 5. Functions
Open the `exercise05` folder and create a function called `drawElmo` that draws a picture of Elmo. The function should have the following parameters defined (in order):
1. `x` (number) -- the x-coordinate of the center of the circle(s).
2. `y` (number) -- the y-coordinate of the center of the circle(s).
3. `size` (number) -- the diameter of the larger circle. 
4. `color` (number) -- the color of Elmo's face.
5. `hasNose` (boolean) -- whether or not Elmo should have a nose (just default the color to a reddish color).

If the argument for `hasNose` is set to true, a nose is drawn. Otherwise, no nose is drawn. A decent looking nose can be made with the ellipse function...
```js
fill('#db5461');
ellipse(500, 500, 70, 100);  // x, y, width, height (but yours needs to scale)
```

...but of course yours will need to be dynamically positioned / scaled according to the function arguments (just like you've been doing for the past several weeks).

When I invoke your function as follows (within the `setup()` function)...

```js
drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn
```

...the image pictured below should be drawn to the screen:

<img class="medium frame" src="/spring2025/assets/images/practice-quizzes/quiz02/elmos.png" />


## 6. Loops + Conditionals

Open the `exercise06` folder. Inside of `main.js`, write a program, using any kind of loop you want, that draws all of the pictures to the screen where the `is_favorite` property is set to true. You don't have to worry about formatting (the CSS), so long as following 8 images are displayed:

<img class="medium frame" src="/spring2025/assets/images/practice-quizzes/quiz02/photos.png" />

**Hints**
* Loop through the `photos` array.
* If the current photo's `is_favorite` property is set to true, append an image element (`img` tag) to the `<div class="images"></div>` container.
* Consider using a template literal. 
* Partial credit will be given.