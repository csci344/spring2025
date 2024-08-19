---
layout: assignment-two-column
title: "JavaScript: Event Handlers"
type: tutorial
abbreviation: Tutorial 5
draft: 1
points: 6
num: 5
start_date: 2024-09-20
due_date: 2024-09-23
---


## Introduction 
The goal of today's tutorial is to:
1. Help you practice using JavaScript to target and modify HTML elements in your DOM Tree.
2. Continue practicing your CSS skills.
2. Encourage you to keep thinking about improving the accessibility of your website.

## Cheatsheet
Below is a cheatsheet (below) with examples of different selector methods and approaches to updating the DOM.

### Selector Methods 

| Method | Example |
|--|--|
| getElementById() | document.getElementById("my_element") |
| querySelector() | document.querySelector("#my_element")<br>document.querySelector("p")<br>document.querySelector(“.my-announcements") |
| querySelectorAll() | document.querySelectorAll("p") |
| getElementsByTagName() | document.getElementsByTagName("div") |
| getElementsByClassName() | document.getElementsByClassName(".panel") |

### Some examples of HTML attributes you can modify

| Attribute | Example |
|--|--|
| className | document.querySelector("div").className = "panel"; |
| innerHTML | document.querySelector("div").innerHTML = "&lt;p&gt;hi&lt;/p&gt;"; |
| src (for images) | document.querySelector(".my_image").src = "sponge_bob.png"; |
| href (for links) | document.querySelector(".my_link").href = 'https://www.wikipedia.org'; |


### Some examples of style properties you can modify

| Property | Example |
|--|--|
| width | document.querySelector("div").style.width = "200px"; |
| height | document.querySelector("div").style.width = "200px"; |
| background-color | document.querySelector("div").style.backgroundColor = "hotpink"; |
| border-width | document.querySelector("div").style.borderWidth = "5px"; |
| padding | document.querySelector("div").style.padding = "10px"; |
| display | document.querySelector("div").style.display = "none"; |

## Your Tasks

<a href="/fall2024/course-files/tutorials/tutorial04.zip" class="nu-button">Download Tutorial 4 <i class="fas fa-download"></i></a> 

Please download the tutorial04.zip file, unzip it, and move the tutorials folder inside of your `csci344/tutorials` folder. Then complete the tasks:

### 1. Font Size Adjuster
Open font-switcher/index.html in VS Code, and note the HTML tags. Also note that within the header tag there is a script tag that links to your JavaScript file:

```html
<script src="index.js" defer></script>
```

The keyword `defer` means that the script won't run until your entire web page is loaded.


Open `01-font-switcher/index.html`:
1. Attach the `makeBigger()` event handler to the `#bigger` button.
2. Attach the `makeSmaller()` event handler to the `#smaller` button.

Next, open `01-font-switcher/index.js` and, modify the body of the `makeBigger` and `makeSmaller` functions so that they update the font size of the `div.content` element and the `h1` element. There should be at least two statements within the body of each function (one to target and manipulate `div.content`, and one to target and manipulate `h1`). When you're done, your web page should look like this:

<img class="large frame" src="/fall2024/assets/images/tutorials/tutorial04/font-switcher.gif" />


### 2. Theme Switcher
Another way to make your site more accessible is to create a "high-contrast" stylesheet or CSS class. For this exercise, please do the following:

1. Open `02-theme-switcher/index.js` and attach a click event handler to each of the four of the buttons in the nav bar. 
2. Each event handler should modify the class of the `body` tag to match the theme of the button that was clicked (just like we did in class for Lecture 10). 
    * The available theme classes are: `ocean`, `desert` and `high-contrast`. To see the themes, open the `style.css` file and scroll to the bottom.
3. If the `default` button is clicked, just unset the class on the body tag.
4. [Optional] If you have time, try creating your own theme in the `../style.css` file and creating another button so that when you click on the new button, your theme shows up.

When you're done, your web page should look like this:

<img class="large frame" src="/fall2024/assets/images/tutorials/tutorial04/theme-switcher.gif" />

### 3. Dyslexia Mode (Recommended, but Optional)
In part 3, you will use JavaScript to create a method for people with dyslexia to more easily read your web page. This technique is based on this artice: <a href="https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/" target="_blank">Adding A Dyslexia-Friendly Mode To A Website</a>. Please complete the following tasks:

1. In `style.css`, create a new class called `.dyslexia-mode`. 
2. Following the recommendations from the Smashing Magazine article above, ensure that your class does the following:

    {:.compact}
    * Adjust the letter and word spacing to the recommended settings
    * Disables ligatures
    * Modify the line spacing
    * Modify either the font weight (to be bolder) or the color (to be darker)
    * Make the font-size bigger
    * Narrow the line width (lines that are too long in the horizontal direction are hard to read)
3. When you're done, create a button and add the needed functionality to enabled the user to toggle the "Dyslexia Mode" on and off.
4. Note that the Smashing Magazine also makes use of localStorage so that the site "remembers" the users' preferences for the next time.

When you're done, your web page should look like this:

<img class="large frame" src="/fall2024/assets/images/tutorials/tutorial04/dyslexia.gif" />

## What to Submit
Please make sure that you have completed the following:

{:.checkbox-list}
* Implemented the font size adjuster
* Implemented the theme switcher
* Implemented "dyslexia mode" (optional, but recommended)

When you're done, zip your entire `tutorial04` folder and upload it to the Moodle under **Tutorial 4**.
