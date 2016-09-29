// Calculator

function Calculator(val, debug) {

    this.debug = debug;
    this.numbers = [];
    this.operator = '';
    if (val) {
        this.total = Number(val);
    } else {
        this.total = 0;
    }

}

Calculator.prototype.add = function (val) {

    var out = 0;

    if ( this.operator ) {
        out = this.actCalc( val, this.operator );
    }

    this.operator = '+';

    this.printDebug();
    return out;

};

Calculator.prototype.subtract = function (val) {

    var out = 0;

    if ( this.operator ) {
        out = this.actCalc( val, this.operator );
    }

    this.operator = '-';

    this.printDebug();
    return out;

};

Calculator.prototype.divide = function (val) {

    var out = 0;

    if ( this.operator ) {
        out = this.actCalc( val, this.operator );
    }

    this.operator = '/';

    this.printDebug();
    return out;

};

Calculator.prototype.multiply = function (val) {

    var out = 0;

    if ( this.operator ) {
        out = this.actCalc( val, this.operator );
    }

    this.operator = '*';

    this.printDebug();
    return out;

};

Calculator.prototype.actCalc = function (val, op) {

    if ( this.operator ) {

        switch(op) {
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

    return this.total;

};

Calculator.prototype.clearCalc = function () {

    if ( this.numbers.length < 1 ) {
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

    return this.numbers.join('');

};

Calculator.prototype.pushNumber = function (val) {

    this.numbers.push(val);

    if (this.total === 0) {
        this.total = Number( this.getNumbers() );
    }

};

Calculator.prototype.value = function () {

    return this.total;

};

Calculator.prototype.printDebug = function() {

    if (this.debug) {
        console.log('---------------------------');
        console.log('numbers: ' + this.numbers);
        console.log('operator: ' + this.operator);
        console.log('total: ' + this.total);
    }

}
