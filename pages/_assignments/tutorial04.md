---
layout: assignment-two-column
title: CSS Frameworks (Tailwind)
type: tutorial
abbreviation: Tutorial 4
draft: 1
points: 6
num: 4
start_date: 2024-09-13
due_date: 2024-09-16
---

<style>
    img.xsmall {
        max-width: 250px;
        width: 60%;
    }
    img.large {
        max-width: 100%;
        width: 100%;
    }
</style>

## Readings
* <a href="https://designlab.com/blog/guide-to-ux-design-systems" target="_blank">Design Systems 101: An Introductory Guide</a>
* <a href="https://www.creative-tim.com/twcomponents/cheatsheet" target="_blank">Tailwind Cheatsheet</a>

## Tutorial Video
* <a href="https://www.youtube.com/watch?v=sNXfI3woBEw" target="_blank">Get Started With Tailwind CSS</a>

### More Background
* <a href="https://johnpolacek.medium.com/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4" target="_blank">By The Numbers: A Year and Half with Atomic CSS</a>

## Set Up & Configuration
Most advanced front-end developers use frameworks to help them organize and maintain their HTML, CSS, and JavaScript files. One common way of managing these frameworks is by using Node.js. You already installed Node.js during the first week of CSCI344. When you did this, you installed a JavaScript engine (specifically, the V8 JavaScript Engine that powers Chrome), a built-in package manager, `npm` -- to manage and install dependencies, and a way to "transpile" higher-level languages (e.g., TypeScript, SCSS, CoffeeScript, React, etc.) into "vanilla" HTML, CSS, and JavaScript. Today, we're going to try using Node.js to help us work with a third-party CSS library and design system called **Tailwind**.

### 1. Create a node.js application
1. Open your entire `csci344` directory in VS Code
1. Then, open your terminal in VS Code (**`View >> Terminal`** in the top menu). 
1. Use the `cd` command to navigate to your `tutorial04` directory (within your `csci338` directory) in your terminal.
1. Verify that you're in the `tutorial04` directory by typing `pwd`. 
1. Finally, initialize a new node project as follows:
{:.compact}

```bash
npm init -y
```

If you did this correctly, a `package.json` file should have been created at the root of your `tutorial04` directory. `package.json` is a configuration file that helps you to (among other things): 

1. Keep track of various dependencies that you install to make a client-side web app, and
1. Run various testing and compilation scripts on the command line. 
{:.compact}

`npm` stands for "node package manager." We will be using `npm` to install and keep track of dependencies that we will pull down from the Internet.

### 2. Install the Tailwind library
Next, you will install the Tailwind library by issuing the following command on the terminal:

```bash
npm install -D tailwindcss
```

This command asks the node package manager to go out to the Internet and download the tailwind.css library and any additional dependencies that tailwind requires. When the download is complete, you should see output on your terminal that looks like this:

```bash
added 113 packages, and audited 114 packages in 4s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

You should also notice that a `node_modules` directory has been created inside of `tutorial04`, which contains various third-party modules (tailwind and some dependencies). We'll talk more about this in the coming weeks.

### 3. Configure Tailwind via the `tailwind.config.js` file
Tailwind also requires that you create a special configuration file called `tailwind.config.js`. To autogenerate this file, type the following on the terminal:

```bash
npx tailwindcss init
```

After generating it, you will edit `tailwind.config.js` by modifying the content entry as follows in order to tell the tailwind build process which of your website files will be using tailwind: 

```
content: ["./*html"],
```

When you're done, your `tailwind.config.js` file should look like this:

```js
module.exports = {
    content: ["./*html"],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

### 4. Configure your package.json
You will also need to configure your `package.json` file so that you can compile your tailwind css files. To do this, you will add a "build:tailwind" entry to `package.json` inside of the "scripts" section. Note that in JSON, each key-value pair needs to be separated by a comma.

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:tailwind": "tailwindcss -i ./src/input.css -o public/output.css --watch"
  }
```

When you're done, your `package.json` file should look like this:

```json
{
  "name": "tutorial04",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:tailwind": "tailwindcss -i ./src/input.css -o public/output.css --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "tailwindcss": "^3.4.10"
  }
}
```



### 5. Build your stylesheet
Finally, you're ready to build your Tailwind stylesheet. To do this, issue the following command in the terminal:

```bash
npm run build:tailwind
```

This script will continuously build your tailwind CSS file as you add various tailwind classes to your `index.html` file.

### 6. Link your compiled tailwind stylesheet
Finally, add a link from your `index.html` file to your compiled Tailwind stylesheet by adding the following link within the `<head>` tag of your `index.html` file: 

```html
<link rel="stylesheet" href="./public/output.css">
```

Your entire `index.html` file should look something like this (ensure that your stylesheet link looks correct):

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/output.css">
    <title>Tutorial 4: Tailwind</title>
</head>

<body></body>

</html>
```
Also note that you should now have a `public` folder that has a `output.css` file inside of it. Take a look at the `output.css` file (which was generated from the `npm run build:tailwind` you just issued).

### 6. Install Tailwind CSS Intellisense
TODO...

### 7. Review
To recap what you've done, you:
1. Created a new Node.js project (`npm init -y`)
1. Installed the code files that allow you to work with tailwind (`npm install -D tailwindcss`)
1. Configured tailwind to watch your `index.html` file (within `tailwind.config.js`)
1. Taught node.js how to compile your tailwind stylesheet (within `package.json`)
1. Ran the tailwind compilation script to generate the `public/output.css` file.
1. Linked your `index.html` to `public/output.css` 
{:.compact}

You are now ready to begin working with Tailwind!

## Your Tasks
For this assignment, you are going to create the following "card" using the Tailwind CSS Classes:


To do this, 