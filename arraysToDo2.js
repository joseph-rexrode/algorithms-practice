//// REVERSE ////

function reverse(arr) {
    for (var i = 0; i < arr.length; i++) {
        // accounts for even length arrays
        if (arr.length % 2 == 0) {
            if (i == (arr.length / 2)) {
                break;
            }
        }
        // accounts for odd length arrays
        else {
            if (i == (arr.length - 1 - i)) {
                break;
            }
        }
        var tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
    return arr;
}

console.log(reverse([1,2,3,4,5]));
console.log(reverse([1,3,4,5,8,9]));


//// ROTATE ////

function rotateArr(arr, shiftBy) {
    // whatever the remainder is of shiftBy % arraySize is where
    // that array position will end up in the array

    // SO, if shiftBy % array size is 0, then the array will be the same
    // if it's 1, it will be shifted by one position, and so forth

    // minimizes memory usage
    var arrayShift = Math.abs(shiftBy % arr.length);

    for (var i = 0; i < arrayShift; i++) {
        if (shiftBy > 0) {
            for (var j = 1; j < arr.length; j++) {
                var tmp = arr[0];
                arr[0] = arr[j];
                arr[j] = tmp;
            }
        }
        // handles negative shift
        else {
            for (var j = arr.length - 2; j >= 0; j--) {
                var tmp = arr[arr.length - 1];
                arr[arr.length - 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

console.log(rotateArr([1,2,3], 1));
console.log(rotateArr([1,2,3,4,5,6,7,8], 7));
console.log(rotateArr([1,2,3], -1));
console.log(rotateArr([1,2,3,4,5], 1000001));


//// FILTER RANGE //// 

function filterRange(arr, min, max) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            arr[i] = arr[arr.length-1];
            arr.length--;

            for (var j = i; j < arr.length - 1; j++) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            i--;
        }
    }
    return arr;
}

console.log(filterRange([1,2,3,4,5], 3, 4));
console.log(filterRange([1,1,1,1,1,3,4,5,6,7,10,12,13], 2, 9));


//// CONCAT ////

function concat(arr1, arr2) {
    var newArr = arr1;

    for (var i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }

    return newArr;
}

console.log(concat(['a', 'b'], [1, 2]));