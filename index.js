'use strict';

function Calculator() {
    this.actions = [];
    this.currentNumbers = [];
    this.total = 0;
}

Calculator.prototype.pushAction = function(act) {

    var prevAction = this.actions[this.actions.length-1];

    if ( this.isNumeric( prevAction ) ) {
        this.actions.push( calc.currentNumbers.join('') );
    }

    this.actions.push(act);
    this.currentNumbers = [];

    console.log('Actions length: ' + this.actions.length);
    console.log('Last action: ' + prevAction);
    console.log('Last action numeric: ' + this.isNumeric( prevAction ));

};

Calculator.prototype.pushCurrentNum = function(num) {
    this.currentNumbers.push(num);
};

Calculator.prototype.clearCalc = function() {

    if (this.currentNumbers.length < 1) {
        this.actions = [];
    }

    this.currentNumbers = [];

};

Calculator.prototype.getCurrentNumber = function() {
    return this.currentNumbers.join('');
};

Calculator.prototype.getTotal = function() {
    var actionLog = this.actions.join('');
    console.log(actionLog)
    return eval( actionLog );
};

Calculator.prototype.isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function UI() {
    this.display = 0;
}

UI.prototype.updateUINumbers = function(ui, val) {
    ui.innerHTML = val;
};

window.addEventListener("load", function() {

    var calc = new Calculator();
    var ui = new UI();

    //UI numeric output
    var $display = document.getElementById("ui-display");

    //UI digit definitions
    var $num0 = document.getElementById("ui-num0");
    var $num1 = document.getElementById("ui-num1");
    var $num2 = document.getElementById("ui-num2");
    var $num3 = document.getElementById("ui-num3");
    var $num4 = document.getElementById("ui-num4");
    var $num5 = document.getElementById("ui-num5");
    var $num6 = document.getElementById("ui-num6");
    var $num7 = document.getElementById("ui-num7");
    var $num8 = document.getElementById("ui-num8");
    var $num9 = document.getElementById("ui-num9");

    //UI operator definitions
    var $opDivide = document.getElementById("ui-opDivide");
    var $opMultiply = document.getElementById("ui-opMultiply");
    var $opMinus = document.getElementById("ui-opMinus");
    var $opPlus = document.getElementById("ui-opPlus");
    var $opClear = document.getElementById("ui-opClear");
    var $opEquals = document.getElementById("ui-opEquals");

    //Set default value for UI numeric output
    $display.innerHTML = ui.display;

    //UI digit click handlers
    $num0.addEventListener("click", function() {
        calc.pushCurrentNum(0);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num1.addEventListener("click", function() {
        calc.pushCurrentNum(1);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num2.addEventListener("click", function() {
        calc.pushCurrentNum(2);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num3.addEventListener("click", function() {
        calc.pushCurrentNum(3);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num4.addEventListener("click", function() {
        calc.pushCurrentNum(4);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num5.addEventListener("click", function() {
        calc.pushCurrentNum(5);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num6.addEventListener("click", function() {
        calc.pushCurrentNum(6);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num7.addEventListener("click", function() {
        calc.pushCurrentNum(7);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num8.addEventListener("click", function() {
        calc.pushCurrentNum(8);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num9.addEventListener("click", function() {
        calc.pushCurrentNum(9);
        ui.updateUINumbers($display, calc.getCurrentNumber());
    });

    var $opDivide = document.getElementById("ui-opDivide");
    var $opMultiply = document.getElementById("ui-opMultiply");
    var $opMinus = document.getElementById("ui-opMinus");
    var $opPlus = document.getElementById("ui-opPlus");
    var $opClear = document.getElementById("ui-opClear");
    var $opEquals = document.getElementById("ui-opEquals");

    //UI operator click handlers
    $opDivide.addEventListener("click", function() {
        calc.pushAction("\/");
        ui.updateUINumbers($display, 0);
    });

    $opMultiply.addEventListener("click", function() {
        calc.pushAction("*");
        ui.updateUINumbers($display, 0);
    });

    $opMinus.addEventListener("click", function() {
        calc.pushAction("-");
        ui.updateUINumbers($display, 0);
    });

    $opPlus.addEventListener("click", function() {
        calc.pushAction("+");
        ui.updateUINumbers($display, 0);
    });

    $opClear.addEventListener("click", function() {
        calc.clearCalc();
        ui.updateUINumbers($display, 0);
    });

    $opEquals.addEventListener("click", function() {
        ui.updateUINumbers( $display, calc.getTotal() );
    });

});
