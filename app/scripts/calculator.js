(function (root) {
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
        var debug = true;
        var numbers = [];
        var operator = '';
        var total = initValue;

        var value = function () {
            return total;
        };

        var add = function (val) {
            operator = '+';
            actCalculate(val);
            printDebug();

            return this;
        };

        var subtract = function (val) {
            operator = '-';
            actCalculate(val);

            printDebug();

            return this;
        };

        var divide = function (val) {
            operator = '/';
            actCalculate(val);

            printDebug();

            return this;
        };

        var multiply = function (val) {
            operator = '*';
            actCalculate(val);

            printDebug();

            return this;
        };

        var setOperator = function(op) {
            operator = op;
        };

        var actCalculate = function (val) {
            console.log(numbers);
            if (operator) {
                switch (operator) {
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
            if (!numbers.length) {
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
            //console.log(debug);

            if (debug) {
                console.log('---------------------------');
                console.log('numbers: ' + numbers);
                console.log('operator: ' + operator);
                console.log('total: ' + total);
            }

            return this;
        };

        return {
            value: value,
            numbers: numbers,
            add: add,
            subtract: subtract,
            divide: divide,
            multiply: multiply,
            actCalculate: actCalculate,
            clearCalc: clearCalc,
            clearNumbers: clearNumbers,
            getNumbers: getNumbers,
            pushNumber: pushNumber,
            printDebug: printDebug,
            setOperator: setOperator
        }
    }

    root.Calculator = Calculator;

}(this || module.exports));
