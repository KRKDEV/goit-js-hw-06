const TotalCategories = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${TotalCategories.length} `);

const categoryElementsCount = TotalCategories.forEach((e) => {
    console.log(
        `Category: ${e.querySelector("h2").textContent}\nElements: ${
            e.querySelector("ul").childElementCount
        }`
    );
});
