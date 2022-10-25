export default async function getForecastData(units, coords, t) {
    let time;
    let u;
    t == "h" ? (time = "") : (time = "&daily=weathercode&timezone=auto");
    units == "F" ? (u = "fahrenheit") : (u = "celsius");

    const forecast = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m,weathercode&temperature_unit=${u}${time}`
    );
    const jsonObject = await forecast.json();
    return jsonObject;
}
