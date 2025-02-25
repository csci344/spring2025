---
layout: assignment-two-column
title: "Practice with CSS: Reconstruct the Spotify Interface"
abbreviation: HW2
type: homework
due_date: 2023-02-20
ordering: 2
points: 16
draft: 1
---

<style>
    img.small-float {
        max-width: 200px;
    }

    img.large {
        max-width: 100%;
    }
</style>

<a class="nu-button" href="/spring2025/course-files/homework/hw02.zip">
    download starter files 
    <i class="fas fa-download"></i>
</a>


Now that you have some experience with CSS Grid and Flexbox (from [Tutorial 4](tutorial04), Lectures [6](../lectures/lecture-06)-[7](../lectures/lecture-07), [Quiz 1](../lectures/quiz-01), and [HW 1](../assignments/hw01)), you are going to implement elements of the Spotify UI (as pictured below). This week, you will be implementing the look-and-feel of the website. In a future assigment, you will actually be programming the interactions / data queries using JavaScript in order to pull down actual songs, images, and text down from the Spotify servers (and play some music).

Please read the instructions carefully and complete the 5 steps below, using the starter files.

<a href="{{site.baseurl}}/assets/images/homework/hw02/screen_1.png" target="_blank"><img class="large" src="{{site.baseurl}}/assets/images/homework/hw02/screen_1.png" /></a>

## 1. Left Navigation
In the `index.html` file, add Font Awesome icons (Spotify logo, home, search, and headphones) within the "aside" tag (pictured below) as shown in the screenshot below.

<img class="small-float" src="{{site.baseurl}}/assets/images/homework/hw02/sidebar.png" />

Note that the Font Awesome font reference is already included in the head of your `index.html` file. Your job is to search for relevant icons on the Font Awesome page and include them. For instance, to get the Spotify icon, take a look <a href="https://fontawesome.com/search?o=r&m=free" target="_blank">here</a>. Other than adding the icons, you shouldn't need to make any other changes to the HTML.

```html
<aside id="sidebar">
    <h1>
        <!--TODO: Font Awesome Icon Here -->
        Spotify
    </h1>
    <a href="#">
        <!--TODO: Font Awesome Icon Here -->
        Home
    </a>
    <a href="#">
        <!--TODO: Font Awesome Icon Here -->
        Search
    </a>
    <a class="selected" href="#">
        <!--TODO: Font Awesome Icon Here -->
        Your Library
    </a>
</aside>
```

In the `style.css` file, add some CSS style rules to make the UI look like the screenshot (pictured above). You can accomplish this any way you want, but consider using some combination of the approaches we've reviewed thus far (CSS Grid, flex, or the box model). Be sure to put all of the CSS related to the left navigation in the "Part A: Left Navigation" section:

```css
/***************************/
/* Part A: Left Navigation */
/***************************/

/* Your Code Here */

```

## 2. Header & Nav Styling
Next, style the `header` and `nav` sections to look like the the screenshot below:

<img class="large" src="{{site.baseurl}}/assets/images/homework/hw02/nav.png" />

You should not need to make any changes to the HTML (but you can if you want):

```html
<header>
    <a href="#" id="upgrade">Upgrade</a>
    <a href="#" id="profile">
        <i class="far fa-user"></i> Profile
    </a>
</header>
<nav>
    <a href="#">Playlists</a>
    <a href="#">Albums</a>
    <a class="selected" href="#">Artists</a>
</nav>
```

Like with Part A, try to achieve the alignment using flexbox or CSS Grid (e.g. flex-direction, justify-content, align-items) and the box model (e.g. padding, margin, height, width). Be sure to put all of the CSS related to the the header and nav sections in the "Part B: Header & Nav Styling" section:

```css
/********************************/
/* Part B: Header & Nav Styling */
/********************************/

/* Your Code Here */

```

## 3. Artists Panel
Next, you need to style the `section` cards that represent each Spotify artist (pictured below):

<img class="large" src="{{site.baseurl}}/assets/images/homework/hw02/artists.png" />

You should not need to make any changes to the HTML (but you can if you want):

```html
<article id="featured-content">
    <section class="artist-card" tabindex="0">
        <div>
            <img src="https://i.scdn.co/image/62b33d12e2b9a033cf77585f6e3d4b2c6b3a63a1" />
            <div class="card-footer">
                <div>
                    <h2>Taylor Swift</h2>
                    <p>Artist</p>
                </div>
                <!-- 
                    Button should only be visible when you hover / tab to the section.
                -->
                <button class="play-button">
                    <i class="fas fa-play"></i>
                </button>
            </div>
        </div>
    </section>
    ...
</article>
```

Again, try to achieve the alignment using flexbox, CSS Grid and/or the box model. Be sure to put all of the CSS related to the artist cards in the "Part C: Artist Panel" section:

```css
/*************************/
/* Part C: Artists Panel */
/*************************/

/* Your Code Here */

```

## 4. Create Responsive UIs
Create the following two responsive UIs shown below. If you're using more than 10-15 lines of code to achieve each of these layouts, you're on the wrong track. Add the CSS to make these responsive UIs to the "Part D: Responsive UIs" section of your `style.css`.

**Tablet:**  Use Flexbox to display albums 3-across.

<a href="{{site.baseurl}}/assets/images/homework/hw02/screen_3.png" target="_blank"><img class="medium" src="{{site.baseurl}}/assets/images/homework/hw02/screen_3.png" /></a>

**Mobile:**  Use Flexbox to display albums 2-across and hide the left menu (`display: none;`).

<a href="{{site.baseurl}}/assets/images/homework/hw02/screen_5.png" target="_blank"><img class="small" src="{{site.baseurl}}/assets/images/homework/hw02/screen_5.png" /></a>

## 5. Accessibility
1. Download the <a href="https://wave.webaim.org/extension/">WAVE Extension</a> using either Firefox or Chrome, and use it to generate an accessibility report. 
1. Correct as many accessibility errors as you can. 
1. Take a screenshot of your final accessibility report (Sarah's report is shown below).
1. Answer the following questions in a text file (Word, Notepad, or PDF are all fine):
    * What corrections did you have to make?
    * Do you think your website is usable if you turn off the CSS? Why or why not?
    * Is your site is tabbable? In other words, without the use of the mouse, are all the links and buttons accessible using the tab key?

Hints: You'll need to modify the HTML file by adding `alt` text to images, [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attributes to buttons, etc.

<img class="large" src="{{site.baseurl}}/assets/images/homework/hw02/wave.png" />

## 6. Commit & Push to GitHub
1. Edit your homepage from [tutorial 3](tutorial03) and add a link to your your Spotify page (see <a href="https://vanwars.github.io/csci185-coursework/" target="_blank">Sarah's page</a> for an example).
2. Commit and push your updated homepage and your `hw02` files to GitHub.


## 7. Extra Credit: Hover Effects
Optional, but recommended:

If you have time, try to implement the 4 hover effects shown in this video:

{:.compact}
1. Left navigation links get brighter when you hover over them.
2. Hover effects on "Upgrade" and "Profile" buttons.
3. Hover effects on "playlists", "albums", and "artists."
4. Hover effects on artist card (button displays on hover).

<iframe src="https://northwestern.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=081aed3c-0a40-4edc-a619-ad19013550ea&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

You can put the style rules for the extra credit anywhere in `style.css`.

## Rubric (16 Points)

{:.checkbox-list}
* Left Navigation **(3 pts)**  
* Header & Nav Styling **(2 pts)** 
* Artists Panel **(3 pts)**
* Responsive UIs Implemented **(3 pts)**
* Accessibility Analysis with screenshot and writeup **(3 pts)**
* Pushed to Github with link from homepage **(2 pts)**
* [Optional] Hover effects implemented **(+2pts extra credit)**

## What to turn in
**Please Read Carefully:** To submit this week's homework assignment, please create and upload a zip file to the Moodle (under the Homework 2 assignment) with the following files / info:

1. A text file (word doc, pdf, etc.) that includes:
    1. A link to your homepage, which should link to all of your assignments (including `hw02`).
    1. A link to your GitHub repository (where your code files are stored).
    1. The answers to your accessibility questions.
2. A screenshot of your WAVE report (you'll need to download the WAVE browser extension).
