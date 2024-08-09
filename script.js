const display = document.querySelector('#display');
const currentResult = document.querySelector('#currentResult');
var firstValue;
var currentOperator;

function clearAll(){
    display.value='';
    firstValue=0;
    currentOperator=undefined;
}

function backSpace(){
    display.value = display.value.substring(0,display.value.length - 1);
}

function displayNumber(value){
    if(typeof value == 'number'){
        display.value=`${display.value}${value}`;
    } else{
        if(display.value.indexOf('.') < 0){   
        display.value=`${display.value}${value}`;
    }
    } 
}

function operation(operator){
    if(firstValue) {
        resultValue();
        // quando não for input
        // innerHTML = substituir todo o conteudo da tag
        // append = adicionar um novo conteudo no final
        currentResult.innerHTML =display.value;
    }
    firstValue=Number(display.value);
    display.value='';
    currentOperator=operator;
}


function resultValue(){
 let secondValue=Number(display.value);
 let result;

 switch (currentOperator) {
    case 'plus':
        result= firstValue+secondValue;
        break;
    case 'minus':
        result= firstValue-secondValue;
        break;
    case 'division':
        result= firstValue/secondValue;
         break;
    case 'multiply':
        result= firstValue*secondValue;
        break;
    case 'percentage':
        result=(secondValue*100)/firstValue;
        break;         
    default:
    result="resultado invalido";
        break;
 }
display.value=result;
}
/**
 * Validar nmr
 * Validar o (e)
 * Validar operações
 * 
 */
document.addEventListener('keydown', function(event) {
    // Obtém o código da tecla pressionada
    const key = event.key;
        switch (key) {
            case 'Enter':   
                resultValue();
                break;
            case 'Backspace':   
                backSpace();
                break; 
            case 'Escape':   
                clearAll();
                break;
            case '.':   
                displayNumber('.');
                break;
            case ',':   
                displayNumber('.');
                break; 
            case '=':   
                resultValue();
                break; 
            default:
                break;
        }
})

document.addEventListener('keypress', function(event){
    const key = event.key;
    console.log(key)
    if (Number.isNaN(Number(key))){  
        let operator;
        switch (key) {
            case '+':
                operator='plus' ;
                break;
            case '-': 
                operator='minus';
                break;
            case '/':
                operator='division';
                break;
            case '*':
                operator='multiply';
                break;
            case '%':
                operator='percentage';
                break;
        }

        if (operator) {
            operation(operator);
        }
        
        return;
    }

    if (key == 'e') {
        return;
    }

    displayNumber(Number(key));


})


