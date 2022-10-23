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
                fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m&temperature_unit=fahrenheit`
                )
                    .then((r) => r.json())
                    .then((r) => {
                        console.log(r);
                        let hourlyTemps = r.hourly.temperature_2m;
                        let threeDayForecast = getThreeDayForecast(
                            hourlyTemps,
                            offset
                        );
                        let threeHourForecast =
                            getThreeHourForecast(hourlyTemps);
                        console.log(threeDayForecast, threeHourForecast);
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

function getUTC() {
    let date = new Date();
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    );
}

function getHighLow(arr, start, end) {
    let high = arr[start];
    let low = arr[start];
    for (let i = start; i < end; i++) {
        if (arr[i] > high) {
            high = arr[i];
        } else if (arr[i] < low) {
            low = arr[i];
        }
    }
    return [high, low];
}

function getThreeDayForecast(arr, offset) {
    let currentHourIndex = getUTC().getHours();

    let UTC = getUTC().getTime();
    let cityDate = new Date(UTC + offset);
    let currentHr = cityDate.getHours();
    let hrsTillNewDay = 24 - currentHr;

    let tomorrowStart = currentHourIndex + hrsTillNewDay;
    let tomorrowEnd = currentHourIndex + hrsTillNewDay + 24;
    let twoDayEnd = tomorrowEnd + 24;
    let threeDayEnd = twoDayEnd + 24;

    let dayOne = getHighLow(arr, tomorrowStart, tomorrowEnd);
    let dayTwo = getHighLow(arr, tomorrowEnd, twoDayEnd);
    let dayThree = getHighLow(arr, twoDayEnd, threeDayEnd);

    return [
        {
            high: dayOne[0],
            low: dayOne[1],
        },
        {
            high: dayTwo[0],
            low: dayTwo[1],
        },
        {
            high: dayThree[0],
            low: dayThree[1],
        },
    ];
}

function getThreeHourForecast(arr) {
    let currentHourIndex = getUTC().getHours();
    return [
        arr[currentHourIndex + 1],
        arr[currentHourIndex + 2],
        arr[currentHourIndex + 3],
    ];
}
