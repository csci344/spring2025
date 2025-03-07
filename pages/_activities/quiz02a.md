---
layout: two-column
title: "Quiz 2a: JavaScript Programming with the DOM"
draft: 0
---

<style>
    li .highlight {
        line-height: 1.2rem;
    }
</style>


## Paper Quiz 
Once you complete the <a href="https://docs.google.com/document/d/1mB1Ii9HD07GNZ0kR2-LXsznm31YbEoyoQJgnfVA7EJg/edit?usp=sharing" target="_blank">written portion of the quiz</a>, please complete the tasks below.

## Set-Up

<a href="/spring2025/course-files/quizzes/quiz02a.zip" class="nu-button">Quiz 2a Starter Files <i class="fas fa-download"></i></a>

* Download the starter files and unzip them. They should be unzipped in a folder called `quiz02a`.
* Create a `quizzes` folder inside of your `csci344` folder. Move your `quiz02a` folder into your `csci344/quizzes` folder.
* Open your entire `csci344` folder in VS Code.

Your directory structure should look something like this (it's OK if your file structure looks different, so long as the quizzes folder looks like the one below):

```bash
csci344
├── homework
├── lectures
├── quizzes
│   └── quiz01
│   └── quiz02a
├── tutorials
...
```

## Task 1: Theme Switcher
1. Open the `task01` folder. 
1. Write a function in `main.js` that adds the `dark-mode` class to the `body` tag if it is not already present, and removes the `dark-mode` class from the `body` tag if it is present. 
1. Attach the function you just wrote to the button's click event. 

See the animation below:

<img class="medium frame" src="/spring2025/assets/images/quizzes/quiz02a/task01.gif" />

## Task 2: Add the Same Card
1. Open the `task02` folder. 
1. Write a function in `main.js` that adds the following HTML inside the `<div id="track-list"></div>` element when the "Show Track" button is clicked. 

    ```html
    <section class="track">
        <img src="https://i.scdn.co/image/ab67616d0000b273f6e31941d10e4819d290af41">
        <div>
            <h3>When the Sun Hits</h3>
            <p>Slowdive</p>
            <p>Souvlaki</p>
        </div>
    </section>
    ```
1. Then attach this function to the button's click event handler. 

See the animation below:

<img class="medium frame" src="/spring2025/assets/images/quizzes/quiz02a/task02.gif" />

## Task 3: Add a Card for Each Track 
1. Open the `task03` folder. 
1. Write a function that generates and appends a card for each element in the `tracks` array (located in `main.js`) to the `<div id="track-list"></div>` element. 
1. Attach this function to the button's click event. Each card should look like the one in task 2 (feel free to use the same HTML snippet), but the information displayed should reflect the track data. 

See the demo shown below:


<img class="medium frame" src="/spring2025/assets/images/quizzes/quiz02a/task03.gif" />


## Extra Credit: Filter the Tracks (Up to 10 Points)
1. Open the `task04-extra-credit` folder. 
1. Write a function that generates a card for each element in the `tracks` array **matching the search term typed into the text box**. 

See the demo shown below:


<img class="medium frame" src="/spring2025/assets/images/quizzes/quiz02a/task04-ec.gif" />




## Submit to the Moodle

### Before you submit

Verify that you've completed **all 3 of the required tasks** (and the one optional task if you got to it). Then, add the links to your tasks to your homepage under the quiz section (see Sarah's homepage for an example): <a href="https://vanwars.github.io/csci344/" target="_blank">https://vanwars.github.io/csci344/</a>.

### Submit to the Moodle
**Please Read Carefully:** To submit Quiz 2a, paste the following links into the Moodle under the Quiz 2a submission section:

1. A link to your **homepage** on GitHub pages.
2. A link to your GitHub **code repository** (where your code files are stored).

If your GitHub is not working for whatever reason, just zip your **COMPLETED** `quiz02a` folder and upload it to the Moodle.

{:.info}
> #### A note on timestamps
> When I am grading the quiz, I will look at the timestamps for your Quiz 2 submission on GitHub to ensure that I am only grading code that was submitted before the end of class on the day of the quiz.