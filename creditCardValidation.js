function isCreditCardValid(digitArr) {
    // set aside last digit
    var lastDigit = digitArr[digitArr.length - 1];
    digitArr.length--;

    // multiply numbers in odd positions by 2, starting at end
    for (var i = digitArr.length - 1; i > 0; i -= 2) {
        digitArr[i] = digitArr[i] * 2;
        if (digitArr[i] > 9) {
            digitArr[i] -= 9;
        }
    }

    digitArr.push(lastDigit);
    var sum = 0;
    for (var j = 0; j < digitArr.length; j++) {
        sum += digitArr[j];
    }

    if (sum % 10 == 0) {
        return true;
    }

    return false;
}

console.log(isCreditCardValid([5,2,2,8,2]));