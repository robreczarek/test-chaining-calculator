(function (root) {
    'use strict';

    /**
     * @param {number} [val=0]
     * @constructor
     */
    function Calculator(initialValue) {

        if (!(this instanceof Calculator)) {
            throw new Error('bad invocation');
        }

        this.debug = false;
        this.numbers = [];
        this.operator = '';
        this.total = Number(initialValue) || 0;

        var initValue = initialValue;

        return {
            value: function () {
                return initValue;
            }
        };

    }

    Calculator.prototype.add = function (val) {
        this.operator = '+';
        this.actCalc(val, this.operator);

        this.printDebug();
        return this;
    };

    Calculator.prototype.subtract = function (val) {
        this.operator = '-';
        this.actCalc(val, this.operator);

        this.printDebug();
        return this;
    };

    Calculator.prototype.divide = function (val) {
        this.operator = '/';
        this.actCalc(val, this.operator);

        this.printDebug();
        return this;
    };

    Calculator.prototype.multiply = function (val) {
        this.operator = '*';
        this.actCalc(val, this.operator);

        this.printDebug();
        return this;
    };

    Calculator.prototype.actCalc = function (val, op) {
        if (this.operator) {
            switch (op) {
                case '+':
                    this.total += Number(val);
                    break;

                case '-':
                    this.total -= Number(val);
                    break;

                case '/':
                    this.total /= Number(val);
                    break;

                case '*':
                    this.total *= Number(val);
                    break;
            }
        }

        return this;
    };

    Calculator.prototype.clearCalc = function () {
        if (this.numbers.length < 1) {
            this.total = Number(0);
        }

        this.clearNumbers();
        this.operator = '';
        this.printDebug();
    };

    Calculator.prototype.clearNumbers = function () {
        this.numbers = [];
    };

    Calculator.prototype.getNumbers = function () {
        return Number(this.numbers.join(''));
    };

    Calculator.prototype.pushNumber = function (val) {
        this.numbers.push(Number(val));

        if (this.total === 0) {
            this.total = this.getNumbers();
        }
    };

    Calculator.prototype.value = function () {
        return this.total;
    };

    Calculator.prototype.printDebug = function () {
        if (this.debug) {
            console.log('---------------------------');
            console.log('numbers: ' + this.numbers);
            console.log('operator: ' + this.operator);
            console.log('total: ' + this.total);
        }
    };

    root.Calculator = Calculator;

}(this || module.exports));
