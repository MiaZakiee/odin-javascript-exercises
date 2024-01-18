const repeatString = function(givenString,numOfTimes) {
    if (numOfTimes < 0) {
        return 'ERROR';
    }
    let returnString = '';
    for (i = 0; i < numOfTimes;i++) {
        returnString += givenString;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
