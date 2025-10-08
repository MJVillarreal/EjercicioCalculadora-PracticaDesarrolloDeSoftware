const screenDisplay = document.querySelector('.display')

const buttons = document.querySelectorAll('.btn')

let calculation = []
let allCalculation = ''

function calculate(button) {
    const value = button.dataset.value

    if (button.id === 'clear') {
        calculation = []
        screenDisplay.textContent = '0'

    } else if (button.id === 'equals') {
        screenDisplay.textContent = eval(allCalculation)

    } else {
        calculation.push(value)
        allCalculation = calculation.join('')
        screenDisplay.textContent = allCalculation
    }
};

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

document.addEventListener('keydown', (event) => {
    const key = event.key

    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        calculation.push(key)
        allCalculation = calculation.join('')
        screenDisplay.textContent = allCalculation

    } else if (key === 'Enter') {
        screenDisplay.textContent = eval(allCalculation)

    } else if (key === 'Backspace') {
        calculation.pop()
        allCalculation = calculation.join('')
        screenDisplay.textContent = allCalculation || '0'
    }
});