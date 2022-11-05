import JupiterIMGSource from "../../assets/icons/jupiter.png";
import inProgress from "../../assets/art/work-in-progress.png";

export default function setImages() {
    document.querySelector(".jupiter").src = JupiterIMGSource;
    document.querySelector(".progress").src = inProgress;
}
