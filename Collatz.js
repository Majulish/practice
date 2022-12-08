// Collatz conjecture written in JavaScript, run via "node Collatz.js"

// Specify integer here
var integer = 100;

// While loop to run the Collatz conjecture and print until integer == 1
while (integer != 1) {
    if (integer%2 == 0) {
        integer = integer/2;
        console.log(integer);
    } else {
        integer = integer*3+1;
        console.log(integer);
    }
}
