const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = function(x, y, oper) {
    if(oper === '+') return add(x, y);
    if(oper === '-') return subtract(x, y); 
    if(oper === '*') return multiply(x, y); 
    if(oper === '/') return divide(x, y); 
};

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {
        display.textContent += button.textContent;
    });
});






