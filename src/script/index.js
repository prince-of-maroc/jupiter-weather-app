import getTemperature from "./modules/get-temperature.js";
import getWeatherData from "./modules/get-weather-data.js";

getWeatherData("F", "new york city").then((data) => getTemperature(data));
