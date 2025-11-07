function performMathOperation() {
    // Generate two random numbers between 1 and 100
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    
    // Select a random operation
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    // Perform the calculation
    let result;
    let operationName;
    
    switch(operation) {
        case '+':
            result = num1 + num2;
            operationName = "Addition";
            break;
        case '-':
            result = num1 - num2;
            operationName = "Subtraction";
            break;
        case '*':
            result = num1 * num2;
            operationName = "Multiplication";
            break;
        case '/':
            result = (num2 !== 0) ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
            operationName = "Division";
            break;
    }
    
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h3>${operationName} Result (from external JS file):</h3>
        <p>${num1} ${operation} ${num2} = ${result}</p>
        <p><em>This calculation was performed by the external JavaScript file!</em></p>
    `;
    resultElement.style.display = 'block';
}

// Additional function that could be used
function greetUser() {
    alert("Hello! This greeting comes from the external JavaScript file.");
}

// You can add more functions to the external file as needed
function calculateSquare(number) {
    return number * number;
}