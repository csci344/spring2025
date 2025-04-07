---
layout: assignment-two-column
title: Intro to Flask
type: tutorial
abbreviation: Tutorial 9
draft: 0
points: 6
num: 9
start_date: 2025-04-11
due_date: 2025-04-14
---

<style>
    table th:first-child, table td:first-child {
        min-width: auto;
        max-width: auto;
        width: auto;
    }

    .mtop {
        margin-top: 50px;
    }
</style>

{% include walkthrough-tutorial09.html %}


{:.mtop}
> ## Background Readings
> Before beginning this tutorial, please read (or at least skim) the following:
>
> * <a href="https://realpython.com/dependency-management-python-poetry" target="_blank">Intro to Python Poetry</a> (skim)
> * Flask website. <a href="https://flask.palletsprojects.com/en/2.0.x/quickstart/" target="_blank">Flask Quickstart Guide</a>

## 1. Install Python & Poetry
To complete this tutorial, you will need to install python (at least version 3.8) and poetry (package manager). We did this in class. If you need assistance, please come to office hours.

## 2. Intro to Flask
<a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank">Flask</a> is a framework, built with Python, for helping people build dynamic, scalable web applications. I have selected Flask as our web server engine for this semester because it has a relatively simple set of common abstractions, and is therefore easier to learn than some other frameworks. At the same time, it is also very powerful, and has features such as:

* Templating, using the <a href="https://jinja.palletsprojects.com/en/3.0.x/" target="_blank">Jinja template engine</a>
* A simple way to define <a href="https://flask.palletsprojects.com/en/2.0.x/api/#url-route-registrations" target="_blank">routes</a> (which bind URL addresses to functions), and to specify which HTTP methods are valid for a particular route (HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE)
* A way to listen for and parse HTTP requests over a specified port
* A way to create and send HTTP responses

In addition, since Flask is written in Python, you have access to any and all Python libraries (e.g., for connecting to various databases, taking advantage of pretrained models, and so forth).

Most frameworks have abstractions similar to those offered by Flask, so once you learn Flask, learning new server-side web frameworks will be easier. Some other web frameworks that are analagous to Flask (that you may have heard of) include:

{:.small}
| Python | Flask, Django, Web2Py, Pyramid, etc.| 
| Node.js | Express, etc. |
| PHP | Larvel, Symfony, etc. |
| Ruby | Rails, etc. |
| Java | Spring, Struts, Guice, etc. |
| C# | ASP.NET |


## 3. Intro to Virtual Environments
To run Flask, we are going to create a self-contained Python virtual environment, using **`poetry`**. This ensures that the python dependencies needed for this tutorial don't interfere with any global python installations you might have. By using a virtual environment, the libraries we install are isolated from those installed in other virtual environments, and (by default) any libraries installed in a “system” Python, i.e., one which is installed as part of your operating system.

Note that libraries installed in a "system" Python ARE available to your venv, but can be overridden from within the venv. For instance, `numpy` is a python module that is commonly used in data science tasks. So, if `numpy version 1.15.4` is installed on your "system" Python and you decide to install `numpy version 1.16.1` in your venv, then within the venv, `1.16.1` will take precedence. 

Some commands to know:

```bash
# installs all of your python dependencies by reading the `pyproject.toml` file.
poetry install      

# run a file within your poetry virtual environment by prepending your command with "poetry run":
poetry run <some_command>

# examples:
poetry run python main.py
poetry run flask run --debug
```


## 4. Set Up
After you have installed Python is installed, download tutorial09.zip (below), unzip it, and move your `tutorial09` folder inside of your `tutorials` folder. 

<a class="nu-button" href="/spring2025/course-files/tutorials/tutorial09.zip">tutorial09.zip<i class="fas fa-download" aria-hidden="true"></i></a>


### Set Up Your Virtual Environment
Open the terminal and navigate to your `tutorial09` folder. Then, set up a virtual environment as follows:

```bash
poetry install
```


### Run Your Flask Web Server

When you're done, try running your flask app from your command line:


```bash
poetry run flask run --debug
```

You should see the following output:
```bash
 * Serving Flask app "app.py" (lazy loading)
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 273-580-071
 ```

 Navigate to <a href="http://127.0.0.1:5000/" target="_blank">http://127.0.0.1:5000/</a>, and you should see a screen that lists the exercises that you are to complete:

<img class="medium frame" src="/spring2025/assets/images/tutorials/tutorial09/home.png" />



## 5. Required Flask Exercises
Once you've set up your flask installation, you will complete 5 required exercises. You may also complete the optional exercise (#6) for extra credit:

|  | Exercise | Purpose |
|--|--|--|
| 1. | [Display personalized greeting](#task_1) | Practice generating and sending a dynamic string via HTTP |
| 2. | [Grab data from a "database"](#task_2) | Practice sending a JSON string from a "database" via HTTP |
| 3. | [Grab data from another server](#task_3) | Query another REST API and then forward the resulting data as an HTTP response. Allow the user to specify criteria using query parameters. |
| 4. | [Merge your data with a template](#task_4) | Practice creating a data-driven, server-side HTML file from a template. Templates allow you to separate the data from the presentation of the data. |
| 5. | [Merge someone else's data with a template](#task_5) | Merge yelp data with a template that you design. |
| 6. | [Merge someone else's data with a template](#extra_credit) (more practice) | **Extra Credit** Same as task 5 except that you will loop through each restaurant using Jinja looping syntax. |

Each of these exercises is intended to help you get a sense of the kinds of things you can do with Flask (or any web framework):

{:#task_1}
### 1. Display personalized greeting
Update the `exercise1` function so that it returns a personalized greeting to the user. In other words, replace "Hello World!" with something like, "Hi Erick Rubi!"
* Assume that the `current_user` variable, defined at the top of `app.py` represents the user who is currently logged in. 

<img class="medium frame" src="/spring2025/assets/images/tutorials/tutorial09/hello-erick.png" />

{:#task_2}
### 2. Grab Data from "database"
The big idea with REST APIs is that they expose a subset of your organization's data (from a database) to the outside world. Within `app.py`, scroll down to the `exercise2` function. This function opens a simple "database" file (just a JSON file), loads the data into memory, and then sends it as response to the requestor. Currently, it just returns an empty dictionary. You will replace the return statement with the following:

```python
return json.dumps(data)
```

After editing the function, test your endpoint by accessing <a href="http://127.0.0.1:5000/data/quotes/" target="_blank">http://127.0.0.1:5000/data/quotes/</a>. If your code worked, you should see JSON of "famous quotes."

<img class="medium frame" src="/spring2025/assets/images/tutorials/tutorial09/quotes-json.png" />

A quick note on the `json` library:
* `json.dumps()` converts a Python dictionary into JSON (a string).
* `json.loads()` convert JSON (a string) into a Python dictionary.
{:.compact}

{:#task_3}
### 3. Grab data from another server
Servers can also be clients that issue requests to other servers (the thing doing the "asking" is usually referred to as the client). In other words, your Flask server can query data from other servers (using HTTP or other protocols) and then make use of that data in their own way. The `exercise3` function queries a proxy server that Sarah made (<a href="https://www.apitutor.org" target="_blank">https://www.apitutor.org</a>) for accessing Yelp (and other providers). In this example, we are querying Yelp for restaurants that match a ***location*** and ***term***:

```python
@app.route('/data/yelp/')
@app.route('/data/yelp')
def exercise3():
    args = request.args
    print(args)
    search_term = 'pizza'
    location = 'Asheville, NC'
    # go fetch data from another server and give it to the requestor:
    url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location={location}&term={search_term}&limit={count}'.format(
        location=location, 
        search_term=search_term, 
        count=5)
    response = requests.get(url)
    data = response.json()
    return json.dumps(data)
```


You are going to make this route more customizable by allowing the requestor to pass query parameters to the `/data/yelp/` endpoint. For instance:

<a href="http://127.0.0.1:5000/data/yelp/?location=Asheville+NC&term=thai" target="_blank">http://127.0.0.1:5000/data/yelp/?location=Asheville+NC&term=thai</a>

Recall from previous lectures:

{:.compact}
* The `?` character is used to specify where the route ends and the query parameters begin. 
* If there is more than one query parameter, then each parameter/argument pair is separated by an `&` character (see examples below). 
* The parameter name is on the left side of the `=` and the value is on the right side.
* In flask, you can access the query parameters via the `request.args`, which stores a dictionary representation of any query parameters associated with a given route.


#### Your Task
Replace the hard-coded 'pizza' and 'Asheville, NC' terms with the user's preferences, using the the `request.args` dictionary. In python, to get a key from a dictionary, you can do this:

```python
search_term = request.args.get('term')
location = request.args.get('location')
```

Also, be sure to check if they passed in both a "location" and a "term" parameter. If they didn't, give them an error message and tell them to try again:


* <a href="http://127.0.0.1:5000/data/yelp/?location=Asheville,+NC&term=chinese" target="_blank">http://127.0.0.1:5000/data/yelp/?location=Asheville,+NC&term=chinese</a> (Chinese restaurants in Asheville)
* <a href="http://127.0.0.1:5000/data/yelp/?location=San+Diego,CA&term=thai" target="_blank">http://127.0.0.1:5000/data/yelp/?location=San+Diego,CA&term=thai</a> (Thai restaurants in San Diego)

If you implemented this function correctly:

* The "location" search parameter is honored
* The "term" search parameter is honored
* If either parameter is missing, an error message displays
{:.compact}

<img class="large frame" src="/spring2025/assets/images/tutorials/tutorial09/yelp-json.png" />


{:#task_4}
### 4. Merge your data with a template
The `exercise4` function uses a template to generate an HTML string, which is returned as a response. Specifically, python parses the `templates/quote-of-the-day.html` file, finds any Jinja syntax, evaluates that syntax, and finally sends a "plain" HTML file back to the client (very similar to a template literal or JSX, but with more power):

```python
@app.route('/quote')
def exercise2():
    return render_template(
        'quote-of-the-day.html',
        user=current_user
    )
```
Open the `templates/quote-of-the-day.html` file and examine how the Jinja template allows python logic to be evaluated from within the HTML template (using double curly brace notation). Note that **in order to give your template access to data, it must be passed into the `render_template` function as a keyword argument** (from `app.py`). You may pass in as many keyword arguments (i.e. pieces of data) as you like into the template. These pieces of data are often referred to as the template's "context."

#### Your Task
Please make the following modifications:
1. In `app.py`, add another context variable, called `quote` that holds a randomly selected quote from the `quotes` list (see ~line 17). 
    *  The context variable must be included as a keyword argument in your `render_template` function.
    * I recommend that you use Python's built-in <a href="https://www.w3schools.com/python/ref_random_choice.asp" target="_blank">random.choice</a> function to select a random element from a list.
1. In `templates/quote-of-the-day.html`, update the template so that the quote of the day is displayed.
    * [Jinja Cheatsheet](https://www.codecademy.com/learn/learn-flask/modules/flask-templates-and-forms/cheatsheet)


<img class="medium frame" src="/spring2025/assets/images/tutorials/tutorial09/erick-quote.png" />

<!-- {:#task_5}
### 5. Accessing data from other servers -->


{:#task_5}
### 5. Merge someone else's data with a template
Now, you're going to create a data-driven **template** to display information about the "Top Restaurant" (according to Yelp) that matches your search criteria. Consider the following code:

```python
@app.route('/ui/first-restaurant/')
@app.route('/ui/first-restaurant')
def exercise5():
    # code to parse the query parameters (like in exercise 3):
    args = request.args
    location = args.get('location')
    search_term = args.get('term')
    
    # error handling:
    if not (location and search_term):
        return '"location" and "term" are required query parameters'

    # code to query yelp:
    url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location={0}&term={1}&limit=1'.format(
        location, search_term)
    response = requests.get(url)
    restaurants = response.json()
    
    # code to render the template (and to pass the template the data it needs)
    return render_template(
        'restaurant.html',
        endpoint='/ui/first-restaurant/',
        user=current_user,
        search_term=search_term,
        location=location,
        restaurant=restaurants[0] # just show the first restaurant
    )
```

It works very similarly to the code in exercise 3, except for it merges with the `restaurant.html` template (instead of dumping raw JSON data). Please try testing these routes by experimenting with the following URLs:

* <a href="http://127.0.0.1:5000/ui/first-restaurant/?location=Asheville,%20NC&term=chinese" target="_blank">http://127.0.0.1:5000/ui/first-restaurant/?location=Asheville,%20NC&term=chinese</a> (Chinese restaurants in Asheville)
* <a href="http://127.0.0.1:5000/ui/first-restaurant/?location=San Diego,%20CA&term=thai" target="_blank">http://127.0.0.1:5000/ui/first-restaurant/?location=San Diego,%20CA/thai</a> (Thai restaurants in San Diego)

Note that the `restaurant.html` template uses a new construct -- the "include" -- as a way to modularize code.

<img class="large frame" src="/spring2025/assets/images/tutorials/tutorial09/template-before.png" />

#### Your Task
Modify the HTML in the `restaurant.html` template so that it displays the Yelp data in a more visual format. For instance, Sarah made her's look like this:

<img class="medium frame" src="/spring2025/assets/images/tutorials/tutorial09/template-after.png" />

Feel free to jazz up your template any way you like!
* [Jinja Cheatsheet](https://www.codecademy.com/learn/learn-flask/modules/flask-templates-and-forms/cheatsheet)

{:#extra_credit}
## 5. Extra Credit (5pts)
If you have more time, please also try `exercise6`. It's similar to `exercise5`, but requires a Jinja

### 1. Looping using Jinja
In `exercise5`, you only display a single restaurant. Look at the <a href="https://jinja.palletsprojects.com/en/3.0.x/templates/" target="_blank">Jinja documentation</a> and see if you can figure out how to output all of the matching restaurants for the search (not just the first one). See if you can make your template look like this one:

<img class="large frame" src="/spring2025/assets/images/tutorials/tutorial09/restaurants.png" />

### 2. Includes
See if you can convert the HTML that shows a single restaurant card into an include file (similar to `includes/header.html`)

## What to Turn In
To submit Tutorial 9, you can either:
* Commit and sync your code to GitHub using git and paste a link to your repo. 
* If you worked with a partner, list your partner as a comment.
* If you did the extra credit, tell me so that I can look for it.

You do not need to link this exercise to your home page, because GitHub Pages doesn't know how to run a Flask application. We will need a more complicated server architecture for that.


