---
layout: two-column
title: "Activity: Deploying to Heroku"
type: tutorial
abbreviation: Activity 7
draft: 1
num: 7
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

## Intro to Heroku
<a href="https://www.heroku.com/about" target="_blank">Heroku</a> is a container-based cloud Platform as a Service (PaaS) that is owned by Salesforce. You can use Heroku to publish many different kinds of web development projects (not just Python, Node, React, etc.). Essentially, Heroku allows you to configure a virtual computer on someone else's machine, and then save and run your files there. The basic process is as follows:
1. [Create a new Heroku app](#create) (i.e. "dyno")
1. [Create a hosted database](#db) (a cloud version of your database)
1. [Configure your app](#configure) -- by create a few different configuration files and variables. Specifically:
    * Create a `requirements.txt` file (for installing python packages)
    * Create a `Procfile` to tell Heroku that we want to run a Flask web server using <a href="https://devcenter.heroku.com/articles/python-gunicorn" target="_blank">Gunicorn</a>
    * Create a `package.json` file to teach Heroku how to compile your React app.
    * Set some environment variables that tell Heroku how to access your database and JWT Secret
    {:.compact}
1. Deploy your app by downloading and configuring the Heroku Command Line Interface (CLI). Heroku's CLI, in combination with git, helps you send your files to Heroku.

Heroku also has support for hosting PostgreSQL databases, which is a free service if you register as a student. Also, if you have the free version, it goes to sleep if it hasn't been used for a while. So the first time you access your Heroku website, it's a little slow.

## Publishing Photo App on Heroku

{:#create}
### 1. Create a Heroku App
Register for Heroku (if you don't yet have an account): <a href="https://signup.heroku.com/" target="_blank">https://signup.heroku.com/</a>. 

Create a new app on Heroku by logging into the Heroku website and using the Web UI. Name it anything you want!

<img class="frame xsmall" src="/spring2025/assets/images/activities/github-deployment/heroku1.png" />

<img class="large frame" src="/spring2025/assets/images/activities/github-deployment/heroku2.png" />

{:#db}
### 2. Create a Hosted Database 
After creating your app, you will create a database using <a href="https://elements.heroku.com/addons/heroku-postgresql" target="_blank">Heroku Postgres</a>. Click the "Install Heroku Postgres" button (purple).
* You will have to <a href="https://www.heroku.com/students" target="_blank">register with Heroku as a student</a> to get this database for free. 

<img class="small frame" src="/spring2025/assets/images/activities/github-deployment/heroku6a.png" />

Next, search for the app you just made and then click "Submit Order Form"

<img class="large frame" src="/spring2025/assets/images/activities/github-deployment/heroku6b.png" />

<img class="large frame" src="/spring2025/assets/images/activities/github-deployment/heroku7.png" />

When you're done, you should see a confirmation screen:

<img class="large frame" src="/spring2025/assets/images/activities/github-deployment/heroku8.png" />

{:#configure}
### 3. Add Environment Variables

Now navigate to the "Settings" tab:

<img class="large frame" src="/spring2025/assets/images/activities/github-deployment/heroku9.png" />

Scroll down and click the "Reveal Config Vars"

<img class="medium frame" src="/spring2025/assets/images/activities/github-deployment/heroku10.png" />

You should notice that Heroku Postgres has created a database connection string for you in the format: 

```shell
postgres://<username>:<password>@<host>:5432/<database_name>
```

<img class="large frame" src="/spring2025/assets/images/activities/github-deployment/heroku11.png" />

* You are going to create a new environment variable called `DB_URL` that is identical to the `DATABASE_URL` string, but prefixed by `postgresql://` instead of `postgres://` (which is necessary to work with SQL Alchemy).
* You are also going to create a second environment variable that holds your `JWT_SECRET` (see below)

<img class="large frame" src="/spring2025/assets/images/activities/github-deployment/heroku12.png" />

Copy the new DB_URL environment variable into your `.env` file and comment out the DB_URL environment variable pointing to your local database instance as shown below:

```bash
FLASK_APP=app.py

# Comment out local database string:
# DB_URL=postgresql://postgres:12345@localhost/photo-app

# Add cloud database string:
DB_URL=postgresql://some_username:some_password@ec2-34-205-209-14.compute-1.amazonaws.com:5432/some_database

JWT_SECRET=MY_SECRET

```

Then, on your command line from the root of your `photo-app` directory, run the populate.py command again:

```bash
python populate.py
```

This will load some fake data into your cloud database. Because you're inserting ~800 records, this process may take a few minutes.

### 4. Teach Heroku how to compile your React App
Create a package.json file at the root of your Flask app (note that this is ***in addition*** to the package.json file inside of your react-client directory) that has the JSON format shown below.
The second package.json file at the root of your app teaches Heroku to compile your react app from within the react-client subdirectory.

```json
{
    "name": "photo-app-heroku-react-build-file",
    "version": "1.0.0",
    "description": "",
    "scripts": {
      "build": "cd react-client && npm install && npm run build"
    },
    "dependencies": {
        "cross-env": "^7.0.3"
    }
} 
``` 

### 5. Configure git
* Create a git repository at the root of your web application (if you haven't already). 
* Also create a `.gitignore` file at the root of your repository that excludes your python virtual environment (`env`), your `react-client/node_modules` folder, and your `react-client/build` folder.


### 6. Deploy your app
Finally, you are ready to deploy your app to Heroku via the Heroku Command Line Interface (CLI). Note that the GitHub integration is broken.

1. <a href="https://devcenter.heroku.com/articles/getting-started-with-python#set-up" target="_blank">Download and install the Heroku CLI for your OS</a>.
1. Navigate to your `photo-app` folder (or whatever you called it) using the command line.
1. Log into your Heroku account using the command line interface (CLI), where you will be prompted for a password:<br>`heroku login`
1. Connect your local git repo to your newly created Heroku app (you will only have to do this once):<br>`heroku git:remote -a name-of-the-app-you-just-made`
1. Push your repo to Heroku: `git push heroku main`. 
    * Read more on <a href="https://stackoverflow.com/questions/25834500/push-different-branch-to-heroku" target="_blank">StackOverflow</a>.
1. Test your web server.
1. Don't forget to also push your repo to GitHub `git push origin main` (after you've configured it).

