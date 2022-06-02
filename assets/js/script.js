
const imgElements = document.querySelectorAll(".cards img");
console.dir(imgElements);
const imgFull = [];
const frameImg = document.createElement("div");
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(7px)";
//frameImg.style.backgroundColor = "rgba(138,43,226,0.7)"
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
frameImg.style.zIndex = 1;
document.body.prepend(frameImg);
//meme chose avec une bucle while :
let i = 0;
while (i < imgElements.length) {
    let n = i;
    imgElements[i].addEventListener(
        "click",
        () => {
            frameImg.style.display = "flex";
            imgFull[n] = document.createElement("img");
            imgFull[n].src = imgElements[n].src;
            frameImg.append(imgFull[n]);
        }
    )
    i++;
}
frameImg.addEventListener(
    "click",
    (event) => {
        if (!frameImg.querySelector("img").contains(event.target)) {
            frameImg.style.display = "none";
            frameImg.innerHTML = "";
        }
    }
)