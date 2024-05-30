/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers1(a, b) {
    //Code block
    return a + b; 
}
let sum = addTwoNumbers1(3, 5);
console.log(sum);


// Arrow Function With Parameters

// When using arrow functions, use a constant and set it equal to a pair of brackets, then a fat arrow '=>' and then curly brackets with the function body
const addTwoNumbers2 = (a, b) => {
    
    return a + b;
}
let sum2 = addTwoNumbers2(3, 5);
console.log(sum);


// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a, b) => a + b;
let sum3 = addTwoNumbers3(6, 4);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("HELLO");

const sayHello = () => console.log("hello");
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    this is a multi line string
    </p>`
)
console.log(returnMultipleLines());