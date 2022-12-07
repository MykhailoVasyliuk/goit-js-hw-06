// Рахує і виводить в консоль кількість категорій в ul#categories.
const ulEl = document.querySelector("#categories")
console.log("Number of categories: ", ulEl.childElementCount);
console.log("");



// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
const ulItemEl = ulEl.querySelectorAll(".item");
let categoryName = "";
ulItemEl.forEach(element => {
    categoryName = element.querySelector("h2").textContent;
    console.log("Category: ", categoryName);
    console.log("Elements: ", element.querySelector("ul").childElementCount)
    console.log("")
});

