// UI

function UI() {
    this.display = 0;
}

UI.prototype.updateUINumbers = function (ui, val) {
    ui.innerHTML = val;
};

UI.prototype.setup = function (calc) {
    var self = this;

    //UI numeric output
    var $display = document.querySelector('#ui-display');

    //UI digit definitions
    var $num0 = document.querySelector('#ui-num0');
    var $num1 = document.querySelector('#ui-num1');
    var $num2 = document.querySelector('#ui-num2');
    var $num3 = document.querySelector('#ui-num3');
    var $num4 = document.querySelector('#ui-num4');
    var $num5 = document.querySelector('#ui-num5');
    var $num6 = document.querySelector('#ui-num6');
    var $num7 = document.querySelector('#ui-num7');
    var $num8 = document.querySelector('#ui-num8');
    var $num9 = document.querySelector('#ui-num9');

    //UI operator definitions
    var $opDivide = document.querySelector('#ui-opDivide');
    var $opMultiply = document.querySelector('#ui-opMultiply');
    var $opMinus = document.querySelector('#ui-opMinus');
    var $opPlus = document.querySelector('#ui-opPlus');
    var $opClear = document.querySelector('#ui-opClear');
    var $opEquals = document.querySelector('#ui-opEquals');

    //Set default value for UI numeric output
    $display.innerHTML = self.display;

    //UI digit click handlers
    $num0.addEventListener('click', function () {
        calc.pushCurrentNum(0);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num1.addEventListener('click', function () {
        calc.pushCurrentNum(1);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num2.addEventListener('click', function () {
        calc.pushCurrentNum(2);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num3.addEventListener('click', function () {
        calc.pushCurrentNum(3);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num4.addEventListener('click', function () {
        calc.pushCurrentNum(4);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num5.addEventListener('click', function () {
        calc.pushCurrentNum(5);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num6.addEventListener('click', function () {
        calc.pushCurrentNum(6);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num7.addEventListener('click', function () {
        calc.pushCurrentNum(7);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num8.addEventListener('click', function () {
        calc.pushCurrentNum(8);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    $num9.addEventListener('click', function () {
        calc.pushCurrentNum(9);
        self.updateUINumbers($display, calc.getCurrentNumber());
    });

    //UI operator click handlers
    $opDivide.addEventListener('click', function () {
        self.updateUINumbers($display, calc.getTotal());
        calc.pushOperator('\/');
    });

    $opMultiply.addEventListener('click', function () {
        self.updateUINumbers($display, calc.getTotal());
        calc.pushOperator('*');
    });

    $opMinus.addEventListener('click', function () {
        self.updateUINumbers($display, calc.getTotal());
        calc.pushOperator('-');
    });

    $opPlus.addEventListener('click', function () {
        self.updateUINumbers($display, calc.getTotal());
        calc.pushOperator('+');
    });

    $opClear.addEventListener('click', function () {
        calc.clearCalc();
        self.updateUINumbers($display, 0);
    });

    $opEquals.addEventListener('click', function () {
        self.updateUINumbers($display, calc.getTotal());
    });
};