---
layout: two-column
title: "Activity: Configuring Git and GitHub"
type: tutorial
abbreviation: Activity 2
draft: 1
points: 6
num: 2
---

<!-- 
TODO for next time:
git config --global user.name "Sarah"
git config --global user.email "my_email@gmail.com"

On Mac, people had to install XCode Tools
-->
<style>
    img {
        max-width: 750px;
        width: 60%;
        border: solid 1px #000;
    }
    img.large {
        max-width: 100%;
        width: 100%;
        border: solid 1px #000;
    }
    .schematic {
        border: none;
        max-width: 850px;
        width: 70%;
        display: block;
        margin: auto;
    }
    table.instructions td, table.instructions th {
        font-size: 1.0em;
    }
    table.instructions td:first-child {
        white-space: nowrap;
    }
    ul.spaced li, ol.spaced li {
        margin-bottom: 25px;
    }

</style>


{:.blockquote-no-margin}
> ## Overview
> The goal of this activity is to help you publish your web page to GitHub. To do this:
>
> 1. [Complete the Background Readings](#part1)
> 1. [Install git](#part2)
> 1. [Register for GitHub](#part3)
> 1. [Configure the Git / Visual Studio Code Plugin](#part4)
> 1. [Configure Git Pages](#part5)


{:#part1}
## 1. Background Readings
Please complete the following readings / video tutorials:
1. [Intro to git and GitHub](https://medium.com/the-underdog-writing-project/introduction-to-git-and-github-a5fdf5633923). A little technical, but please do your best to read it and come to tutorial with questions.
2. [Using GitHub with Visual Studio Code](https://youtu.be/i_23KUAEtUM). How we will be using GitHub in this class.

{:#part2}
## 2. Install Git
In order to interact with GitHub, you need to install git. Before you install it, check and make sure it’s not already installed by:

1. Windows: search for the software program "GitBash." If you find it, git is already installed. 
2. Mac:
    1. Opening your Terminal and type the word `git` at the command prompt. 
    2. If you get a message that says "not recognized" or something along those lines, then you need to install it.

If you need to install it, follow these instructions:   <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>.

{:#part3}
## 3. Register for an account on GitHub
If you don’t already have a GitHub account, register for one: <a href="https://github.com/" target="_blank">https://github.com/join</a>. Some notes:

1. Please have your password close at hand. Particularly if you are using the computer lab computers, you will keep being prompted for your password.
2. Mac users may also need to create a **"Personal Access Token"**. The process is described <a href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token" target="_blank">here</a>.

### Register for GitHub Student Developer Pack
* Please follow <a href="https://education.github.com/pack?sort=popularity&tag=Developer+tools" target="_blank">these instructions</a> to register for the GitHub Student Developer Pack.



{:#part4}
## 4. Configure the Git / Visual Studio Code Plugin

### 1. Tell the system who you are 
Tell your computer who you are on Git by running the following commands in GitBash (Windows) or in the Terminal (Mac):

```bash
git config --global user.name "Sarah"
git config --global user.email "my_email@gmail.com"
```

Please use **your name**, and the **email you used when registering with GitHub**.

{:.blockquote-no-margin}
> #### Note for Computer Lab Computers
> If you are using a computer lab computer, you will need to complete this step each time you use git.

### 2. Verify your file structure

Please ensure that your `csci344` folder looks like this:

```shell
csci334
├── lectures
│   └── lecture03
│   │    └── index.html
│   └── lecture04
│       ├── README.md
│       └── my_website
│           ├── files
│           │   └── gallery.html
│           ├── home
│           │   ├── contact.html
│           │   ├── index.html
│           │   └── styles
│           │       ├── dark
│           │       │   └── new.css
│           │       └── my_style.css
│           ├── images
│           │   ├── cat.jpg
│           │   └── dog.jpg
│           └── test.html
└── tutorials
```

It's OK if your tutorials folder isn't set up yet, but make sure your lectures folder looks like the one shown above. This is very important. 

### 3. Initialize a Git Repository
After you've doublechecked your file structure, open your entire `csci344` folder in VS Code. Next, click on the icon that looks like a tree branch, and click the blue button that says "Initialize Repository":

<img class="large" src="/fall2024/assets/images/tutorials/tutorial02-github/ss2.png" />

You have now created a git repository on your computer in the same folder as your `csci344` folder. Now, you will want to "stage" all of your changes. Click the button with the three dots, then select "Changes", and then "Stage All changes":

<img class="large" src="/fall2024/assets/images/tutorials/tutorial02-github/ss3.png" />

After you "stage" your changes, you will note that the left-hand panel has changed. Specifically:

{:.compact}
* The panel lists all of the files that are "staged" to be committed, with an "A" next to each file (indicating that you are adding the files for the first time). 
* To commit these changes, type a message in the text box that says "My First Commit" and then click the check button to actually issue the commit:

<img class="large" src="/fall2024/assets/images/tutorials/tutorial02-github/ss4.png" />

Afterwards, a button will appear that says "Publish Branch." Click this button. It may prompt you to install a GitHub plugin. Please agree that you are OK to install the GitHub plugin.

<img class="large" src="/fall2024/assets/images/tutorials/tutorial02-github/ss5.png" />

You will now create a new GitHub repository called `csci344-coursework`. Please ensure that you create a PUBLIC repository:

<img class="large" src="/fall2024/assets/images/tutorials/tutorial02-github/ss6.png" />

After VS code issues the "create repository" request to GitHub, it will give you a message indicating that your files are being sent up to GitHub. When the file transfer is complete, you will see a blue button that says "Open On GitHub". Click that button. 

<img class="large" src="/fall2024/assets/images/tutorials/tutorial02-github/ss7.png" />

Clicking the button will open your newly created `csci344-coursework` repository and show you all of your files (which are now in the cloud):

<img class="large" src="/fall2024/assets/images/tutorials/tutorial02-github/ss8.png" />




{:#part5}
## 5. Finally, Configure GitHub Pages
GitHub also allows you to host pages. To enable GitHub pages:

{:.compact}
1. Go to your repository and click on the settings tab. 
2. Click the "GitHub Pages" link in the left-hand menu
3. Click the dropdown menu that asks you to select a branch.
4. Select the "master" branch
5. Click "Save"

<img class="large" src="/fall2024/assets/images/tutorials/tutorial02-github/ss9.png" />

This will generate a link to your GitHub site. 

<img class="large" src="/fall2024/assets/images/tutorials/tutorial02-github/ss10.png" />

> ### A note on GitHub Pages
> * It make take a few minutes for your webpage to display
> * In order to preview the webpage you made in the `lecture03` folder, you have to append the `/lectures/lecture03/index.html` file path to the end of your github pages to indicate which file to display.
