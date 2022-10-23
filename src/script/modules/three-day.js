import getUTC from "../utils/get-utc.js";
import getHighLow from "../utils/get-high-low.js";

export default function getThreeDayForecast(arr, offset) {
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
            high: dayOne.high,
            low: dayOne.low,
        },
        {
            high: dayTwo.high,
            low: dayTwo.low,
        },
        {
            high: dayThree.high,
            low: dayThree.low,
        },
    ];
}
