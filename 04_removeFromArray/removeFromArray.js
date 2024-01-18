const removeFromArray = function(numArr, ...target) {
    const returnArr = [];

    numArr.forEach((element) => {
        if (!target.includes(element)) {
            returnArr.push(element);
        }
    });

    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
