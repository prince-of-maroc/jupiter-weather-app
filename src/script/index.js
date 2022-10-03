async function getWeatherData(city, country, state) {
    let response;
    if (state) {
        response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country},${state}&appid=1a96bd0316e7aa5f290b2d5c4f190c97`
        );
    } else if (country) {
        response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=1a96bd0316e7aa5f290b2d5c4f190c97`
        );
    } else {
        response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a96bd0316e7aa5f290b2d5c4f190c97`
        );
    }
    const jsonResponse = await response.json();
    return jsonResponse;
}
