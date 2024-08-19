---
layout: assignment-two-column
title: Linking Activity + GitHub Configuration
type: tutorial
draft: 1
points: 6
abbreviation: Tutorial 1
num: 1
description:
  - Installing & configuring VS Code
  - Practice with HTML tags
due_date: 2023-01-13
---

{:.blockquote-no-margin}
> ## Tutorial Overview.
> In this week's tutorial, you will be publishing the web page you made in tutorial01 to GitHub. To do this, please complete the following:
>
> 1. [Complete the Background Readings](#part1)
> 1. Configure your system
>    1. [Install git](#part2)
>    1. [Register for GitHub](#part3)
>    1. [Install VS Code](#part4)
>    1. [Install the Live Server Plugin](#part5)
>    1. [Configure the Git / Visual Studio Code Plugin](#part6)
>    1. [Configure Git Pages](#part7)
> 1. Complete the activity
>    1. [Open your files in VS Code](#step1)
>    1. [Open your files in VS Code](#step2)
>    1. [Connect your stylesheet to your HTML files](#step3)
>    1. [Connect your stylesheet to your HTML files](#step4)
>    1. [Create a local website between your group members (i.e., Intranet)](#step5)
>    1. [Add some images to index.html](#step6)
>    1. [Add some embedded videos to videos.html](#step7) 
>    1. [Add a music player to music.html](#step8)
>    1. [Attempt the optional enhancements (if time)](#step9)

{:#part1}
## 1. Background Readings
Please complete the following readings / video tutorials:
1. [Intro to git and GitHub](https://medium.com/the-underdog-writing-project/introduction-to-git-and-github-a5fdf5633923). A little technical, but please do your best to read it and come to tutorial with questions.
2. [Using GitHub with Visual Studio Code](https://youtu.be/i_23KUAEtUM). How we will be using GitHub in this class.

* GitHub Branching
* Networking...something about local IP versus public IP
* Something about relative and absolute links

## Configure your Computer


{:#part2}
### 2. Install Git
In order to interact with GitHub, you need to install git. Before you install it, check and make sure it’s not already installed by:


#### Windows
Search for the software program "GitBash." If you find it, git is already installed. 
#### Mac
1. Opening your Terminal and type the word `git` at the command prompt. 
2. If you get a message that says "not recognized" or something along those lines, then you need to install it.

If you need to install it, follow these instructions:   <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>.

Note: Mac users may be prompted to install XCode Tools. If this happens, let Sarah know and she can help you facilitate this process.

{:#part3}
### 3. Register for an account on GitHub
If you don’t already have a GitHub account, register for one: <a href="https://github.com/" target="_blank">https://github.com/join</a>. Some notes:

1. Please have your password close at hand. Particularly if you are using the computer lab computers, you will keep being prompted for your password.
2. Mac users may also need to create a **"Personal Access Token"**. The process is described <a href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token" target="_blank">here</a>.

{:#part4}
### 4. Install Visual Studio Code (VS Code)
Download and install Visual Studio Code: <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>. 
* This does not need to be done if you are working on the computer lab computers -- just if you're working on your laptop.

{:#part5}
### 5. Install the Live Server Extension in VS Code
* TODO: provide links / info

{:#part6}
### 6. Configure the Git / VS Code Plugin

#### 1. Tell the system who you are 
Tell your computer who you are on Git by running the following commands in GitBash (Windows) or in the Terminal (Mac):

```bash
git config --global user.name "Sarah"
git config --global user.email "my_email@gmail.com"
```

Please use **your name**, and the **email you used when registering with GitHub**.

> #### Note for Computer Lab Computers
> If you are using a computer lab computer, you will need to complete this step each time you use git.


{:#part7}
### 7. Organize your files
<a href="/fall2024/course-files/tutorials/tutorial01.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>

File management and organization are an essential part of programming and web development. As such, we suggest the following system:
1. Create a course folder called **csci344** somewhere on your computer. Many people store theirs in Documents or on their Desktop.
2. Create a **tutorials** folder inside of your csci344 folder.
3. Download the tutorial01.zip file, unzip it (ask if you’re new to zipping / unzipping files and I will help you) and move the unzipped tutorial01 folder into the `csci344/tutorials` folder (see diagram below).


```
csci344
    |-- tutorials
    │   |-- tutorial01
    │   |-- tutorial02
    |   ...
    |
    |-- homework
    │   |-- hw01
    │   |-- hw02
    |   ...
    |
    |-- lectures
        |-- lecture_01
        |-- lecture_02
        ...
```

## 3. Complete the Activity
Now that you're set up, please complete the 6 tasks below:

{:.blockquote-no-margin}
> 1. [Open your files in VS Code](#step1)
> 1. [Open your files in VS Code](#step2)
> 1. [Connect your stylesheet to your HTML files](#step3)
> 1. [Connect your stylesheet to your HTML files](#step3)
> 1. [Create a local website between your group members (i.e., Intranet)](#step4)
> 1. [Add some images to index.html](#step5)
> 1. [Add some embedded videos to videos.html](#step6) 
> 1. [Add a music player to music.html](#step7)
> 1. [Attempt the optional enhancements (if time)](#step8)
             
You will be ***editing*** your files using VS Code (or another code editor of your choice), and ***viewing*** your rendered files in your web browser.

{:#step1}
### 1. Open your files in Visual Studio Code
1. Open VS Code (your code editor).
2. Add your entire csci344 folder to VS Code by 
   * clicking `File >> Add Folder to Workspace...`  
   * and then navigating to your csci344 folder (wherever you saved it)
3. Open your index.html file and take a look at it. You should see a very simple HTML file that looks like this:

```html
<!DOCTYPE html>
<html lang="en">
   <head>
        <!-- stylesheets and metadata go here -->
       <title>Team Website</title>       
       <!-- <link rel="stylesheet" href="style.css"> -->
   </head>
   <body>
       <!-- HTML content tags go here -->
        <nav class="navbar">
            <strong>Your Name</strong>
            <a href="#">Name of Teammate 1</a>
            <a href="#">Name of Teammate 2</a>
            <a href="#">Name of Teammate 3</a>
        </nav>
        <main>
            <h1>Your Name</h1>
            <p>Here is some text for the homepage.</p>

            <section class="photo-section">
                <!-- photos go here-->
            </section>
        </main>
   </body>
</html>
```

{:#step2}
### 2. Preview your files using Live Server
To preview your `index.html` file from VS Code, right-click your `index.html` file from within the file explorer (usually on the left-hand side of the window), and then select "Open with Live Server") usually the first option.

It should look something like this:

<img class="frame xsmall" src="/fall2024/assets/images/tutorials/tutorial01a.png" />
  

{:#step3}
### 3. Connect your style.css stylesheet
Open your `index.html` file. Within the `<head></head>` section, uncomment the following line by removing the `<!--` on one side and the `-->` on the other:

```html
<!-- <link rel="stylesheet" href="style.css"> -->
```

This "link tag" instructs the browser to style the `index.html` according to the rules specified in the `styles.css` stylesheet. When you're done, it your code should look like this:

```html
<link rel="stylesheet" href="style.css">
```

Test your change by refreshing your web browser. Your page should now look like this:

<img class="frame medium" src="/fall2024/assets/images/tutorials/tutorial01b.png" />

Next, add this same stylesheet link tag inside of the head tag of the `videos.html` and `music.html` files, and then preview both of these in your web browser. These pages should look like this:

<img class="frame medium" src="/fall2024/assets/images/tutorials/tutorial01c.png" />
<img class="frame medium" src="/fall2024/assets/images/tutorials/tutorial01d.png" />

{:#step4}
### 4. Link your pages to one another in the navigation section
Next, modify the anchor tags within the navigation section (in each of your pages) so that your pages link to one another. To do this, you will modify the value that corresponds to the `href` ***attribute*** so that it points to the file you want to open when your user clicks the link. In other words, you will replace the `#` with a ***relative path*** to the relevant HTML file.

```html
<nav class="navbar">
    <strong>Photos</strong>
    <a href="#">Music</a>
    <a href="#">Videos</a>
</nav>
```

{:.blockquote-no-margin}
> **Hint**: Please review the <a href="https://www.w3schools.com/html/html_filepaths.asp" target="_blank">W3Schools reference</a> on "HTML File Paths," if you are not sure what a relative path is.

Update all of your anchor tags on all three pages. When you're done, all of the pages should link together as shown below:

<img class="frame small" src="/fall2024/assets/images/tutorials/tutorial01-linking.gif" />

{:#step5}
### 5. Add some images to the index.html file
Inside the `index.html` file:

1. Add three image tags inside of the `<section class="photo-section"></section>` region of your page.
2. Each image should reference one of the flower images inside of the `images` folder.
3. Make sure that you use **relative** paths to each of your images.
4. Feel free to save other images into your `images` folder and use those if you want.

When you're done, your page should look like this:

<img class="frame medium" src="/fall2024/assets/images/tutorials/tutorial01e.png" />


{:.blockquote-no-margin}
> **Hint**: Please see the course resources on [images](/fall2024/html-reference/images/) for more detail.

{:#step6}
### 6. Add two videos to the videos.html file
Inside the `videos.html` file, add two different YouTube or Vimeo videos inside of the `<section class="video-section"></section>` region of your page. To get the embed code of any YouTube video, (a) navigate to the video, (b) click "share", (c) then click "embed," and (d) then copy the embed code (iframe tag), as pictured below (note the pink squares):

<img class="frame small" src="/fall2024/assets/images/tutorials/tutorial01f.png" />

<img class="frame small" src="/fall2024/assets/images/tutorials/tutorial01g.png" />

<img class="frame small" src="/fall2024/assets/images/tutorials/tutorial01h.png" />

When you're done, your page should look like this (except with *your* videos):

<img class="frame medium" src="/fall2024/assets/images/tutorials/tutorial01j.png" />

{:.blockquote-no-margin}
> **More examples**: Please also see the course resources on [media tags](/fall2024/html-reference/media-tags/).

{:#step7}
### 7. Add a Spotify player to music.html
Inside the `music.html` file, add one or more embedded music players inside of the `<section class="music-section"></section>` region of your page. There are instructions on how to get the embed code of a Spotify artist profile, album, song, playlist, or podcast on Spotify's <a href="https://artists.spotify.com/en/help/article/embedded-players" target="_blank">documentation page</a>. 

When you're done, your page should look like this (except with *your* videos):

<img class="frame medium" src="/fall2024/assets/images/tutorials/tutorial01k.png" />


{:#step8}
### 8. Optional Enhancements
While we have not yet covered CSS, try editing style.css as follows:
* See if you can change the fonts and/or text color of the h1 tag
* Try resizing the images
* See if you can get your iframe to have the same style as your image
* Change the background color of you web page
* See if you can get your hyperlinks to have a hover effect

{:.blockquote}
> #### CSS Reference
> Please also see the course resources on CSS:
>
> * [fonts](/fall2024/css-reference/fonts/)
> * [color](/fall2024/css-reference/color/)
> * [selectors](/fall2024/css-reference/selectors/)

## What to turn in
Please zip your entire tutorial01 folder (ask if you don’t know how to do this), and submit it to Moodle under **Tutorial 1**.
