(function (root) {
    'use strict';

    function bootstrap() {
        var calc = new root.Calculator(0);
        calc.debug = false;

        var ui = new root.UI();
        ui.setup(calc);
    }

    root.addEventListener('load', bootstrap);
}(this));
