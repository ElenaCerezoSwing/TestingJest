function sum(a, b) {
    return a + b;
}
module.exports = sum;


function fizzbuzz(number) {
    if (number % 15 === 0) {
        return 'fizzbuzz';
    } if (number % 5 === 0) {
        return 'buzz';
    } if (number % 3 === 0) {
        return 'fizz';
    } else {
        return number;
    }
}
module.exports = fizzbuzz;

