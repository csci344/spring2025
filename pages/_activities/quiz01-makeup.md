---
layout: two-column
title: Quiz 1 Makeup (HTML + CSS)
draft: 0
points: 20
due_date: 2025-05-05
---

<style> 
    img.x-small {
        width: 300px;
        max-width: 300px;
    } 
    img.small {
        width: 444px;
        max-width: 500px;
    }

    table.layout {
        width: 820px !important; 
    }
    table.layout,
    table.layout tr,
    table.layout th
    table.layout td  {
        border-width: 0 !important;
    }
</style>

{:.blockquote-no-margin}
> ## Should I take this part of the exam?
> * If you are happy with your Quiz 1 score (check Moodle to see), you **DO NOT** need to take this part of the exam. 
> * If you do want to replace your Quiz 1 score, download the starter files and follow the instructions below.

You are going to build the webpage pictured below:

### Desktop
<img class="medium" src="/spring2025/assets/images/quizzes/quiz-makeups/ss-desktop.png" />

<table class="layout">
<tr>
    <td>
        <h3>Tablet</h3>
        <img class="small" src="/spring2025/assets/images/quizzes/quiz-makeups/ss-tablet.png" />
    </td>
    <td>
        <h3>Mobile</h3>
        <img class="x-small" src="/spring2025/assets/images/quizzes/quiz-makeups/ss-mobile.png" />
    </td>
</tr>
</table>



## Part 1: Setup
Please download the starter files below (if you haven't already):

<a href="/spring2025/course-files/quizzes/quiz01_makeup.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>

Then, inside of the `quiz01_makeup` folder, create a brand new HTML file called `index.html` that is in **the root** of the `quiz01_makeup` folder. If you did it correctly, your file structure should look like this:

```shell
quiz01_makeup
├── images
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   ├── img5.jpg
│   ├── img6.jpg
│   ├── img7.jpg
│   ├── img8.jpg
│   └── img9.jpg
├── index.html      <-- Your new HTML file
└── pages
    ├── about.html
    └── contact.html
```

Edit `index.html` file by adding an HTML “skeleton” with the following tags:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    
</body>
</html>
```

## Part 2: HTML Tasks (40 Points)
Edit the `index.html` pages as follows:

### 2.1. Metadata (2 Points)
1. Add a `title` tag inside of the `head` tag, with the display text of "Quiz 1 Makeup"

### 2.2. Header Section (12 Points)
1. Add a `header` tag inside the `body` tag (don’t get the head and the header tag confused). 
1. Inside the `header` tag, create an `h1` tag that displays the text "Quiz 1 Makeup"
1. Also inside the `header` tag and below the `h1` tag, create a navigation section using the `nav` tag. 
1. Inside of the `nav` tag, create three hyperlinks:
    * One that links to `contact.html` (in the pages folder) with the display text of “Contact”. Use a **relative path**.
    * One that links to `about.html` with the display text of “About Us”. Also use a **relative path**.
    * One that links to Instagram's home page, the display text of “Instagram”. Use an **absolute path**.
    {:.compact}

**Note:** you may **NOT** move the `contact.html` or `about.html` files outside of the `pages` folder. 

<img class="medium" src="/spring2025/assets/images/quizzes/quiz-makeups/header.png" />

### 2.3. Main Section (6 Points)
1. Below the `header` tag, create a `main` tag. 
1. Inside the `main` tag, create two children:
    * An h2 tag with the text of "Photo Gallery"
    * A section that has a class of "photo-container".
    {:.compact}

<img class="medium" src="/spring2025/assets/images/quizzes/quiz-makeups/main.png" />


### 2.4. Photo Container (16 Points)
Inside of the "photo-container" section you will make 9 div tags. 
* Each div tag should be assigned a class of `card`.    
* Each div tag will contain an `img` tag and a `p` tag (for the caption). 
    * Each `img` tag will point to one of the images in the `images` folder. 
    * Use a **relative path** for each image source. 
    * Don’t forget to use the `alt` attribute to give each image a description (for people who use a screen reader).
    {:.compact}

<img class="medium" src="/spring2025/assets/images/quizzes/quiz-makeups/photo-container.png" />

<center>...</center>


### 2.5. Footer (4 Points)
Create a footer section below your `main` section using the `footer` tag. Within the footer, create a paragraph tag that says “Copyright Your Name, 2023.”

<img class="medium" src="/spring2025/assets/images/quizzes/quiz-makeups/footer.png" />


## Part 3: CSS Tasks (56 Points)
Create a CSS file called `styles.css` that is a ***direct child*** of the `quiz01_makeup` folder. If you did it correctly, your file structure should look like this:

```shell
quiz01_makeup
├── images
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   ├── img5.jpg
│   ├── img6.jpg
│   ├── img7.jpg
│   ├── img8.jpg
│   └── img9.jpg
├── index.html
├── pages
│   ├── about.html
│   └── contact.html
└── styles.css          <-- Your new CSS file
```

Edit your `index.html` file by adding a link to your stylesheet. Then, complete the following tasks within `styles.css`:

### 3.1. Header & Nav Bar (16 Points)
1. Create some style rules for the `body` element:
    * Set the background color to a light gray (`#F0F4EF`)
    * Set the font family to `Arial, Helvetica, sans-serif`
    * Set the margin to `0`
    {:.compact}
1. Create some style rules for the `header` element:
    * Set the background color to `#222222`
    * Set the height to `10vh`
    * Set the left and right padding to `10vw`
    {:.compact}
1. Create some style rules for the `h1` element (and any relevant child elements) to:
    * Set the font color to `white`
    * Set the font size to `1.2em`
    {:.compact}
1. Create some style rules for `a` elements inside the `nav` element:
    * Set the link color to `white`
    * Set the text decoration to `none`
    {:.compact}

### 3.2. Custom Font (8 Points)
Use the “Tangerine” Google font to style the `h2` tag (see screenshot above).

### 3.3. Main (2 Points)
Set the left and right padding of the `main` tag to `10vw`.

### 3.4. Gallery Layout (10 Points)
Create some style rules for the `photo-container` class that implement the following requirements:
1. Use CSS Grid
2. Define **three** evenly spaced columns
3. Create a column gap and row gap of `30px`.
{:.compact}

### 3.5. Card Styling (10 Points)
Create some style rules for the `card` class that implement the following requirements:
1. The background should be white
2. The border should be solid and light gray
3. The image contained inside the card should span the full width of its div container
4. The caption should not be too close to the sides of the div
{:.compact}

### 3.6. Footer (2 Points)
Create some style rules to set the footer’s background color to `#222222`, and the footer’s text color to white.

### 3.7 Responsive Design with Media Queries  (8 Points)

1. When the width of the screen is less than `1200px`, the `photo-container` section should display **two** cards per row.
1. When the width of the screen is less than `600px`, the `photo-container` section should display **one** card per row.
{:.compact}

## Part 4: Accessibility Tasks (4 Points)
Run the WAVE extension and make sure there are no accessibility issues. Correct any issues that you find.


## What to Submit
**Please read carefully:** Doublecheck your work to make sure you've completed all of the tasks. Then, update your homepage by adding a linking to the index.html page you just completed. After committing and syncing your changes to GitHub, paste a link to your **homepage** on GitHub pages into the Moodle.

* If your GitHub is not working for whatever reason, just zip your **COMPLETED** `quiz01_makeup` folder and upload it to the Moodle.