---
layout: assignment-two-column
title: "React: Custom & Third-Party Components"
type: tutorial
abbreviation: Tutorial 8
draft: 0
points: 6
num: 8
start_date: 2025-03-26
due_date: 2025-03-31
---


## 1. Setup
1. Open your entire `csci344` folder in VS Code.
1.  Download and unzip the starter code:

    <a href="/spring2025/course-files/tutorials/tutorial08.zip" class="nu-button"><i class="fas fa-download"></i> Tutorial 8 Starter Code </a>
1. Save the `tutorial08` folder inside of `csci344/lectures.
1. From the command line, navigate into your`tutorial08` folder. You can also open the VS Code Integrated terminal. 
1. Verify that you’re in the correct folder by typing **pwd**
1. Issue the following commands

    ```bash
    npm install
    ```

    This will install all of the dependencies needed to run your react app.

1. Next, run the **`npm run dev`** command on the command line to start your react app. When you do, you should see the following output:

    ```bash
    **VITE** v5.2.6  ready in **307** ms
    ➜  **Local**:   http://localhost:**5173**/
    ➜  **Network**: use **--host** to expose
    ➜  press **h + enter** to show help
    ```

1. Finally, navigate to [http://localhost:**5173**/](http://localhost:5173/) in your web browser. You should see a web page. If you open the browser console, you should see a minimally styled page that has the text "Design Systems Test".


## 2. Download and Configure the Ant Design System Dependencies
1. Navigate back to your command line and stop the server (usually you can do this by clicking in the terminal and typing Ctrl+C or Ctrl+D).
1. Install the `antd` design system as follows: 

    ```basn
    npm install antd
    ```

    This will install the Ant Design System in your `node_modules` folder.

1. Next, try using your first `antd` component -- the antd `Image` component -- by first importing it at the top...

    ```jsx
    // at the top:
    import {Image} from 'antd';
    ```

    ...and then adding the following component instances inside of the `<main>...</main>` tag:

    ```html
    <h2 className="font-Comfortaa my-4 font-bold text-xl">
        Photo Gallery
    </h2>
    <div className="flex flex-wrap content-start">
        <Image
            src="https://picsum.photos/600/600?id=1"
            width={200}
        />
        <Image
            src="https://picsum.photos/600/600?id=2"
            width={200}
        />
        <Image
            src="https://picsum.photos/600/600?id=3"
            width={200}
        />
        <Image
            src="https://picsum.photos/600/600?id=4"
            width={200}
        />
        <Image
            src="https://picsum.photos/600/600?id=5"
            width={200}
        />
        <Image
            src="https://picsum.photos/600/600?id=6"
            width={200}
        />
        <Image
            src="https://picsum.photos/600/600?id=7"
            width={200}
        />
        <Image
            src="https://picsum.photos/600/600?id=8"
            width={200}
        />
        <Image
            src="https://picsum.photos/600/600?id=9"
            width={200}
        />
        <Image
            src="https://picsum.photos/600/600?id=10"
            width={200}
        />
    </div>
    ```

1. Finally, restart your react app and see what happens: `npm run dev`

{:.info}
> ### Why are design systems useful?
> * Consider how much time this `Image` component saves, and how it enforces consistency across your site.
> * You could also develop your own custom design system if you enjoy this kind of thing!
> {:.compact}

## 3. Experiment with some of the other widgets
Now that you have used your first design system component, take a look at the Ant Design documentation and see what else you can make! Some fun components to get started with...

You must include **at least three different `antd` components** in your final product.

| Component | Description | 
|--|--|
| <a href="https://ant.design/components/carousel" target="_blank">Carousel</a> | Configurable carousel component |
| <a href="https://ant.design/components/time-picker" target="_blank">Time Picker</a> | Good for helping user not have typos when picking a date |
| <a href="https://ant.design/components/drawer" target="_blank">Drawer</a> | Nice alternative to a popup menu or jumping to a new page. |
| <a href="https://ant.design/components/calendar" target="_blank">Calendar</a> | For calendar apps. |
| <a href="https://ant.design/components/card" target="_blank">Card</a> | Different types / styles of cards. |
| <a href="https://ant.design/components/collapse" target="_blank">Collapse Menus</a> | Useful for Navigation |
| <a href="https://ant.design/components/tour" target="_blank">Tour</a> | Useful for teaching your user new features |

## What to Submit (Please Read Carefully)
Remember that your Browser doesn't understand React because it uses some language features that aren't HTML, CSS, or JavaScript. We therefore need to "transpile" our code so that it can be displayed on our GitHub server. To do this:

1. Navigate to your `tutorial08` folder on the command line and run the following:<br> `npm run build`. 
    * This should transpile your code in a folder called `dist`.  
1. Next, make sure you link to the compiled version of your code (`tutorial08/dist/index.html`) from your homepage.

To submit this tutorial, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission for Tutorial 8.