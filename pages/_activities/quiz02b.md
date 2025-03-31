---
layout: two-column
title: "Quiz 2b: JavaScript Programming with the DOM"
draft: 0
---

<style>
    li .highlight {
        line-height: 1.2rem;
    }
</style>


## Paper Quiz 
Once you complete the <a href="https://docs.google.com/document/d/1upKwfG7j8VMxIAHqA5XzIDIx5TztX8k1powcHyvTfaU/edit?usp=sharing" target="_blank">written portion of the quiz</a>, please complete the tasks below.

## Set-Up

<a href="/spring2025/course-files/quizzes/quiz02b.zip" class="nu-button">Quiz 2b Starter Files <i class="fas fa-download"></i></a>

* Download the starter files and unzip them. They should be unzipped in a folder called `quiz02b`.
* Create a `quizzes` folder inside of your `csci344` folder. Move your `quiz02b` folder into your `csci344/quizzes` folder.
* Open your entire `csci344` folder in VS Code.

Your directory structure should look something like this (it's OK if your file structure looks different, so long as the quizzes folder looks like the one below):

```bash
csci344
├── homework
├── lectures
├── quizzes
│   ├── quiz01
│   ├── quiz02a
│   └── quiz02b
├── tutorials
...
```

## Task 1: Analyzing User Data [20pts]
Please answer the following two questions based on the `users` array, located in `task01/main.js` and displayed below:

```js
const users = [
    { id: 1, name: "Alice", age: 25, isActive: true, role: "admin" },
    { id: 2, name: "Bob", age: 30, isActive: false, role: "user" },
    { id: 3, name: "Charlie", age: 22, isActive: true, role: "moderator" },
    { id: 4, name: "David", age: 35, isActive: true, role: "user" },
    { id: 5, name: "Eve", age: 28, isActive: false, role: "admin" },
    { id: 6, name: "Frank", age: 40, isActive: true, role: "moderator" },
];
```

### 1.1. Array of usernames [10pts]
Inside of `task01/main.js`, use the `map` array method to create an array of names (array of strings). Output this array to the console. Expected result:

<img class="xsmall frame" src="/spring2025/assets/images/quizzes/quiz02b/task1.1.png" />

### 1.2. Array of active users [10pts]
Inside of `task01/main.js`, use the `filter` array method to create an array of only active users. Output this array to the console. Expected result:

<img class="medium frame" src="/spring2025/assets/images/quizzes/quiz02b/task1.2.png" />

## Task 2: Fetch and Display Wikipedia Data [20pts]
### 2.1. Fetching Wikipedia data [10pts]
Create an asynchronous function called `getWikipediaInfo` in `task01/main.js`:
* The function should take a `searchTerm` as an argument and return a data object that contains Wikipedia information pertaining to the search term.
* The function should query this endpoint using the browser's built-in `fetch` function:
    * `https://en.wikipedia.org/api/rest_v1/page/summary/<some_search_term>` . 

**Here are some sample queries** (click to see the data):
* <a href="https://en.wikipedia.org/api/rest_v1/page/summary/Western Carolina" target="_blank">https://en.wikipedia.org/api/rest_v1/page/summary/Western Carolina</a> (search term: **Western Carolina**)
* <a href="https://en.wikipedia.org/api/rest_v1/page/summary/UNC Asheville" target="_blank">https://en.wikipedia.org/api/rest_v1/page/summary/UNC Asheville</a> (search term: **UNC Asheville**)
* <a href="https://en.wikipedia.org/api/rest_v1/page/summary/UNC Charlotte" target="_blank">https://en.wikipedia.org/api/rest_v1/page/summary/UNC Charlotte</a> (search term: **UNC Charlotte**)

Notice that even though the search term does not match the title of the article exactly, the Wikipedia API is smart enough to figure out the correct article and redirect to it.

When you're done implementing your `getWikipediaInfo` function, test it by:

* Uncommenting the `testGetWikipediaArticles()` function at the bottom of `task01/main.js`
* Previewing task01/index.html in your browser, and
* Looking at the JavaScript console (using the browser’s built-in developer tools) to ensure that that data returned by the various queries is accurate.


### 2.2. Displaying the data visually [10pts]
Create another function in `task01/main.js` called `dataToHTML`. This function will take a Wikipedia data object as an argument and return an HTML representation of the Wikipedia page that includes:

* A thumbnail of the image on the Wikipedia page (as an `img` tag).
* The `title` of the Wikipedia page (as an `h2` tag)
* The `extract_html` data field (no tag, since this information is already represented as HTML).

Here's a suggested HTML format:

```html
<section class="card">
    <img src="https://picsum.photos/150">
    <div>
        <h2>Title of Wikipedia Page</h2>
        Information from the "extract_html" data field
    </div>
</section>
```

#### Testing your `dataToHTML` function
Test your `dataToHTML` function by:
* Uncommenting `testDisplayArticles()` at the bottom of task01/main.js, and
* Previewing task01/index.html in your browser

If you did it correctly, you should see a screen that looks like the one pictured below:

<img class="large frame" src="/spring2025/assets/images/quizzes/quiz02b/wikipedia.png" />


## What to Submit

### Before you submit

Verify that you've completed **both required tasks**. Then, add the links to your tasks to your homepage under the quiz section (see Sarah's homepage for an example): <a href="https://vanwars.github.io/csci344/" target="_blank">https://vanwars.github.io/csci344/</a>.

### Submit to the Moodle
**Please Read Carefully:** To submit Quiz 2b, paste the following links into the Moodle under the Quiz 2b submission section:

1. A link to your **homepage** on GitHub pages.
2. A link to your GitHub **code repository** (where your code files are stored).

If your GitHub is not working for whatever reason, just zip your **COMPLETED** `quiz02b` folder and upload it to the Moodle.

{:.info}
> #### A note on timestamps
> When I am grading the quiz, I will look at the timestamps for your Quiz 2b submission on GitHub to ensure that I am only grading code that was submitted before the end of class on the day of the quiz.