---
layout: assignment-two-column
title: "JavaScript: Practice with higher-order iteration functions"
type: tutorial
abbreviation: Tutorial 6
draft: 0
points: 6
num: 6
start_date: 2025-02-28
due_date: 2025-03-03
---

<style>
    .screenshot {
       width:60%;
       min-width: 500px;
    }
</style>


For Tutorial 6, you will make a UNCA Course Search interface for the Computer Science Department that works like this:

<img class="frame screenshot" src="/spring2025/assets/images/tutorials/tutorial06/demo-course-search.gif" />

Please download the starter files below and then complete the following tasks:

<a href="/spring2025/course-files/tutorials/tutorial06.zip" class="nu-button">Tutorial 6 Starter Files<i class="fas fa-download"></i></a> 

## I. Implement the helper functions

### 1. Filter functions
Implement two filter functions (which should return either true or false):
* `isClassFull`: This function will take a course object as an argument and return `true` if the course is full, and `false` if it is not.
* `doesTermMatch`: This function will take a course object as an argument and return `true` if the course "matches" the search term, and `false` if it does not.
    * Use your discretion to determine a good matching algorithm. For instance, you could return `true` if the search string matches (or partially matches) one or more of the data fields (Code, CRN, Title, one of the instructor's names, etc.).

```js
// Part 1.1a
const isClassFull = course => {
    // modify this
    return true;
}

// Part 1.1b
const doesTermMatch = course => {
    // modify this
    return true;
}
```

{:.info}
> #### Tips
> Use some of the <a href="https://www.javascripttutorial.net/javascript-string-methods/" target="_blank">JavaScript built-in string methods</a>. It also might be useful to convert everything to uppercase / lowercase. Some particularly useful methods to checkout:
> 
> * includes()
> * toUpperCase()
> * toLowerCase()



### 2. "Data to HTML" function
Implement the `dataToHTML` function, which takes a course object as an argument and returns an HTML string that represents the course.
* See the `index.html` file to examine the structure of the HTML "card" that represents a course.

```js
// Part 1.2
const dataToHTML = (course) => {
    // modify this to be more detailed
    return `
        <section class="course">
            ${course.Code}
        </section>
    `;
};
```

{:.info}
> #### Tips
> * Use a template literal (backticks).
> * Feel free to create some helper variables to format the string output.
> {:.compact}

## II. Implement the showMatchingCourses function / event handler

### Implement the showMatchingCourses function
To actually display relevant course "cards" to the screen, you will also need to implement a `showMatchingCourses` function. To do this, use the built-in **filter** and **forEach** higher-order array methods -- and any relevant DOM methods -- to build the interface. Specifically, you will:

1. Clear out the existing courses in the DOM.
1. Use the array's built in "filter" method, which takes a filter function as an argument, to return an array of objects that match the search criteria.
    * You will make use of the  `isClassFull` and `doesTermMatch` functions.
    * Consider chaining multiple invocations of the filter method to progressively winnow down the courses matching the search criteria.<br>For instance: `const matches = courseList.filter(isClassFull).filter(doesTermMatch)`).
1. Use the array's built in "forEach" method to:
    * Generate an HTML snippet of the course (by invoking the `dataToHTML` function), and
    * Insert the HTML snippet into the DOM (suggestion: use the `insertAdjacentHTML` method).

```js
// Part 2
const showMatchingCourses = () => {
    console.log(`Search term: ${searchTerm}`);
    console.log(`Only show open classes: ${openOnly}`);
    console.log(`Course data: ${courseList}`);

    // output all of the matching courses to the screen:
};
```

## III. What to Submit
When you’re done, please create a link from your homepage to your Tutorial 6 web page (see Sarah’s homepage for an example). Then, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission.

If you collaborated with someone, please list your partner’s name in the comments section.