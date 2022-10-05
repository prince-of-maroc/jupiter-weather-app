import "../style/style.scss";
import getTemperature from "./modules/get-temperature.js";
import getWeatherData from "./modules/get-weather-data.js";

const input = document.querySelector("input");
const cityName = document.querySelector("h1");
const tempDisplay = document.querySelector("p");

async function displayInfo() {
    cityName.innerText = input.value;
    tempDisplay.innerText = await getWeatherData("F", input.value).then(
        (data) => getTemperature(data)
    );
}

document.querySelector("button").addEventListener("click", () => {
    displayInfo();
});
