const reverseString = function(toReverse) {
    let reversed = '';
    for (i = toReverse.length - 1; i >= 0; i--) {
        reversed += toReverse[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
