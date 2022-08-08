const ingredients =  [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ingredientsRef = document.querySelector("#ingredients");
for (let ingredient of ingredients) {
  const liRef = document.createElement("li");
  liRef.className = "item";
  liRef.textContent = ingredient;
  ingredientsRef.append(liRef);
}
console.log(ingredientsRef);







