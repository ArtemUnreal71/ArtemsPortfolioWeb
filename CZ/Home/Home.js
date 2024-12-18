const button = document.querySelector('#downloadButton');
const tooltip = document.querySelector('#downloadButtonTooltip');
const dialog = document.querySelector('dialog');
const icons = document.querySelectorAll('.icon');
const news = document.querySelector('#news');
const closeNews = document.querySelector('#newsClose');

let tooltipOpacityMax = false;
let buttonShakeSet = false;
let buttonInterval = null;

const tooltipInterval = setInterval(() => {
    if (tooltipOpacityMax)
        tooltip.style.opacity = 0.1;
    else
        tooltip.style.opacity = 1;

    tooltipOpacityMax = !tooltipOpacityMax;
}, 1500)

button.addEventListener('mouseover', (e) => {
    if (!buttonShakeSet)
        setShake();
})
tooltip.addEventListener('mouseover', (e) => {
    if (!buttonShakeSet)
        setShake();
})
button.addEventListener('click', (e) => {
    if (buttonInterval) {
        clearInterval(buttonInterval);
    }
    dialog.showModal();
    dialog.style.top = "0%";
})

closeNews.addEventListener('click', c => {
    news.style.top = "-200px";
})

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && dialog.open) {
        e.preventDefault();

        closeDialog();
    }
})

icons.forEach((i) => {
    i.addEventListener('click', () => {
        closeDialog();
    })
})

function setShake() {
    tooltip.style.visibility = 'hidden';
    clearInterval(tooltipInterval);
    buttonInterval = setInterval(() => {
        button.classList.toggle('buttonShake');
    }, 7500)
    buttonShakeSet = true;
}

function closeDialog() {
    dialog.style.top = "-170%";

    const dialogTimeout = setTimeout(() => {
        dialog.close();
        clearTimeout(dialogTimeout);
    }, 1000)
}

setTimeout(() => {
    news.style.top = "25px";
}, 1000)
