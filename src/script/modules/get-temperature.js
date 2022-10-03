export default function getTemperature(data) {
    const temp = Math.round(data.main.temp);
    console.log(`${temp}°F`);
}
