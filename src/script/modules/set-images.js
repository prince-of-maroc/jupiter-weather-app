import JupiterIMGSource from "../../assets/icons/jupiter.png";
import OvercastIMGSource from "../../assets/icons/overcast.png";

export default function setImages() {
    document.querySelector(".jupiter").src = JupiterIMGSource;

    document.querySelector("#hour1 img").src = OvercastIMGSource;
}
