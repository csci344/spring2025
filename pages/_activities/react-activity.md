---
layout: two-column
title: "Activity: Intro to React (Carousel + Server-Generated Gallery)"
type: tutorial
abbreviation: Activity 4
draft: 1
num: 4
---

{% include walkthrough-react-activity.html %}


## 1. Don't forget to do the readings

{:.info}
> ### Monday
> * <span class="update">Required</span> <a href="https://react.dev/learn/describing-the-ui" target="_blank">Describing the UI</a>
> * <span class="update">Recommended</span> <a href="https://beta.reactjs.org/learn/tutorial-tic-tac-toe" target="_blank">Tic Tac Toe</a>. You are strongly encouraged to do this on your own.
> {:.compact}
> 
> ### Wednesday
> * <span class="update">Required</span> <a href="https://beta.reactjs.org/learn/thinking-in-react" target="_blank">Thinking in React</a>
> * <span class="update">Required</span> <a href="https://beta.reactjs.org/learn/sharing-state-between-components" target="_blank">Sharing state between components</a>
> {:.compact}


## 2. Setup
1. Open your entire `csci344` folder in VS Code.
1. Create a new folder inside of your `csci344/lectures` folder called `intro-to-react`.
3. Inside of your `intro-to-react` folder, create 3 files: 
    - `index.html`
    - `styles.css`
    - `.gitignore` (this file should start with the "." prefix, which means that it's a system, hidden file).
4. Inside of your `index.html` file, paste the following code:

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React Demo</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <h1>Hello world</h1>
        <p>Here is some text!</p>
    </body>

    </html>
    ```
5. Inside of your `styles.css` file, paste the following code:

    ```css
    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: navy;
        color: white;
    }
    ```
6. Inside your `.gitignore` file, type the word `node_modules`. This file is telling git not to put the `node_modules` folder under version control. Since these files were built by somebody else, you don't typically commit them to your version control repository.

When you’re done, preview your HTML page in the browser using VS Code’s Live Server. If you did it correctly, you should see your HTML, and the background should be navy blue.

## 3. Convert your code to a React project

Now that you’ve created your starter files, you’re going to convert our app into a React app. You will do this from the command line (Windows users use GitBash, Mac users use Terminal):

1. From the command line, navigate into your **intro-to-react** folder. You can also open the VS Code Integrated terminal. 
2. Verify that you’re in the correct folder by typing **pwd**
3. Issue the following commands

    ```bash
    npm init -y
    npm install vite
    npm install react react-dom
    ```

4. Open the newly-created package.json file (from within VS Code) add the following entry to your “scripts” section:

    ```bash
    "dev": "vite dev",
    ```

5. After editing your `package.json` file, run **`npm run dev`** on the command line. When you do, you should see the following output:

    ```bash
    **VITE** v5.2.6  ready in **307** ms
    ➜  **Local**:   http://localhost:**5173**/
    ➜  **Network**: use **--host** to expose
    ➜  press **h + enter** to show help
    ```

1. Finally, navigate to [http://localhost:**5173**/](http://localhost:5173/) in your web browser. You should see a web page. If you open the browser console, you should see “hello world!”

### Q: What just happened?

A few things just happened:

1. **npm init** created a package.json file, which has some instructions for running our react app, as well as the dependencies that need to be installed.
2. The **npm install** commands downloaded some JavaScript libraries from the Internet, including vite and react.
3. Adding the **"dev": "vite dev"** line to package.json created a node instruction that means:
    - “Whenever we type “**npm run dev”** in the command line, run a local server with “hot reload” and “bundling” enabled.

We’ll talk more about what each of these terms mean in future lessons.

## 4. Modify Your HTML & JavaScript

Now, we’re going to make a few changes to our HTML and JavaScript to make it a React App.

1. Create a new folder called `src` inside of your `intro-to-react` folder.
1. Inside of `src`, create a new file called `App.jsx`

    ```jsx
    import React from "react";

    export default function App() {

        return (
            <>
                <header>
                    <h1>My First App</h1>
                </header>
                <main>
                    <p>Hello React!</p>
                </main>
            </>
        );
    }
    ```
1. Also inside of `src`, Create another new file called `main.jsx` and paste the following code into your page:

    ```jsx
    import React from "react";
    import { createRoot } from "react-dom/client";
    import App from "./App.jsx";

    function main() {
        const rootEl = document.getElementById("app");
        const root = createRoot(rootEl);
        root.render(<App />);
    }

    main();
    ```

1. Modify `index.html` as follows:

    1. Inside of the body tag, add an empty div tag that has an id of “app”:  

        ```html
        ...
        <body>
            <h1>Hello world</h1>
            <p>Here is some text!</p>
            <div id="app">React App gets injected here...</div>
        </body>
        ...
        ```

    1. Add the following JavaScript reference within the `<head></head>` of your HTML file to point to the **main.jsx** file you just made:

        ```html
        <head>
            ...
            <script type="module" src="./src/main.jsx" type="text/javascript" defer></script>
        </head>
        ```

Now, go and check <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a> in your web browser, and you should see a new element in your web browser.

### Q: What just happened?
You have now successfully configured your computer to run React applications. A few notes:

1. The `main.jsx` script essentially injects our first component, `App`, into the DOM.
1. Notice that App.jsx uses JSX instead of building strings using template literals (the backtick). Just a minor syntax adjustment.
1. Currently, the App component doesn't do much, but in the subsequent steps, we're going to make it more interesting.

## 5. Create your first component
Say we want to make a card for each student in this class with their name, major, photo, and some links to their socials. We can do this by making a component, which standardizizes the way that the information is processed and presented. Let's try making one inside of your `src` folder:

1. Create a new component called **Profile.jsx** and a corresponding stylesheet called **Profile.css**
2. Inside of Profile.jsx, import the stylesheet to link the two files together as follows:

    ```jsx
    import "./Profile.css";
    import React from "react";

    export default function Profile() {
        return (
            <section className="profile">
                Profile Goes here!
            </section>
        );
    }
    ```

1. Now, inside of App.jsx, import your new Profile component at the top:

    ```jsx
    import Profile from  "./Profile.jsx";
    ```

1. You can now make new <Profile /> tags. Let's add a few to your `App.jsx` file underneath your `<p>Hello React!</p>` message:

    ```jsx
    <p>Hello React!</p>
    <Profile />
    <Profile />
    <Profile />
    <Profile />
    ```

1. Preview your website in your web browser: [http://localhost:**5173**/](http://localhost:5173/). If you did it correctly, you should see the sentence "Profile Goes here!" 4 times.

### Challenge 1
Can you get your `Profile.jsx` component to display the “name” attribute? In other words, if I make different profile tags that look like this, 
the component should output each of their names to the screen.

```jsx
<Profile name="Anita" />
<Profile name="Ben" />
<Profile name="Adwaina" />
<Profile name="Laciesha" />
```

**Hint:** you need to use `props` in your `Profile.jsx` file.


#### Answer (don't look until you've tried it!)

1. Here's the answer:
    ```jsx
    import "./Profile.css";
    import React from "react";

    export default function Profile({ name }) {
        
        return (
            <section className="profile">
                <h3>{name}</h3>
            </section>
        );
    }
    ```

1. Notice that a **property** is passed into Profile within a set of curly braces:

    ```jsx
    export default function Profile({ name }) {
        ...
    }
    ```
2. The **property** is then used inside the JSX template:

    ```jsx
    <h3>{name}</h3>
    ```

### Challenge 2
See if you can figure out how to get different people’s profile pics to show up: for instance, if I make different profile tags that look like this…

```jsx
<Profile name="Anita" picture="https://picsum.photos/id/216/100/100" />
<Profile name="Ben" picture="https://picsum.photos/id/217/100/100" />
<Profile name="Adwaina" picture="https://picsum.photos/id/218/100/100" />
<Profile name="Laciesha" picture="https://picsum.photos/id/219/100/100" />
```

…I should be able to see the student's name and image.

#### Answer (don't look until you've tried it!)
1. To get your component to understand data from the parent tag, you’ll have to “pass in” the property as an argument to Profile:

    ```jsx
    import "./Profile.css";
    import React from "react";

    export default function Profile({ name, picture }) {
        
        return (
            <section className="profile">
                <h3>{name}</h3>
                <img src={picture} />
            </section>
        );
    }

    ```

1. Notice that a second **property** is passed into Profile within a set of curly braces:

    ```jsx
    export default function Profile({ name, picture }) {
        ...
    }
    ```

1. Also notice that the new **property** is then used inside the JSX template:
    ```jsx
    <img src={picture} />
    ```

1. Feel free to style your card by editing your `Profile.css` file.

## 6. Working with Data
Components are often rendered "on-the-fly," in response to a user event or server request. 

### Challenge 1
See if you can modify your `App.jsx` file to iterate through the following array of classmates and generate a Profile component for each one.

1. Add this array within your App function:
    ```jsx
    const people = [
        {
            "name": "Anita",
            "image_url": "https://picsum.photos/id/216/100/100"
        },
        {
            "name": "Ben",
            "image_url": "https://picsum.photos/id/217/100/100"
        },
        {
            "name": "Adwaina",
            "image_url": "https://picsum.photos/id/218/100/100"
        },
        {
            "name": "Laciesha",
            "image_url": "https://picsum.photos/id/219/100/100"
        }
    ];
    ```
1. Modify the JSX that's returned
    * Hint: use the array's `map` function.

#### Answer (don't look until you've tried it!)
1. One way to generate components from an array is by using an embedded expression in the JSX return value:
    ```jsx
    import React from "react";
    import Profile from "./Profile.jsx";

    export default function App() {
        const people = [...];

        return (
            <>
                <header>
                    <h1>My First App</h1>
                </header>
                <main>
                    <p>Hello React!</p>
                    {/* expressions are embedded in curly braces in JSX */}
                    { people.map((person) => {
                        return (
                            <Profile
                                name={person.name}
                                picture={person.image_url}
                            />
                        );
                    }) }
                </main>
            </>
        );
    }
    ```
1. Note that JSX expressions are embedded in the JSX using curly braces.
1. The `people.map(...)` expression is the same JavaScript we've been using this whole time. 
1. The job of `people.map(...)`'s inner function (shown below) is to return a `<Profile />` component for each element in the array:
    ```jsx
        // inner anonymous function
        (person) => {
            return (
                <Profile
                    name={person.name}
                    picture={person.image_url}
                />
            );
        }

    ```
1. After the `people.map(...)` expression has been processed, the return value is an array of React components that are inserted into the surrounding JSX object.
1. An alternate way to do this is to separate the "map" part of the logic into its own function:

    ```jsx
    import React from "react";
    import Profile from "./Profile.jsx";

    export default function App() {
        const people = [...];

        function getProfileComponents() {
            return people.map((item) => {
                return <Profile name={item.name} picture={item.image_url} />;
            });
        }

        return (
            <>
                <header>
                    <h1>My First App</h1>
                </header>
                <main>
                    <p>Hello React!</p>
                    {/* expressions are embedded in curly braces in JSX */}
                    {getProfileComponents()}
                </main>
            </>
        );
    }
    ```

#### Summary
We have now seen an approach to generating components from data. But how do we get data from a server?! Great question! We will. But before we do that, we need to cover one more big idea: **state**


## 7. Working with State
**“State Variables”** enable a component to dynamically redraw after a state change -- usually caused by a user interaction or an external process like retrieving data from a server). In React, we don't target DOM elements. Instead, we just redraw our components. The process for getting state variables to work is as follows:

1. Create a state variable and a “setter” using the built-in `useState()` function.
1. Manipulate the state variable via a user interaction (e.g., onClick, onMouseOver, etc.). The user interaction will invoke the state variable’s “setter” and set the variable to a new value.
1. Once the “setter” is finished setting the new value, the component redraws automatically.

### Example
Let's talk through state concretely by looking at an example:

1. In your `src` folder, create a new file called `ButtonCount.jsx`
1. Paste the following code into the file:

    ```jsx
    import React, { useState } from "react";

    export default function ButtonCount() {
        // biggest idea in React is: state variables!
        const [count, setCount] = useState(0);

        function addOne() {
            setCount(count + 1);
        }

        function resetCounter() {
            setCount(0);
        }

        return (
            <div>
                <button onClick={addOne}>You have clicked {count} times</button>
                <button onClick={resetCounter}>reset</button>
            </div>
        );
    }
    ```
    
1. Now, in `App.jsx`, import the component you just made...

    ```jsx
    import ButtonCount from "./ButtonCount.jsx";
    ```

1. ...and then add some `<ButtonCount />` tags to the bottom of your JSX object

    ```jsx
    <ButtonCount />
    <ButtonCount />
    <ButtonCount />
    <ButtonCount />
    <ButtonCount />
    <ButtonCount />
    ```
1. When you preview your code in the browser, you will see a bunch of buttons. Try clicking the buttons. Notice that each component is independent of the others.

Some things to notice:

1. In the example above that the `addOne()` and `reset()` functions -- which are invoked by button clicks -- both invoke the `setCounter()` function.
1. The `setCounter()` function, which was generated from React's `useState` function, is a special function that will (a) set the counter variable to the new value and (b) redraw the screen.


### Challenge
Can you figure out how to modify the `ButtonCount` component so that it initializes to any value (which is specified in the component tag)?


1. ***Takeaway***: Every time you want to trigger a screen redraw, use a state variable as follows:
    1. Create a state variable and setter using React's built-in `useState` function
    1. Invoke the setter function to set the state variable, which will automatically redraw the component.

## 8. Working with External Data
We are finally ready to work with external data. Managing external data can be tricky because you're reaching outside of the immediate app to synchronize with another server. In programming, actions like this are called "side effects," because the `fetch` function is accessing something outside of it's immediate scope.

To handle side effects gracefully, React has a function called `useEffect` that helps the app synchronize with other process. The approach:

1. Create an empty state variable to hold the data.
1. Wrap any asynchronous function calls (like fetch statements) in an "effect".
1. When the the asynchronous function resolves, set the state variable (which will trigger a redraw).

Let's see this process in action by doing the following in your `App.jsx` component:

1. Delete the `photos` array (hardcoded data will be replaced by server data).
1. Create a new file called `data-functions.js` inside of `src`. This file will store any asynchronous server functions. Add the following code to this new file:

    ```js
    // function to log in and get access token:
    export async function getAccessToken(username, password) {
        const endpoint = `https://photo-app-secured.herokuapp.com/api/token/`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        });
        const data = await response.json();
        return data.access_token;
    }

    // function to retrieve all of your posts:
    export async function getPosts() {
        // get your access token: change this to your username:
        const token = await getAccessToken("webdev", "password");
        const response = await fetch(
            `https://photo-app-secured.herokuapp.com/api/posts/`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        return await response.json();
    }
    ```

1. Modify the import statement at the top by also importing the `useEffect` function and the `getPost` function you just made:

    ```jsx
    import React, { useState, useEffect } from "react";
    import { getPosts } from "./data-functions.js";
    ```

1. Within your `App` function towards the very top, create a state variable to hold your server data, and initialize it to an empty array:

    ```jsx
    export default function App() {
        const [posts, setPosts] = useState([]);
        ...
    }
    ```
1. Below the state variable / setter you just made, add add a `useEffects()` function invocation that will invoke your`getPosts()` function after the first screen render:

    ```jsx
    useEffect(() => {
        (async function () {
            const posts = await getPosts();
            console.log(posts);
            setPosts(posts);
        })();
    }, []);
    ```

1. And finally, adjust your `getProfileComponents()` function to accommodate the server data stored in the `posts` function:

    ```jsx
    function getProfileComponents() {
        return posts.map((item) => {
            return <Profile key={item.id} name={item.caption} picture={item.image_url} />;
        });
    }
    ```

1. When you're done, the entire `App.jsx` should look like this:

    ```jsx
    import React, { useState, useEffect } from "react";
    import Profile from "./Profile.jsx";
    import ButtonCount from "./ButtonCount.jsx";
    import { getPosts } from "./data-functions.js";

    export default function App() {
        const [posts, setPosts] = useState([]);

        useEffect(() => {
            (async function () {
                const posts = await getPosts();
                console.log(posts);
                setPosts(posts);
            })();
        }, []);

        function getProfileComponents() {
            return posts.map((item) => {
                return (
                    <Profile
                        key={item.id}
                        name={item.caption}
                        picture={item.image_url}
                    />
                );
            });
        }

        return (
            <>
                <header>
                    <h1>My First App</h1>
                </header>
                <main>
                    <p>Hello React!</p>
                    {/* expressions are embedded in curly braces in JSX */}
                    {getProfileComponents()}

                    <ButtonCount />
                    <ButtonCount />
                    <ButtonCount />
                    <ButtonCount />
                    <ButtonCount />
                    <ButtonCount />
                </main>
            </>
        );
    }
    ```

1. If you did it correctly, you should see data from Photo App displayed on the screen. Good job!

### Takeaways
1. Any external server queries that need to happen when the page loads need to be wrapped in a `useEffect` function.

1. You can learn more about them here:
    * <a href="https://beta.reactjs.org/learn/synchronizing-with-effects" target="_blank">Synchronizing with effects</a>
    * <a href="https://beta.reactjs.org/learn/you-might-not-need-an-effect" target="_blank">You might not need an effect</a>