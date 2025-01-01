---
layout: module
title: Intro to CSS
type: activity
abbreviation: Activity 3
draft: 1
num: 3
include_pages: 
    - extras/css_cheatsheet.md
---

<style>
    .tips td:first-child, .tips th:first-child {
        width: 200px;
    }
</style>

Please download the exercise files (below).

<a href="/spring2025/course-files/activities/intro-css-gallery.zip" class="nu-button">Download Activity Files <i class="fas fa-download"></i></a>

Then, use the CSS Property Cheatsheet (below) and what you've learned about selectors to make the following drawing:

<img class="large" src="/spring2025/assets/images/activities/intro-css/gallery.png" />

### Tips

{:.tips}
| Property | Tip |
|--|--|
| body * { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border: solid 1px black;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: 5px;<br>} | To make debugging easier, turn on the borders for all elements (temporarily). |  
| display: inline-block | By default, tags like `div`, `section`, `article`, etc. are `display: block;` which means that there's a line break. If you don't want this, use: `display: inline-block` |

### Some extra challenges (if you have time)
1. Make one of the image "cards" have a different background color.
2. Try using a custom Google font instead of one of the built-in system fonts. Resources to consult:
    * <a href="https://www.w3docs.com/snippets/css/how-to-import-google-fonts-in-css-file.html" target="_blank">https://www.w3docs.com/snippets/css/how-to-import-google-fonts-in-css-file.html</a>
    * <a href="https://developers.google.com/fonts/docs/getting_started" target="_blank">https://developers.google.com/fonts/docs/getting_started</a>
    * <a href="https://www.w3schools.com/css/css_font_google.asp" target="_blank">https://www.w3schools.com/css/css_font_google.asp</a>
3. Make a hover effect using a "pseudoclass": when your user mouses over one the cards, make it do something (fade, grow, change colors, etc.). We will go over this in a future lesson, but in the meantime, you can take a look at W3 Schools:
    * <a href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank">https://www.w3schools.com/css/css_pseudo_classes.asp</a>