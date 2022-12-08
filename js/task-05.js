const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output")

textInputEl.addEventListener(`input`, (event) => {
    if (event.currentTarget.value === "") {
        textOutputEl.textContent = "Anonymous";
    }
    textOutputEl.textContent = event.currentTarget.value;
})