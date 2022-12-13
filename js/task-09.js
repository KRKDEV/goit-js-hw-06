function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector("button");
const currentColor = document.querySelector("span");

button.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomHexColor();
    currentColor.innerHTML = getRandomHexColor();
});
