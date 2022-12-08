const decrementEl = document.querySelector(`button[data-action="decrement"]`);
const incrementEl = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);

let counterValue = 0;


decrementEl.addEventListener(`click`, minusBtnClick);
incrementEl.addEventListener(`click`, plusBtnClick);


function minusBtnClick () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function plusBtnClick () {
    counterValue += 1;
    valueEl.textContent = counterValue;
}