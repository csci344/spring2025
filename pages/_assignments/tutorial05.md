---
layout: assignment-two-column
title: "JavaScript: Event Handlers"
type: tutorial
abbreviation: Tutorial 5
draft: 0
points: 6
num: 5
start_date: 2025-02-21
due_date: 2025-02-24
---

<style>
    .container > * {
        height: 400px;
        width: auto;
        max-width: 100% !important;
    }

    table {
        width: 90%;
        max-width: 100%;
    }
</style>

## Introduction 
The goal of today's tutorial is to:
1. Help you practice using JavaScript to target and modify HTML elements in your DOM Tree.
1. Continue practicing your CSS skills.
1. Exploring some common UX/UI widgets and how they're implemented using JavaScript.

<blockquote class="info">
{% include dom-manipulation.html %}
</blockquote>

## Your Tasks

<a href="/spring2025/course-files/tutorials/tutorial05.zip" class="nu-button">Download Tutorial 5 <i class="fas fa-download"></i></a> 

Please download the tutorial05.zip file, unzip it, and move the tutorials folder inside of your `csci344/tutorials` folder. Then complete the tasks:

### 1. Theme Switcher
Open `styles.css` and scroll down to ~line 70. You will see three classes ( `ocean`, `desert`, and `high-contrast`) which correspond to three different themes. If you apply any of these classes to the `<body></body>` tag and preview your HTML, you will see that the theme changes. Try it out! 

You job is to make the buttons dynamically change the theme of the web page as pictured below. When you're done, your web page should look like this:

<img class="large frame" src="/spring2025/assets/images/tutorials/tutorial05/theme-switcher.gif" />

### Hints:
1. Inside of `index.js`, create a single function called `changeClass()` that has one parameter, which will store the name of the class as a string.
2. Within the `changeClass()` function body, set the body's class attribute to the name of the class passed into the function. If the `default` button is clicked, just unset the class on the body tag.
3. Attach your `changeClass()` function to the click event of each button. Make sure you're passing in the correct argument. 
4. Use the cheatsheet associated with this tutorial to figure out how to modify the class attribute.

### Optional
If you have time, try creating your own theme in the `styles.css` file and creating another button so that when you click on the new button, your theme shows up.



### 2. Hamburger Menu
As you probably already know, a hamburger menu is a common design pattern for showing and hiding the navigation of your web page if you are on a mobile device. The logic of the hamburger menu implementation is as follows:

#### CSS Tasks (already done for you)
Preview the `index.html` and notices the responsive styling. Then take a look at the `styles.css` file and see what's going on. Please note the following:

* **Desktop View**: Navigation is showing. Hamburger menu button is hidden.
* **Mobile View**: Navigation is hidden. Hamburger menu is showing.
* **Additional Classes**
    * **Button styling**: If both the `menu-toggle` and `active` classes are added to the `button` element, the hamburger will morph into an "X", indicating that the menu is open.
    * **Mobile navigation**: If both the `nav-links` and `active` classes are added to the `ul` element, the menu will display on the right-hand side.

#### JavaScript (your task)
Your job is to modify the JavaScript file so that it achieves the effect shown below. Specifically:
* When the hamburger menu is clicked when the menu is hidden, the `active` class is **added to** both the `button` and `ul` elements.
* When the hamburger menu is clicked when the menu is visible, the `active` class is **removed from** both the `button` and `ul` elements.

**Hint**: Consider using the `classList.toggle("some_class")` method (see cheatsheet above, or google it).

#### Demo
<div class="container">
    <img class="small frame" src="/spring2025/assets/images/tutorials/tutorial05/hamburger.gif" />
    <img class="small frame" src="/spring2025/assets/images/tutorials/tutorial05/desktop-hamburger.png" />
</div>

### 3. Carousel
If you were on a front-end team and in need of a carousel, you would probably use a pre-made widget from an existing design system / UI kit. That said, it is useful to understand how these widgets work so that you understand the basic idea.

Given this, please open the `03-carousel` folder and make the following changes:
1. Add comments to the `index.js` file explaining what each of the statements does.
2. **[Optional]** 
    * Stylize the buttons using one of the font-awesome icons (or some other image or icon).
    * Change out the photos.
    * Make any additional stylistic changes you see fit.

> For this task, you may not use an AI assistant to comment the `index.js` code for you. YOU need to do it.




## What to Submit
Please make sure that you have completed the following:

{:.checkbox-list}
* Implemented the font size adjuster
* Implemented the hamburger menu
* Commented the carousel widget JavaScript code explaining how it works.

When you're done, please create a link from your homepage to each of your Tutorial 5 web pages (see <a href="https://vanwars.github.io/csci344" target="_blank">Sarah's homepage</a> for an example). Then, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission.

* If you collaborated with someone, please list your partner's name in the comments section.

