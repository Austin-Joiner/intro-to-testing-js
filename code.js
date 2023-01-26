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
    if(typeof input === 'boolean') return false;
    return input % 2 === 0;  // refactored multiple lines of code into one line.
}

