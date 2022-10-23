export default async function getForecastData(coords) {
    const forecast = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m&temperature_unit=fahrenheit`
    );
    const jsonObject = await forecast.json();
    return jsonObject;
}
