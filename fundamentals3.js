//// BIGGIE SIZE ////

function makeItBig(array) {
    for (i in array) {
        if (array[i] > 0) {
            array[i] = "big";
        }
    }
    return array;
}

console.log("\n//// Biggie Size ////\n");
console.log(makeItBig([-1, 3, 5, -5]));


//// PRINT LOW, RETURN HIGH //// 

function printLowReturnHigh(array) {
    var lowest;
    var highest;

    for (i in array) {
        if (array[i] < lowest || lowest == null) {
            lowest = array[i];
        }
        if (array[i] > highest || highest == null) {
            highest = array[i];
        }
    }

    console.log("Lowest: " + lowest);
    return "Highest: " + highest;
}

console.log("\n//// Print low return high ////\n");
console.log(printLowReturnHigh([1,2,6,4,5]));


//// PRINT ONE, RETURN ANOTHER ////

function printOneReturnAnother(array) {
    var firstOdd;

    for (i in array) {
        if (array[i] % 2 == 1 && firstOdd == null) {
            firstOdd = array[i];
        }
    }

    console.log("Second to last value: " + array[array.length - 2]);
    return "First odd value: " + firstOdd;
}

console.log("\n//// Print one, return another ////\n");
console.log(printOneReturnAnother([2,3,4,5,6]));


//// DOUBLE VISION ////

function double(array) {
    var newArray = [];

    for (i in array) {
        newArray.push(array[i] * 2);
    }

    return newArray;
}

console.log("\n//// Double vision ////\n");
console.log("New Array: " + double([1,2,3]));


//// COUNT POSITIVES ////

function countPositives(array) {
    var numPositives = 0;

    for (i in array) {
        if (array[i] > 0) {
            numPositives++;
        }
    }

    array[array.length - 1] = numPositives;

    return array;
}

console.log("\n//// Count positives ////\n");
console.log("New Array: " + countPositives([-1, 1, 1, 1]));


//// EVENS AND ODDS ////

function evensOdds(array) {
    for (var i = 2; i < array.length; i++) {
        if (array[i] % 2 == 1 && 
            array[i-1] % 2 == 1 &&
            array[i-2] % 2 == 1) {
                console.log("That's odd!")
        }
        
        if (array[i] % 2 == 0 && 
            array[i-1] % 2 == 0 &&
            array[i-2] % 2 == 0) {
                console.log("Even more so!")
        }
    }
}

console.log("\n//// Evens and odds ////\n");
evensOdds([1,1,1,2,2,2]);


//// INCREMENT THE SECONDS ////

function incrementSeconds(arr) {
    for (i in arr) {
        if (arr[i] % 2 == 1) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log("\n//// Increment the seconds ////\n");
console.log(incrementSeconds([1,2,3,4,5]));

//// PREVIOUS LENGTHS //// 

function previousLengths(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    arr[0] = 0;

    return arr;
}

console.log("\n//// Previous lengths ////\n");
console.log(previousLengths(["hi", "hello", "hey"]));


//// ADD SEVEN TO MOST ////

function addSeven(arr) {
    var newArr = [];

    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }

    return newArr;
}

console.log("\n//// Add seven to most ////\n");
console.log(addSeven([1,2,3,4,5]));


//// REVERSE ARRAY ////

function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var tmp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
    }

    return arr;
}

console.log("\n//// Reverse array ////\n");
console.log(reverse([1,2,3,4,5]));


//// OUTLOOK: NEGATIVE ////

function makeNegative(arr) {
    var newArr = [];

    for (i in arr) {
        if (arr[i] > 0) {
            newArr.push(arr[i] * (-1));
        }
        else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log("\n//// Outlook: negative ////\n");
console.log(makeNegative([1, -3, 5]));


//// ALWAYS HUNGRY ////

function alwaysHungry(arr) {
    var count = 0;

    for (i in arr) {
        if (arr[i] == "food") {
            console.log("yummy");
            count++;
        }
    }

    if (count == 0) {
        console.log("I'm hungry");
    }
}

console.log("\n//// Always hungry ////\n");
alwaysHungry(["food", "food", 4]);
alwaysHungry([1,2,3,4]);


//// SWAP TOWARD THE CENTER ////

function swapCentered(arr) {
    for (var i = 0; i < arr.length / 2; i += 2) {
        var tmp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
    }

    return arr;
}

console.log("\n//// Swap toward the center ////\n");
console.log(swapCentered([1, 2, 3, 4, 5, 6]));


//// SCALE THE ARRAY ////

function scale(arr, num) {
    for (i in arr) {
        arr[i] = arr[i] * num;
    }

    return arr;
}

console.log("\n//// Scale the array ////\n");
console.log(scale([1, 2, 3, 4, 5], 2));