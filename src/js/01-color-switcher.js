const stop = document.querySelector('[data-stop]');
const start = document.querySelector('[data-start]');
const body = document.querySelector('body');
let timerColor;

const asignarColor = () => body.style.background = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startEvent = () => {
  timerColor = setInterval(asignarColor, 1000);
  start.disabled = true;
  stop.disabled = false;
}

const stopEvent = () => {
  clearInterval(timerColor);
  start.disabled = false;
  stop.disabled = true;
}

stop.disabled = true;
start.addEventListener('click', startEvent);
stop.addEventListener('click', stopEvent);