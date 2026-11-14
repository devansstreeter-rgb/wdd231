// Key: 03131d40ec491cb49aebf851b6a03081
// Trier Coordinates: 49.756667, 6.641389

const tempSpan = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.76&lon=6.64&units=imperial&appid=03131d40ec491cb49aebf851b6a03081';

async function apiFetch(fetchURL) {
    try {
        const response = await fetch(fetchURL);
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    }
    catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    tempSpan.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

const trierWeather = apiFetch(url);