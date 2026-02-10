// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/pages/section2.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("section2").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});