export default function convertTemperatureScale(currentUnit, temp) {
    if (currentUnit == "C") {
        return Math.round(temp * (9 / 5) + 32);
    } else {
        return Math.round((temp - 32) * (5 / 9));
    }
}
