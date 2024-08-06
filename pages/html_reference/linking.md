---
layout: two-column-resources
title: Hyperlinks
nav_order: 3
parent: HTML Resources
permalink: /html-reference/links/
---

<style>
    .link-table td:first-child {
        width: 230px;
    }
</style>

Linking is probably **the most important feature** of the worldwide web, and allows documents, media, fonts, text files, etc. to be connected together -- no matter what computer they are on! There are three different ways of linking to resources:

1. [Using relative paths](#relative)
2. [Using absolute paths](#absolute)
3. [Using internal links](#internal)

{:#relative}
## 1. Using relative paths
Most of the time, your web pages will link to neighboring files that are stored on the same computer as your web page. Given this, you have to "teach the browser" how to navigate from the current file to a file stored in a neighboring folder.

In the example below, pretend that your files are organized as follows and that you're editing the `index.html` file located inside the `my_website/home` directory.

```shell
my_website
├── files
│   └── gallery.html
├── home
│   ├── contact.html
│   ├── index.html
│   └── styles
│   └── styles
│       ├── dark
│       │   └── new.css
│       └── my_style.css
├── images
│   ├── cat.jpg
│   └── dog.jpg
└── test.html
```

{:.link-table}
| Link (from &#8594; to) | Path | Explanation |
|--|--|--|
| `index.html` &#8594; `contact.html` | `contact.html` | Because both files are in the same directory, you can just specify the file name |
| `index.html`  &#8594; `test.html` | `../test.html` | The `../` notation means "go up one directory" (in this case, into the `my_website` directory). Then once you're in the correct directory, access the `test.html` file. |
| `index.html`  &#8594; `gallery.html` | `../files/gallery.html` | "Navigate up one directory (to `my_website`), then into the `files` directory, and then access `gallery.html`." |
| `index.html`  &#8594; `dog.jpg` | `../images/dog.jpg` |  |
| `index.html`  &#8594; `my_style.css` | `styles/my_style.css` | "Go into the `styles` directory and then access `my_style.css`." |
| `index.html`  &#8594; `new.css` | `styles/dark/new.css` | "Go into the `styles` directory, then go into the `dark` directory, and then access `new.css`." |

### Sample index.html code
The code below shows how you might apply these paths in an actual HTML page:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My first web page</title>
        <link rel="stylesheet" href="styles/my_style.css" />
        <link rel="stylesheet" href="styles/dark/new.css" />
    </head>
    <body>
        <!-- All visible content goes inside of the body tag -->
        <h1>Hello world</h1>
        <img src="../images/dog.jpg" alt="A picture of a dog" />

        <p>
            Here is <a href="contact.html">my contact form</a>.
            Here is a <a href="../test.html">Test Link</a>.
            Here is <a href="../files/gallery.html">my photo gallery</a>.
        </p>
    </body>
</html>

```

{:#absolute}
## 2. Using absolute paths
Note that if the resource is on someone else's computer, you need to provide a "fully qualified" URL path, including the protocol (https), the server name (google.com), and then file path (none specified in this case).

<iframe src="//codepen.io/vanwars/embed/mERgZY/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>


{:#internal}
## 3. Using internal links (linking to page regions)
Note that the href value is prefaced with a hash tag (#) followed by the id of the section where you want to jump:

<iframe src="//codepen.io/vanwars/embed/rLjbXG/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>


> ## Additional Resources
>
> * [Absolute versus relative paths](http://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/)