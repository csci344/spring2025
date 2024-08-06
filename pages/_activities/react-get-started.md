---
layout: two-column
title: "Activity: Getting Started with React"
type: tutorial
abbreviation: Activity 5
draft: 0
num: 5
---

{:.blockquote-no-margin}
> ## 1. Do the Readings
> If you haven't take a look at these documents, carve out some time to do it.
> * <a href="https://beta.reactjs.org/learn" target="_blank">Quick Start</a>
> * <a href="https://beta.reactjs.org/learn/tutorial-tic-tac-toe" target="_blank">Tic Tac Toe</a>
> * <a href="https://beta.reactjs.org/learn/thinking-in-react" target="_blank">Thinking in React</a>
> * <a href="https://beta.reactjs.org/learn/sharing-state-between-components" target="_blank">Sharing state between components</a>

## 2. Install Node.js
If you haven't already, please <a href="https://nodejs.org/en/download/">install Node.js</a>.

## 3. Browse the Node FAQs

### What are some useful Node.js commands in the context of React?
Here are a few of the most common ones:

```shell
npm install     # installs node packages if there's a package.json file found
npm start       # starts your react app
npm build      # builds a production-ready version of your react app
```

### What is Node.js?
Node.js is an open-source, server-side platform built on top of the V8 JavaScript engine used for building scalable network applications. It allows developers to use JavaScript on the server-side to build fast and scalable web applications that can handle a large number of simultaneous connections with high throughput. Node.js provides an event-driven, non-blocking I/O model that makes it an ideal choice for building real-time, data-intensive applications.

One of the key benefits of Node.js is its ability to handle I/O operations asynchronously, which makes it well-suited for building applications that require real-time communication and streaming data. It's commonly used to build web servers, APIs, microservices, and web applications. Node.js is supported on multiple platforms, including Windows, macOS, and Linux, and is widely used by developers around the world.

### What is a Node.js Package?
In Node.js, a package is a collection of code that is typically published to the npm (Node Package Manager) registry and can be installed into a Node.js project using the npm install command. Typically, packages are installed by reading the `package.json` file and are stored in a `node_modules` directory.
* Note: always exclude your `node_modules` directory from version control by adding it to a `.gitignore` file.

### If React is a client-side technology, why does it use Node.js?
While Node.js is primarily a server-side platform, it is also used to build, transpile, and/or bundle JavaScript libraries (including React), CSS, and other web assets for deployment. React needs Node.js to transpiles JSX and other Node modules into "vanilla" HTML, CSS, and JavaScript that any browser can understand. 

Node.js can also be used to automate tasks such as minifying JavaScript and CSS files, compiling Sass or Less files into CSS, and running tests. Node also has it's own test web server that React uses, to streamline the web development process.

## 4. Create Your First React Project
Complete the React <a href="https://beta.reactjs.org/learn/tutorial-tic-tac-toe" target="_blank">Tic Tac Toe Tutorial</a>. Begin by downloading the starter files below and saving them in `csci344/activities/react-get-started`.

<a href="/fall2024/course-files/activities/react-get-started.zip" class="nu-button">React Tic Tac Toe Starter Files <i class="fas fa-download"></i></a>








