const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawMonster(100, 100, 150, '#0bc9cd', false);
    drawMonster(300, 200, 75, '#8093f1', true);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285', false);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawMonster(x, y, size, color='teal', isSurprised=true) {
    rectMode(CENTER);
    fill(color);
    stroke(0);
    square(x, y, size);
 
    fill('white');
    let whiteD = size/4.5;
    let eyeY = y - whiteD;
    let mouthY = y + whiteD/1.5;
    square(x - size/5, eyeY, whiteD);
    square(x + size/5, eyeY, whiteD);

    fill('black');
    square(x - size/5, eyeY + size/19, whiteD/2);
    square(x + size/5, eyeY + size/19, whiteD/2);

    if (isSurprised) {
        rect(x, mouthY, size / 4.8, size / 6);
    } else {
        rect(x, mouthY, size / 1.8, size / 6);
    }
}

