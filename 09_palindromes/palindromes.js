const palindromes = function (string) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    string = string.replace(regex, "");
    string = string.replace(/\s/g, "");
    const array = string.split("");
    const palindrome = array.reverse();
    let pString = palindrome.join("");
    let noPunctuation = pString.replace(regex, "");
    let final = noPunctuation.replace(/\s/g, "");
    if (final.toUpperCase() === string.toUpperCase())
    {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
