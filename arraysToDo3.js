//// REMOVE NEGATIVES ////

function removeNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = arr[arr.length - 1];
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

console.log(removeNegatives([1,2,3,-4,-5,6]));
console.log(removeNegatives([-1,-2]));
console.log(removeNegatives([-1,2,-3,4,-5,6]));


//// SECOND TO LAST ////

function secondToLast(arr) {
    if (arr.length <= 1) {
        return null;
    }
    
    return arr[arr.length - 2];
}

console.log(secondToLast([1,2,3,4]));
console.log(secondToLast([1]));
console.log(secondToLast(['a', 'b']));


//// SECOND LARGEST ////

function secondLargest(arr) {
    if (arr.length <= 1) {
        return null;
    }

    var largest = arr[0];
    var nextLargest;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            nextLargest = largest;
            largest = arr[i];
        }
        else {
            if (arr[i] > nextLargest || nextLargest == null) {
                nextLargest = arr[i];
            }
        }
    }
    return nextLargest;
}

console.log(secondLargest([1,2,3,4,5]));
console.log(secondLargest([-2, 6, 19, 12, 13]));
console.log(secondLargest([1]));


//// NTH-TO-LAST ////

function nthToLast(arr, n) {
    if (arr.length - n < 0) {
        return null;
    }

    return arr[arr.length - n];
}

console.log(nthToLast([5,2,3,6,4,9,7], 3));


//// NTH-LARGEST ////

function nthLargest(arr, n) {
    if (arr.length - n < 0) {
        return null;
    }

    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (i == j) {
                continue;
            }
            if (arr[i] >= arr[j]) {
                count++;
            }
        }
        if (count == arr.length - n) {
            return arr[i];
        }
    }

    return null;
}

console.log(nthLargest([1,2,3,4,5], 4));


