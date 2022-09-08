// given [4,2,1,3,5] => return [1,4,2,3,5]

function minToFront(arr) {
    var min;
    var index;

    for (var i = 0; i < arr.length; i++) {
        if (min == null) {
            min = arr[i];
            index = i;
        }
        else {
            if (arr[i] < min) {
                min = arr[i];
                index = i;
            }
        }
    }
    // iterate from min index to 0 index, switching values
    // to get min to front

    for (var i = index; i > 0; i--) {
        var tmp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = tmp;
    }

    return arr;
}

console.log(minToFront([4,2,1,3,5]));