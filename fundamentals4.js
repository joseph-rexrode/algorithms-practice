//// ONLY KEEP THE LAST FEW ////

function onlyLastFew(arr, X) {
    var size = arr.length - X;
    arr.splice(0, size);

    return arr;
}

console.log("\n//// Only last few ////\n");
console.log(onlyLastFew([1,2,3,4,5,6,7], 3));


//// MATH HELP ////

function getXIntercept(M, B) {
    // y = mx + b
    var x = ((-1) * B) / M;
    return x;
}

console.log("\n//// Math help ////\n");
console.log(getXIntercept(-2, 2));


//// POOR KENNY ////

function whatHappensToday() {
    eventNumber = Math.random() * 100;

    if (eventNumber <= 10) {
        return "volcano";
    }
    else if (eventNumber <= 25) {
        return "tsunami";
    }
    else if (eventNumber <= 45) {
        return "earthquake";
    }
    else if (eventNumber <= 70) {
        return "blizzard";
    }
    else {
        return "meteor";
    }
}

console.log("\n//// Poor Kenny ////\n");
console.log(whatHappensToday());


//// WHAT REALLY HAPPENED ////

function probability(n) {
    return Math.random() < n;
}

var whatHappens = [];

function whatReallyHappensToday() {
    if (probability(0.1)) {
        whatHappens.push("volcano");
    }

    if (probability(0.15)) {
        whatHappens.push("tsunami");
    }

    if (probability(0.2)) {
        whatHappens.push("earthquake");
    }

    if (probability(0.25)) {
        whatHappens.push("blizzard");
    }

    if (probability(0.3)) {
        whatHappens.push("meteor");
    }

    if (whatHappens.length > 0) {
        return whatHappens;
    }

    else {
        return "Nothing happens today!";
    }
}

console.log("\n//// What really happens today ////\n");
console.log(whatReallyHappensToday());


//// SOARING IQ ////

function soaringIq(iq, days) {
    for (var i = 1; i <= days; i++) {
        iq += (i / 100);
    }
    return iq;
}

console.log("\n//// Soaring IQ ////\n");
console.log(soaringIq(101, 98));


//// LETTER GRADE ////

function letterGrade(score) {
    var letter;
    console.log("Score: " + score);

    if (score >= 90) {
        letter = "A";
        if (score < 93) {
            letter += "-";
        }
    }
    else if (score >= 80) {
        letter = "B";
        if (score < 83) {
            letter += "-";
        }
        else if (score > 87) {
            letter += "+";
        }
    }
    else if (score >= 70) {
        letter = "C";
        if (score < 73) {
            letter += "-";
        }
        else if (score > 77) {
            letter += "+";
        }
    }
    else if (score >= 60) {
        letter = "D";
        if (score < 63) {
            letter += "-";
        }
        else if (score > 67) {
            letter += "+";
        }
    }
    else {
        letter = "F";
    }

    return letter;
}

console.log("\n//// Letter grade ////\n");
console.log("Grade: " + letterGrade(69));