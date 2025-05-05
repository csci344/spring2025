function addCat() {
    const container = document.querySelector("#animals");
    container.insertAdjacentHTML("beforeend", `<img src="cat.jpg" />`);
}

function addDog() {
    const container = document.querySelector("#animals");
    container.insertAdjacentHTML("beforeend", `<img src="dog.jpg" />`);
}
