const displayElOne = document.querySelector('.display-1');
const displayElTwo = document.querySelector('.display-2');
const displayElTemp = document.querySelector('.temp-result');
const clearAllEL = document.querySelector('.clear-all-btn');
const clearLastEntryEL = document.querySelector('.last-entry-clear-btn');
const numbersEl = document.querySelectorAll('.num-btn');
const operationsEL = document.querySelectorAll('.operation-btn');
const decimalEL = document.querySelector('.decimal-btn');
const equalsToEL = document.querySelector('.equals-to-btn');


let topDisplay = '';
let mainDisplay = '';
let bottomDisplay = '';
let lastOperation = '';
let haveDot = false;
let result = null;
//let displayOne = '';
//let displayOne = '';


// click event listener, check for dot with if statement; then add into the inner text pf the main display(display2) the result of the event listened to. 



numbersEl.forEach(number => {

    number.addEventListener('click', (e)=>{
        if (e.target.innerText === '.' && !haveDot){
            console.log(haveDot);
            haveDot=true;
            
        }else if (e.target.innerText === '.' && haveDot){
            console.log(haveDot);
            return;
            
        }
        mainDisplay += e.target.innerText;
        displayElTwo.innerText = mainDisplay;

    })
    
});


operationsEL.forEach(operators => {
    operators.addEventListener('click', (e) =>{
        if (!mainDisplay) {
            console.log(mainDisplay);
            result;
            console.log(result)
        }else{
            haveDot=false;
            const operationName = e.target.innerText;
                if (topDisplay && mainDisplay && lastOperation) {
                    console.log(result);
                    mathOperation();
                }else{
                    result = parseFloat(mainDisplay);
                    console.log(result);
                }
                clearVar(operationName);
                lastOperation = operationName;
            }
        
    })
});

equalsToEL.addEventListener('click', (e) => {

    if (!topDisplay || !mainDisplay) {
        return;
    }else{
        haveDot = false;
        mathOperation();
        clearVar();
        displayElTwo.innerText = result;
        displayElTemp.innerText = '';
        mainDisplay = result;
        topDisplay = '';
    }
        
})

function mathOperation() {
    if (lastOperation === "X") {
        result = parseFloat(result) * parseFloat(mainDisplay);
        console.log(result);
    }else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(mainDisplay);
    }else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(mainDisplay);
    }else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(mainDisplay);
    }else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(mainDisplay);
    }
}

function clearVar(name ='') {
    topDisplay += mainDisplay + ' ' + name + ' ';
    displayElOne.innerText = topDisplay;
    displayElTwo.innerText = '';
    mainDisplay = '';
    displayElTemp.innerText = result;

}


clearAllEL.addEventListener('click', () => {
    displayElOne.innerText = 0;
    displayElTwo.innerText = 0;
    displayElTemp.innerText = 0;
    mainDisplay = '';
    topDisplay = '';
    bottomDisplay = '';
    haveDot=false;
    result = null;
    lastOperation = '';

})

clearLastEntryEL.addEventListener('click', () =>{
    displayElTwo.innerText = 0;
    mainDisplay = '';
});