const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);
    drawShape(150, 150, 200, "#db5461", "#102e4a", "#db5461");
    drawShape(600, 150, 100, "#102e4a", "#8093f1", "#db5461");
    drawShape(100, 400, 100, "#8093f1", "#7fb285", "#db5461");
    drawShape(850, 375, 300, "#7fb285", "#0bc9cd", "#102e4a");
    drawShape(450, 400, 50, "#0bc9cd", "#db5461", "#8093f1");

    drawGrid(canvasWidth, canvasHeight);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawShape(x, y, size, color1, color2, color3) {
    fill(color1);
    square(x, y, size);
    fill(color2);
    square(x, y, (size * 2) / 3);
    fill(color3);
    square(x, y, size / 3);
}
