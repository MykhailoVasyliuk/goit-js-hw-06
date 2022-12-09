const inputlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputlEl.addEventListener("input", toTransformsText)

function toTransformsText(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}