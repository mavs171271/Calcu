const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let displayValue = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function(){
        const buttonText = button.textContent;

        if(buttonText === 'C') {
            displayValue = '';
            display.value = displayValue;

        } else if(buttonText === '=') {
            try{
                display.value = eval(displayValue);
            } catch {
                display.value = 'Error';
            }
        } else{
            displayValue += buttonText;
            display.value = displayValue;
        }
    });
});