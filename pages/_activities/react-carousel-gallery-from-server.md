---
layout: two-column
title: "Activity: Intro to React (Carousel + Server-Generated Gallery)"
type: tutorial
abbreviation: Activity 4
draft: 1
num: 4
---

## 1. Relevant Readings
* <a href="https://beta.reactjs.org/learn/synchronizing-with-effects" target="_blank">Synchronizing with effects</a>
* <a href="https://beta.reactjs.org/learn/you-might-not-need-an-effect" target="_blank">You might not need an effect</a>

## 2. Download the starter files
<a href="/fall2024/course-files/lectures/lecture17.zip" class="nu-button">Carousel + Server Data <i class="fas fa-download"></i></a>


## 3. Install the dependencies
Navigate to the `lecture17` folder on your command line. Then run:

```shell
npm install     # installs node packages from the package.json file
npm start       # starts your react app
```

## 4. Complete the following tasks

### Part 1: Observe 
Get oriented with the code and understand what it's doing:

* Open the Carousel component. 
    * It should look similar to the one you just made (more or less).
* Open the developer tools, navigate to the console panel, and then toggle between the different products (each product has a corresponding gallery).
* Note that a different endpoint address is printed to the screen each time you click a different gallery
    * Copy that endpoint address into a browser tab and take a look at the data that's returned.
    * Note also that the galleries are switched out using the same technique that we used in Activity 16 (initiated from the `Galleries` component).

### Part 2: Using the `useEffect` function 
* Modify the `Carousel` component so that when the gallery switches, it fetches the photos from the server. 
    * You will have to use the built-in `useEffect` hook
    * DEMO (see answers folder if you get stuck)

