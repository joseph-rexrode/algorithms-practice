//// THREES AND FIVES ////

function threesFives() {
    var sum = 0;
    for (var i = 100; i < 4000001; i++) {
        if ((i % 3 == 0 && i % 5 != 0) || (i % 5 == 0 && i % 3 != 0))  {
            sum += i;
        }
    }
    return sum;
}

console.log("\n//// Threes and fives ////\n");
console.log(threesFives());

function betterThreesFives(start, end) {
    var sum = 0;
    for (var i = start; i < end + 1; i++) {
        if ((i % 3 == 0 && i % 5 != 0) || (i % 5 == 0 && i % 3 != 0)) {
            sum += i;
        }
    }
    return sum;
}

console.log("\n//// Better threes and fives ////\n");
console.log(betterThreesFives(10, 50));


//// GENERATE COIN CHANGE ////

function generateCoinChange(cents) {
    var dollarCoins = 0;
    var halfDollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    total = cents;

    if (cents >= 100) {
        dollarCoins = (cents - (cents % 100)) / 100;
        cents = cents % 100;
    }
    if (cents >= 50) {
        halfDollars = (cents - (cents % 50)) / 50;
        cents = cents % 50;
    }
    if (cents >= 25) {
        quarters = (cents - (cents % 25)) / 25;
        cents = cents % 25;
    }
    if (cents >= 10) {
        dimes = (cents - (cents % 10)) / 10;
        cents = cents % 10;
    }
    if (cents >= 5) {
        nickels = (cents - (cents % 5)) / 5;
        cents = cents % 5;
    }
    pennies = cents;

    console.log(total + " cents can be represented by:" + 
                "\nDollar Coins: " + dollarCoins +
                "\nHalf Dollars: " + halfDollars +
                "\nQuarters: " + quarters + 
                "\nDimes: " + dimes + 
                "\nNickels: " + nickels +
                "\nPennies: " + pennies);
}

console.log("\n//// Generate Coin Change ////\n");
generateCoinChange(169);


//// MESSY MATH MASHUP ////

function messyMath(num) {
    let sum = 0;

    for (var i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            continue;
        }
        if (i % 7 == 0) {
            sum += (i * 2);
        }
        else {
            sum += i;
        }

        if (i * 3 == num) {
            return -1;
        }
    }
    return sum;
}

console.log("\n//// Messy math mashup ////\n");
console.log(messyMath(8));


//// TWELVE BAR BLUES ////

function twelveBar() {
    for (var i = 1; i <= 12; i++) {
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}

console.log("\n//// Twelve bar blues ////\n");
twelveBar();


//// FIBONACCI ////

function fibonacci(num) {
    if (num == 0 || num == 1) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log("\n//// Fibonacci ////\n");
console.log(fibonacci(10));


//// SUM TO ONE DIGIT ////

function sumToOne(num) {
    var stringNum = num.toString();
    while (stringNum.length > 1) {
        var sum = 0;
        for (var i = 0; i < stringNum.length; i++) {
            sum += parseInt(stringNum[i]);
        }
        num = sum;
        stringNum = num.toString();
    }

    return num;
}

console.log(sumToOne(928));


//// CLOCK HAND ANGLES ////

// keeps angles under 360 degrees
function stayInCircle(angle) {
    while (angle >= 360) {
        angle -= 360;
    }
    return angle;
}

function clockHandAngles(seconds) {
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var weeks = (hours / 24) / 7;

    let weekHand = (weeks * 360);
    let hourHand = (hours * 360) / 12;
    let minuteHand = (minutes * 360) / 60;
    let secondHand = (seconds * 360) / 60;

    console.log("Week hand: " + stayInCircle(weekHand) + 
                " degs. Hour hand: " + stayInCircle(hourHand) + 
                " degs. Minute hand: " + stayInCircle(minuteHand) +
                " degs. Second hand: " + stayInCircle(secondHand) + " degs.");
}

console.log("\n//// Clock hand angles ////\n");
clockHandAngles(3600);
clockHandAngles(119730);


//// IS PRIME ////

function isPrime(number) {
    var testNumber = 2;

    while (testNumber < number) {
        if (number % testNumber == 0) {
            return false;
        }
        else {
            testNumber++;
        }
    }
    return true;
}

console.log("\n//// Is Prime ////\n");
console.log(isPrime(7)); // should be true
console.log(isPrime(15)); // should be false
console.log(isPrime(1220)); // should be false