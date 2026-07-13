// Functions for filling the calculator
function fillCalc() {
    const inputBody = document.querySelector(".inputPanel");
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// decides whether it was a number/equal sign, operator or clear that's been clicked
function whenClicked(e) {
    const clickedItem = e.target.value;

    if (clickedItem.classList.contains('=') {

    }
}

// if it was a number, store var and eval if needed. If it was equals sign, eval and run clear
function numberClicked(e) {

}

// if it was an operator, store operator
function operatorClicked(e) {

}

// if it was clear, clear everything
function clearClicked(e) {

}

let firstVar = 0;
let operator = '';
let secondVar = 0;

