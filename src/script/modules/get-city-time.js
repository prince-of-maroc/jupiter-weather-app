function getUTC() {
    let date = new Date();
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    );
}

export default function getCityTime(offset) {
    // Get city time
    let cityTimeObj = new Date(getUTC().getTime() + offset);

    // Manipulate data into string
    let hrs;
    let mins;
    let meridiem;
    if (cityTimeObj.getHours() > 12) {
        hrs = cityTimeObj.getHours() - 12;
        meridiem = "PM";
    } else if (cityTimeObj.getHours() == 0) {
        hrs = 12;
        meridiem = "AM";
    } else {
        hrs = cityTimeObj.getHours();
        meridiem = "AM";
    }
    if (cityTimeObj.getMinutes() < 10) {
        mins = "0" + cityTimeObj.getMinutes();
    } else {
        mins = cityTimeObj.getMinutes();
    }
    return `${hrs}:${mins} ${meridiem}`;
}
