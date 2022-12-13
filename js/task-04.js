let span = document.querySelector("#value");
let counterValue = parseInt(span.textContent);

const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

const handleClickDec = () => {
    counterValue -= 1;
    span.textContent = `${counterValue}`;
};
const handleClickInc = () => {
    counterValue += 1;
    span.textContent = `${counterValue}`;
};
buttonDec.addEventListener("click", handleClickDec);
buttonInc.addEventListener("click", handleClickInc);
