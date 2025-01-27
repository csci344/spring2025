---
layout: assignment-two-column
title: HTML Exercises
type: tutorial
abbreviation: Tutorial 1
draft: 0
points: 6
num: 1
start_date: 2025-01-27
due_date: 2025-01-29
---

{:.info}
> **Announcements:** <a href="https://docs.google.com/presentation/d/1ik3u0Ut7MgHPBfMu_vftQc2x-mWtqQCc/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true" target="_blank">See slides</a>
> <br><br>
> **Assumptions:** This tutorial assumes that you have:
>
> 1. [Installed and configured VS Code (Activity 4)](https://docs.google.com/document/d/1Vu_bVKlnzeQceoxp7hRTXdyTeCcLDQIz/edit#heading=h.gjdgxs)
> 2. [Installed and configured GitHub (Activity 6)](/spring2025/activities/github)
> 3. Reviewed the materials assigned in the [Intro to HTML lecture](/spring2025/topics/topic02)

## Part 1. Setting Up Your Development Environment

### 1. Install Visual Studio Code (if you haven't already)
Download and install Visual Studio Code: <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>. 
* This does not need to be done if you are working on the computer lab computers -- just if you're working on your laptop.

### 2. Organize your files
<a href="/spring2025/course-files/tutorials/tutorial01.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>

File management and organization are an essential part of programming and web development. As such, we suggest the following system:
1. Create a course folder called **csci344** somewhere on your computer. Many people store theirs in Documents or on their Desktop.
2. Create a **tutorials** folder inside of your csci344 folder.
3. Download the `tutorial01.zip` file, unzip it (ask if you’re new to zipping / unzipping files and I will help you) and move the unzipped tutorial02 folder into the `csci344/tutorials` folder (see diagram below).


```
csci344
    ├── tutorials
    │   └── tutorial01
    │   ...
    │   
    └── lectures
        ├── lecture04
        └── lecture05
```

### 3. Take a look at your files
You will be ***editing*** your files using VS Code (or another code editor of your choice), and ***viewing*** your rendered files in your web browser.

#### A. View file in Visual Studio Code
1. Open VS Code (your code editor).
2. Add **your entire csci344 folder** to VS Code by 
   * clicking `File >> Add Folder to Workspace...`  
   * and then navigating to your csci344 folder (wherever you saved it)
3. Open your index.html file inside of the `tutorial01` folder and take a look at it. You should see a very simple HTML file that looks like this:

```html
<!DOCTYPE html>
<html lang="en">
   <head>
        <!-- stylesheets and metadata go here -->
       <title>Home</title>       
       <!-- <link rel="stylesheet" href="style.css"> -->
   </head>
   <body>
       <!-- HTML content tags go here -->
        <nav class="navbar">
            <strong>Home</strong>
            <a href="#">Music</a>
            <a href="#">Videos</a>
        </nav>
        <main>
            <h1>Home</h1>
            <p>Here is some text for the homepage.</p>

            <section class="photo-section">
                <!-- photos go here-->
            </section>
        </main>
   </body>
</html>
```

#### B. View file in Web Browser 
Once you’ve taken a look at the code in VS Code, view it in your browser using the Live Server plugin you installed on Monday. It should look something like this:

<img class="frame xsmall" src="/spring2025/assets/images/tutorials/tutorial01/a.png" />

## Part 2. Completing the Exercises
Now that you're set up, please complete the 6 tasks below:

{:.info}
> 1. [Connect your stylesheet to your HTML files](#step1)
> 1. [Link your HTML files together](#step2)
> 1. [Add some images to index.html](#step3)
> 1. [Add some embedded videos to videos.html](#step4) 
> 1. [Add a music player to music.html](#step5)
> 1. [Attempt the optional enhancements (if time)](#step6)
            

{:#step1}
### 1. Connect your style.css stylesheet
Open your `index.html` file. Within the `<head></head>` section, uncomment the following line by removing the `<!--` on one side and the `-->` on the other:

```html
<!-- <link rel="stylesheet" href="style.css"> -->
```

This "link tag" instructs the browser to style the `index.html` according to the rules specified in the `styles.css` stylesheet. When you're done, it your code should look like this:

```html
<link rel="stylesheet" href="style.css">
```

Test your change by refreshing your web browser. Your page should now look like this:

<img class="frame medium" src="/spring2025/assets/images/tutorials/tutorial01/b.png" />

Next, add this same stylesheet link tag inside of the head tag of the `videos.html` and `music.html` files, and then preview both of these in your web browser. These pages should look like this:

<img class="frame medium" src="/spring2025/assets/images/tutorials/tutorial01/c.png" />
<img class="frame medium" src="/spring2025/assets/images/tutorials/tutorial01/d.png" />

{:#step2}
### 2. Link your pages to one another in the navigation section
Next, modify the anchor tags within the navigation section (in each of your pages) so that your pages link to one another. To do this, you will modify the value that corresponds to the `href` ***attribute*** so that it points to the file you want to open when your user clicks the link. In other words, you will replace the `#` with a ***relative path*** to the relevant HTML file.

```html
<nav class="navbar">
    <strong>Home</strong>
    <a href="#">Music</a>
    <a href="#">Videos</a>
</nav>
```

{:.blockquote-no-margin}
> **Hint**: Please review the <a href="https://www.w3schools.com/html/html_filepaths.asp" target="_blank">W3Schools reference</a> on "HTML File Paths," if you are not sure what a relative path is.

Update all of your anchor tags on all three pages. When you're done, all of the pages should link together as shown below:

<img class="frame small" src="/spring2025/assets/images/tutorials/tutorial01/e.gif" />

{:#step3}
### 3. Add some images to the index.html file
Inside the `index.html` file:

1. Add three image tags inside of the `<section class="photo-section"></section>` region of your page.
2. Each image should reference one of the flower images inside of the `images` folder.
3. Make sure that you use **relative** paths to each of your images.
4. Feel free to save other images into your `images` folder and use those if you want.

When you're done, your page should look like this:

<img class="frame medium" src="/spring2025/assets/images/tutorials/tutorial01/f.png" />


{:.blockquote-no-margin}
> **Hint**: Please see the course resources on [images](/spring2025/resources/image-tags/) for more detail.

{:#step4}
### 4. Add two videos to the videos.html file
Inside the `videos.html` file, add two different YouTube or Vimeo videos inside of the `<section class="video-section"></section>` region of your page. To get the embed code of any YouTube video, (a) navigate to the video, (b) click "share", (c) then click "embed," and (d) then copy the embed code (iframe tag), as pictured below (note the pink squares):

<img class="frame small" src="/spring2025/assets/images/tutorials/tutorial01/g.png" />

<img class="frame small" src="/spring2025/assets/images/tutorials/tutorial01/h.png" />

<img class="frame small" src="/spring2025/assets/images/tutorials/tutorial01/i.png" />

When you're done, your page should look like this (except with *your* videos):

<img class="frame medium" src="/spring2025/assets/images/tutorials/tutorial01/j.png" />

{:.blockquote-no-margin}
> **More examples**: Please also see the course resources on [media tags](/spring2025/resources/media-tags/).

{:#step5}
### 5. Add a Spotify player to music.html
Inside the `music.html` file, add one or more embedded music players inside of the `<section class="music-section"></section>` region of your page. There are instructions on how to get the embed code of a Spotify artist profile, album, song, playlist, or podcast on Spotify's <a href="https://artists.spotify.com/en/help/article/embedded-players" target="_blank">documentation page</a>. 

When you're done, your page should look like this (except with *your* videos):

<img class="frame medium" src="/spring2025/assets/images/tutorials/tutorial01/k.png" />


{:#step6}
### 6. Optional Enhancements
While we have not yet covered CSS, try using Google and various online resources to see how you might edit the `style.css` file to achieve the following:

* Change the fonts and/or text color of the h1 tag
* Resize the images
* Style your iframe to have the the same dimensions as your image
* Change the background color of you web page
* Give your hyperlinks a hover effect

{:.blockquote}
> #### CSS Reference
> Please also see the course resources on CSS:
>
> * [fonts](/spring2025/resources/fonts/)
> * [color](/spring2025/resources/color/)
> * [selectors](/spring2025/resources/selectors/)

<!-- ## Part 3. Publishing to GitHub
Please [follow these instructions](../activities/github) to publish your tutorial02 to GitHub. -->


## How to think about this exercise (meta-comment)
The purpose of this tutorial was to get you familiar with some HTML widgets and conventions. We are now officially done with HTML instruction. What you should be comfortable with after this tutorial:


1. Finding online resources (like <a href="https://www.w3schools.com/html/default.asp" target="_blank">W3Schools</a> and the [course HTML reference](/spring2025/resources/html-resources)) that help you learn about and integrate HTML tags.
2. Understanding the rules of various tags, and how to nest them.
3. Understanding how to link files together using both relative and absolute paths (more next week).
4. Semantic containers

## What to turn in
Please commit and push all of your edits to GitHub. Then, paste a link to your GitHub Repository (code files) and to your GitHub pages (website) in the Moodle submission.
