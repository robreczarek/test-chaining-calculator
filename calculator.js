// Calculator

function Calculator() {
    this.actions = [];
    this.currentNumbers = [];
}

Calculator.prototype.pushNumbers = function () {
    this.pushAction(this.currentNumbers.join(''));
    this.currentNumbers = [];
};

Calculator.prototype.pushOperator = function (act) {
    this.pushNumbers();
    this.pushAction(act);

    /*
    var prevAction = this.actions[this.actions.length-1];
    console.log(this.actions);

    if ( !isNumeric( prevAction ) ) {
        this.actions[this.actions.length-1] = act;
    } else {
        this.pushNumbers();
        this.pushAction( act );
    }
    */
};

Calculator.prototype.pushAction = function (act) {
    this.actions.push(act);
};

Calculator.prototype.pushCurrentNum = function (num) {
    this.currentNumbers.push(num);
};

Calculator.prototype.clearCalc = function () {
    if (this.currentNumbers.length < 1) {
        this.actions = [];
    }

    this.currentNumbers = [];
};

Calculator.prototype.getCurrentNumber = function () {
    return this.currentNumbers.join('');
};

Calculator.prototype.getTotal = function () {
    this.pushNumbers();

    var actionLog = this.actions.join('');
    // TODO(piecioshka): ups.... eval is evil!
    var total = eval(actionLog);

    this.actions = [];
    this.actions.push(total);

    console.log(actionLog);
    return total;
};