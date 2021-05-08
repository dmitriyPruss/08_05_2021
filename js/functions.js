hello();

// function declaration
function hello() {
    console.log("Hello, world!");
};

const person1 = "Grut";
helloTo(person1);
helloTo("Dudu");

function helloTo(name) {
    console.log("Hello, " + name);
};

const sumAB = sum(1,2);

function sum(a, b) {
    const result = a + b;
    return result;
};

console.log('sumAB :>> ', sumAB);


// 1
const twoToFour = powToFour(3);
console.log('twoToFour :>> ', twoToFour);
console.log('3*3*3*3 :>> ', 3*3*3*3);

/**
 * 
 * @param {number} num - num in power 4
 * @returns {number} result
 */

function powToFour(num) {
    return num ** 4;
};

// 2
const nums = solveSquareEquation(5, 7, 2);
console.log('nums :>> ', nums);


function solveSquareEquation(a, b, c) {
    const d = b * b - 4 * a * c;
    const x1 = (-b + Math.sqrt(d))/ (2 * a);
    const x2 = (-b - Math.sqrt(d) )/ (2 * a);
    return [x1, x2];
};








