// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/pages/section1.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("section1").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});