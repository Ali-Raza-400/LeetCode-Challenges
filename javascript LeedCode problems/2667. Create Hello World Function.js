/**
 * @return {Function}
 */
var createHelloWorld = function () {

    return function () {
      
        return "Hello World"
    }
};
const test = createHelloWorld();
let ans= test("Hello World")
console.log("test", test("Hello World"))

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */