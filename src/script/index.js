import getTemperature from "./modules/get-temperature.js";
import getWeatherData from "./modules/get-weather-data.js";

getWeatherData("germantown").then((data) => getTemperature(data));
