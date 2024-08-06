---
layout: two-column-resources
title: The Box Model
parent: CSS Resources
nav_order: 5
permalink: /css-reference/box-model/
---

Every element in web design is a rectangular box. The box model refers to some of the properties that control the layout of these boxes (width, height, margin, padding, border, and box-sizing). The <a href="https://css-tricks.com/the-css-box-model/" target="_blank">CSS Tricks</a> website has a nice description of it.

<img class="medium" src="{{ site.baseurl }}/assets/images/reference/box_model.png" /> 

## Common Box Model properties

```css
.page-section {
    box-sizing: border-box;     // "border-box" does not count padding / border in size calculations
    border: dotted 1px #CCC;    
    padding: 10px;              // note: also padding-right, padding-left, padding-top, padding-bottom
    margin: 10px;               // note: also margin-right, margin-left, margin-top, margin-bottom
    width: 50vh;                // vh stands for viewport height, vw stands for viewport width
}
```

