var sum = require('./sum');

test('adds 1 + 2 to equal 3', function () {
    expect(sum(1, 2)).toBe(3);
});

describe('sum', function () {
    test('could add both numbers, positive and negative ones', function () {
        expect(sum(1, -3)).toBe(-2);
        expect(sum(-1, -3)).toBe(-4);
        expect(sum(-1, 3)).toBe(2);
        expect(sum(-1, 1)).toBe(0);
    });
    test('it adds decimal numbers', function () {
        expect(sum(1, 0.1)).toBe(1.1);
        expect(sum(1.1, 0.1)).toBe(1.2);
        expect(sum(1.10, 0.1)).toBe(1.1);
        expect(sum(1.1, 0.12)).toBe(1.22);

    });
    test('it adds decimal numbers and integer numbers', function () {
        expect(sum(1, -0.1)).toBe(0.9);
        expect(sum(-1.1, -0.1)).toBe(-1.2);
        expect(sum(-1.10, 0.1)).toBe(-1.0);
        expect(sum(1.1, -0.12)).toBe(0.98);
        expect(sum(1.1, -1.1)).toBe(0.0);

    });
});

