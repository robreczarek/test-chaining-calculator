'use strict';

var Calculator = require('../../../app/scripts/calculator').Calculator;

describe('Initial suite:', function () {
    it('Test super linijka', function () {

        var result = Calculator(3).add(5).multiply(2).value();
        expect(result).toBe(16);
    });
});
