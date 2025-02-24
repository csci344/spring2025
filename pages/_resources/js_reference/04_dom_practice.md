---
layout: two-column-resources
title: DOM Practice Problems
nav_order: 4
parent: JavaScript Resources
---

## 1. Basic DOM Selection
Write JavaScript code to:
1. Select an element with the ID "main-header" and change its text to "Updated Header."
1. Select the first `<li>` element in an unordered list.
1. Select all elements with the class "highlight" and change their background color to yellow.
1. Select all paragraph elements and add the class "text-content" to them.
1. Select all images on the page and log their src attributes.

## 2. DOM Creation and Insertion
Complete the following tasks:
1. Create a new `<div>` element and add it to the end of the body
1. Create a button element with the text "Click Me" and insert it before an element with ID "target"
1. Create an unordered list with 3 list items (your favorite foods) and append it to an element with ID "menu"

## 3. Event Handling
Implement the following interactions:
1. Add a click event listener to a button that toggles a "dark-mode" class on the body
1. Add an image to the page body every time the user clicks a button.
1. Create a button that, when clicked, changes the background color of the page to a random color.

## 4. Dynamic Content
Build the following features:
1. Create a todo list where users can add and remove items.
1. Implement a "read more" button that shows hidden text.
1. Show and hide a div when a button is clicked (like the hamburger menu we made in class).


## 5. Data and DOM Integration
Practice working with data arrays and DOM manipulation:

### 1. Display Books
Given this array of books...
```js
const books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, cover: 'hobbit.jpg' },
    { title: 'Dune', author: 'Frank Herbert', year: 1965, cover: 'dune.jpg' },
    { title: 'Foundation', author: 'Isaac Asimov', year: 1951, cover: 'foundation.jpg' }
];
```
...create a function that generates a book card for each book and displays them in a grid. Each card should show the book's cover, title, author, and year.


### 2. Image Gallery
Given this array of images...
```js
const gallery = [
    { url: 'nature1.jpg', caption: 'Mountain Lake', tags: ['nature', 'water'] },
    { url: 'nature2.jpg', caption: 'Forest Path', tags: ['nature', 'trees'] },
    { url: 'city1.jpg', caption: 'City Skyline', tags: ['urban', 'night'] }
];
```

...create an image gallery.


## Sample Solutions
Here's an example solution for the first problem in section 1:

```js
const header = document.querySelector('#main-header');
header.textContent = 'Updated Header';
```