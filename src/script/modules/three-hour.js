import getUTC from "../utils/get-utc.js";

export default function getThreeHourForecast(arr, wcodes) {
    let currentHourIndex = getUTC().getHours();
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.round(arr[i]);
    }
    return [
        {
            temperature: arr[currentHourIndex + 1],
            weathercode: wcodes[currentHourIndex + 1],
        },
        {
            temperature: arr[currentHourIndex + 2],
            weathercode: wcodes[currentHourIndex + 2],
        },
        {
            temperature: arr[currentHourIndex + 3],
            weathercode: wcodes[currentHourIndex + 3],
        },
    ];
}
