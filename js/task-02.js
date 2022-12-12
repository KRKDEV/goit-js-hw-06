const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const list = document.querySelector("#ingredients");

const listItems = ingredients.forEach((ingredient) => {
    const createListItem = document.createElement("li");
    createListItem.textContent = ingredient;
    createListItem.classList.add("item");
    list.append(createListItem);
});
