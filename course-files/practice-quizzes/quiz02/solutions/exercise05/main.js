const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawElmo(100, 100, 150, '#0bc9cd', true);
    drawElmo(300, 200, 75, '#8093f1', false);
    drawElmo(100, 325, 100, '#8093f1', false);
    drawElmo(250, 375, 125, '#7fb285', true);
    drawElmo(550, 200, 250, '#7fb285', true);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawElmo(x, y, size, color, nose=true) {

    fill(color);
    circle(x, y, size);

    fill('white');
    circle(x - size/9, y - size/7, size/5);
    circle(x + size/9, y - size/7, size/5);
    
    fill('black');
    circle(x - size/9, y - size/7, size/18);
    circle(x + size/9, y - size/7, size/18);
    
    

    fill('black');
    curve(
        x - size/3, y - 1.8*size,       // control point
        x - size/3, y + size/10, 
        x + size/3, y + size/10,
        x + size/3, y - 1.8*size        // control point
    );
    if (nose) {
        fill('#db5461');
        ellipse(x, y, size/5, size/3.5);
    }
}
