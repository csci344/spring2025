---
layout: two-column
title: Quiz 2b. Makeup Javascript II
draft: 0
points: 20
due_date: 2025-05-05
---

{:.info}
> ## Ground Rules
> Please read the following instructions carefully:
> * You may use past code you wrote, course sample files, the Internet, and your notes to complete this exam.
> * You may not communicate with anyone during the exam.
> * You may not use ChatGPT or any integrated AI features (e.g., Cursor, CoPilot, etc.).
> * Partial credit will be given, so try to complete as much of each problem as possible – even if you don’t get everything working. You can also leave comments so that I can follow your thinking.
> * To submit this exam, zip your entire COMPLETED final-exam folder to the Moodle by 2:00PM (hard deadline). 
> * Goes w/o saying, but saying it: It is your responsibility to ensure that you don’t “accidentally zip the starter files.”

<a href="/spring2025/course-files/quizzes/quiz02b_makeup.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>


## Task 1: Create a getBusinesses Function [15pts]
In the `task01/main.js` file, create an asynchronous function called `getBusinesses` that queries the Yelp API and returns a list of business objects matching the query. Your function should take three arguments…
1. `search_term` (search term for finding businesses)
1. `location`  (location of the business)
1. `num_results` (how many results to return)
…and return a list of businesses that match the query.

**Querying the Yelp API**: The endpoint and a sample query are provided for you below:

* Endpoint: https://www.apitutor.org/yelp/simple/v3/businesses/search
* Parameters: 
    * `q` (search term for finding businesses)
    * `location` (location of the business)
    * `limit` (number of results to return)
* Sample Query: <a href="https://www.apitutor.org/yelp/simple/v3/businesses/search?q=pizza&location=Asheville+NC&limit=3" target="_blank">https://www.apitutor.org/yelp/simple/v3/businesses/search?q=pizza&location=Asheville+NC&limit=3</a>

{:.info}
> ### Testing Your Code
> Test your `getBusinesses` function by:
> 1. Uncommenting the test code at the bottom of the page.
> 1. Previewing `task01/index.html` in your browser, and 
> 1. Looking at the JavaScript console (using the browser’s built-in developer tools).  


## Task 2: businessToHTML Function [15pts]
Create a function called `businessToHTML` that takes a business object as an argument and returns an HTML representation of the business that displays the following information:

1. The **name** of the business
1. The **address** of the business
1. An **image** of the business
1. The **rating** of the business
1. The **price** symbol of the business (the dollar signs). If price is not defined, display an empty string instead
1. The **number of reviews** associated with the business

Your HTML representation should produce some HTML that renders something like this (CSS not important):

<img class="small frame" src="/spring2025/assets/images/quizzes/quiz-makeups/yelp-ss.png" />


{:.info}
> ### Testing Your Code
> Test your `businessToHTML` function by:
> * Previewing task02/index.html in your browser, and 
> * Looking at the JavaScript console (using the browser’s built-in developer tools).  


## Task 3: Implement the User Interface [20pts]
Please implement a web page (in the `task03` folder) so that when the “Search” button is clicked, all matching businesses that meet the search criteria are displayed to the screen (assume that the limit is 10, don't worry about the CSS).

You are encouraged to use the `businessToHTML` and `getBusinesses` functions that you just made. If you have successfully completed the task, your form should look display the results of the user's query to the DOM as shown below:

<img class="large" src="/spring2025/assets/images/quizzes/quiz-makeups/yelp-ui.png" />


## What to Turn In
Please zip your entire `quiz02b_makeup` folder and upload it to the Moodle. It is your responsibility to ensure that you didn’t accidentally submit the starter files.
