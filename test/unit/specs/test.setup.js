'use strict';

var Calculator = require('../../../app/scripts/calculator');

describe('Initial suite:', function () {
    it('Test to check if suite runs properly', function () {
        expect(true).toBe(true);
    });

    it('Test super linijka', function () {
        var testval = Calculator(3).add(5).mutiply(2).value();
        expect(testval).toBe(16);
    });
});
