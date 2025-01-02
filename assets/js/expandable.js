const openIcon = "<i class='fa-solid fa-angle-down'></i>";
const closedIcon = "<i class='fa-solid fa-angle-right'></i>";
const expandText = "Expand All";
const collapseText = "Collapse All";

let expandablePreferences = {};

function toggleExpandable(srcElement) {
    const target = srcElement.getAttribute("target-panel");
    const content = document.querySelector(target);
    const tagName = srcElement.tagName.toLowerCase();
    const button =
        tagName === "button" ? srcElement : srcElement.previousElementSibling;
    const expandFlag = content.style.display === "block" ? false : true;
    setVisibility(content, button, expandFlag);
}

function toggleAll() {
    const toggleButton = document.getElementById("toggle-button");
    const btnText = toggleButton.innerHTML.trim();
    const expandFlag = btnText === collapseText ? false : true;

    const divs = document.querySelectorAll(".expandable-content");
    const toggleIcons = document.querySelectorAll(".toggle-button");
    for (let i = 0; i < divs.length; i++) {
        setVisibility(divs[i], toggleIcons[i], expandFlag);
    }
    toggleButton.innerHTML = btnText === expandText ? collapseText : expandText;
}

function setVisibility(div, btn, expandFlag) {
    div.style.display = expandFlag ? "block" : "none";
    btn.innerHTML = expandFlag ? openIcon : closedIcon;

    const btnId = btn.getAttribute("target-panel").substring(1);
    expandablePreferences[btnId] = expandFlag;
    saveToLocalStorage();
}

window.addEventListener("scroll", function () {
    const button = document.getElementById("toggle-button");
    if (!button) {
        return;
    }
    if (document.documentElement.scrollTop > 70) {
        button.classList.remove("hide"); // Show the button
    } else {
        button.classList.add("hide"); // Hide the button
    }
});

function loadFromLocalStorage() {
    const ls = localStorage.getItem("expandable_preferences");
    try {
        expandablePreferences = JSON.parse(ls) || {};
        console.log(expandablePreferences);
        for (const key in expandablePreferences) {
            const id = key;
            const expandFlag = expandablePreferences[key];
            const panel = document.getElementById(id);
            if (panel) {
                const btn = document.querySelector(`[target-panel="#${id}"]`);
                setVisibility(panel, btn, expandFlag);
            } else {
                console.log("Invalid id:", id);
                delete expandablePreferences[id];
            }
        }
    } catch (e) {
        console.error(e);
        expandablePreferences = {};
    }
}

function saveToLocalStorage() {
    localStorage.setItem(
        "expandable_preferences",
        JSON.stringify(expandablePreferences)
    );
}

loadFromLocalStorage();
