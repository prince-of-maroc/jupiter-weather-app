export default async function getWeatherData(units, city, country, state) {
    let response;
    const u = units == "F" ? "imperial" : "metric";
    if (state) {
        response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country},${state}&units=${u}&appid=1a96bd0316e7aa5f290b2d5c4f190c97`
        );
    } else if (country) {
        response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${u}&appid=1a96bd0316e7aa5f290b2d5c4f190c97`
        );
    } else {
        response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${u}&appid=1a96bd0316e7aa5f290b2d5c4f190c97`
        );
    }
    const jsonResponse = await response.json();
    return jsonResponse;
}
