const current = new Date();
const currentYear = document.querySelector('#current-year');
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayNum = current.getDay()

function getRelativeDayString(days) {
    const w = (dayNum + days) % 7;
    return weekdays[w];
}

currentYear.innerHTML = current.getFullYear();
document.querySelector('#last-modified').innerHTML = document.lastModified;

export {getRelativeDayString};