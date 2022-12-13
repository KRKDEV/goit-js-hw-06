const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];
const sheet = document.createElement("style");
sheet.innerHTML = `
  .image {
    width: 300px;
    height: auto;
    padding: 10px;
    border: 2px solid black;
    padding: 0;
    margin-bottom: 10px;
  }
  .gallery {
    list-style: none;
    display:flex;
    flex-direction: column;
  }
`;
document.head.appendChild(sheet);

const list = document.querySelector(".gallery");
images.forEach((listItem) => {
    list.insertAdjacentHTML(
        "beforeend",
        `<li><img src="${listItem.url}" alt="${listItem.alt}" class="image" /></li>`
    );
});
