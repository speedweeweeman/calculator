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

function operatorClicked(e) {
    const typedPanel = document.querySelector('.typedPanel');

    if (var1 && !operator && !e.target.classList.contains('=')) {
        operator = e.target.textContent;
        typedPanel.textContent = typedPanel.textContent + ' ' + operator + ' ';
        storedString1 = typedPanel.textContent;
    } else if (var2 && !e.target.classList.contains('=')) {
        operate();
        operator = e.target.textContent;
        typedPanel.textContent = typedPanel.textContent + ' ' + operator + ' ';
        storedString1 = typedPanel.textContent;
    } else if (var2) {
        operate();
    }
}

function clearClicked(e) {
    const typedPanel = document.querySelector('.typedPanel');
    typedPanel.textContent = '';
    var1 = '';
    var2 = '';
    operator = '';
    storedString1 = '';
}

function operate() {
    if (operator === '+') {
        var1 = parseInt(var1) + parseInt(var2);
    } else if (operator === '-') {
        var1 = parseInt(var1) - parseInt(var2);
    } else if (operator === 'x') {
        var1 = parseInt(var1) * parseInt(var2);
    } else if (operator === '/') {
        var1 = parseInt(var1) / parseInt(var2);
    }

    var2 = '';
    operator = '';
    storedString1 = '';
    
    const typedPanel = document.querySelector('.typedPanel');
    typedPanel.textContent = var1;
}

let var1 = '';
let var2 = '';
let operator = '';
let storedString1 = '';

addEventsandParse();