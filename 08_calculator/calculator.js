const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(array) {
  let sum = 0;
  if (array.length === 1)
  {
    sum = array[0];
  } else 
  {
    for (i = 0; i < array.length; i++)
    {
      sum += array[i];
    }
  }
  return sum;
};

const multiply = function(array) {
  let num = 1;
  for (i = 0; i < array.length; i++)
  {
    num = num * array[i];
  }
  return num;
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
	if (num === 0)
  {
    return 1;
  }
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
