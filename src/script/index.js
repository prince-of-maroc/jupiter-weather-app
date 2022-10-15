import "../style/style.scss";
import setImages from "./modules/set-images.js";
import getWeatherData from "./modules/get-weather-data.js";
import getTemperature from "./modules/get-temperature.js";
import getDirection from "./modules/get-direction.js";
import getCityTime from "./modules/get-city-time.js";

setImages();

const searchbar = document.querySelector("input");
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
        getWeatherData(unit, searchbar.value).then((obj) => {
            time.style.opacity = 1;
            console.log(obj);
            city.innerText = obj.name;
            displayedTemp = obj.main.temp;
            temp.textContent = `${Math.round(obj.main.temp)}°`;
            extraData.innerText = `Expect ${Math.round(
                obj.wind.speed
            )}mph ${getDirection(obj.wind.deg)} winds today.`;
            offset = obj.timezone * 1000;
        });
        searchbar.value = "";
        e.preventDefault();
    }
});

const scale = document.querySelector(".unit");
scale.addEventListener("click", () => {
    if (unit == "F") {
        scale.innerText = "°C";
        unit = "C";
        temp.textContent = `${convertTemperatureScale("F")}°`;
    } else {
        scale.innerText = "°F";
        unit = "F";
        temp.textContent = `${convertTemperatureScale("C")}°`;
    }
});

function convertTemperatureScale(unit) {
    if (unit == "C") {
        displayedTemp = displayedTemp * (9 / 5) + 32;
    } else {
        displayedTemp = (displayedTemp - 32) * (5 / 9);
    }
    return Math.round(displayedTemp);
}
