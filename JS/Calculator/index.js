
// ____________________________________________________
// Get all the buttons and the input box
const buttons = document.querySelectorAll('button');
const inputBox = document.getElementById('inputBox');

// Initialize a string to store the input value
let inputValue = "";

// Function to update the input box value
const updateInputBox = (value) => {
    inputBox.value = value;
};

// Function to evaluate the expression
const evaluateExpression = () => {
    try {
        const result = eval(inputValue);
        inputValue = result.toString();
        updateInputBox(inputValue);
    } catch (error) {
        alert('Invalid Expression');
    }
};

// Function to handle button click events
const handleButtonClick = (event) => {
    const buttonText = event.target.innerText;

    switch (buttonText) {
        case 'C':
            inputValue = "";
            break;
        case 'DEL':
            inputValue = inputValue.slice(0, -1);
            break;
        case 'CE':
            inputValue = "";
            break;
        case '=':
            evaluateExpression();
            return;
        case '1/x':
            inputValue = (1 / eval(inputValue)).toString();
            break;
        case 'x²':
            inputValue = (eval(inputValue) ** 2).toString();
            break;
        case 'x³':
            inputValue = (eval(inputValue) ** 3).toString();
            break;
        case 'x':
            inputValue += '*';
            break;
        case '/':
        case '+':
        case '-':
        case '%':
        case '.':
            inputValue += buttonText;
            break;
        default:
            inputValue += buttonText;
    }
    
    updateInputBox(inputValue);
};

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});