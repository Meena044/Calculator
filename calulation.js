let operand1 = null;
let operator = "";
let operand2 = null;
let selectedVal = "";

const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mul = (a,b) => a * b;
const divide = (a,b) => a / b;

function operate(operand1, operator, operand2){
    switch (operator){
        case "+": return add(operand1, operand2);
        case "-": return sub(operand1, operand2);
        case "*": return mul(operand1, operand2);
        case "/": return divide(operand1, operand2);
        default : return null;
    }

}

// on click buttons styling
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach(button => {
        button.addEventListener("click", (e)=>{
            e.target.style.backgroundColor = "rgba(199, 92, 26, 1)";
            e.target.style.fontSize = "33px";
        });

        button.addEventListener("mouseleave", (e)=>{
            e.target.style.backgroundColor ="antiquewhite";
            e.target.style.fontSize = "25px";
        });

});

// clear button functionality
const clear = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    screen.textContent = "";
    operand1 = null;
    operator = "";
    operand2 = null;
    selectedVal = "";
});

// getting users selected value and displaying in screen 
const screen = document.querySelector("#screen");
const values = document.querySelectorAll(".digit, .sym");
values.forEach(clicked => {
    clicked.addEventListener("click", (e)=>{
        const val = e.target.textContent;

        if (/^\d$/.test(val)) {
            selectedVal += val;
            screen.textContent += val;
        } 
        else if (/^[+−×÷]$/.test(val)) {
            if (selectedVal !== "") {
                if (operand1 === null) {
                    operand1 = Number(selectedVal);
                } else if (operator !== "") {
                    operand2 = Number(selectedVal);
                    operand1 = operate(operand1, operator, operand2);
                    screen.textContent = operand1;
                }
            }

            operator = normalizeOperator(val);
            selectedVal = "";
            screen.textContent += val;
        }
    });
});

function normalizeOperator(op) {
    switch (op) {
        case "×": return "*";
        case "÷": return "/";
        case "−": return "-";
        case "+": return "+";
        default: return op; 
    }
}



const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (selectedVal !== "") {
        operand2 = Number(selectedVal);
        const result = operate(operand1, operator, operand2);
        screen.textContent = Number(result.toFixed(6));

        // Reset for next operation
        operand1 = result;
        operator = "";
        operand2 = null;
        selectedVal = "";
    }
});
    

