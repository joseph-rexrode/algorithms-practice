//// ROCKIN THE DOJO SWEATSHIRT ////

function sweatshirtPricing(num) {
    var price;
    if (num <= 0 || parseInt(num) == NaN) {
        return "Not a valid number of sweatshirts!";
    }

    if (num == 1) {
        price = 20;
    }

    if (num == 2) {
        price = Math.ceil((20 * 2) * 0.91);
    }

    if (num == 3) {
        price = Math.ceil((20 * 3) * 0.81);
    }

    if (num >= 4) {
        price = Math.ceil((20 * num) * 0.65);
    }

    return price;
}

console.log("\n//// Rockin the dojo sweatshirt ////\n");
console.log(sweatshirtPricing(2));
console.log(sweatshirtPricing(3));
console.log(sweatshirtPricing(4));


//// CLOCK HAND ANGLES, REVISITED ////

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

    let weekHand = Math.round(weeks * 360);
    let hourHand = Math.round((hours * 360) / 12);
    let minuteHand = Math.round((minutes * 360) / 60);
    let secondHand = Math.round((seconds * 360) / 60);

    console.log("Week hand: " + stayInCircle(weekHand) + 
                " degs. Hour hand: " + stayInCircle(hourHand) + 
                " degs. Minute hand: " + stayInCircle(minuteHand) +
                " degs. Second hand: " + stayInCircle(secondHand) + " degs.");
}

console.log("\n//// Clock hand angles, revisited ////\n");
clockHandAngles(3600);
clockHandAngles(119730);
clockHandAngles(12345.6)