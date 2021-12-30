const checkbox = document.getElementById("checkbox");
const standard = document.getElementById("standard-price");
const preminum = document.getElementById("preminum-price");

checkbox.addEventListener("click", () => {
  standard.textContent = standard.textContent === "20" ? "2" : "20";
  preminum.textContent = preminum.textContent === "66" ? "6" : "66";
});