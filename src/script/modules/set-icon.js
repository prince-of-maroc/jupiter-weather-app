import overcast from "../../assets/icons/overcast.png";
import sun from "../../assets/icons/sun.png";
import storm from "../../assets/icons/storm.png";
import snow from "../../assets/icons/snowy.png";
import drizzle from "../../assets/icons/drizzle.png";
import fog from "../../assets/icons/mist.png";
import frozenRain from "../../assets/icons/snowflake.png";
import rain from "../../assets/icons/rain.png";

export default function setWeatherIcon(card, weathercode) {
    let img = card.querySelector("img");
    switch (weathercode) {
        case 0:
            img.src = sun;
            break;
        case 1:
        case 2:
        case 3:
            img.src = overcast;
            break;
        case 45:
        case 48:
            img.src = fog;
            break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            img.src = drizzle;
            break;
        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            img.src = rain;
            break;
        case 66:
        case 67:
            img.src = frozenRain;
            break;
        case 71:
        case 73:
        case 75:
        case 77:
            img.src = snow;
            break;
        case 95:
        case 96:
        case 99:
            img.src = storm;
            break;
    }
}
