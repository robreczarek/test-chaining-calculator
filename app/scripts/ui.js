(function (root) {
    'use strict';

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
        $display.innerHTML = calc.value();

        //UI digit click handlers
        $num0.addEventListener('click', function () {
            calc.pushNumber(0);
            self.updateUINumbers($display, calc.getNumbers());
        });

        $num1.addEventListener('click', function () {
            calc.pushNumber(1);
            self.updateUINumbers($display, calc.getNumbers());
        });

        $num2.addEventListener('click', function () {
            calc.pushNumber(2);
            self.updateUINumbers($display, calc.getNumbers());
        });

        $num3.addEventListener('click', function () {
            calc.pushNumber(3);
            self.updateUINumbers($display, calc.getNumbers());
        });

        $num4.addEventListener('click', function () {
            calc.pushNumber(4);
            self.updateUINumbers($display, calc.getNumbers());
        });

        $num5.addEventListener('click', function () {
            calc.pushNumber(5);
            self.updateUINumbers($display, calc.getNumbers());
        });

        $num6.addEventListener('click', function () {
            calc.pushNumber(6);
            self.updateUINumbers($display, calc.getNumbers());
        });

        $num7.addEventListener('click', function () {
            calc.pushNumber(7);
            self.updateUINumbers($display, calc.getNumbers());
        });

        $num8.addEventListener('click', function () {
            calc.pushNumber(8);
            self.updateUINumbers($display, calc.getNumbers());
        });

        $num9.addEventListener('click', function () {
            calc.pushNumber(9);
            self.updateUINumbers($display, calc.getNumbers());
        });

        //UI operator click handlers

        $opPlus.addEventListener('click', function () {

            if (calc.operator !== '') {
                calc.actCalc(calc.getNumbers(), calc.operator);
            }
            calc.operator = '+';

            self.updateUINumbers($display, calc.value());
            calc.clearNumbers();
        });

        $opMinus.addEventListener('click', function () {

            if (calc.operator !== '') {
                calc.actCalc(calc.getNumbers(), calc.operator);
            }
            calc.operator = '-';

            self.updateUINumbers($display, calc.value());
            calc.clearNumbers();
        });

        $opDivide.addEventListener('click', function () {

            if (calc.operator !== '') {
                calc.actCalc(calc.getNumbers(), calc.operator);
            }
            calc.operator = '/';

            self.updateUINumbers($display, calc.value());
            calc.clearNumbers();
        });

        $opMultiply.addEventListener('click', function () {

            if (calc.operator !== '') {
                calc.actCalc(calc.getNumbers(), calc.operator);
            }
            calc.operator = '*';

            self.updateUINumbers($display, calc.value());
            calc.clearNumbers();
        });

        $opClear.addEventListener('click', function () {
            calc.clearCalc();
            self.updateUINumbers($display, 0);
        });

        $opEquals.addEventListener('click', function () {
            calc.actCalc(calc.getNumbers(), calc.operator);
            self.updateUINumbers($display, calc.value());
            calc.clearNumbers()
            calc.pushNumber(calc.value());
            calc.operator = '';
            calc.printDebug();
        });
    };

    root.UI = UI;
}(this));
