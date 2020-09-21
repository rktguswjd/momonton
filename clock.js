const clockContainer = document.querySelector(".js-clock");
const clockTilte = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTilte.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();
