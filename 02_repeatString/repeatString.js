const repeatString = function(string, int) {
    let stringArray = [];
    if  (int < 0){
        return "ERROR";
    }
    for (i = 1; i <= int; i++){
        stringArray.push(string);
    }
    return stringArray.join('');
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
