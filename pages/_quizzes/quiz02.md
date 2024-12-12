---
layout: two-column
title: "Quiz 2: Web Dev Take Home Exam"
type: quiz
draft: 0
num: 2
abbreviation: "Quiz 2"
due_date: 2024-12-13
---

Quiz 2 is designed to be a 2 hour exam. You will have a 48 hour window to complete it. It's due at midnight on 12/13, but you are encouraged to complete it as soon as possible. 


{:.info}
> ## Ground Rules & Guidelines
> Please read the following instructions carefully:
> 1. You may use past code you wrote, course sample files, the Internet, and your notes to complete this exam.
> 1. You may not communicate with anyone during the exam.
> 1. You may not use ChatGPT.
> 1. You should limit yourself to two hours to complete the exam
> 1. Partial credit will be given, so try to complete as much of each problem as possible – even if you don’t get everything working. You can also leave comments so that I can follow your thinking.
> 1. To submit this exam, zip your entire COMPLETED final-exam folder to the Moodle by 11:59PM (hard deadline). 
> 1. Goes w/o saying, but saying it: **It is your responsibility to ensure that you don’t “accidentally zip the starter files.”**


<a href="/fall2024/course-files/quizzes/quiz02.zip" class="nu-button">Quiz 2 Starter Files <i class="fas fa-download"></i></a>

## Task 1: Create a getBusinesses Function [20pts]
Create an asynchronous function called `getBusinesses` in `task01/main.js` that queries the Yelp API and returns a list of business objects matching the query. Your function should take three arguments…
1. search_term (search term for finding businesses)
2. location  (location of the business)
3. num_results (how many results to return)
…and return a list of businesses that match the query.

The endpoint and a sample query are provided for you below:
<table>
<tr>
    <th>Endpoint:</th>
    <td>
        <a href="https://www.apitutor.org/yelp/simple/v3/businesses/search" target="_blank">https://www.apitutor.org/yelp/simple/v3/businesses/search</a>
    </td>
</tr>
<tr>
    <th>Parameters:</th>
    <td>
        <ul>
            <li><strong>q</strong> (search term for finding businesses)</li>
            <li><strong>location</strong> (location of the business)</li>
            <li><strong>limit</strong> (number of results to return)</li>
        </ul>
    </td>
</tr>
</table>


### Testing Your Code
Test your `getBusinesses` function by:
1. Uncommenting the test code at the bottom of `task01/main.js`
1. Previewing `task01/index.html` in your browser, and 
1. Looking at the JavaScript console (using the browser’s built-in developer tools) to ensure that that data returned by the query is accurate.  



## Task 2: businessToHTML Function [20pts]
Create a function called `businessToHTML` in `task02/main.js` that takes a business object as an argument and returns an HTML representation of the business that displays the following information:
1. The name of the business
1. The address of the business
1. An image of the business
1. The rating of the business
1. The price symbol of the business (the dollar signs). 
    * If price is not defined, display an empty string instead.
1. The number of reviews associated with the business

Your HTML representation should produce some HTML that renders something like this (CSS not important):

<img class="small" src="/fall2024/assets/images/quizzes/quiz02/quiz02-demo.png" alt="Demo image of output" />


### Testing Your Code
Test your `businessToHTML` function by:
1. Uncommenting the test code at the bottom of `task02/main.js`
1. Previewing `task02/index.html` in your browser, and 
1. Looking at the JavaScript console (using the browser’s built-in developer tools) to ensure that that HTML generated is accurate. 


## Task 3: Create a User Interface [60pts]
For your last task, you will implement the functionality described below in the `task03` folder. Start by previewing `task03/index.html` in Live Server to see what the interface looks like. 

### 3.1. Query Yelp and Output the Results to the Browser UI (40pts)
You will modify the HTML and JavaScript as needed so that when search button is clicked, your program:
* Queries the Yelp API for the first 10 businesses that match the user’s search term and location preferences, and
* Displays all of the business below the search box.

Don’t worry about the CSS. Make sure you fulfill all of the requirements for both subtasks.


### 3.2. Add a new parameter (20pts)
When you're done with 3.1, enhance your form by adding a checkbox indicating whether or not show businesses that are "open now":
* If the user checks the checkbox, you will only show businesses are open now,
* Otherwise, you will show any business that matches the location and search term.
* In order to check if something is "open now" in Yelp, you'll need to append the `&open_now=true` query parameter onto your URL (e.g., <a href="https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,%20NC&term=breakfast&limit=3&open_now=true" target="_blank">https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,%20NC&term=breakfast&limit=3&open_now=true</a>).

## What to Turn In
Please zip your entire final-exam folder and upload it to the Moodle. It is your responsibility to ensure that you didn’t accidentally submit the starter files.



