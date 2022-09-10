//// SHUFFLE ////

function getRandIndex(length) {
    var index = Math.floor((Math.random())*length);
    return index;
}

function shuffle(arr) {
    for (var i = 0; i < arr.length; i++) {
        var indexToShuffleWith = getRandIndex(arr.length);

        // prevents index from swapping with itself
        while (indexToShuffleWith == i) {
            indexToShuffleWith = getRandIndex(arr.length);
        }

        var tmp = arr[i];
        arr[i] = arr[indexToShuffleWith];
        arr[indexToShuffleWith] = tmp;
    }
    return arr;
}

console.log(shuffle([1,2,3,4,5]));


//// REMOVE RANGE ////

function removeRange(arr, start, end) {
    var amountToRemove = end - start;
    if (start > arr.length - 1 || end > arr.length - 1 || start < 0 || end < 0) {
        return "Invalid parameters"
    }

    for (var i = 0; i <= amountToRemove; i++) {
        arr[start] = arr[arr.length - 1];
        arr.length--;

        for (var j = start; j < arr.length - 1; j++) {
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }

    return arr;
}

console.log(removeRange([1,2,3,4,5], 1, 3));
console.log(removeRange([-1,0,1,2,3], -1, 3));
console.log(removeRange([1,2,3,4,5,6,7,8], 8, 10));


//// INTERMEDIATE SUMS ////

