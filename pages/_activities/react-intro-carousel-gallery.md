---
layout: two-column
title: "Activity: Intro to React (Carousel + Gallery)"
type: tutorial
abbreviation: Activity 3
draft: 1
num: 3
---

{:.blockquote-no-margin}
## 1. Install Node.js
If you haven't already, please <a href="https://nodejs.org/en/download/">install Node.js</a>.

## 2. Download the starter files
<a href="/spring2025/course-files/lectures/lecture16.zip" class="nu-button">Carousel Exercise <i class="fas fa-download"></i></a>


## 3. Install the dependencies
Navigate to the lecture16 folder on your command line. Then run:

```shell
npm install     # installs node packages from the package.json file
npm start       # starts your react app
```

## 4. Complete the following tasks

### Part 1: Make a Carousel component 

Make a Carousel component that take a Gallery object as an argument (i.e. "property") 
* It should have a next button and a previous button that advances / the carousel in either direction.
* It should loop around when it gets to the end or the beginning

Remember, to re-render a component, modify its state using the built-in `useState()` function. Import as follows: 

```jsx
import { useState } from 'react';
```

### Part 2: Make a Galleries component 
Make a Galleries component that lists the various galleries that the user can browse.

### Part 3: Getting the components to communicate

Add functionality so that when the user selects (clicks) one of the galleries, the Carousel component re-renders with a new gallery of images

* Note, you will have to "lift up state" by tracking the current gallery in the parent component (`App`)

## Demo Video

* [video](https://drive.google.com/file/d/1RY2YnpCUm5Kuzv0W5HZ_cEH3HvyG066J/view?usp=sharing)


<img class="large frame" src="/spring2025/assets/images/lectures/intro-react.gif">