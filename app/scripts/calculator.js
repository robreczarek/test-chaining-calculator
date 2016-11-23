var Calc = (function (root) {
    'use strict';

    /**
     * @param {number} [val=0]
     * @constructor
     */
    function Calculator(initialValue) {

        if (this instanceof Calculator) {
            throw new Error('bad invocation');
        }

        var initValue = Number(initialValue) || 0;
        var debug = false;
        var numbers = [];
        var operator = '';
        var total = initValue;

        var value = function () {
            return total;
        };

        var add = function (val) {
            operator = '+';
            actCalc(val, operator);
            printDebug();
        };

        var subtract = function (val) {
            operator = '-';
            actCalc(val, operator);

            printDebug();
        };

        var divide = function (val) {
            operator = '/';
            actCalc(val, operator);

            printDebug();
        };

        var multiply = function (val) {
            operator = '*';
            actCalc(val, operator);

            printDebug();
        };

        var actCalc = function (val, op) {
            if (operator) {
                switch (op) {
                    case '+':
                        total += Number(val);
                        break;

                    case '-':
                        total -= Number(val);
                        break;

                    case '/':
                        total /= Number(val);
                        break;

                    case '*':
                        total *= Number(val);
                        break;
                }
            }
        };

        var clearCalc = function () {
            if (numbers.length < 1) {
                total = Number(0);
            }

            clearNumbers();
            operator = '';
            printDebug();
        };

        var clearNumbers = function () {
            numbers = [];
        };

        var getNumbers = function () {
            return Number(numbers.join(''));
        };

        var pushNumber = function (val) {
            numbers.push(Number(val));

            if (total === 0) {
                total = getNumbers();
            }
        };

        var printDebug = function () {
            if (debug) {
                console.log('---------------------------');
                console.log('numbers: ' + numbers);
                console.log('operator: ' + operator);
                console.log('total: ' + total);
            }
        };

        return {
            value: value,
            add: add,
            subtract: subtract,
            divide: divide,
            multiply: multiply,
            actCalc: actCalc,
            clearCalc: clearCalc,
            clearNumbers: clearNumbers,
            getNumbers: getNumbers,
            pushNumber: pushNumber,
            printDebug: printDebug
        }
    }

    root.Calculator = Calculator;

}(this || module.exports));
