const links = document.querySelectorAll('#section1 .container a');
const viewer = document.getElementById('viewer');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // stop navigation

    const imgSrc = link.getAttribute('href');

    viewer.innerHTML = `
      <img src="${imgSrc}" class="large-image">
    `;
  });
});