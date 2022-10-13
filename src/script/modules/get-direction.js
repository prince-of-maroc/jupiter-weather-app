export default function getDirection(degrees) {
    console.log(degrees);
    if (degrees < 22.5) {
        return "north";
    } else if (degrees < 67.5) {
        return "north-east";
    } else if (degrees < 112.5) {
        return "east";
    } else if (degrees < 157.5) {
        return "south-east";
    } else if (degrees < 202.5) {
        return "south";
    } else if (degrees < 247.5) {
        return "south-west";
    } else if (degrees < 292.5) {
        return "west";
    } else if (degrees < 337.5) {
        return "north-west";
    } else {
        return "north";
    }
}
