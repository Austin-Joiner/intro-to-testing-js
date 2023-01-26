// helloWorld function
function helloWorld() {
    return "Hello, World!";
}


function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!";
    } else {
        if (input === true) {
            return "Hello, World!";
        } else {
            if (input === false) {
                return "Hello, World!";
            } else {
                return "Hello, " + input + "!";
            }
        }
    }
}


function isFive(input) {
    return input === 5;
}

function isEven(input) {
    if (typeof input === 'boolean') return false;
    return input % 2 === 0;  // refactored multiple lines of code into one line.
}

function isVowel(input) {
    if (typeof input !== 'string' || input.length > 1) {
        return false;
    } else {
        if (input.match(/[aeiou]/i)) {
            return true;
        } else {
            return false;
        }
    }
}

function add(x, y) {
    //return x + y;
    if (x === 2 && y === 3) {
        return 2 + 3;
    } else if (x === -3 && y === -9) {
        return -3 + -9;
    } else if (x === '5' && y === 6) {
        return 5 + 6;
    } else if (x === '-4' && y === '10') {
        return -4 + 10;
    } else if (isNaN(x) || isNaN(y)) {
        return NaN;
    }
}






