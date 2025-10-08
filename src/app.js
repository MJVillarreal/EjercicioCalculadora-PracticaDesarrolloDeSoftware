const screenDisplay = document.querySelector('.display')

const buttons = document.querySelectorAll('.btn')

let calculation = []
let allCalculation = ''
let justCalculated = false
let lastResult = null

function calculate(button) {
    const value = button.dataset.value

    if (button.id === 'clear') {
        calculation = []
        allCalculation = ''
        screenDisplay.textContent = '0'
        justCalculated = false

    } else if (button.id === 'equals') {
        const result = eval(allCalculation)

        screenDisplay.textContent = result
        screenDisplay.scrollLeft = screenDisplay.scrollWidth;
        lastResult = result
        justCalculated = true

    } else if (value){
        if (justCalculated) {
            if (['+', '-', '*', '/'].includes(value)) {
                calculation = [lastResult, value]
            } else {
                calculation = [value]
            }
            justCalculated = false
    } else {
        calculation.push(value)
    }
        allCalculation = calculation.join('')
        screenDisplay.textContent = allCalculation
    }
};

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

document.addEventListener('keydown', (event) => {
    const key = event.key

    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        if (justCalculated) {
            if (['+', '-', '*', '/'].includes(key)) {
                calculation = [lastResult, key]
            } else {
                calculation = [key]
            }
            justCalculated = false
        } else {
            calculation.push(key)
        }
        allCalculation = calculation.join('')
        screenDisplay.textContent = allCalculation
        screenDisplay.scrollLeft = screenDisplay.scrollWidth;
        
    } else if (key === 'Enter') {
        const result = eval(allCalculation)
        
        lastResult = screenDisplay.textContent
        justCalculated = true
        lastResult = result
        screenDisplay.textContent = result
        screenDisplay.scrollLeft = screenDisplay.scrollWidth;
    } 
    else if (key === 'Backspace') {
        calculation.pop()
        allCalculation = calculation.join('')
        screenDisplay.textContent = allCalculation || '0'
        screenDisplay.scrollLeft = screenDisplay.scrollWidth;
    }
});