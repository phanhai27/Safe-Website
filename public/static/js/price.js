const checkbox = document.getElementById("checkbox");
const standard = document.getElementById("standard-price");
const preminum = document.getElementById("preminum-price");

checkbox.addEventListener("click", () => {
  if (standard.textContent == "44.000đ") {
    standard.textContent = "440.000đ"
  } else if (standard.textContent == "440.000đ") {
    standard.textContent = "44.000đ"
  } else {
    standard.textContent = standard.textContent === "$20" ? "$2" : "$20";
  }

  if (preminum.textContent == "132.000đ") {
    preminum.textContent = "1.452.000đ"
  } else if (preminum.textContent == "1.452.000đ") {
    preminum.textContent = "132.000đ"
  } else {
    preminum.textContent = preminum.textContent === "$66" ? "$6" : "$66";
  }

});