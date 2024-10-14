---
layout: assignment-two-column
title: "Building your first REST API endpoint (Graded on Attendance)"
type: tutorial
abbreviation: Tutorial 11
draft: 1
points: 6
num: 11
start_date: 2024-11-27
due_date: 2024-11-27
---

<style>
    .compact li {
        margin-bottom: 2px;
        line-height: 1.5em;
    }
    table li {
        margin-bottom: 0px;
    }
    table code.highlighter-rouge {
        /* background: #f3f3f387; */
        background: transparent;
        font-weight: 600;
        font-size: 1.2em;
    }

    table td:first-child, table th:first-child {
        min-width: auto;
        max-width: auto;
        width: auto;
    }
    table td:nth-child(2), table th:nth-child(2) {
        min-width: 80px;
        max-width: auto;
        width: auto;
    }
</style>

The goal of this week's lab is to ensure that your starter code is running, and to get all of the `GET` methods for the `Post` resource to pass. Once you get through this hurdle, you will be ready to work on HW7-HW8. 

## Before You Begin
Before you begin, ensure that you have completed the first three steps of HW7 (configuration / installation steps and relevant readings):

1. [Introduction](hw07#part1)
1. [Setting everything up](hw07#part2)
1. [Background readings and concepts](hw07#part3)

If you have already completed these steps, just be sure that before you run Flask and run your tests, your have **activated your virtual environment** (done from within the `hw07` folder on your command line):


### For Mac, Unix, Linux
```bash
# activates your virtual environment
source env/bin/activate
```

### For Windows Powershell or Command Prompt

```powershell
# run the activate.bat script as follows:
env\Scripts\activate
```

> ### Note: Everyone must have their own files working locally
> If you are collaborating with a partner, it is important that **both partners** configure their computers to run the HW7-HW8 files locally.

## Your Tasks
When you are done with the configuration step, you will complete the GET methods for the `/api/posts` and `/api/posts/<int:id>` endpoints (listed below). You will know when you're done if **all 8** of the Post-related tests pass (see `tests/run_tests_hw07.py` for details).

<table>
    <thead>
        <tr>
            <th></th>
            <th>Method/Route</th>
            <th>Description and Examples</th>
            <th>Parameters</th>
            <th>Response Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.</td>
            <td>GET /api/posts</td>
            <td>
                All posts in the current users' feed. This includes the current user's posts, as well as the people that the current user is following. You will need to modify this endpoint to get it to work as specified.
                <ul>
                    <li><a href="https://csci344-hw07.herokuapp.com/api/posts">/api/posts</a></li>
                    <li><a href="https://csci344-hw07.herokuapp.com/api/posts?limit=5">/api/posts?limit=5</a></li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><code class="highlighter-rouge">limit (int, optional)</code>: Limits the number of posts returned (defaults to 20, maximum is 50)</li>
                </ul>
            </td>
            <td>List of Post objects</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>GET /api/posts/&lt;int:id&gt;</td>
            <td>
                The post associated with the id (already started for you).
                <ul>
                    <li><a href="https://csci344-hw07.herokuapp.com/api/posts/1">/api/posts/1</a></li>
                    <li><a href="https://csci344-hw07.herokuapp.com/api/posts/2">/api/posts/2</a></li>
                </ul>
            </td>
            <td></td>
            <td>Post object</td>
        </tr>
    </tbody>
</table>

### What should the Post resource look like?
Recall (from HW7 instructions) that the Post resource should contain data about the **post**, the **user**, and any associated **comments** (order within the json object doesn't matter). It should also contain some convenience data fields such as whether the current user has liked or bookmarked the post (e.g. **current_user_like_id** and **current_user_bookmark_id**). The `to_dict()` method in the `Post` model already does this for you, so you will invoke the model's to_dict() method when returning resources.

{:.overflow}
```json
{
   "id": 99,
   "image_url": "https://picsum.photos/600/430?id=605",
   "user": {
      "id": 11,
      "first_name": "Jason",
      "last_name": "Lopez",
      "username": "jason_lopez",
      "email": "jason_lopez@yahoo.com",
      "image_url": "https://picsum.photos/300/200?id=368",
      "thumb_url": "https://picsum.photos/30/30?id=582"
   },
   "caption": "Sometimes degree food never sit probably remember main education race machine.",
   "alt_text": "Descriptive text",
   "display_time": "7 days ago",
   "current_user_like_id": 56,
   "current_user_bookmark_id": 20,
   "likes": [
      {
         "id": 263,
         "user_id": 2,
         "post_id": 99
      },
      {
         "id": 264,
         "user_id": 20,
         "post_id": 99
      },
      ...
   ],
   "comments": [
      {
         "id": 256,
         "text": "Night ability such already study make bed there total tonight military democratic expect our serious second perform interesting modern send table window kid dinner message although degree law town standard head special image.",
         "post_id": 99,
         "user": {
            "id": 15,
            "first_name": "Lisa",
            "last_name": "Parrish",
            "username": "lisa_parrish",
            "email": "lisa_parrish@yahoo.com",
            "image_url": "https://picsum.photos/300/200?id=982",
            "thumb_url": "https://picsum.photos/30/30?id=999"
         }
      },
      {
         "id": 257,
         "text": "Start difference news gas administration hot deal support anyone explain task water anything more street better herself yourself its guess sport fall collection war natural foreign stage training example act eat television over happy dark bring character foreign low black establish skill rock science food close people help thought garden task test option help agency.",
         "post_id": 99,
         "user": {
            "id": 12,
            "first_name": "Samantha",
            "last_name": "Acosta",
            "username": "samantha_acosta",
            "email": "samantha_acosta@yahoo.com",
            "image_url": "https://picsum.photos/300/200?id=220",
            "thumb_url": "https://picsum.photos/30/30?id=79"
         }
      },
      ...
   ]
}
```

## What to turn in

Please submit a link to your GitHub repository to the Moodle. The repository should include your hw07 folder, which should include the code that you wrote for `views/posts.py`.