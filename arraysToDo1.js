//// PUSH FRONT ////

function pushFront(array, num) {
    var arr = [];
    
    for (var i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i];
    }

    array[0] = num;

    return array;
}

console.log(pushFront([1,2,3,4,5,6], 7));


//// POP FRONT //// 

function popFront(array) {

    // this whole function can pretty much be accomplished using array.shift
    // but I wanted to try and see how to do it without that method

    var front = array[0];

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }

    array.splice(array.length - 1, 1);
    console.log(array);

    return front;
}

console.log(popFront([1,2,3,4]));


//// INSERT AT ////

function insertAt(array, index, num) {
    for (var i = array.length - 1; i >= index; i--) {
        array[i + 1] = array[i];
    }

    array[index] = num;

    return array;
}

console.log(insertAt([1,2,3,4], 2, 7));


//// REMOVE AT ////

function removeAt(array, index) {
    var removed = array[index];

    for (var i = index; i < array.length; i++) {
        array[i] = array[i + 1];
    }

    array.splice(array.length - 1, 1);
    console.log(array);

    return removed;
}

console.log(removeAt([1,2,3,4,5], 3));


//// SWAP PAIRS ////

function swapPairs(arr) {
    if (arr.length % 2 == 1) {
        for (var i = 0; i < arr.length - 1; i = i + 2) {
            var tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
        }
    }
    else {
        for (var i = 0; i < arr.length; i = i + 2) {
            var tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
        }
    }

    return arr;
}

console.log(swapPairs([1,2,3,4,5,6]));
console.log(swapPairs([1,2,3,4,5]));


//// REMOVE DUPLICATES ////

function removeDupes(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            removeAt(arr, i + 1);
            i--;
        }
    }
    return arr;
}

console.log(removeDupes([1,1,1,1,2,2,3,4,5,5]));