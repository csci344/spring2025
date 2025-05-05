---
layout: two-column
title: Quiz 2a. Makeup Javascript I
draft: 0
points: 20
due_date: 2025-05-05
---

<style>
    img.preview {
        max-width: 60%;
        min-width: 500px;
    }
</style>

{:.info}
> ## Ground Rules
> Please read the following instructions carefully:
> * You may use past code you wrote, course sample files, the Internet, and your notes to complete this exam.
> * You may not communicate with anyone during the exam.
> * You may not use ChatGPT or any integrated AI features (e.g., Cursor, CoPilot, etc.).
> * Partial credit will be given, so try to complete as much of each problem as possible – even if you don’t get everything working. You can also leave comments so that I can follow your thinking.
> * To submit this exam, zip your entire COMPLETED final-exam folder to the Moodle by 2:00PM (hard deadline). 
> * Goes w/o saying, but saying it: It is your responsibility to ensure that you don’t “accidentally zip the starter files.”

After completing the <a href="">paper-based exam</a>, please complete **2 of the 3 exercises** below (pick any two that you want).

<a href="/spring2025/course-files/quizzes/quiz02a_makeup.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>


## 1. Dynamically Adding Images
Open the `exercise01` folder and add event handlers to the "Add Cat" and "Add Dog" buttons so that animal images get appended to the **`<section id="animals"></section>`** element, as shown in the animation below:

<img class="medium frame" src="/spring2025/assets/images/quizzes/quiz-makeups/animal-additions.gif" />

### Hints
Within each of your function definitions...
1. Create an HTML img using the template literal (backticks):<br> **``let snippet = `<img src="dog.jpg" />`; ``**
2. Use the section's built-in `insertAdjacentHTML()` function to append the snippet to the appropriate container (like we did during the last two weeks of class).

## 2. Concentric Squares
Open the `exercise02` folder and preview `index.html` in the browser. Note that it shows the following image...

<img class="medium frame" src="/spring2025/assets/images/quizzes/quiz-makeups/squares-before.png" />

Your job is to modify the `drawSquares(...)` **function definition** so that it honors the parameters. If you did it correctly, your picture should look like the image below:

<img class="medium frame" src="/spring2025/assets/images/quizzes/quiz-makeups/squares-after.png" />


## 3. Functions & Loops
Open the `exercise03` folder and examine all of the files. Inside of `main.js`, there is a `fetchCourses` function (already built for you) that fetches <a href="https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2025/fall/" target="_blank">all of the UNCA course offerings for Fall, 2025</a>. Note that by modifying the year or term in the URL string, you can also view course offerings from previous semesters. 

### Your job
1. Modify the *function body* of the `displayResults(courses)` function so that it outputs to the `#results` element only courses that offered within the **CSCI department.** You may use any kind of loop that you like.
2. Ensure that your HTML snippet displays the following information for each course, using a template literal:
    * Title
    * Location
    * Days (i.e., which days does the course meet?)
3. Location and Days may be `null`. That's OK for this exercise (though in real life, you'd probably want to output a friendlier message).

<img class="large frame" src="/spring2025/assets/images/quizzes/quiz-makeups/courses.png" />

**Hints**
* Loop through the `courses` array.
* If the current course's `Department` property is "CSCI", then insert an HTML representation of the course into the `<div class="results"></div>` container. 
* Partial credit will be given.
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

## What to Submit
**Please read carefully:** Doublecheck your work to make sure you've completed at least 2 of the 3 tasks. Then, update your homepage by adding a linking to the exercises you completed. After committing and syncing your changes to GitHub, paste a link to your **homepage** on GitHub pages into the Moddle.

* If your GitHub is not working for whatever reason, just zip your **COMPLETED** `quiz02a_makeup` folder and upload it to the Moodle.