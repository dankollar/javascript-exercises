const sumAll = function(start, end) {
    let sum = 0;
    let newStart = 0;
    let newEnd = 0;
    if (start < 0 || end < 0)
    {
        return "ERROR";
    }
    if (Number.isFinite(start) === false || Number.isFinite(end) === false)
    {
        return "ERROR";
    }
    if (start > end)
    {
        newStart = end;
        newEnd = start;
    } else 
    {
        newStart = start;
        newEnd = end;
    }
    for (newStart; newStart <= newEnd; newStart++)
    {
        sum += newStart;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
