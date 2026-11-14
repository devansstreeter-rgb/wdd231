// Key: 03131d40ec491cb49aebf851b6a03081
// Fairbank Coordinates: 31.723056, -110.188333

import {getRelativeDayString} from "./getdates.js";

const weatherSection = document.querySelector('#weather');
const tempSpan = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-caption');
const forecastDiv = document.querySelector('#forecast');
const todaysURL = 'https://api.openweathermap.org/data/2.5/weather?lat=31.72&lon=-110.19&units=imperial&appid=03131d40ec491cb49aebf851b6a03081';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=31.72&lon=-110.19&cnt=24&units=imperial&appid=03131d40ec491cb49aebf851b6a03081';

async function todaysWeather() {
    try {
        const response = await fetch(todaysURL);
        if (response.ok) {
        const data = await response.json();
        displayToday(data);
        } else {
            throw new Error(await response.text());
        }
    }
    catch (error) {
        console.error(error);
    }
}

async function forecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    }
    catch (error) {
        console.error(error);
    }
}

function displayToday(data) {
    tempSpan.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
}

function displayForecast(data) {
    const onePerDay = data.list.filter(entry => entry.dt_txt.slice(11) == '12:00:00');
    let dayIndex = 1;
    onePerDay.forEach(day => {
        const forecastCard = document.createElement('figure');
        forecastCard.classList.value = "forecast-card";
        forecastCard.innerHTML = `<h4>${getRelativeDayString(dayIndex)}</h4>`+
        `<p>${day.main.temp_max}&deg;F</p>`+
        `<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">`+
        `<figcaption>${day.weather[0].description.toUpperCase()}</figcaption>`;
        forecastDiv.appendChild(forecastCard);
        dayIndex++;
    });
    
}

todaysWeather();
forecast();