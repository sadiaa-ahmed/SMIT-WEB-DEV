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
        // Replace 'x' with '*' for multiplication
        const result = eval(inputValue.replace(/x/g, '*').replace(/÷/g, '/'));
        inputValue = result.toString();
        updateInputBox(inputValue);
    } catch (error) {
        alert('Invalid Expression');
    }
};

// Function to handle button click events
const handleButtonClick = (event) => {
    const buttonText = event.target.innerHTML;

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
            try {
                const currentVal = parseFloat(inputBox.value);
                inputValue = (1 / currentVal).toString();
            } catch {
                alert('Invalid Expression');
            }
            break;
        case 'x<sup>2</sup>':
            try {
                const currentVal = parseFloat(inputBox.value);
                inputValue = (currentVal ** 2).toString();
            } catch {
                alert('Invalid Expression');
            }
            break;
        case 'x<sup>3</sup>':
            try {
                const currentVal = parseFloat(inputBox.value);
                inputValue = (currentVal ** 3).toString();
            } catch {
                alert('Invalid Expression');
            }
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