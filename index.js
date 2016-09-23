'use strict';

function Calculator() {
    this.numbers = [];
    this.operators = [];
}

Calculator.prototype.pushNumber = function(num) {
    this.numbers.push(num);
};

Calculator.prototype.pushOperator = function(num) {
    this.operators.push(num);
};

function UI() {
    this.display = 0;
}

UI.prototype.updateTotal = function(ui, val) {
    ui.innerHTML = val;
};

window.addEventListener("load", function() {
    var calc = new Calculator();
    var ui = new UI();

    var $display = document.getElementById("ui-display");
    var $num1 = document.getElementById("ui-num1");


    $display.innerHTML = ui.display;

    $num1.addEventListener("click", function() {
        ui.updateTotal($display, 1);
    });

});
