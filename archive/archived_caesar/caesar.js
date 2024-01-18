const caesar = function(word,key) {
    let result = '';
    let temp;

    for (let i = 0; i < word.length; i++) {
        if (/[a-zA-Z]/.test(word[i])) {
            let asciiChar = word[i].charCodeAt(0);
            let isUpperCase = asciiChar >= 65 && asciiChar <= 90;
            let isLowerCase = asciiChar >= 97 && asciiChar <= 122;

            if (isUpperCase || isLowerCase) {
                let shiftedasciiChar = asciiChar + key;

                if (isUpperCase && shiftedasciiChar > 90) {
                    shiftedasciiChar = ((shiftedasciiChar - 65 + key) % 26) + 65;
                }
                else if (isLowerCase && shiftedasciiChar > 122) {
                    shiftedasciiChar = ((shiftedasciiChar - 97 + key) % 26) + 97;
                }
                
                result += String.fromCharCode(shiftedasciiChar);
            }
            
            result += String.fromCharCode(temp);
        } else {
            // If it's not a letter, keep it unchanged
            result += word[i] + ' ';
        }
    }

    return result;
};

console.log(caesar("Hello, World!",0));
// !', 75)).toBe('Ebiil, Tloia!');

// Do not edit below this line
module.exports = caesar;
