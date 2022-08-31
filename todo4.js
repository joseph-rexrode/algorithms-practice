//// EXTRACT-O-MATIC ////

function extractDigit(num, digitNum) {
    var divisor = Math.pow(10, digitNum);

    // trunc makes negative values work correctly
    var digit = Math.trunc((num / divisor) % 10);

    // handles negative num values
    return Math.abs(digit);
}

console.log("\n//// Extract-o-matic ////\n");
console.log(extractDigit(-1234.567, -2));


//// MOST SIGNIFICANT DIGIT ////

function mostSignificant(num) {
    while (Math.abs(num) >= 10 || Math.abs(num) < 1) {
        if (Math.abs(num) >= 10) {
            num = num / 10;
        }
        else {
            num = num * 10;
        }
    }

    var mostSig = Math.trunc(num % 10);

    return Math.abs(mostSig);
}

console.log("\n//// Most significant digit ////\n");
console.log(mostSignificant(0.00987));
console.log(mostSignificant(12345));