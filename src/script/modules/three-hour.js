import getUTC from "../utils/get-utc.js";

export default function getThreeHourForecast(arr) {
    let currentHourIndex = getUTC().getHours();
    return [
        arr[currentHourIndex + 1],
        arr[currentHourIndex + 2],
        arr[currentHourIndex + 3],
    ];
}
