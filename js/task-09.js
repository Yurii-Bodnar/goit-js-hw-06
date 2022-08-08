function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color")
changeColorRef.addEventListener("click", () => {
  
  colorRef.textContent = getRandomHexColor();
})