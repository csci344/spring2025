---
layout: assignment-two-column
title: "Practice with Data: Implement a Spotify Interface"
abbreviation: HW5
type: homework
files: course-files/assignments/hw05.zip
due_date: 2023-04-27
points: 16
draft: 1
---

<style>
    img {
        max-width: 700px;
        max-height: 300px;
    }
</style>

## I. Background
### 1. Learning Objectives
Homework 5 is designed to be a culmination of the JavaScript techniques we've been learning in class. You will be practicing the following:

1. Manipulating the DOM
2. Rendering HTML templates
3. Building event handlers to respond to user events
4. Leveraging data from external files using the fetch API

### 2. Starter Files & Samples
Please begin by downloading the assignment files:

<a class="nu-button" href="/spring2025/course-files/homework/hw05.zip">
    download starter files 
    <i class="fas fa-download"></i>
</a>

For this task, I have created the HTML and CSS for you. If you open **<a href="../course-files/homework/hw05/sample/index.html" target="_blank">sample/index.html</a>** in your web browser, you will see an example of how I want your final interface to look. However, int this sample, the data from BTS is **hardcoded** in the interface. I want you to make it so that music / media from ANY artist can be searched. That is, each of the HTML widgets below must be converted into templates that can bind to data from Spotify.

### 3. Demo
Please see <a href="https://drive.google.com/file/d/12XvLEKY6W-cY4MY9dT9KoKquyVpGZjzG/view?usp=sharing" target="_blank">this video</a> for a demo of what your app should look like when you're done.

### 4. Assignment Rules / Guidelines
1. You can make as many helper functions as you want to complete the assignment.
1. All server queries must be done using the **JavaScript fetch API**.
1. You are welcome (even encouraged) to incorporate any code from the **sample** directory (or from any other lecture / lab files we've used in this class)
1. We will be working on this homework DURING class. It is to your benefit to **attend all of the remaining classes**.

## II. Assignment Instructions
To make the Spotify search/browse interface work, you will be editing files in the **<a href="../course-files/homework/hw05/your_task/index.html" target="_blank">your_task</a>** folder. Please complete the four tasks listed below, following the guidelines listed:


### 1. Display Artist
Implement the `getArtist` function. This function -- and any (optional) helper functions -- should:

1. Query the Spotify search endpoint with the appropriate query parameters using the `fetch` function. Sample search query:
  * <a target="_blank" href="https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=BTS">https://www.apitutor.org/spotify/simple/v1/search?type=**artist**&q=BTS</a>
2. Display the **first artist** in the list of artists that is returned from Spotify (rather than displaying all of the artists, you will just display the first one).
3. If no artists are returned for the search query, display a message that indicates that no artist has been returned.
4. Render the artist card to look like the one shown in <a href="../course-files/homework/hw05/sample/index.html" target="_blank">sample/index.html</a>, using a templated version of the code shown below. Note that the values for `id` `src` `href` and `h2's inner HTML` should be rendered dynamically using live Spotify data.

```html
<section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
    <div>
        <img src="https://i.scdn.co/image/0c9057cb30520f9f883a220051260fc66a2f3ffa">
        <h2>BTS</h2>
        <div class="footer">
            <a href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
```

<img src="{{site.baseurl}}/assets/images/homework/hw05/artist_card.png" />

  
### 2. Display Tracks
Implement the `getTracks` function. This function -- and any (optional) helper functions -- should:
1. Query the Spotify search endpoint with the appropriate query parameters. Example:
  * <a target="_blank" href="https://www.apitutor.org/spotify/simple/v1/search?type=track&q=BTS">https://www.apitutor.org/spotify/simple/v1/search?type=**track**&q=BTS</a>
2. Display the **first five** tracks that gets returned (not all of them -- just the first five).
3. If no tracks are returned for the search query, display a message like "No tracks found that match your search criteria."
4. Ensure that your code still works if less than 5 tracks get returned.
5. Render the tracks to look like the ones shown in **<a href="../course-files/homework/hw05/sample/index.html" target="_blank">sample/index.html</a>**, using a templated version of the code shown below (including the hover effects). Note that the values for `src` `h2's inner HTML` and `p's inner HTML` should be rendered dynamically using live Spotify data.

```html
<section class="track-item preview">
    <img src="https://i.scdn.co/image/1aacaefb0ef07755e5a155d96ee7f1073063e428">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h2>Black Swan</h2>
        <p>
            BTS
        </p>
    </div>
</section>
```

<img src="{{site.baseurl}}/assets/images/homework/hw05/tracks.png" />


### 3. Display Albums
Implement the `getAlbums` function. This function -- and any (optional) helper functions -- should:
1. Query the Spotify search endpoint with the appropriate query parameters. Example:
  * <a target="_blank" href="https://www.apitutor.org/spotify/simple/v1/search?type=album&q=BTS">https://www.apitutor.org/spotify/simple/v1/search?type=**album**&q=BTS</a>
2. Display all of the albums that get returned.
3. If no albums are returned for the search query, display a message like "No albums were returned."
4. Render the album cards to look like the ones shown in <a href="../course-files/homework/hw05/sample/index.html" target="_blank">sample/index.html</a>, using a templated version of the code shown below. Note that the values for `id` `src` `h2's inner HTML` and `href` should be rendered dynamically using live Spotify data.

```html
<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img src="https://i.scdn.co/image/ab67616d0000b2736feb6d9ed7891f40e9a524dd">
        <h2>Love Yourself 結 'Answer'</h2>
        <div class="footer">
            <a href="https://open.spotify.com/album/2lATw9ZAVp7ILQcOKPCPqp" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
```

<img src="{{site.baseurl}}/assets/images/homework/hw05/albums.png" />

### 4. Listening to the Tracks
Add a click event handler to each of the tracks. When a track is clicked, your code will do the following:
1. Modify the `#artist-section`'s `h1` tag to say "Now Playing"
2. Modify the `#artist` section's innerHTML to be an embedded iFrame of the selected song. Please see the `embeddable-track-demo.html` file for sample code.
    * Note that the src of the iframe has a reference to the track's id.

### 5. Accessibility
1. Use the <a href="https://wave.webaim.org/extension/">WAVE Extension</a> to generate an accessibility report. 
1. Correct as many accessibility errors as you can. 
1. Take a screenshot of your final accessibility report (Sarah's report is shown below).
1. Answer the following questions in a text file (Word, Notepad, or PDF are all fine):
    * What corrections did you have to make, and how did you make them?
    * Is this interface functional without the use of a mouse (i.e., just using keyboard keys)? Why or why not?
    * What are other accessibility tests or features you added or would be interested in learning about?

Hints: You'll need to modify the HTML file by adding `alt` text to images, `aria-label` attributes to buttons, etc.

<img class="frame" style="width:100%;max-width:100%;max-height:100%;" src="{{site.baseurl}}/assets/images/homework/hw05/hw05-wave-ss.png">

## Extra Credit
The following enhancements can be completed for extra credit. Note: You may earn **up to 10 points** extra credit on this assignment.

{:.checkbox-list}
* Add an event handler to the artist card so that when you click on it, the tracks in the #tracks section are replaced by the artist's top tracks **(5 points)**
* Add an event handler to each album card so that when you click the album, the tracks in the #tracks section are replaced by the album's tracks **(5 points)**
* Integrate data from Twitter or YouTube, and render some stylized content below the albums **(5 points)**

> ### Hint for the first two extra credit options
> Whereas for the required parts of the assignment, I've used the "simplified" endpoint, for the extra credit, you'll have to use the "unsimplified" endpoints (which return the original data structure as opposed to the simplified version of it). This means that you will remove the word "simple" from the API Tutor endpoint. Examples below.
>
>
> **Get tracks from album:**
> * Spotify Documentation: <a target="_blank" href="https://developer.spotify.com/documentation/web-api/reference/albums/get-albums-tracks/">https://developer.spotify.com/documentation/web-api/reference/albums/get-albums-tracks/</a>
> * How to do it w/Spotify API: <a target="_blank" href="https://api.spotify.com/v1/albums/{id}/tracks">https://api.spotify.com/v1/albums/{id}/tracks</a>
> * How to do it with API Tutor: <a target="_blank" href="https://www.apitutor.org/spotify/v1/albums/{id}/tracks">https://www.apitutor.org/spotify/v1/albums/{id}/tracks</a>
> * Example with BTS Album: <a target="_blank" href="https://www.apitutor.org/spotify/v1/albums/2lATw9ZAVp7ILQcOKPCPqp/tracks">https://www.apitutor.org/spotify/v1/albums/2lATw9ZAVp7ILQcOKPCPqp/tracks</a> 
>
> 
> **Get artist's top songs**:
> Weirdly, for this one you need to specify the "country" parameter (just use "us"):
> * Spotify Documentation: <a target="_blank" href="https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-top-tracks/">https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-top-tracks/</a>
* How to do it w/Spotify API: <a target="_blank" href="https://api.spotify.com/v1/artists/{id}/top-tracks">https://api.spotify.com/v1/artists/{id}/top-tracks</a> 
> * How to do it with API Tutor: <a target="_blank" href="https://www.apitutor.org/spotify/v1/artists/{id}/top-tracks?country=us">https://www.apitutor.org/spotify/v1/artists/{id}/top-tracks?country=us</a> 
> * Example with BTS Artist: <a target="_blank" href="https://www.apitutor.org/spotify/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX/top-tracks?country=us">https://www.apitutor.org/spotify/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX/top-tracks?country=us</a>


## Rubric

{:.checkbox-list}
* Artist **(2 points)**
   * Artist card implemented based on artist data returned by Spotify API
   * Artist card looks like the one in the sample
   * If no artists are returned, display a message that indicates that no tracks were found for the search criteria.
* Tracks **(4 points)**
   * 5 Tracks listed based on artist data returned by Spotify API
   * If less than 5 tracks are returned, display only the tracks returned.
   * If no tracks are returned, display a message that indicates that no tracks were found (given the search criteria).
   * Track items look like the ones in the sample
* Albums **(2 points)**
   * Album cards implemented based on artist data returned by Spotify API
   * Album cards looks like the ones in the sample
* Tracks Event Handler **(3 points)**
   * Embedded iFrame of the song loads into the `#artist` section.
   * `h1` inside `#artist-section` changes to say "Now Playing."
* Accessibility Analysis with screenshot and writeup **(3 pts)**
   * Screenshot of WAVE report included in submission
   * Accessibility errors correct (added alt attributes, aria labels, etc.)
   * Reflection questions answered
* Overall guidelines followed **(2 points)**
   * Used fetch API (no jQuery or other third-party libraries)
   * Search works for any search term (and displays appropriate messages if no data is found)
   * If no data is returned or if fewer items are returned than expected, a nice error message is displayed.

## What to Turn In
**Please Read Carefully:** Before you submit this week, please edit your homepage by adding a link to this homework.

To submit this week's homework assignment, please create and upload a zip file to the Moodle (under the Homework 5 assignment) with the following files / info:

1. A text file (word doc, pdf, etc.) that includes:
    1. A link to your homepage, which should link to all of your assignments (including `hw05`).
    1. A link to your GitHub repository (where your code files are stored).
    1. The answers to your accessibility questions.
2. A screenshot of your WAVE report.