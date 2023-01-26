// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called.", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when executed." , function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!' when executed.", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string conditional 'Hello, Pat!'' when executed.", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return the string 'Hello, World!' when executed.", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when executed with true as an argument.", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when executed with false as an argument.", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});



describe('isFive', function() {
    it("should be a defined function.", function () {
        expect(typeof isFive).toBe('function');
    });
    it("should return false when input is not 5", function () {
        expect(isFive("5")).toBe(false);
        expect(isFive(6)).toBe(false);
    });
    it("should return true when input is 5", function () {
        expect(isFive(5)).toBe(true);
    });
});

describe('isEven', function() {
    it("should be a defined function.", function () {
        expect(typeof isFive).toBe('function');
    });
    it("should return a boolean when passed any input", function () {
        expect(typeof isEven(2)).toBe('boolean');
    });
    it("should return true when executed with isEven(2)", function () {
        expect(isEven(2)).toBe(true);
    });
    it("should return true when executed with isEven(-4)", function () {
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when executed with isEven(3)", function () {
        expect(isEven(3)).toBe(false);
    });
    it("should return false when called with isEven('banana')", function () {
        expect(isEven('banana')).toBe(false);
    });
    it("should return true when called with isEven('8')", function () {
        expect(isEven('8')).toBe(true);
    });
    it("should return false when called with isEven(Infinity)", function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when called with a boolean input like isEven(true) or isEven(false)", function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it("should return false when called without an argument like isEven()", function () {
        expect(isEven()).toBe(false);
    });

});


describe('isVowel', function() {
    it("should be a defined function.", function() {
        expect(typeof isVowel).toBe('function');
    });
    it("should return true when called with isVowel('a')", function() {
        expect(isVowel('a')).toBe(true);
    });
    it("should return true when called with isVowel('A')", function() {
        expect(isVowel('A')).toBe(true);
    });
    it("should return false when called with isVowel('y')", function() {
        expect(isVowel('y')).toBe(false);
    });
    it("should return false when called with isVowel(4)", function() {
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when called with a boolean input like isVowel(true) or isVowel(false)", function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it("should return false when called with isVowel('banana')", function() {
        expect(isVowel('banana')).toBe(false);
    });
    it("should return false when called with isVowel()", function() {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function () {
    it("should be a defined function.", function () {
        expect(typeof add).toBe('function');
    });
    it("should return 5 when 2 and 3 are passed through it.", function () {
        expect(add(2, 3)).toBe(5);
    });
    it("should return -12 when -3 and -9 are passed through it.", function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it("should return 11 when '5' and 6 are passed through it.", function () {
        expect(add('5', 6)).toBe(11);
    });
    it("should return 6 when '-4' and '10' are passed through it.", function () {
        expect(add('-4','10')).toBe(6);
    });
    it("should return NaN when 'banana' and split' are passed through it.", function () {
        expect(add('banana','split')).toBeNaN();
    });
    it("should return NaN when add() are passed through it.", function () {
        expect(add()).toBeNaN();
    });
    it("should return NaN when 'banana' and split' are passed through it.", function () {
        expect(add(2, 'apples')).toBeNaN();
    });
});




