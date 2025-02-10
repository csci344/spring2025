let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
    drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
    drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");

    drawGrid(canvasWidth, canvasHeight);
}

function drawNCirclesFlexible(n, size, x, y) {
    fill("hotpink");
    for (i = 0; i < n; i++) {
        circle(x, y + i * size, size);
    }
}

function drawNShapesFlexible(n, size, x, y, shape) {
    fill("hotpink");
    for (i = 0; i < n; i++) {
        if (shape === "circle") {
            circle(x, y + i * size, size);
        } else {
            rect(x, y + i * size, size, size);
        }
    }
}

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
    fill("teal");
    for (i = 0; i < n; i++) {
        if (shape === "circle") {
            circle(x, y, size);
        } else {
            rect(x, y, size, size);
        }
        if (direction === "row") {
            x += size;
        } else {
            y += size;
        }
    }
}
