const ftoc = function(temp) {
  let celcius = (temp -32) * 5/9;
  celcius = round(celcius,1);
  return celcius;
};

const ctof = function(temp) {
  let fehrenheit = (temp * 9/5) + 32;
  fehrenheit = round(fehrenheit, 1);
  return fehrenheit;
};

function round(value, precision)
{
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
