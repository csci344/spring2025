---
layout: two-column-resources
title: Working with the DOM
nav_order: 3
parent: JavaScript Resources
---

<style>
    .qa th:first-child {
        width: 40%;
    }
    .qa th:nth-child(2) {
        width: 60%;
    }
</style>


## Working with the DOM
When you are updating the DOM, there are three things you need to specify in your program:

| Question | Approach |
|--|--|
| 1. What element(s) do you want to change? | Use one of the selector methods below |
| 2. What do you want to change about the element(s)? | If it's an attribute, specify which one (see below). If it's a style property, specify which one (see below). |
| 3. What do you want to change the element(s)' attribute / style property to? | Use the assignment operator (equal sign) to set the attribute / style property to a valid value. |

Some applications of these three considerations are shown below:

```js
// updating attributes
document.querySelector('#my-header').innerHTML = 'Hey there!';
document.querySelector('img').src = "https://media1.britannica.com/eb-media/22/65322-004-8FF21CDA.jpg";

// updating style properties
document.querySelector('.panel').style.background = 'hotpink';
document.querySelector('.panel').style.fontSize = '3.5em';
```

{% include dom-manipulation.html %}

### Child / Sibling / Parent Properties

#### HTML
```html
<section class="cards">
    <img src="images/field1.jpg" />
    <img src="images/purple.jpg" />
    <img src="images/jar.jpg" />
</section>
```
#### JavaScript
```js
// EXAMPLE
const cards = document.querySelector('.cards');

// get first child of cards:
const firstChild = cards.firstElementChild;
console.log('first child:',firstChild);

// get last child of cards:
const lastChild = cards.lastElementChild;
console.log('last child:', lastChild);

// get first child's next sibling:
const nextSibling = firstChild.nextElementSibling;
console.log('first child\'s next sibling:', nextSibling);

// get last child's previous sibling:
const previousSibling = lastChild.previousElementSibling;
console.log('last child\'s previous sibling:', previousSibling);

// get last child's parent:
const parent = lastChild.parentElement;
console.log('last child\'s parent:', parent);
```

#### More practice
Use Sarah's interactive <a href="/spring2025/course-files/activities/dom-tester" target="_blank">DOM manipulation worksheet</a> to get more practice!


## Template Literals

Template literals are a way to create strings that are more flexible and readable than traditional string concatenation. They are enclosed by backticks (`` ` ``) and allow you to embed expressions within strings using the `${expression}` syntax.

### Basic Syntax

```js
const name = "John";
const age = 30; 
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
```

### Multiline Strings

```js
const multiline = `This is a multiline string.
It can span multiple lines without using special characters.`;
console.log(multiline);
``` 

### Expression Interpolation

```js
const a = 10;
const b = 20;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);
``` 

### Template Literals for HTML Generation

Template literals are particularly useful for creating complex HTML structures. Here's an example:

```js
const pets = [
    { name: 'Luna', type: 'dog', age: 5, image: 'luna.jpg' },
    { name: 'Milo', type: 'cat', age: 3, image: 'milo.jpg' },
    { name: 'Bella', type: 'dog', age: 2, image: 'bella.jpg' }
];

function createPetCard(pet) {
    return `
        <div class="pet-card">
            <img src="images/${pet.image}" alt="${pet.name} the ${pet.type}">
            <div class="pet-info">
                <h3>${pet.name}</h3>
                <p>${pet.type} • ${pet.age} years old</p>
            </div>
        </div>
    `;
}

// Insert all pet cards into the container
const container = document.querySelector('.pets-container');
container.innerHTML = '<h2>Our Pets</h2><div class="pet-grid"></div>';
const petGrid = container.querySelector('.pet-grid');

pets.forEach(pet => {
    petGrid.insertAdjacentHTML('beforeend', createPetCard(pet));
});
```

This example shows how template literals can:
* Maintain proper HTML structure and indentation
* Interpolate variables and expressions
* Generate multiple elements using array methods
* Create reusable HTML templates with functions

The corresponding CSS might look like this:
```css
.pet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.pet-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
}

.pet-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.pet-info {
    padding: 15px;
}
```

## Events
When JavaScript is used in HTML pages, JavaScript can "react" to particular "events," which include (among others): 
* change
* click
* mouseover
* mouseout
* keydown
* load

### 1. Making events work for you
Events are comprised of two parts:
1. **Event Listeners:** refer to the particular interaction / thing to which you want to listen.

2. **Event Handlers:** snippets of code that you want to execute when the event listener triggers the event.

For instance, if I want to attach a "click" ***event listener*** to the button with the id of "subscribe", I would assign the **onclick** event of that button to a function that I specify. Example:

#### HTML
```html
<button id="subscribe">Subscribe</button>
```
#### JavaScript
```js
// event handler:
const subscribe = () => {
   	alert('Perform subscribe functionality...');
};

// event listener:
document.querySelector('#subscribe').addEventListener("click", subscribe);

// you can also attach an event listener to an anonymous function: 
document.querySelector('#subscribe').addEventListener("click", () => {
   	alert('Perform subscribe functionality...');
});
```

Therefore, to create an event-driven interaction, you need to tell your browser three things:

{:.qa}
| Question | Approach |
|--|--|
| 1. What element(s) do you want to attach an event to? | Use one of the selector methods (see the DOM section above). |
| 2. What is the event of interest? | See the list of events above. |
| 3. What functionality to you want to attach to the event? | For this, you will need to create your own event handler -- a function -- to respond to the event. Moreover, if you need your event handler to use data from the element that triggered the event, use the event object (see below). |

### 2. The "Event" object
When you attach an event handler (i.e function) to an event, an event object is passed to the event handler when it is triggered. This event object offers some useful information about the event that has just been fired, including:
1. **target:** The element that triggered the event (target)
2. **currentTarget:** The element whose event listeners triggered the event

You can learn more about the distinction between the target and the currentTarget <a href="https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1" target="_blank">here</a>.

Note in the example below, `ev.currentTarget` is used to detect which button was clicked, in order to change the document background to the appropriate color:

```html
<button id="color1" type="button">teal</button>
<button id="color2" type="button">hotpink</button>
<button id="color3" type="button">yellow</button>
```

```js
// event handler:
const changeColor = (ev) => {
    console.log(ev);
   	const sourceElement = ev.currentTarget;
   	document.querySelector('body').style.background = sourceElement.innerHTML;
};

// event listener attach to all of the buttons:
document.querySelector('#color1').addEventListener("click", changeColor);
document.querySelector('#color2').addEventListener("click", changeColor);
document.querySelector('#color3').addEventListener("click", changeColor);


// or...
['#color1', '#color1', '#color1'].forEach(item => {
    document.querySelector(item).addEventListener("click", changeColor);
});
```

## Debugging

| Built-in Function| Example | Description |
|--|--|--|
| `console.log(some_data);`<br>`console.log(thing1, thing2, ...);` | `console.log("Hello world!");`<br>`console.log(a, b, c, d);` | Analogous to Python"s **print** function;<br>outputs to the Browser"s console |

