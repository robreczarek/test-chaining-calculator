(function () {

    'use strict';

    function bootstrap() {

        var calc = new Calculator(0);
        calc.debug = false;
        var ui = new UI();
        ui.setup(calc);

    }

    window.addEventListener('load', bootstrap);

}());
