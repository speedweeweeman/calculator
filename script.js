// decides whether it was a number/equal sign, operator or clear that's been clicked
function addEventsandParse() {
    const inputPanel = document.querySelector(".inputPanel");

    inputPanel.addEventListener('click', (e) => {
        if (e.target.classList.contains('clear')) {
            clearClicked(e);
        } else if (e.target.classList.contains('op')) {
            operatorClicked(e);
        } else if (e.target.classList.contains('num')) {
            numberClicked(e);
        }
    });
}

// if it was a number, store var and eval if needed
function numberClicked(e) {
    const typedPanel = document.querySelector('.typedPanel');
    if (!operator) {
        var1 = var1 + e.target.textContent;
        typedPanel.textContent = var1;
    } else if (operator && var1) {
        var2 = var2 + e.target.textContent;
        typedPanel.textContent = storedString1 + var2;
    }
}

// if it was an operator, store operator or clear bin
function operatorClicked(e) {
    const typedPanel = document.querySelector('.typedPanel');

    if (var1 && !operator && !e.target.classList.contains('=')) {
        operator = e.target.textContent;
        typedPanel.textContent = typedPanel.textContent + ' ' + operator + ' ';
        storedString1 = typedPanel.textContent;
    } else if (var2) {

    }
}

// if it was clear, clear everything
function clearClicked(e) {
    console.log("clearClicked " + e.target);
}

let var1 = '';
let var2 = '';
let operator = '';
let storedString1 = '';

addEventsandParse();