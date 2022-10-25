export default async function getForecastData(coords, t) {
    let time;
    t == "h" ? (time = "") : (time = "&daily=weathercode&timezone=auto");
    const forecast = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit${time}`
    );
    const jsonObject = await forecast.json();
    return jsonObject;
}
