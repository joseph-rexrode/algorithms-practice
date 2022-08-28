//// COUNTDOWN //// 

function countdown(number) {
    var newArr = [];

    for (var i = number; i >= 0; i--) {
        newArr.push(i);
    }

    return newArr;
}
// the array's length will be the parameter 'number' + 1
console.log("\n//// Countdown ////\n");
console.log(countdown(10));


//// PRINT AND RETURN ////

function printAndReturn(array) {
    console.log("Printed value: " + array[0]);
    return array[1];
}
var x = [6, 9];
console.log("\n//// Print and return ////\n");
console.log("Returned value: " + printAndReturn(x));


//// FIRST PLUS LENGTH ////

function firstPlusLength(array) {
    var sum = array[0] + array.length;

    return sum;
}

// using a string just concatenates it with the length integer, like "what4"
// using a boolean adds 0 if false and 1 if true
var y = [1, 2, 3, 4];
console.log("\n//// First plus length ////\n");
console.log("Sum: " + firstPlusLength(y));


//// VALUES GREATER THAN SECOND ////

function valuesGreaterThanSecond(array) {
    var counter = 0;
    if (array.length < 2) {
        return "This array is too short!";
    }

    for (element in array) {
        if (array[element] > array[1]) {
            console.log(array[element]);
            counter++;
        }
    }
    return "Number of values: " + counter;
}

console.log("\n//// Values greater than second ////\n");
console.log(valuesGreaterThanSecond([1,3,5,7,9,13]));


//// VALUES GREATER THAN SECOND, GENERALIZED ////

var z = [1, 2, 3, 4, 5, 6];
console.log("\n//// Values greater than second, generalized ////\n");
console.log(valuesGreaterThanSecond(z));
console.log(valuesGreaterThanSecond([1]));


//// THIS LENGTH, THAT VALUE ////

function thisThat(len, val) {
    var newArray = [];

    for (var i = 0; i < len; i++) {
        newArray.push(val);
    }

    if (len == val) {
        console.log("Jinx!");
    }

    return newArray;
}

console.log("\n//// This length, that value ////\n");
console.log(thisThat(3, 3));


//// FIT THE FIRST VALUE ////

function fitFirst(array) {
    if (array[0] > array.length) {
        console.log("Too big!");
    }

    else if (array[0] < array.length) {
        console.log("Too small!");
    }

    else {
        console.log("Just right!");
    }
}

console.log("\n//// Fit the first value ////\n");
fitFirst([1,2,3]);
fitFirst([6,5,4]);
fitFirst([3,4,5]);


//// FAHRENHEIT TO CELSIUS ////

function fahrenheitToCelsius(fDegrees) {
    var cDegrees = (fDegrees - 32) * (5/9);

    return cDegrees;
}

console.log("\n//// Fahrenheit to Celsius ////\n");
console.log("Degrees in celsius: " + fahrenheitToCelsius(70));


//// CELSIUS TO FAHRENHEIT ////

function celsiusToFahrenheit(cDegrees) {
    var fDegrees = (cDegrees * (9/5)) + 32;

    return fDegrees;
}

function equate(startingCelsius) {
    var cDegrees = startingCelsius;

    while (cDegrees != celsiusToFahrenheit(cDegrees)) {
        cDegrees--;
    }

    return cDegrees;
}

console.log(equate(200));