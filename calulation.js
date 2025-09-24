let operand1 = null;
let operator = null;
let operand2 = null;

const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mul = (a,b) => a * b;
const divide = (a,b) => a / b;

function operate(operand1, operator, operand2){
    switch (operator){
        case (operator == "+"):
            return add(operand1, operand2);
        
        case (operator == "-"):
            return sub(operand1, operand2);

        case (operator == "*"):
            return mul(operand1, operand2);

        case (operator == "/"):
            return divide(operand1, operand2);
    }

}

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach(button => {
//         button.addEventListener("click", (e)=>{
//             e.target.style.backgroundColor = "rgba(199, 92, 26, 1)";
//             e.target.style.fontSize = "33px";
//         });

        button.addEventListener("mouseleave", (e)=>{
            e.target.style.backgroundColor ="antiquewhite";
            e.target.style.fontSize = "25px";
        });

});

const clear = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    screen.textContent = "";
    clear.style.backgroundColor = "rgba(199, 92, 26, 1)";
    clear.style.fontSize = "33px";
});

let selectedVal = "";
const screen = document.querySelector("#screen");
const digit = document.querySelectorAll(".digit");
digit.forEach(n => {
    n.addEventListener("click", (e)=>{
        selectedVal= e.target.textContent ;
        screen.textContent += selectedVal;
        e.target.style.backgroundColor = "rgba(199, 92, 26, 1)";
        e.target.style.fontSize = "33px";
    })
});

const symbol
    
if(operand1 === null){
    operand1 = Number(selectedVal);
}
else{
    operand2 = Number(selectedVal);
    operand1 = operate(operand1,operate,operand2);
}
