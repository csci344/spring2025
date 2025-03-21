---
layout: two-column-resources
title: CSS Units
parent: CSS Resources
nav_order: 6
---

There are many units that CSS supports:

## Absolute Units

{:.small}
| Units | Example |
|--|--|
| **Pixels** | `width: 300px;` |
| **Points** | 	`font-size: 12pt;` |

## Relative Units

| Units | Description | Example |
|--|--|--|
| **em** | Unit for fonts. Relative to the font-size of the ***parent element*** (2em means 2 times the size of the parent font | `font-size: 1.1em;` |
| **rem** | Unit for fonts. Relative to font-size of the ***root element*** | `font-size: 1.1em;` |
| **fr** | "Fractional units" of the available space (within the parent element). | `grid-template-columns: 1fr 1fr 40px 20%;`<br> In the example above, column 3, will take up 40 pixels, column 4 will take up 20% of the available space, and then columns 1 & 2 will split the remained of the available space. |
| **vw** | Relative to 1% of the width of the ***viewport*** (size of browser window) | `width: 30vw;`<br>(30% of the width of the browser window) |
| **vh** | Relative to 1% of the height of the ***viewport*** (size of browser window) | `width: 10vw;` <br>(10% of the width of the browser window) |
| **%** | Relative to the ***parent element*** | `width: 100%;` <br>(100% of the parent element's width) |

## Rules of Thumb
When possible, use ***relative*** units so that your pages can scale and be resized on-the-fly.

### W3Schools Reference
* <a href="https://www.w3schools.com/cssref/css_units.asp" target="_blank">CSS Units</a>