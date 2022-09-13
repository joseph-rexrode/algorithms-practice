//// REVERSE ////

function reverseString(str) {
    var arr = str.split("");

    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        var tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }

    str = arr.join("");
    return str;
}

console.log(reverseString("abcdefg"));


//// REMOVE EVEN LENGTH STRINGS ////

function removeEvenLengths(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (i == j) {
                continue;
            }
            if (arr[i].length == arr[j].length) {
                count++;
                // remove arr[j]
                arr[j] = arr[arr.length - 1];
                arr.length--;
                for (var k = j; k < arr.length - 1; k++) {
                    var tmp = arr[k];
                    arr[k] = arr[k + 1];
                    arr[k + 1] = tmp;
                }
                j--;
            }
        }
        if (count > 0) {
            // remove arr[i]
            arr[i] = arr[arr.length - 1];
            arr.length--;
            for (var x = i; x < arr.length - 1; x++) {
                var tmp = arr[x];
                arr[x] = arr[x + 1];
                arr[x + 1] = tmp;
            }
            i--;
        }
    }
    return arr;
}

console.log(removeEvenLengths(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]));
console.log(removeEvenLengths(["hi", "this", "is", "a", "test"]));

