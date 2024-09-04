---
layout: assignment-two-column
title: CSS Exercises
type: tutorial
abbreviation: Tutorial 3
draft: 0
points: 6
num: 3
start_date: 2024-09-09
due_date: 2024-09-11
---

<style>
    img.xsmall {
        max-width: 250px;
        width: 60%;
    }
    img.large {
        max-width: 100%;
        width: 100%;
    }
</style>

## Overview
This tutorial can be completed individually or in pairs. Working in pairs does not mean "splitting up the work" so that each person does half of the tasks. Rather, both parties should complete the tasks and help one another as questions arise. Because this tutorial is a bit longer than the previous ones, you may have until **Wed, 9/11 at 11:59PM** to complete it. We will use class time on Friday and Monday to work on the tutorial.

### References
CSS is best understood through practice, and by consulting online resources as needed. Here are a curated list of resources that should help you complete your tasks:

#### Common CSS Properties and Techniques

{:.compact}
* <a href="../resources/css-rules-of-thumb">CSS Rules of Thumb</a> 
* <a href="../resources/selectors/">Selectors</a>
    * [CSS Diner](https://flukeout.github.io/)
* <a href="../resources/color/">Color</a>
* [CSS Units](../resources/units/)
* <a href="../resources/fonts/">Text &amp; Fonts</a>
* <a href="../resources/box-model/">The Box Model</a>
* <a href="../resources/css-grid/">CSS Grid</a>  
* <a href="../resources/media-queries/">Media Queries</a>    

#### CSS Grid

{:.compact}
* <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> <br>Please try to complete at least the first 10 levels 
* <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS Tricks: A Complete Guide to Grid</a>
* <a href="https://www.freecodecamp.org/news/learn-css-grid-by-building-5-layouts/" target="_blank">Learn CSS Grid by Building 5 Layouts in 17 minutes</a>

#### Flex

{:.compact}
* <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a>.<br>Please try to complete at least the first 10 levels
* <a href="https://university.webflow.com/lesson/flexbox-vs-grid" target="_blank">When to use Flex versus CSS Grid?</a>      
* <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">CSS Tricks: A Complete Guide to Flexbox</a>
* <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank">W3 Schools Flexbox Guide</a>    



## Your Tasks
<a href="/fall2024/course-files/tutorials/tutorial03.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>

Download the `tutorial03.zip` file, unzip it and move the unzipped tutorial03 folder into the `csci344/tutorials` folder (see diagram below).

```
csci344
    |-- tutorials
    │   |-- tutorial02
    │   |-- tutorial03
    |   ...
    |
    |-- homework
    │   |-- hw02
    |   ...
    |
    |-- lectures
        |-- lecture03
        |-- lecture05
        ...
```

### Task 1: CSS Selectors
Complete the first 14 steps of <a href="https://flukeout.github.io/" target="_blank">CSS Diner</a>. When you're done, take a screenshot showing you completed all of the levels. Your screenshot should have a green checkmark next to each level (like the one below but with checkmarks).

<img class="small frame" src="/fall2024/assets/images/tutorials/tutorial03/exercise01.png" />

### Task 2: Box Model Properties
Open `02-box-model` and modify the CSS so that the card looks like the screenshot shown below. You should only need to use [Box Model](../resources/box-model/) properties.

<img class="small" src="/fall2024/assets/images/tutorials/tutorial03/exercise02.png" />

### Task 3: Use an external stylesheet
Open `03-fonts` and use CSS to style the `h1` and `h2` tags using a Google font (example shown below). If you need help...
* Check out <a href="https://www.youtube.com/watch?v=E7QPO8P8nls" target="_blank">this video</a>
* You can Google "How to use a Google Font in CSS" 
{:.compact}

<img class="frame xsmall" src="/fall2024/assets/images/tutorials/tutorial03/exercise03.png" />

### Task 4: Center-align elements within a container

Open `04-flex` and create the layout shown below by editing the CSS file. You should not need to edit the HTML. Some hints:
* Put each of the containers into "flex" mode and give them a height of 100vh (vh stands for viewport height)
* To get the children of the container to stack vertically, experiment with the "flex-direction" property
* To align the items horizontally and vertically, experiment with the "justify-content" and "align-center" properties
{:.compact}


<img src="/fall2024/assets/images/tutorials/tutorial03/exercise04.gif" />

Please ensure that the following criteria are met:

{:.compact}
* The height of each `section` should be the same as the height of the browser window.
* The content inside of each `section` tag should be centered horizontally and vertically.
* Each `section` should have a different background color.
* The content in each `section` should be stacked vertically

### Task 5: Create a Navigation Bar
Open `05-navbar`, and try to make the following layout using flex. The navigation bar should also be anchored to the top so when you scroll, the nav bar stays fixed.

<img class="frame large" src="/fall2024/assets/images/tutorials/tutorial03/exercise05.png" />

Hints:

{:.compact}
* Both the `nav` and `ul` elements will need to be put into flex mode.
* Use the Chrome inspector to adjust the alignment properties.
* To turn the bullets off, set the `list-style-type` property to `none`.
* To create a fixed menu, see <a href="https://codepen.io/vanwars/pen/LYBdyzJ?editors=0100" target="_blank">this code sample</a>: 


### Task 6: Create this layout

Open `06-grid`, and try to make the following layout using CSS Grid. You should not need to modify the HTML file. Note that the gridlines are just for demonstration, but they won’t actually be visible.

<img class="small" src="/fall2024/assets/images/tutorials/tutorial03/exercise06b.png" />

**Note:** You do NOT have to center the text inside of each section unless you want to.

### Task 7: Create the Taco Temple layout

Open `07-tacotemple`, and try to make the following layout using CSS Grid. You should only have to edit the CSS file. 

<img class="large" src="/fall2024/assets/images/tutorials/tutorial03/tacotemple01.png" />

**A few hints:**
The `main` container is a grid with two columns -- no rows specified). See grid lines: 

<img class="large" src="/fall2024/assets/images/tutorials/tutorial03/tacotemple02.png" />

The `section` container is also a grid with two columns. See grid lines: 

<img class="small" src="/fall2024/assets/images/tutorials/tutorial03/tacotemple03.png" />

## What to turn in
Please create a link from your homepage to your completed tutorial 3 (see <a href="https://vanwars.github.io/csci344" target="_blank">Sarah's homepage</a> for an example). Then, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission.

* If you collaborated with someone, please list your partner's name in the comments section.
