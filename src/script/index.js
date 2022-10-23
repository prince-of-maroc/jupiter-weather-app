import "../style/style.scss";
import setImages from "./modules/set-images.js";
import getCurrentWeather from "./modules/get-current-weather.js";
import getDirection from "./modules/get-direction.js";
import getCityTime from "./modules/get-city-time.js";
import convertTemperatureScale from "./modules/convert-temp-scale.js";

setImages();

const searchbar = document.querySelector("input");
const changeUnitButton = document.querySelector(".unit");
const jupiterLogo = document.querySelector(".jupiter");

const city = document.querySelector(".lower h1");
const temp = document.querySelector(".weather h1");
const extraData = document.querySelector(".weather h2");
const time = document.querySelector(".time");
let unit = "F";
let displayedTemp;

let offset;
(function refreshTime() {
    time.innerText = getCityTime(offset);
    setTimeout(function () {
        refreshTime();
    }, 1000);
})();

searchbar.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        getCurrentWeather(unit, searchbar.value).then((obj) => {
            time.style.opacity = 1;
            temp.style.opacity = 1;
            console.log(obj);
            city.innerText = obj.name;
            displayedTemp = obj.main.temp;
            temp.textContent = `${Math.round(obj.main.temp)}°`;
            extraData.innerText = `Expect ${
                obj.weather[0].description
            } and ${Math.round(obj.wind.speed)}mph ${getDirection(
                obj.wind.deg
            )} winds today.`;
            offset = obj.timezone * 1000;
        });
        searchbar.value = "";
        e.preventDefault();
    }
});

changeUnitButton.addEventListener("click", () => {
    if (unit == "F") {
        changeUnitButton.innerText = "°C";
        unit = "C";
        displayedTemp = convertTemperatureScale("F", displayedTemp);
        temp.textContent = `${displayedTemp}°`;
    } else {
        changeUnitButton.innerText = "°F";
        unit = "F";
        displayedTemp = convertTemperatureScale("C", displayedTemp);
        temp.textContent = `${displayedTemp}°`;
    }
});

jupiterLogo.addEventListener("click", () => {
    window.location.reload();
});
