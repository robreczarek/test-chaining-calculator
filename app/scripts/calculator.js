'use strict';

(function () {

    function Calculator(val) {
        this.debug = false;
        this.numbers = [];
        this.operator = '';

        if (val) {
            val = Number(val);
        } else {
            val = Number(0);
        }
        this.total = Number(val);

        if (this instanceof Calculator) {
            return this.Calculator;
        } else {
            return new Calculator(val);
        }
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
}(this));
