export default function toggleDetailWindow() {
    if (
        !document.querySelector(".detailed").style.display ||
        document.querySelector(".detailed").style.display == "none"
    ) {
        document.querySelector(".detailed").style.display = "flex";
        document.querySelector("main").style.display = "none";
        document.querySelector(".extended").style.display = "none";
        document.querySelector(".gradient").style.bottom = 0;
        document.querySelector(".gradient").style.backgroundImage = "none";
        document.querySelector(".gradient").style.webkitMaskImage = "none";
        document.querySelector(".all").style.backgroundImage =
            "linear-gradient(315deg,#ff3cac 0%, #784ba0 50%, #2b86c5 100% )";
    } else {
        document.querySelector(".detailed").style.display = "none";
        document.querySelector("main").style.display = "block";
        document.querySelector(".extended").style.display = "block";
        document.querySelector(".gradient").style.bottom = "-25px";
        document.querySelector(".gradient").style.webkitMaskImage =
            "linear-gradient(rgba(0, 0, 0, 0.786) 60%, transparent)";
        document.querySelector(".gradient").style.backgroundImage =
            "linear-gradient(315deg,#ff3cac 0%, #784ba0 50%, #2b86c5 100% )";
        document.querySelector(".all").style.backgroundImage = "none";
    }
}
