function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.getElementById("boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputValue = document.querySelector("input");
let boxSize = 30;

createButton.addEventListener("click", () => {
    for (let i = 0; i < inputValue.value; i++) {
        const newBox = document.createElement("div");

        newBox.style.width = `${boxSize}px`;
        newBox.style.height = `${boxSize}px`;
        newBox.style.backgroundColor = `${getRandomHexColor()}`;
        boxSize += 10;
        boxes.appendChild(newBox);
    }
});

destroyButton.addEventListener("click", () => {
    boxes.innerHTML = "";
    boxSize = 30;
});
