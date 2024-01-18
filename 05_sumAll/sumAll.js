const sumAll = function(start,finish) {
    let sum = 0;
    if (!Number.isInteger(start) || !Number.isInteger(finish)) return 'ERROR';
    if (start < 0 || finish < 0) return 'ERROR';
    if (start > finish) {
        temp = start;
        start = finish;
        finish = temp;
    }

    for (i = start; i <= finish; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
