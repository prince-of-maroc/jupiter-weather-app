export default async function getTemperature(data) {
    const temp = await Math.round(data.main.temp);
    return `${temp}°`;
}
