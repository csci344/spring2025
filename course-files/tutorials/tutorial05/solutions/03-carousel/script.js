let currentPosition = 0;
let gap = 10;
const slideWidth = 500;

function moveCarousel(direction) {
    const items = document.querySelectorAll(".carousel-item");

    if (direction == "forward") {
        // two slides per click + 1
        const terminationPoint = items.length / 2 + 1;
        if (currentPosition > terminationPoint) {
            return false;
        }
        currentPosition++;
    } else {
        if (currentPosition == 0) {
            return false;
        }
        currentPosition--;
    }

    const offset = (slideWidth + gap) * currentPosition;

    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`;
    }
}
