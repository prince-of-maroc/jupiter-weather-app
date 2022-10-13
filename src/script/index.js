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

searchbar.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        getWeatherData("F", searchbar.value).then((obj) => {
            console.log(obj);
            city.innerText = obj.name;
            getTemperature(obj).then((t) => (temp.textContent = t));
            extraData.innerText = `Expect ${Math.round(
                obj.wind.speed
            )}mph ${getDirection(obj.wind.deg)} winds today.`;
            time.innerText = getCityTime(obj.timezone * 1000);
        });
        searchbar.value = "";
        e.preventDefault();
    }
});
