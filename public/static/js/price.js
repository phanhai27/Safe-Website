const checkbox = document.getElementById("checkbox");
const standard = document.getElementById("standard-price");
const preminum = document.getElementById("preminum-price");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) { // yearly
    if (standard.textContent.includes("$")){  // international price
      standard.textContent = "$20";
      preminum.textContent = "$66";
    } else {
      standard.textContent = "440.000đ";
      preminum.textContent = "1.452.000đ";
    }
  } else {  // monthly
    if (standard.textContent.includes("$")){  // international price
      standard.textContent = "$2";
      preminum.textContent = "$6";
    } else {
      standard.textContent = "44.000đ";
      preminum.textContent = "132.000đ";
    }
  }
});