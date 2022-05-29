const removeFromArray = function(array, ...args) {
    const checkInts = Array.from(args);
    const inputArray = array;
    let newArray = inputArray.filter(remove => !checkInts.includes(remove));
    return newArray;
};


removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
