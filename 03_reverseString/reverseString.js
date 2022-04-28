const reverseString = function(string) {
    let stringArray = string.split('');
    stringArray.reverse();
    return stringArray.join('');
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
