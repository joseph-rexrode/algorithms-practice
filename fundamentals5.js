//// SIGMA //// 

function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log("\n//// Sigma ////\n");
console.log(sigma(10));


//// FACTORIAL ////

function factorial(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}

console.log("\n//// Factorial ////\n");
console.log(factorial(5));


//// STAR ART ////

function drawLeftStars(num) {
    var result = "";

    for (var i = 0; i < num; i++) {
        result += "*";
    }

    return result;
}

function drawRightStars(num) {
    var right = "";
    for (var i = 0; i < 75; i++) {
        if (i > (74 - num)) {
            right += "*";
        }
        else {
            right += " ";
        }
    }
    return right;
}

function drawCenteredStars(num) {
    var center = "";
    var nonStarsPerSide = (75 - num) / 2;
    var left = nonStarsPerSide;
    var right = nonStarsPerSide;

    if (nonStarsPerSide % 2 == 1) {
        left -= 0.5;
        right += 0.5;
    }

    for (var i = 0; i < 75; i++) {
        if (i < left || i > (74 - right)) {
            center += " ";
        }
        else {
            center += "*";
        }
    }
    return center;
}

console.log("\n//// Star Art ////\n");
console.log(drawLeftStars(30));
console.log(drawRightStars(30));
console.log(drawCenteredStars(55));


//// CHARACTER ART ////

function drawLeftChars(num, char) {
    var result = "";

    for (var i = 0; i < num; i++) {
        result += char;
    }

    return result;
}

function drawRightChars(num, char) {
    var right = "";
    for (var i = 0; i < 75; i++) {
        if (i > (74 - num)) {
            right += char;
        }
        else {
            right += " ";
        }
    }
    return right;
}

function drawCenteredChars(num, char) {
    var center = "";
    var nonStarsPerSide = (75 - num) / 2;
    var left = nonStarsPerSide;
    var right = nonStarsPerSide;

    if (nonStarsPerSide % 2 == 1) {
        left -= 0.5;
        right += 0.5;
    }

    for (var i = 0; i < 75; i++) {
        if (i < left || i > (74 - right)) {
            center += " ";
        }
        else {
            center += char;
        }
    }
    return center;
}

console.log("\n//// Character Art ////\n");
console.log(drawLeftChars(30, ">"));
console.log(drawRightChars(30, "<"));
console.log(drawCenteredChars(55, "="));