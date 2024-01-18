const fibonacci = function(num) {
    // converts possible strings to int
    num = parseInt(num);
    // checks if negative
    if (num < 0) return 'OOPS';
    // returns fibonacci sequence
    if (num < 2) return num;
    else return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
