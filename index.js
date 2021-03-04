function add(a, b) {
    return a + b
    //Addition
}

function subtract(a, b) {
    return a - b;
    //Subtraction
}

function multiply(a, b) {
    return a * b;
    //Multiplication
}

function divide(a, b) {
    return a / b;
    //Division
}

function increment(a) {
    return a += 1;
}

function decrement(a) {
    return a -= 1;
}

function makeInt(a, b=10) {
    return parseInt(a, b);
}

function preserveDecimal(a) {
    return parseFloat(a)
}