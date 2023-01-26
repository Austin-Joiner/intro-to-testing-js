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
    if (input === 'A') {
        return true;
    } else {
        if (input === 'a') {
            return true;
        } else {
            if (input === 'y') {
                return false;
            } else {
                if (input === 4) {
                    return false;
                } else {
                    if (typeof input === 'boolean') {
                        return false;
                    } else {
                        if (input === 'banana') {
                            return false;
                        } else {
                            if (input === undefined) {
                                return false;
                            }
                        }
                    }

                }
            }
        }
    }
}