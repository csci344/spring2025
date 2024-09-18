function updateScreen(ev) {
    ev.preventDefault();
    const selector = document.querySelector("#selector").value;
    const prop = document.querySelector("#thing-to-change").value;
    const val = document.querySelector("#value").value;
    if (!selector || !prop || !val) {
        return;
    }
    const elem = document.querySelector("#js");
    let prefix = "";
    if (elem.innerHTML.trim() === "") {
        prefix = "let ";
    }
    const executionString = `${prefix}myElement = document.querySelector("${selector}");myElement.${prop} = "${val}";`;
    elem.insertAdjacentHTML(
        "beforeend",
        `${executionString.split(";").join(";\n")}\n`
    );
    try {
        eval(executionString);
    } catch (ex) {
        console.error(ex);
    }
    // Element previously highlighted.
    // To highlight again, first unset `dataset.highlighted`.
    elem.removeAttribute("data-highlighted");
    hljs.highlightElement(elem);
}

document.querySelector("button").addEventListener("click", updateScreen);
