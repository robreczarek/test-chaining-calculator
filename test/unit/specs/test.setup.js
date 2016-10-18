'use strict';

var Calculator = require('../../../app/scripts/calculator').Calculator;

describe('Initial suite:', function () {
    it('Test to check if suite runs properly', function () {
        expect(true).toBe(true);
    });

    it('Test super linijka', function () {
        var result = new Calculator(3).add(5).multiply(2).value();
        expect(result).toBe(16);
    });
});
