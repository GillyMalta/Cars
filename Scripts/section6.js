// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/pages/section6.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("section6").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});