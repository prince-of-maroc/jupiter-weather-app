import "../style/style.scss";
import setImages from "./modules/set-images.js";
import getCurrentWeather from "./modules/get-current-weather.js";
import getDirection from "./modules/get-direction.js";
import getCityTime from "./modules/get-city-time.js";
import convertTemperatureScale from "./modules/convert-temp-scale.js";
import getThreeDayForecast from "./modules/three-day.js";
import getThreeHourForecast from "./modules/three-hour.js";
import getForecastData from "./modules/get-forecast.js";
import setWeatherIcon from "./modules/set-icon.js";

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
        // Get current weather data
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

        // Get forecast data
        getCurrentWeather(unit, searchbar.value)
            .then((obj) => {
                return {
                    latitude: obj.coord.lat,
                    longitude: obj.coord.lon,
                };
            })
            .then((coordinates) => {
                getForecastData(coordinates, "h").then((r) => {
                    let hourlyTemps = r.hourly.temperature_2m;
                    let weathercodes = r.hourly.weathercode;
                    getForecastData(coordinates, "d").then((r) => {
                        let threeDayForecast = getThreeDayForecast(
                            hourlyTemps,
                            offset
                        );
                        let threeHourForecast = getThreeHourForecast(
                            hourlyTemps,
                            weathercodes
                        );
                        let hourlyCards = Array.from(
                            document.querySelectorAll(".hcard")
                        );
                        let dailyCards = Array.from(
                            document.querySelectorAll(".dcard")
                        );
                        let dailycodes = r.daily.weathercode;

                        for (let i = 0; i < 3; i++) {
                            let hcard = hourlyCards[i];
                            let hspan = hcard.querySelector("span");
                            let hweathercode = threeHourForecast[i].weathercode;
                            setWeatherIcon(hcard, hweathercode);
                            hspan.innerText =
                                threeHourForecast[i].temperature + "°";

                            let dcard = dailyCards[i];
                            let dspans = dcard.querySelectorAll("span");
                            let dweathercode = dailycodes[i + 1];
                            setWeatherIcon(dcard, dweathercode);
                            dspans[0].innerText =
                                Math.round(threeDayForecast[i].high) + "°";
                            dspans[1].innerText =
                                Math.round(threeDayForecast[i].low) + "°";
                        }
                        console.log(r);
                    });
                });
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
