---
layout: assignment-two-column
title: "JavaScript: Working with external data"
type: tutorial
abbreviation: Tutorial 7
draft: 1
points: 6
num: 7
start_date: 2024-10-04
due_date: 2024-10-09
---

## Introduction
In this week's tutorial, we will be creating an interface to interact with a REST API. You are welcome to work solo or with a partner. Even if you work with a partner, everyone should submit their own files. 

A few notes:

{:.compact}
* You will only be using the GET method this week (to request resources *from* a server).
* You will be using the API Tutor proxy server for select REST APIs so that we can avoid having to think about authentication. 
* You will allow your user to ask the API questions (via a web form), and then you will display the resulting data to the user as an HTML representation of the data.

## API Endpoint Documentation & Examples

### Yelp

{:.compact}
* <a href="https://docs.developer.yelp.com/reference/v3_business_search" target="_blank" target="_blank">Documentation</a>
* Actual Endpoint: **https://api.yelp.com/v3/businesses/search**<br>(won't work unless you get an API key from Yelp and pass it as an HTTP header)
* Proxy Server
    * Endpoint: **https://www.apitutor.org/yelp/v3/businesses/search** (needs query parameters)
    * Example:  <a href="https://www.apitutor.org/yelp/v3/businesses/search?location=Asheville,+NC" target="_blank">https://www.apitutor.org/yelp/v3/businesses/search?location=Asheville,+NC</a>
    {:.compact}
* **[Recommended]** Proxy Server Simplified Data
    * Endpoint: **https://www.apitutor.org/yelp/simple/v3/businesses/search** (needs query parameters)
    * Example:  <a href="https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,+NC" target="_blank">https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,+NC</a>
    {:.compact}


### Spotify

{:.compact}
* <a href="https://developer.spotify.com/documentation/web-api/reference/#/operations/search" target="_blank">Documentation</a>
* Actual Endpoint: **https://api.spotify.com/v1/search**<br>(won't work unless you get an API key from Spotify and pass it as an HTTP header)
* Proxy Server
    * Endpoint: **https://www.apitutor.org/spotify/v1/search** (needs query parameters)
    * Example:  <a href="https://www.apitutor.org/spotify/v1/search?q=beyonce&type=track" target="_blank">https://www.apitutor.org/spotify/v1/search?q=beyonce&type=track</a>
    {:.compact}
* **[Recommended]** Proxy Server Simplified Data
    * Endpoint: **https://www.apitutor.org/spotify/simple/v1/search** (needs query parameters)
    * Example **Tracks** Query:<br><a href="https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track" target="_blank">https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track</a>
    * Example **Artists** Query:<br><a href="https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=artist" target="_blank">https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=artist</a>
    * Example **Albums** Query:<br><a href="https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=album" target="_blank">https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=album</a>
    {:.compact}


## Your Tasks

Please download the starter files below and then complete the following tasks:

<a href="/spring2023/course-files/tutorials/tutorial07.zip" class="nu-button">Tutorial 7 Starter Files<i class="fas fa-download"></i></a> 


1. Pick **ONE** of the REST APIs above (Yelp or Spotify).
1. Create a web form to enable the user to ask the API a question.
1. Attach an event handler to the "Submit" button. Feel free to copy the form from Tutorial 6 to get you started.
1. Use the data that the user typed into the form as a basis for formulating the query.
1. When the server responds, transform that data (using the `map` and `join` methods) into an HTML string that you will add to the DOM.
1. Follow any additional provider-specific instructions below:

### If you choose Yelp...
If you choose Yelp, allow your user to input both a search `term` and a `location`.

* Sample Query: <a href="https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,%20NC&term=pizza" target="_blank">https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,%20NC&term=pizza</a>
* <a href="/spring2023/course-files/tutorials/tutorial06/answers/yelp/">Yelp Demo</a>


### If you choose Spotify...
If you choose Spotify, allow your user to specify both a search term (`q` parameter) and a resource `type` (album, artist, or track).

* Caveat: since each resource has a different data representation, you will have to create three different templates (depending on the resource). In other words, an `artist` object has a different data representation than an `album` object or a `track` object.
* Sample Query: <a href="https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track" target="_blank">https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track</a>
* <a href="/spring2023/course-files/tutorials/tutorial06/answers/spotify/">Spotify Demo</a>



## What to Submit
* A zip file of your completed Tutorial 7
* If you worked with a partner, please name your partner by adding a comment in the Moodle.