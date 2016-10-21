(function (root) {
    'use strict';

    function bootstrap() {
        var calc = new root.Calculator(0);
        //set to true if you wish to follow values in the console
        calc.debug = false;

        var ui = new root.UI();
        ui.setup(calc);
    }

    root.addEventListener('load', bootstrap);

}(this));
