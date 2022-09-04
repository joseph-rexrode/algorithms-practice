//// REMOVE BLANKS ////

function removeBlanks(str) {
    var noBlanks = "";

    for (character in str) {
        if (str[character] != " ") {
            noBlanks += str[character];
        }
    }

    return noBlanks;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("Hi how are you"));


//// Get Digits ////

function getDigits(str) {
    var digits = "";
    for (c in str) {
        if (!isNaN(str[c])) {
            digits += str[c];
        }
    }
    return digits;
}

console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));


//// ACRONYMS ////

function acronyms(str) {
    var words = str.split(' ');
    var acronym = "";

    for (w in words) {
        if(words[w] == "") {
            continue;
        }
        if (!words[w][0].match(/[a-zA-Z]/i)) {
            acronym += words[w][0];
        }
        else {
            acronym += words[w][0].toUpperCase();
        }
    }

    return acronym;
}

console.log(acronyms("Hi how are you"));
console.log(acronyms(" there's no free lunch - gotta pay yer way. "));


//// COUNT NON-SPACES ////

function countNonSpaces(str) {
    count = 0;

    for (c in str) {
        if (str[c] != " ") {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("Hi how are you"));
console.log(countNonSpaces("Honey pie, you are driving me crazy"));


//// REMOVE SHORTER STRINGS ////

function removeShorter(arr, num) {
    var longEnough = [];

    for (str in arr) {
        if (arr[str].length >= num) {
            longEnough.push(arr[str]);
        }
    }

    return longEnough;
}

console.log(removeShorter(["Hi", "how", "are", "you"], 3));
console.log(removeShorter(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));