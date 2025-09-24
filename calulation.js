let operand1, operator, operand2;

const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mul = (a,b) => a * b;
const divide = (a,b) => a / b;

function operate(operand1, operator, operand2){
    switch (operator){
        case (operator == "+"):
            result=add(operand1, operand2);
            break;
        
        case (operator == "-"):
            result=sub(operand1, operand2);
            break;

        case (operator == "*"):
            result=mul(operand1, operand2);
            break;

        case (operator == "/"):
            result=divide(operand1, operand2);
            break;
    }

}

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

// let selectedVal = 0;
const screen = document.querySelector("#screen");
const digit = document.querySelectorAll(".digit");
digit.forEach(n => {
    n.addEventListener("click", (e)=>{
        operand1= e.target.textContent ;
        screen.textContent += selectedVal
    })
});
    
// console.log(add(15,5));
// console.log(sub(15,5));
// console.log(mul(15,5));
// console.log(divide(15,5));