var sum = require('./index.js');
var fizzbuzz = require('./index.js');


// test('adds 1 + 2 to equal 3', function () {
//     expect(sum(1, 2)).toBe(3);
// });

// describe('sum', function () {
//     test('could add both numbers, positive and negative ones', function () {
//         expect(sum(1, -3)).toBe(-2);
//         expect(sum(-1, -3)).toBe(-4);
//         expect(sum(-1, 3)).toBe(2);
//         expect(sum(-1, 1)).toBe(0);
//     });
//     test('it adds decimal numbers', function () {
//         expect(sum(1, 0.1)).toBe(1.1);
//         // expect(sum(1.1, 0.1)).toBe(1.2);
//         // expect(sum(1.10, 0.1)).toBe(1.1);
//         // expect(sum(1.1, 0.12)).toBe(1.22);

//     });
//     test('it adds decimal numbers and integer numbers', function () {
//         expect(sum(1, -0.1)).toBe(0.9);
//         // expect(sum(-1.1, -0.1)).not.toBe(-1.2);
//         expect(sum(-1.10, 0.1)).toBe(-1.0);
//         // expect(sum(1.1, -0.12)).not.toBe(0.98);
//         expect(sum(1.1, -1.1)).toBe(0.0);

//     });
// });


describe('Fizzbuzz', () => {
    test('if it is 3 returns fizz', () => {
        const number = 3;

        const result = fizzbuzz(number);

        expect(result).toBe('fizz');
    });
    test('if it is 5 return buzz', () => {
        const number = 5;

        const result = fizzbuzz(number);

        expect(result).toBe('buzz');
    });
    test('if it is 15 return fizzbuzz', () => {
        const number = 15;

        const result = fizzbuzz(number);

        expect(result).toBe('fizzbuzz');
    });
    test('if it is 1 return 1', () => {
        const number = 1;

        const result = fizzbuzz(number);

        expect(result).toBe(1);
    });
});



