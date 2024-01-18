const palindromes = function (word) {
    // let punctuations = [' ',',','.','?','!'];
    let reversedFilteredWord = word.toLowerCase().replace(/[^a-z0-9]/g,'');
    return reversedFilteredWord.split("").reverse().join("") == reversedFilteredWord;
};

// console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
