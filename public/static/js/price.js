const checkbox = document.getElementById("checkbox");
const standard = document.getElementById("standard-price");
const preminum = document.getElementById("preminum-price");
const frPeriod = document.getElementById("free-period");
const stPeriod = document.getElementById("standard-period");
const prPeriod = document.getElementById("preminum-period");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) { // yearly
    if (standard.textContent.includes("$")){  // international price
      standard.textContent = "$20";
      preminum.textContent = "$66";
    } else {
      standard.textContent = "440.000đ";
      preminum.textContent = "1.452.000đ";
    }
    frPeriod.textContent = $("#yearly").text();
    stPeriod.textContent = $("#yearly").text();
    prPeriod.textContent = $("#yearly").text();

  } else {  // monthly
    if (standard.textContent.includes("$")){  // international price
      standard.textContent = "$2";
      preminum.textContent = "$6";
    } else {
      standard.textContent = "44.000đ";
      preminum.textContent = "132.000đ";
    }
    frPeriod.textContent = $("#monthly").text();
    stPeriod.textContent = $("#monthly").text();
    prPeriod.textContent = $("#monthly").text();
  }
});