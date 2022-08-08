let categoriesRef = document.querySelectorAll(".item");
for (let category of categoriesRef) {
    let title = category.querySelector("h2").innerText;
    console.log(`Category: ${title}`)
    let count = category.querySelectorAll("li").length;
    console.log(`Elements: ${count}`);
    

}