---
layout: assignment-two-column
title: CSS Frameworks (Tailwind)
type: tutorial
abbreviation: Tutorial 3
draft: 1
points: 6
num: 3
start_date: 2025-02-07
due_date: 2025-02-10
readings:
    - type: reading
      citation: > 
        <a href="https://designlab.com/blog/guide-to-ux-design-systems" target="_blank">Design Systems 101: An Introductory Guide</a>
      required: 1
    - type: reading
      citation: > 
        <a href="https://johnpolacek.medium.com/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4" target="_blank">By The Numbers: A Year and Half with Atomic CSS</a>: How design systems improve efficiency
    - type: reading
      citation: > 
        <a href="https://www.creative-tim.com/twcomponents/cheatsheet" target="_blank">Tailwind Cheatsheet</a>
      skim: 1
    - type: reading
      citation: >
        <a href="https://www.youtube.com/watch?v=sNXfI3woBEw" target="_blank">Get Started With Tailwind CSS</a>: Video tutorial that walks you through today's activity
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

> **About Today's Tutorial:** Today's tutorial is based on the <a href="https://www.youtube.com/watch?v=sNXfI3woBEw" target="_blank">Get Started With Tailwind CSS</a> video tutorial by John Komarnicki. If you would like additional context / explanation, please check out the video!


## Suggested Readings
* [Theory] <a href="https://designlab.com/blog/guide-to-ux-design-systems" target="_blank">Design Systems 101: An Introductory Guide</a>
* [Theory] <a href="https://johnpolacek.medium.com/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4" target="_blank">By The Numbers: A Year and Half with Atomic CSS</a>: How design systems improve efficiency
* [Practice] <a href="https://www.creative-tim.com/twcomponents/cheatsheet" target="_blank">Tailwind Cheatsheet</a>
{:.compact}



## Set Up & Configuration
Most practicing front-end developers use frameworks to help them organize and maintain their HTML, CSS, and JavaScript files. In this class, we will be using Node.js to help us manage various client-side frameworks. You already installed Node.js during the first week of CSCI344. When you did this, you installed a JavaScript engine (specifically, the V8 JavaScript Engine that powers Chrome), a built-in package manager, `npm` -- to manage and install dependencies, and a way to "transpile" higher-level languages (e.g., TypeScript, SCSS, CoffeeScript, React, etc.) into "vanilla" HTML, CSS, and JavaScript. Today, we're going to try using Node.js to help us work with a third-party CSS library and design system called **Tailwind**. Please follow the set up and configuration instructions below so that you can complete the tutorial.

<a href="/spring2025/course-files/tutorials/tutorial04.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>

Download the `tutorial04.zip` file, unzip it and move the unzipped tutorial04 folder into the `csci344/tutorials` folder (see diagram below).

```
csci344
    |-- tutorials
    │   |-- tutorial02
    │   |-- tutorial03
    │   |-- tutorial04
    |   ...
    |
    |-- homework
    │   |-- hw02
    |   ...
    |
    |-- lectures
        |-- lecture03
        |-- lecture05
        |-- lecture06
        ...
```

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

You should also notice that a `node_modules` directory has been created inside of `tutorial04`, which contains the third-party modules (tailwind and some dependencies) that you just downloaded from the Internet. We'll talk more about this in the coming weeks.

> **Pro Tip**: Typically, you exclude third-party packages (like the ones in your `node_modules` folder) from version control. To do this in git, create a `.gitignore` file and specify all of the files and folders that you do not want to track. Note that this has already been done for you: if you open the `tutorial04/.gitignore` file in VS Code, you can see that `.gitignore` has excluded the `node_modules` folder.

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

### 5. Configure your stylesheet
Open the `src/input.css` file in VS Code. It should be empty. In this file, you will add the following lines to the top of this file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Thes three directives mean that when Tailwind builds your stylesheet, it will be drawing on styling classes that are defined in the `base`, `components`, and `utilities` libraries in the Tailwind package.

### 6. Build your stylesheet
Finally, you're ready to build your Tailwind stylesheet. To do this, issue the following command in the terminal:

```bash
npm run build:tailwind
```

This script will rebuild your `public/output.css` CSS file **every time you save your `index.html` file**. So, as you add various tailwind classes to your `index.html` file, a new version of `output.css` will be generated. Keep the terminal open so that this script can continue doing its job. It has to be running while you add classes to your HTML file.

> **Tip:** Take a look at the `public/output.css` file in your code editor. 
> * This file is generated by the tailwind bundler (which is run via  the `npm run build:tailwind` command). 
> * You don't edit this file (or your edits will be overwritten) but this is the actual file that your browser will end up reading. 
> {:.compact}

### 7. Link your compiled tailwind stylesheet
Finally, add a link from your `index.html` file to your auto-generated Tailwind stylesheet (`public/output.css`) by adding the following link within the `<head>` tag of your `index.html` file: 

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

### 8. Install Tailwind CSS IntelliSense
Finally, to make it more convenient for you to use the Tailwind library, please install the **"Tailwind CSS IntelliSense"** extension in VS Code. You will click the "Extensions" icon (left toolbar, looks like 4 squares), search for **"Tailwind CSS IntelliSense"**, and install it:

<img class="large frame" src="/spring2025/assets/images/tutorials/tutorial04/extension.png" />

### 9. Review
To recap what you've done, you:
1. Created a new Node.js project (`npm init -y`)
1. Installed the dependencies (external JavaScript libraries) that allow you to work with tailwind (`npm install -D tailwindcss`)
1. Configured tailwind to "watch" your `index.html` file (within `tailwind.config.js`) so that it automatically builds your CSS file when you make changes.
1. Imported some Tailwind style modules in your `src/input.css`
1. Taught node.js how to compile your `src/input.css` stylesheet by adding the `build:tailwind` entry to `package.json`.
1. Ran the tailwind compilation script to continuously generate the `public/output.css` file as you make changes to your `index.html` file.
1. Linked your `index.html` to `public/output.css` 
1. Installed the "Tailwind CSS IntelliSense" extension to make coding easier.
{:.compact}

Great work! You are on your way to becoming a skillful web developer, and you are now ready to begin working with Tailwind!

> **Note:** While this process no doubt seems complicated, it will become simpler over time as you become more familiar with Node.js and various client-side libraries. Node.js has a bit of a learning curve, but will save you so much time later on!

## Your Tasks
To get a sense of what the Tailwind CSS library offers, you are going to create the following "card" using the Tailwind CSS classes. When your done, your `index.html` file should produce this web page:

<img class="medium frame" src="/spring2025/assets/images/tutorials/tutorial04/tailwind-screenshot.png" />

### 1. Add the starter HTML code
Let's start our Tailwind experiment by pasting the code block below ***within the body tag*** of our `index.html` file. These are the HTML instructions for producing an "unstyled" card: 

```html
<div> <!-- top-level container (for centering the card)-->
    <div> <!-- card container -->
        <img src="./assets/burger.jpg" alt="burger dish" />
        <!-- text container-->
        <div>
            <h2>Burger Tower</h2>
            <h3>4.5 / 5 Stars (413 Reviews)</h3>
            <p>$$ - American, Burgers</p>
            <p>
                Well-known burger franchise serving burgers, fries, and shakes.
            </p>

            <!-- button container-->
            <div>
                <button>View Website</button>
                <button>Order Curbside</button>
            </div> <!-- end button container-->
        </div> <!-- end text container-->
    </div> <!-- end card container -->
</div> <!-- end top-level container -->
```

After adding the above code within the body tag, go ahead and preview your `index.html` file in the browser using live server. It should look something like this:

<img class="small" src="/spring2025/assets/images/tutorials/tutorial04/tailwind-screenshot-unformatted.png" />

### 2. Make some Tailwind customizations
Although Tailwind comes with a baseline set of styles, you can override them as you like in order to customize the look and feel of your website. Let's make a few customizations:

First, let's use the Poppins font from Google Fonts. Add the following line to the top of your `src/input.css` file (before your Tailwind directives):

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
```

Your `src/input.css` stylesheet should now look like this:

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Once you've done this, you're going to make some changes to your `tailwind.config.js` file's theme property as follows:

```js
theme: {
    extend: {
        colors: {
            "custom-blue": "#00BAFF",
            "custom-purple": "#6336FA",
        },
    },
    fontFamily: {
        Poppins: ["Poppins"],
    }
}
```

By making these changes, you're expanding the available fonts and colors that Tailwind has available to it. When you're done, your `tailwind.config.js` file should look like this:

```js
module.exports = {
    content: ["./*html"],
    theme: {
        extend: {
            colors: {
                "custom-blue": "#00BAFF",
                "custom-purple": "#6336FA",
            },
        },
        fontFamily: {
            Poppins: ["Poppins"],
        },
    },
    plugins: [],
};
```

### 3. Center the card
As you may recall from Tutorial 3, to center the child, you need to set some style properties on the parent (usually either flex or grid). Given this, you will add the following classes to the outermost div:

* font-Poppins (which you just defined in your `tailwind.config.js` file)
* flex
* flex-col
* justify-center
* items-center
* min-h-screen 
{:.compact}

Please look at the <a href="https://tailwindcss.com/docs/display" target="_blank">Tailwind documentation</a> to read about what each of these classes does. When you're done, your outer-most div should look like this:

```html
<div class="font-Poppins flex flex-col justify-center items-center min-h-screen">
    ...
</div>
```

Essentially, you've created a more "semantic" way of specifying a flex layout (where children are centered horizontally and vertically) that is easy for someone else to read and understand.

### 4. Add styling to the card 
Now you will add styling to the `div` that holds all of the card information by adding the following Tailwind classes:

* max-w-[350px]  (note that there are some standard styles, but you can also define your own by surrounding a custom unit with hard brackets)
* flex 
* flex-col 
* shadow-md
* rounded-md
{:.compact}

When you're done with steps 1-4, your page should look like this...

<img class="medium frame" src="/spring2025/assets/images/tutorials/tutorial04/wip-1.png" />

...and your code should look something like this...

```html
 <div class="font-Poppins flex flex-col justify-center items-center min-h-screen">
    <div class="flex flex-col max-w-[350px] shadow-md rounded-md">
        ...
    </div>
</div>
```

### 5. Style the image
Add the following Tailwind classes to the image...

* max-h-56 
* object-cover
* rounded-t-md
{:.compact}

...and then preview your image. You should see the height of the image change, and the corners should now be rounded.

### 6. Style the rest of the content
Now that you get the basic idea, style the rest of the card using the following styles (see screen shot below):

<img class="large frame" src="/spring2025/assets/images/tutorials/tutorial04/the-rest.png" alt="Card code sample" />

If you've done everything correctly, your page should now look completed:

<img class="medium frame" src="/spring2025/assets/images/tutorials/tutorial04/tailwind-screenshot.png" />


### 7. Simplify the buttons
One last thing to note in this tutorial is that sometimes you may find yourself writing repetitive code. For instance, the two buttons you just made have many of the same classes:

```html
<button
    class="text-white text-xs py-2 px-3 rounded-md bg-custom-purple hover:bg-slate-400 duration-300">
    View Website
</button>
<button
    class="text-white text-xs py-2 px-3 rounded-md bg-custom-blue hover:bg-slate-400 duration-300">
    Order Curbside
</button>
```

In fact, both buttons use all of these classes: 

```
text-white text-xs py-2 px-3 rounded-md hover:bg-slate-400 duration-300
```

The only difference between them is the class used to specify their background color.

Given this, Tailwind allows you to use something called the `@apply` directive to create higher-level CSS classes that abstract repetitive class combinations. To do this, open your `src/input.css` file and paste the following line of code below the `@tailwind` directives:

```css
.btn {
    @apply text-white text-xs py-2 px-3 rounded-md hover:bg-slate-400 duration-300;
}
```

Now go to your `index.html` file and modify the two buttons as follows:

```html
<button class="btn bg-custom-purple">View Website</button>
<button class="btn bg-custom-blue">Order Curbside</button>
```

This is much easier to read, and keeps you from repeating yourself.

### 8. Takeaways: Is this really a better way to do things?
One thing you might be thinking is "geee, this is really repetitive and tedious!" Particularly if you've been hand-coding CSS for a while, this approach may seem pretty verbose. But consider the following "real world" scenarios: 

* Eventually, someone will have to learn your CSS system / conventions, which is also time consuming (and likely far less consistent than a framework)
* If your new developer already knows Tailwind, they can hit the ground running without any learning curve (at least on the CSS side of things).
* The developers of Tailwind and other design systems have spent years abstracting common design patterns so you don't have to. The framework will ultimately save time.
* Some design systems are cross-platform (iOS, Android, etc.) -- so once the design team creates the customized Tailwind theme, each team (web team, iOS team, etc.) can apply the same rules and classes for a consistent, cross-platform look and feel. 
{:.compact}

## Recommended Tasks (Optional)
If you think that front-end web dev might be something you'd like to pursue, I recommend that you spend a little more time with the Tailwind framework by looking at some pre-made templates and widgets. Here's a suggested set of tasks:

1. Browse some of the free Tailwind widget / theme websites:
    * <a href="https://tailwindcss.com/docs/container" target="_blank">Tailwind Documentation</a>
    * <a href="https://www.hyperui.dev/" target="_blank">HyperUI</a>
    * <a href="https://merakiui.com/components" target="_blank">MerakiUI</a>
    * <a href="https://www.tailwindawesome.com/?price=free&type=template" target="_blank">Tailwind Awesome</a>
    {:.compact}
1. Try to find some HTML snippets common widgets (such as the ones listed below), and paste them into the `get_creative.html` webpage:
    * A header / nav bar
    * A landing section (sometimes called a "Hero Section")
    * A card
    * A footer
    {:.compact}
1. Try to customize the colors, widths, etc. of the frankenstein page you just made.
1. If you want to take a look at a sample, take a look at <a href="https://vanwars.github.io/csci344/tutorials/tutorial04/get-creative.html" target="_blank">Sarah's Tailwind experiments</a>.

## What to Turn In
Please create a link from your homepage to your completed tutorial 4 (see <a href="https://vanwars.github.io/csci344" target="_blank">Sarah's homepage</a> for an example). Then, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission.

* If you collaborated with someone, please list your partner's name in the comments section.
