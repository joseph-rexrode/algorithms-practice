//// SETTING AND SORTING ////

var myNumber = 42;
var myName = "Joseph";

function swap(number, name) {
    var temp = number;
    number = name;
    name = temp;

    return "Number: " + number + "\nName: " + name;
}
console.log("//// Setting and Sorting ////\n")
console.log(swap(myNumber, myName));


//// PRINT -52 TO 1066 ////

console.log("\n//// Print -52 to 1066 ////\n");

for (var i = -52; i < 1067; i++) {
    console.log(i);
}


//// DON'T WORRY, BE HAPPY ////

function beCheerful() {
    console.log("good morning!");
}

console.log("\n//// Don't worry, be happy ////\n");

for (var i = 0; i < 98; i++) {
    beCheerful();
}


//// MULTIPLES OF 3, BUT NOT ALL ////

console.log("\n//// Multiples of 3 but not all ////\n");

for (var i = -300; i < 0; i++) {
    if (i % 3 == 0) {
        if (i != -3 && i != -6) {
            console.log(i);
        }
    }
}


//// PRINTING INTEGERS WITH WHILE //// 

var whileNum = 2000;

console.log("\n//// PRINTING INTEGERS WITH WHILE ////\n")
while (whileNum < 5281) {
    console.log(whileNum);
    whileNum++;
}


//// YOU SAY IT'S YOUR BIRTHDAY ////

function isBirthday(monthOrDay, dayOrMonth) {
    console.log("\n//// You say it's your birthday ////\n");
    if ((monthOrDay == 1 && dayOrMonth == 9) || (monthOrDay == 9 && dayOrMonth == 1)) {
        console.log("How did you know?");
    }

    else {
        console.log("Just another day...");
    }
}

isBirthday(1, 9);


//// LEAP YEAR ////

function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return "It is a leap year";
            }
            else {
                return "It is not a leap year";
            }
        }
        else {
            return "It is a leap year";
        }
    }
    else {
        return "It is not a leap year";
    }
}

console.log("\n//// Leap Year ////\n");
console.log(leapYear(2000));


//// PRINT AND COUNT ////

console.log("\n//// Print and count ////\n");

var counter = 0;

for (var i = 512; i < 4096; i++) {
    if (i % 5 == 0) {
        console.log(i);
        counter++;
    }
}

console.log("counter: " + counter + " numbers divisible by 5");


//// MULTIPLES OF SIX ////

console.log("\n//// Multiples of six ////\n");
var sixMultiples = 0;

while (sixMultiples < 60001) {
    if (sixMultiples % 6 == 0) {
        console.log(sixMultiples);
    }
    sixMultiples++;
}


//// COUNTING THE DOJO WAY ////

console.log("\n//// Counting the dojo way ////\n");

function codingDojo(i) {
    if (i % 5 == 0) {
        if (i % 10 == 0) {
            return "Coding Dojo";
        }
        else {
            return "Coding";
        }
    }
    else {
        return i;
    }
}

for (var i = 1; i < 101; i++) {
    console.log(codingDojo(i));
}


//// WHAT DO YOU KNOW? ////

console.log("\n//// What do you know? ////\n");
function incoming(incoming) {
    console.log(incoming);
}

incoming("hello");


//// WHOA THAT SUCKER'S HUGE ////

function addInts(int1, int2) {
    if (int1 == (int2 * (-1))) {
        return 0;
    }

    else {
        var sum = 0;
        for (var i = int1; i < int2 + 1; i++) {
            if ((i * (-1)) % 2 != 0) {
                sum += i;
            }
        }
        return sum;
    }
}

console.log("\n//// Whoa that sucker's huge ////\n");
console.log(addInts(-300000, 300000));


//// COUNTDOWN BY FOURS //// 

var countdown = 2016;

console.log("\n//// Countdown by fours ////\n");

while (countdown > 0) {
    console.log(countdown);
    countdown -= 4;
}


//// FLEXIBLE COUNTDOWN //// 

function flexCountdown(lowNum, highNum, mult) {
    for (var i = highNum; i > lowNum - 1; i--) {
        if (i % mult == 0) {
            console.log(i);
        }
    }
}

console.log("\n//// Flexible countdown ////\n");
flexCountdown(1, 9, 3);


//// FINAL COUNTDOWN ////

function finalCountdown(param1, param2, param3, param4) {
    for (var i = param2; i < param3 + 1; i++) {
        if (i % param1 == 0 && i != param4) {
            console.log(i);
        }
    }
}

console.log("\n//// Final countdown ////\n");
finalCountdown(3, 5, 17, 9);