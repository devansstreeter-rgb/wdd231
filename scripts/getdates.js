const current = new Date();
const currentYear = document.querySelector('#current-year');

currentYear.innerHTML = current.getFullYear();
document.querySelector('#last-modified').innerHTML = document.lastModified;