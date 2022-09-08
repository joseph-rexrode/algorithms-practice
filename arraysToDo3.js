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


