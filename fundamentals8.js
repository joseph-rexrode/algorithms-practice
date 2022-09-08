//// GAMING FUN(DAMENTALS) ////

    // 1 //

    console.log("\n//// Gaming fun(damentals) ////\n");

    function rollOne() {
        var roll = Math.trunc(Math.random() * 6) + 1;
        return roll;
    }

    console.log("Roll One: " + rollOne());
    console.log("----------");

    // 2 // 

    function playFives(num) {
        for (var i = 0; i < num; i++) {
            var newRoll = rollOne();
            if (newRoll == 5) {
                console.log("Roll " + (i + 1) + ": " + newRoll + "... That's good luck!");
            }
            else {
                console.log("Roll " + (i + 1) + ": " + newRoll);
            }
        }
    }

    playFives(5);

    // 3 //

    function playStatistics() {
        var lowest;
        var highest;
        for (var i = 0; i < 8; i++) {
            var newRoll = rollOne();
            if (i == 0) {
                lowest = newRoll;
                highest = newRoll;
            }
            else {
                if (newRoll < lowest) {
                    lowest = newRoll;
                }
                if (newRoll > highest) {
                    highest = newRoll;
                }
            }
        }
        console.log("Highest value rolled: " + highest + 
                    "\nLowest value rolled: " + lowest);
    }

    console.log("----------");
    playStatistics();

    // 4 //

    function playStatistics2() {
        var lowest;
        var highest;
        var sum = 0;
        for (var i = 0; i < 8; i++) {
            var newRoll = rollOne();
            if (i == 0) {
                lowest = newRoll;
                highest = newRoll;
            }
            else {
                if (newRoll < lowest) {
                    lowest = newRoll;
                }
                if (newRoll > highest) {
                    highest = newRoll;
                }
            }
            sum += newRoll;
        }
        console.log("Highest value rolled: " + highest + 
                    "\nLowest value rolled: " + lowest + 
                    "\nSum of all rolls: " + sum);
    }

    console.log("----------");
    playStatistics2();

    // 5 //

    function playStatistics3(num) {
        var lowest;
        var highest;
        var sum = 0;
        for (var i = 0; i < num; i++) {
            var newRoll = rollOne();
            if (i == 0) {
                lowest = newRoll;
                highest = newRoll;
            }
            else {
                if (newRoll < lowest) {
                    lowest = newRoll;
                }
                if (newRoll > highest) {
                    highest = newRoll;
                }
            }
            sum += newRoll;
        }
        console.log("Highest value rolled: " + highest + 
                    "\nLowest value rolled: " + lowest + 
                    "\nSum of all rolls: " + sum);
    }

    console.log("----------");
    playStatistics3(7);

    // 6 //

    function playStatistics4(num) {
        var lowest;
        var highest;
        var sum = 0;
        for (var i = 0; i < num; i++) {
            var newRoll = rollOne();
            if (i == 0) {
                lowest = newRoll;
                highest = newRoll;
            }
            else {
                if (newRoll < lowest) {
                    lowest = newRoll;
                }
                if (newRoll > highest) {
                    highest = newRoll;
                }
            }
            sum += newRoll;
        }
        console.log("Highest value rolled: " + highest + 
                    "\nLowest value rolled: " + lowest + 
                    "\nAverage of all rolls: " + (sum / num));
    }

    console.log("----------");
    playStatistics4(7);


//// STATISTICS UNTIL DOUBLES ////

function rollDie() {
    var roll = Math.trunc(Math.random() * 20) + 1;
    return roll;
}

function statsUntilDoubles() {
    var rolls = 0, sum = 0, min, max, roll1, roll2;
    
    let firstRoll = rollDie();
    roll1 = firstRoll;
    rolls++;
    sum += firstRoll;
    min = firstRoll;
    max = firstRoll;

    while (roll1 != roll2) {
        roll2 = roll1;
        roll1 = rollDie();
        sum += roll1;
        rolls++;
        if (roll1 < min) {
            min = roll1;
        }
        if (roll1 > max) {
            max = roll1;
        }
    }
    console.log("Rolls: " + rolls + 
                "\nMin: " + min +
                "\nMax: " + max +
                "\nAverage: " + (sum / rolls));
}

console.log("\n//// Statistics until doubles ////\n");
statsUntilDoubles();


//// CLAIRE IS WHERE? ////

const claire = new Map();

function reset() {
    claire.set("x", 0);
    claire.set("y", 0); 
}

function moveBy(xOffset, yOffset) {
    claire.set("x", claire.get("x") + xOffset);
    claire.set("y", claire.get("y") + yOffset);
}

function xLocation() {
    return claire.get("x");
}

function yLocation() {
    return claire.get("y");
}

function distFromHome() {
    var distance;
    let squaredDistance = Math.pow(claire.get("x"), 2) + Math.pow(claire.get("y"), 2);

    distance = Math.pow(squaredDistance, 0.5);
    return distance;
}

reset();
moveBy(0, -2);
moveBy(3, 6);

console.log("\n//// Claire is where? ////\n");
console.log("X-location: " + xLocation());
console.log("Y-location: " + yLocation());
console.log("Distance from home: " + distFromHome());


//// DATE, ON A DESERTED ISLAND ////

    // 1 // 

    function weekdayName(weekdayNum) {
        switch (weekdayNum) {
            case 1:
                return "Sunday";
            case 2:
                return "Monday";
            case 3:
                return "Tuesday";
            case 4:
                return "Wednesday";
            case 5:
                return "Thursday";
            case 6:
                return "Friday";
            case 7:
                return "Saturday";
            default:
                break;
        }
    }

    console.log("\n//// Date, on a deserted island ////\n");
    console.log(weekdayName(3));
    console.log("----------");

    // 2 //

    function weekdayName2(dayNum) {
        while (dayNum > 7) {
            dayNum -= 7;
        }
        return weekdayName(dayNum);
    }

    console.log(weekdayName2(315));
    console.log("----------");

    // 3 //

    function someDays() {
        for (var i = 0; i < 17; i++) {
            var randomDay = Math.floor(Math.random() * 365) + 1;
            if (weekdayName2(randomDay) == "Saturday" || weekdayName2(randomDay) == "Sunday") {
                console.log(weekdayName2(randomDay) + " - Enjoy your day off!");
            }
            else {
                console.log(weekdayName2(randomDay) + " - Work hard!");
            }
        }
    }

    someDays();
    console.log("----------");

    // 4 //

    function monthName(monthNum) {
        var months = ["January", "February", "March",
                        "April", "May", "June", "July",
                        "August", "September", "October",
                        "November", "December"];
        
        return months[monthNum - 1];
    }

    console.log(monthName(3));
    console.log("----------");

    // 5 //

    function monthToDays(monthNum) {
        var month = monthName(monthNum);
        switch (month) {
            case "April":
            case "June":
            case "September":
            case "November":
                return 30;
            case "February":
                return 28;
            default:
                return 31;
        }
    }

    console.log(monthToDays(4));
    console.log("----------");

    // 6 //

    function dayToMonth(dayNum) {
        if (dayNum > 365 || dayNum < 1) {
            return "Invalid day, try a number between 1 and 365";
        }

        var totalDays = 0;
        var month = 0;
        while (totalDays < dayNum) {
            month++;
            totalDays += monthToDays(month);
        }

        return month;
    }

    console.log(monthName(dayToMonth(75)));
    console.log("----------");

    // 7 //

    function fullDate(dayNum) {
        var month = dayToMonth(dayNum);
        var dayOfMonth = dayNum;
        var dayOfWeek = weekdayName2(dayNum);
        for (var i = month - 1; i > 0; i--) {
            dayOfMonth -= monthToDays(i);
        }

        return dayOfWeek + ", " + monthName(month) + " " + dayOfMonth + ", 2017";
    }

    console.log(fullDate(142));
    console.log("----------");

    // 8 //

    
