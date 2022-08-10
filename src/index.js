//Option #1

module.exports = reverse = (n) => +(Math.abs(n).toString().split('').reverse().join(''));

/* {
    let abs = Math.abs(n);
    let string = abs.toString();
    let arr = string.split('');
    let reverse = arr.reverse();
    let total = +reverse.join('');
    return total;
} */

//Option #2

/* module.exports = reverse = (n) => {
    let numb = Math.abs(n);
    let string = numb.toString();
    let result = '';
    for (i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return +result
} */