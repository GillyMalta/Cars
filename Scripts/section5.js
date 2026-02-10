// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/pages/section5.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("section5").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});