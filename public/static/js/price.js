const checkbox = document.getElementById("checkbox");
const standard = document.getElementById("standard-price");
const preminum = document.getElementById("preminum-price");
const frPeriod = document.getElementById("free-period");
const stPeriod = document.getElementById("standard-period");
const prPeriod = document.getElementById("preminum-period");
const yearlyPeriod = document.getElementById("yearly");
const monthlyPeriod = document.getElementById("monthly");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) { // yearly
    if (standard.textContent.includes("$")){  // international price
      standard.textContent = "$20";
      preminum.textContent = "$66";
    } else {
      standard.textContent = "440.000đ";
      preminum.textContent = "1.452.000đ";
    }
    frPeriod.textContent = yearlyPeriod.textContent;
    stPeriod.textContent = yearlyPeriod.textContent;
    prPeriod.textContent = yearlyPeriod.textContent;

  } else {  // monthly
    if (standard.textContent.includes("$")){  // international price
      standard.textContent = "$2";
      preminum.textContent = "$6";
    } else {
      standard.textContent = "44.000đ";
      preminum.textContent = "132.000đ";
    }
    frPeriod.textContent = monthlyPeriod.textContent;
    stPeriod.textContent = monthlyPeriod.textContent;
    prPeriod.textContent = monthlyPeriod.textContent;
  }
});