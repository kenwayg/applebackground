const wrapper = document.querySelector(".wrapper");
const image = document.querySelector(".img");
const opt = document.querySelector("#select");

opt.oninput = () => {
    image.src = `./assets/${opt.value}.jpg`;
};

image.onload = function() {
    const { R, G, B } = getAverageColor(image, 4);
    wrapper.style.background = `linear-gradient(135deg, rgb(${R}, ${G}, ${B}), #a19a9a`;
};