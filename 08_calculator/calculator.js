const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if (num == 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
