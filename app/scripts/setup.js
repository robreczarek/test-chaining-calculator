(function (root) {
    'use strict';

    function bootstrap() {
        var calc = new Calculator(0);
        calc.debug = false;

        var ui = new UI();
        ui.setup(calc);

    }

    root.addEventListener('load', bootstrap);
}(this));
