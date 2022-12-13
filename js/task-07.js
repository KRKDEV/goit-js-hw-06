const inputRange = document.querySelector("#font-size-control");
const fontToChange = document.querySelector("#text");

inputRange.addEventListener("input", () => {
    fontToChange.style.fontSize = `${inputRange.value}px`;
});
