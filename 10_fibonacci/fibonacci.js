const fibonacci = function(num) {
    num = parseInt(num);
    let answer = 0;
    let first = 1;
    let second = answer + 1;
    if (num < 0)
    {
        return "OOPS";
    }
    if (num === 1 || num === 2)
    {
        return first;
    }
    for (i = 3; i <= num; i++)
    {
        answer = first + second;
        first = second;
        second = answer;
    }
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
