const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        let str = expr.slice(i, i + 10);
        str === '**********' ? arr.push(' ') : arr.push(convertInDots(str.slice(str.indexOf('1'))));
    }
    
    const answerArr = [];
    arr.forEach(item => answerArr.push(convertDotInLetter(item)));
/*     console.log(answerArr); */
    return answerArr.join('');


}

function convertDotInLetter(string) {
    for(let key in MORSE_TABLE) {
        if( key === string) return MORSE_TABLE[key];
    }
    return ' ';
}


function convertInDots(str) {
    let answer = '';
    for (let i = 0; i < str.length; i = i + 2) {
        str.slice(i, i + 2) === "11" ? answer = answer + '-' : answer = answer + '.';
    }
    return answer;
}

module.exports = {
    decode
}